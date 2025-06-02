import * as M from "@mui/material";
import IconBorderLeft from "@mui/icons-material/Segment";

import PackageHitWide from "~/components/Wide/FirstHit";
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
            <TableCell>FolderName</TableCell>
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
