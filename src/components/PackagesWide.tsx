import * as M from "@mui/material";
import IconBorderLeft from "@mui/icons-material/Segment";

import PackageHitWide from "~/components/PackageHitWide";
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
            <TableCell>Last Commit</TableCell>
            <TableCell align="right">Last Modified</TableCell>
            <TableCell align="right">Revisions</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>ComputerName</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>DiseaseArea</TableCell>
            <TableCell>Drug Substance</TableCell>
            <TableCell>ELN_ID</TableCell>
            <TableCell>FolderName</TableCell>
            <TableCell>Organism</TableCell>
            <TableCell>ProjectID</TableCell>
            <TableCell>StudyID</TableCell>
            <TableCell>Target</TableCell>
            <TableCell>Test Material</TableCell>
            <TableCell>Tissue</TableCell>
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
