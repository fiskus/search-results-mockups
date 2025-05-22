import * as M from "@mui/material";
import { Link, createFileRoute } from "@tanstack/react-router";
import { DEPLOY_URL } from "../utils/users";
import { PieChart } from "@mui/x-charts/PieChart";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";

import LatestPackages from "~/components/LatestPackages";
import type { Package } from "~/types";

export const Route = createFileRoute("/")({
  loader: async () => {
    try {
      const res = await fetch(DEPLOY_URL + "/api/packages");
      if (!res.ok) {
        throw new Error("Unexpected status code");
      }

      const packages = (await res.json()) as Array<Package>;

      return { packages };
    } catch {
      throw new Error("Failed to fetch users");
    }
  },
  component: Home,
});

const Paper = M.styled(M.Paper)(({ theme }) => {console.log(theme);return ({
  padding: theme.spacing(2),
})});

function Home() {
  const { packages } = Route.useLoaderData();
  return (
    <M.Box pt={10}>
      <M.Container maxWidth="xl">
        <M.Grid container spacing={2}>
          <M.Grid container size={12}>
            <M.Grid size={4}>
              <Paper>
                <M.Typography>Total size</M.Typography>
              </Paper>
            </M.Grid>
            <M.Grid size={4}>
              <Paper>
                <M.Typography>Number of objects</M.Typography>
              </Paper>
            </M.Grid>
            <M.Grid size={4}>
              <Paper>
                <M.Typography>Number of packages</M.Typography>
              </Paper>
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
              <Paper>
                <M.Typography variant="h6">S3 browser</M.Typography>
                <M.Box sx={{ minHeight: 352, minWidth: 250, mt: 2 }}>
                  <SimpleTreeView>
                    <TreeItem itemId="j" label="s3://bucket">
                      <TreeItem itemId="a" label=".quilt" />
                      <TreeItem itemId="b" label="foo">
                        <TreeItem itemId="k" label="bar">
                          <TreeItem itemId="l" label="konstantin">
                            <TreeItem
                              itemId="m"
                              label="konstantinopolskiy.md"
                            />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem itemId="c" label="baz" />
                      <TreeItem itemId="d" label="project">
                        <TreeItem itemId="e" label="data" />
                        <TreeItem itemId="f" label="instruments" />
                      </TreeItem>
                      <TreeItem itemId="g" label="utils">
                        <TreeItem itemId="h" label="helpers" />
                      </TreeItem>
                      <TreeItem itemId="i" label="ml">
                        <TreeItem itemId="o" label="mdels" />
                      </TreeItem>
                    </TreeItem>
                  </SimpleTreeView>
                </M.Box>
              </Paper>
            </M.Grid>
          </M.Grid>
          <M.Grid size={8} container spacing={2} direction="column">
            <M.Grid size="grow">
              <M.Paper>
                <M.Box px={2} py={1}>
                  <M.Typography variant="h6">
                    <M.Link component={Link} to="/packages">
                      Latest packages
                    </M.Link>
                  </M.Typography>
                </M.Box>
                <LatestPackages rows={packages} />
              </M.Paper>
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


