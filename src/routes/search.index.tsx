import * as M from "@mui/material";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { DEPLOY_URL } from "../utils/users";
import IconNavigateNext from "@mui/icons-material/NavigateNext";

import LatestPackages from "~/components/LatestPackages";
import type { Package } from "~/types";

export const Route = createFileRoute("/search/")({
  loader: async () => {
    try {
      const res = await fetch(DEPLOY_URL + "/api/packages");
      if (!res.ok) {
        throw new Error("Unexpected status code");
      }

      const data = (await res.json()) as Array<Package>;

      return data;
    } catch {
      throw new Error("Failed to fetch users");
    }
  },
  component: PackagesIndexComponent,
});

const Paper = M.styled(M.Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

function PackagesIndexComponent() {
  const packages = Route.useLoaderData();

  return (
    <M.Box pt={8}>
      <M.Container maxWidth="xl">
        <M.Toolbar disableGutters>
          <M.Breadcrumbs separator={<IconNavigateNext fontSize="small" />}>
            <M.Link component={Link} to="/" color="inherit" underline="hover">
              s3://active-bucket
            </M.Link>
            <M.Typography color="text.primary">Search</M.Typography>
            <M.Typography color="text.primary">"test" in packaged objects</M.Typography>
          </M.Breadcrumbs>
        </M.Toolbar>

        <M.Grid container spacing={2}>
          <M.Grid size={3}>
            <Paper>
              <M.Typography variant="h6">Filters</M.Typography>
              <M.FormControl sx={{ mt: 2 }}>
                <M.FormLabel>Results type</M.FormLabel>
                <M.RadioGroup value="yes">
                  <M.Link component={Link} to="/search/packaged">
                    <M.FormControlLabel
                      control={<M.Radio />}
                      label="Packaged objects"
                      value="yes"
                    />
                  </M.Link>
                  <M.Link component={Link} to="/search/non-packaged">
                    <M.FormControlLabel
                      disabled
                      control={<M.Radio />}
                      label="Non-packaged objects"
                      value="no"
                    />
                  </M.Link>
                </M.RadioGroup>
              </M.FormControl>
            </Paper>
          </M.Grid>

          <M.Grid size="grow">
            <LatestPackages component={M.Paper} rows={packages} expanded />
          </M.Grid>
        </M.Grid>

        <Outlet />
      </M.Container>
    </M.Box>
  );
}
