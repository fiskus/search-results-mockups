import { useMemo, useRef, forwardRef, useState, useEffect } from "react";
import * as M from "@mui/material";
import type { Entry } from "~/types";

const Paper = M.styled(
  forwardRef<HTMLDivElement, M.PaperProps>((props, ref) => (
    <M.Paper {...props} ref={ref} />
  )),
)(({ theme }) => ({
  position: "absolute",
  padding: theme.spacing(2, 0),
  marginLeft: theme.spacing(0),
  marginTop: theme.spacing(-2),
  outline: 0,
}));

export default function ObjectHit({
  entry,
  ...props
}: M.TableRowProps & { entry: Entry }) {
  const ref = useRef<HTMLTableRowElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [src, setSrc] = useState("");
  const timeout = useRef<NodeJS.Timeout>(null);

  const width = useMemo(() => {
    if (!anchorEl) return "";
    if (!ref.current) return "";
    return `${ref.current.clientWidth}px`;
  }, [anchorEl]);

  useEffect(() => {
    if (anchorEl) {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(() => {
        setSrc("https://placedog.net/1024/320/p");
      }, 2000);
    } else {
      setSrc("");
    }
  }, [anchorEl]);

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
          <M.TableContainer sx={{ width }}>
            <M.Table width="100%" size="small">
              <M.TableBody>
                <M.TableRow>
                  <M.TableCell>{entry.path}</M.TableCell>
                  <M.TableCell align="right">{entry.size}</M.TableCell>
                  <M.TableCell align="right">
                    {entry.modified.toLocaleString()}
                  </M.TableCell>
                </M.TableRow>
                <M.TableRow>
                  <M.TableCell colSpan={3}>
                    {src ? (
                      <img src={src} width="100%" height="320px" />
                    ) : (
                      <M.Skeleton height={240} variant="rectangular" />
                    )}
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
