import { useState } from "react";
import * as M from "@mui/material";
import IconArrowRight from "@mui/icons-material/KeyboardArrowRight";
import IconArrowDown from "@mui/icons-material/KeyboardArrowDown";

import type { Package } from "~/types";

export default function PackageHit({ row }: { row: Package }) {
  const [open, setOpen] = useState(false);
  const entries = row.entries && !!row.entries.length ? row.entries : false;
  return (
    <>
      <M.TableRow hover sx={{ "& > *": { borderBottom: "unset !important" } }}>
        <M.TableCell padding="checkbox">
          <M.IconButton onClick={() => setOpen(!open)} disabled={!entries}>
            {open ? <IconArrowDown /> : <IconArrowRight />}
          </M.IconButton>
        </M.TableCell>
        <M.TableCell component="th" scope="row">
          <M.Typography variant="body2">{row.name}</M.Typography>
          <M.Typography variant="caption" color="text.secondary">
            {row.bucket}
          </M.Typography>
        </M.TableCell>
        <M.TableCell>{row.revisions}</M.TableCell>
        <M.TableCell>{row.modified.toLocaleString()}</M.TableCell>
        <M.TableCell>{row.message}</M.TableCell>
      </M.TableRow>
      {entries && (
        <M.TableRow>
          <M.TableCell
            colSpan={5}
            sx={{ borderBottom: "unset !important", padding: 0 }}
          >
            <M.Collapse in={open}>
              <M.TableContainer
                component={M.Paper}
                elevation={0}
                variant="outlined"
                square
                sx={{
                  pl: 6.5,
                  pt: 1,
                  pb: 2,
                  pr: 2,
                  boxSizing: "border-box",
                  borderLeft: "unset",
                  borderRight: "unset",
                }}
              >
                <M.Table size="small">
                  <M.TableHead>
                    <M.TableRow>
                      <M.TableCell>Path</M.TableCell>
                      <M.TableCell>Modified</M.TableCell>
                      <M.TableCell>Size</M.TableCell>
                    </M.TableRow>
                  </M.TableHead>
                  <M.TableBody>
                    {entries.map((entry) => (
                      <M.TableRow hover key={entry.path}>
                        <M.TableCell>{entry.path}</M.TableCell>
                        <M.TableCell>
                          {entry.modified.toLocaleString()}
                        </M.TableCell>
                        <M.TableCell>{entry.size}</M.TableCell>
                      </M.TableRow>
                    ))}
                  </M.TableBody>
                </M.Table>
              </M.TableContainer>
            </M.Collapse>
          </M.TableCell>
        </M.TableRow>
      )}
    </>
  );
}
