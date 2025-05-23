import * as M from "@mui/material";
import IconBorderLeft from "@mui/icons-material/Segment";

import PackageHitMetadataGrid from "~/components/PackageHitMetadataGrid";
import type { Package } from "~/types";

export default function PackageTable({
  rows,
  expanded = false,
  ...props
}: M.TableContainerProps & { expanded?: boolean; rows: Package[] }) {
  return (
    <M.TableContainer {...props}>
      <M.Table size="small">
        <M.TableBody>
          {rows.map((row, i) => (
            <PackageHitMetadataGrid key={i} row={row} open={expanded} />
          ))}
        </M.TableBody>
      </M.Table>
    </M.TableContainer>
  );
}
