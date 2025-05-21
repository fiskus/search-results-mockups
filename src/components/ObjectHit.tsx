import { useRef, forwardRef, useState } from "react";
import * as M from "@mui/material";
import type { Entry } from "~/types";

const Paper = M.styled(
  forwardRef<HTMLDivElement, M.PaperProps>((props, ref) => (
    <M.Paper {...props} ref={ref} />
  )),
)(({ theme }) => ({
  position: "absolute",
  padding: theme.spacing(1.5),
  marginLeft: "-12px",
  marginTop: "-12px",
  width: "calc(72% - 24px - 16px - 24px - 24px)",
}));

export default function ObjectHit({
  entry,
  ...props
}: M.TableRowProps & { entry: Entry }) {
  const ref = useRef<HTMLTableRowElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <M.TableRow
      hover
      onMouseEnter={() => setAnchorEl(ref.current)}
      ref={ref}
      {...props}
    >
      <M.TableCell>
        {entry.path}
        <M.Popover
          open={!!anchorEl}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={() => setAnchorEl(null)}
          slots={{ paper: Paper, transition: M.Fade }}
          transitionDuration={100}
        >
          <M.TableContainer
            component={M.Paper}
            sx={(t) => ({ backgroundColor: t.palette.action.hover })}
          >
            <M.Table width="100%" size="small">
              <M.TableBody>
                <M.TableRow>
                  <M.TableCell>{entry.path}</M.TableCell>
                  <M.TableCell align="right">{entry.size}</M.TableCell>
                  <M.TableCell align="right">{entry.modified.toLocaleString()}</M.TableCell>
                </M.TableRow>
                <M.TableRow>
                  <M.TableCell colSpan={3}>
                    <img src="https://placedog.net/1024/320/p" width="100%" />
                  </M.TableCell>
                </M.TableRow>
              </M.TableBody>
            </M.Table>
          </M.TableContainer>
        </M.Popover>
      </M.TableCell>
      <M.TableCell align="right">{entry.size}</M.TableCell>
      <M.TableCell align="right">{entry.modified.toLocaleString()}</M.TableCell>
    </M.TableRow>
  );
}
