import * as M from "@mui/material";
import IconBorderLeft from "@mui/icons-material/Segment";

import PackageHit from "~/components/PackageHit";
import type { Package } from "~/types";

export default function PackageTable({
  rows,
  ...props
}: M.TableContainerProps & { rows: Package[] }) {
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
            <M.TableCell>Revisions</M.TableCell>
            <M.TableCell>Last Modified</M.TableCell>
            <M.TableCell>Last Commit</M.TableCell>
          </M.TableRow>
        </M.TableHead>
        <M.TableBody>
          {rows.map((row, i) => (
            <PackageHit key={i} row={row} />
          ))}
        </M.TableBody>
      </M.Table>
    </M.TableContainer>
  );
}
