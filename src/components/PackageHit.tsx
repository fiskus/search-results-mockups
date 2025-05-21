import { useState } from "react";
import * as M from "@mui/material";
import IconArrowRight from "@mui/icons-material/KeyboardArrowRight";
import IconArrowDown from "@mui/icons-material/KeyboardArrowDown";

import type { Package } from "~/types";
import ObjectHit from "~/components/ObjectHit";

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
      <M.TableRow
        hover
        sx={{ "& > *": { borderBottom: entries ? "unset !important" : "" } }}
      >
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
        <M.TableCell>{row.message}</M.TableCell>
        <M.TableCell align="right">{row.modified.toLocaleString()}</M.TableCell>
        <M.TableCell align="right">{row.revisions}</M.TableCell>
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
                sx={{
                  pt: 1,
                  pr: 2,
                  pb: 2,
                  pl: 7.5,
                  boxSizing: "border-box",
                  boxShadow: "inset 0 0 8px rgba(0, 0, 0, 0.3)",
                  marginLeft: -1,
                  marginRight: -2,
                  width: "calc(100% + 24px)",
                }}
              >
                <M.Table size="small">
                  <M.TableHead>
                    <M.TableRow>
                      <M.TableCell>Path</M.TableCell>
                      <M.TableCell align="right">Size</M.TableCell>
                      <M.TableCell align="right">Modified</M.TableCell>
                    </M.TableRow>
                  </M.TableHead>
                  <M.TableBody>
                    {entries.map((entry, index) => (
                      <ObjectHit
                        key={entry.path}
                        entry={entry}
                        sx={
                          index < entries.length - 1
                            ? {}
                            : {
                                "& > *": {
                                  borderBottom: "unset !important",
                                },
                              }
                        }
                      />
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
