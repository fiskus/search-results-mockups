import { useCallback, useRef, PropsWithChildren, useState } from "react";
import * as M from "@mui/material";
import IconArrowRight from "@mui/icons-material/KeyboardArrowRight";
import IconArrowDown from "@mui/icons-material/KeyboardArrowDown";
import IconDataObject from "@mui/icons-material/DataObject";
import IconAttachFile from "@mui/icons-material/AttachFile";

import type { Package } from "~/types";
import ObjectHit from "~/components/ObjectHit";

const noTdBorder = {
  "& > *": {
    borderBottom: "unset !important",
  },
};

const SubTableWrapper = M.styled(M.Box)(({ theme }) => ({
  padding: theme.spacing(1, 0),
  margin: theme.spacing(0),
  boxSizing: "border-box",
  overflow: "auto",
  position: "relative",
}));

function SubTable({
  open,
  children,
  Icon,
  sx = {},
  scrolled,
}: PropsWithChildren<{
  open: boolean;
  Icon?: typeof M.SvgIcon;
  sx?: M.CSSObject;
  scrolled?: boolean;
}>) {
  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const curScroll = ref.current.scrollLeft;
    // @ts-expect-error
    const maxScroll = ref.current.scrollLeftMax;
    const left = Math.min(curScroll + 100, maxScroll);
    ref.current.scroll({ left, behavior: "smooth" });
  }, []);
  return (
    <M.TableRow sx={(t) => ({ background: t.palette.action.hover, ...sx })}>
      <M.TableCell padding="none" colSpan={5} sx={{ maxWidth: "100px" }}>
        <M.Collapse in={open}>
          <M.Stack direction="row">
            <M.Box m={2} color="text.secondary">
              {Icon && <Icon color="inherit" />}
            </M.Box>
            <M.TableContainer
              component={SubTableWrapper}
              ref={ref}
              sx={{ ml: 1 }}
            >
              {children}
            </M.TableContainer>
            {scrolled && (
              <M.Button color="inherit" onClick={handleScroll}>
                <IconArrowRight />
              </M.Button>
            )}
          </M.Stack>
        </M.Collapse>
      </M.TableCell>
    </M.TableRow>
  );
}

function MetadataValue({ value }: { value: string | number | object }) {
  const [open, setOpen] = useState(false);

  if (typeof value === "string" || typeof value === "number")
    return <>{value}</>;
  if (value === null)
    return <M.Typography color="text.secondary">null</M.Typography>;
  if (Array.isArray(value))
    return (
      <>
        <M.Link onClick={() => setOpen(true)} color="primary">
          [ …{value.length} ]
        </M.Link>
        <M.Dialog open={open} onClose={() => setOpen(false)}>
          <M.DialogTitle>
            Show JSON browser. Auto-traverse to the clicked array
          </M.DialogTitle>
          <M.DialogActions>
            <M.Button color="primary" onClick={() => setOpen(false)}>
              Ok
            </M.Button>
          </M.DialogActions>
        </M.Dialog>
      </>
    );
  return <IconDataObject fontSize="small" />;
}

export default function PackageHit({
  open: initialOpen = false,
  row,
}: {
  open?: boolean;
  row: Package;
}) {
  const [open, setOpen] = useState(initialOpen);
  const entries = row.entries && !!row.entries.length ? row.entries : false;
  return (
    <>
      <M.TableRow hover>
        <M.TableCell padding="checkbox">
          <M.IconButton onClick={() => setOpen(!open)} disabled={!entries}>
            {open && !!entries ? <IconArrowDown /> : <IconArrowRight />}
          </M.IconButton>
        </M.TableCell>
        <M.TableCell component="th" scope="row">
          <M.Typography variant="body2">{row.name}</M.Typography>
          <M.Typography variant="caption" color="text.secondary">
            {row.bucket}
          </M.Typography>
        </M.TableCell>
      </M.TableRow>
      <SubTable
        open={open}
        sx={{
          "& > *": {
            borderBottomColor: "#fff !important",
            boxShadow: `0 1px 2px rgba(0, 0, 0, 0.08)`,
          },
        }}
      >
        <M.Grid
          container
          sx={{ flexWrap: "wrap", alignItems: "flex-start", ml: 3.5 }}
        >
          <M.Grid size={3}>
            <M.ListItem dense>
              <M.ListItemText
                primary={row.modified.toLocaleString()}
                secondary="Last modified"
              />
            </M.ListItem>
          </M.Grid>
          <M.Grid size={3}>
            <M.ListItem dense>
              <M.ListItemText primary={row.message} secondary="Last Commit" />
            </M.ListItem>
          </M.Grid>
          {row.metadata &&
            Object.entries(row.metadata).map(([key, value], index) => (
              <M.Grid size={3}>
                <M.ListItem key={index} dense>
                  <M.ListItemText
                    primary={<MetadataValue value={value} />}
                    secondary={key}
                  />
                </M.ListItem>
              </M.Grid>
            ))}
        </M.Grid>
      </SubTable>
      {entries && (
        <SubTable Icon={IconAttachFile} open={open}>
          <M.Table size="small">
            <M.TableHead>
              <M.TableRow>
                <M.TableCell>Path</M.TableCell>
                <M.TableCell align="right">Size</M.TableCell>
                <M.TableCell align="right" width="120px">
                  Modified
                </M.TableCell>
                <M.TableCell align="center" width="28px">
                  Meta
                </M.TableCell>
              </M.TableRow>
            </M.TableHead>
            <M.TableBody>
              {entries.map((entry) => (
                <ObjectHit key={entry.path} entry={entry} />
              ))}
              <M.TableRow sx={noTdBorder}>
                <M.TableCell colSpan={4}>
                  <M.Typography variant="caption" component={M.Link}>
                    Package has 2 more entries not satisfied to the search
                    criteria
                  </M.Typography>
                </M.TableCell>
              </M.TableRow>
            </M.TableBody>
          </M.Table>
        </SubTable>
      )}
    </>
  );
}
