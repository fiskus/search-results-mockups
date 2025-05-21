import * as M from "@mui/material";
import IconBorderLeft from "@mui/icons-material/Segment";

import PackageHit from "~/components/PackageHit";
import type { Package } from "~/types";

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
            <M.TableCell padding="checkbox">
              <M.IconButton disabled>
                <IconBorderLeft />
              </M.IconButton>
            </M.TableCell>
            <M.TableCell>Package</M.TableCell>
            <M.TableCell>Last Commit</M.TableCell>
            <M.TableCell align="right">Last Modified</M.TableCell>
            <M.TableCell align="right">Revisions</M.TableCell>
          </M.TableRow>
        </M.TableHead>
        <M.TableBody>
          {rows.map((row, i) => (
            <PackageHit key={i} row={row} open={expanded} />
          ))}
        </M.TableBody>
      </M.Table>
    </M.TableContainer>
  );
}
