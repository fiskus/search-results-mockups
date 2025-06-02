import * as M from "@mui/material";

import PackageCard from "~/components/PackageCard";
import type { Package } from "~/types";

export default function PackageTable({
  rows,
  expanded = false,
  ...props
}: M.TableContainerProps & { expanded?: boolean; rows: Package[] }) {
  return (
    <M.Box width="100%" {...props}>
      {rows.map((row, i) => (
        <PackageCard key={i} row={row} open={expanded} sx={{ mb: 2 }} />
      ))}
    </M.Box>
  );
}
