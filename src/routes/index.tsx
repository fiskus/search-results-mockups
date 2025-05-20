import * as M from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { PieChart } from "@mui/x-charts/PieChart";

import LatestPackages from "~/components/LatestPackages";

export const Route = createFileRoute("/")({
  component: Home,
});

const Paper = M.styled(M.Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

function Home() {
  return (
    <M.Box pt={8}>
      <M.Container maxWidth="xl">
        <M.Grid container spacing={2}>
          <M.Grid container size={12}>
            <M.Grid size={4}>
              <Paper>Total size</Paper>
            </M.Grid>
            <M.Grid size={4}>
              <Paper>Number of objects</Paper>
            </M.Grid>
            <M.Grid size={4}>
              <Paper>Number of packages</Paper>
            </M.Grid>
          </M.Grid>
          <M.Grid size={4} container spacing={2} direction="column">
            <M.Grid size="grow">
              <Paper>
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 10, label: "series A" },
                        { id: 1, value: 15, label: "series B" },
                        { id: 2, value: 20, label: "series C" },
                      ],
                    },
                  ]}
                  width={200}
                  height={200}
                />
              </Paper>
            </M.Grid>
            <M.Grid size="grow">
              <Paper>S3 browser</Paper>
            </M.Grid>
          </M.Grid>
          <M.Grid size={8} container spacing={2} direction="column">
            <M.Grid size="grow">
              <LatestPackages />
            </M.Grid>
            <M.Grid size="grow">
              <Paper>
                <M.Typography variant="overline">quilt_summarize</M.Typography>{" "}
                content
              </Paper>
            </M.Grid>
          </M.Grid>
        </M.Grid>
      </M.Container>
    </M.Box>
  );
}
