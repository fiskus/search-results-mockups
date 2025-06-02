import * as M from "@mui/material";
import IconBorderLeft from "@mui/icons-material/Segment";
import IconDataObject from "@mui/icons-material/DataObject";
import IconSort from "@mui/icons-material/Sort";
import IconSearch from "@mui/icons-material/Search";

import PackageHitWide from "~/components/Wide/MessageHit";
import type { Package } from "~/types";

const TableCell = M.styled(M.TableCell)({
  whiteSpace: "nowrap",
});

export default function PackageTable({
  rows,
  expanded = false,
  ...props
}: M.TableContainerProps & { expanded?: boolean; rows: Package[] }) {
  return (
    <M.TableContainer {...props}>
      <M.Table>
        <M.TableHead>
          <M.TableRow>
            <TableCell padding="checkbox">
              <M.IconButton disabled>
                <IconBorderLeft />
              </M.IconButton>
            </TableCell>
            <TableCell>Package</TableCell>
            <TableCell>
              <M.Box sx={{ alignItems: "center", display: "flex" }}>
                <IconDataObject
                  fontSize="small"
                  sx={{
                    margin: "-2px 8px 0 0",
                    color: "text.secondary",
                  }}
                />
                <M.Typography variant="subtitle2" sx={{ marginRight: "16px" }}>
                  FolderName
                </M.Typography>
                <M.IconButton size="small">
                  <IconSearch fontSize="inherit" />
                </M.IconButton>
                <M.IconButton size="small">
                  <IconSort fontSize="inherit" />
                </M.IconButton>
              </M.Box>
            </TableCell>

            <TableCell>
              <M.Box sx={{ alignItems: "center", display: "flex" }}>
                <IconDataObject
                  fontSize="small"
                  sx={{
                    margin: "-2px 8px 0 0",
                    color: "text.secondary",
                  }}
                />
                <M.Typography variant="subtitle2" sx={{ marginRight: "16px" }}>
                  StudyID
                </M.Typography>
                <M.IconButton size="small">
                  <IconSearch fontSize="inherit" />
                </M.IconButton>
                <M.IconButton size="small">
                  <IconSort fontSize="inherit" />
                </M.IconButton>
              </M.Box>
            </TableCell>
            <TableCell>
              <M.Box sx={{ alignItems: "center", display: "flex" }}>
                <IconDataObject
                  fontSize="small"
                  sx={{
                    margin: "-2px 8px 0 0",
                    color: "text.secondary",
                  }}
                />
                <M.Typography variant="subtitle2" sx={{ marginRight: "16px" }}>
                  Test Material
                </M.Typography>
                <M.IconButton size="small">
                  <IconSearch fontSize="inherit" />
                </M.IconButton>
                <M.IconButton size="small">
                  <IconSort fontSize="inherit" />
                </M.IconButton>
              </M.Box>
            </TableCell>
            <TableCell>
              <M.Box sx={{ alignItems: "center", display: "flex" }}>
                <M.Typography variant="subtitle2" sx={{ marginRight: "16px" }}>
                  Last Commit
                </M.Typography>
                <M.IconButton size="small">
                  <IconSearch fontSize="inherit" />
                </M.IconButton>
              </M.Box>
            </TableCell>
          </M.TableRow>
        </M.TableHead>
        <M.TableBody>
          {rows.map((row, i) => (
            <PackageHitWide key={i} row={row} open={expanded} />
          ))}
        </M.TableBody>
      </M.Table>
    </M.TableContainer>
  );
}
