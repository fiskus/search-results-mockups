import * as M from "@mui/material";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { DEPLOY_URL } from "../utils/users";
import IconNavigateNext from "@mui/icons-material/NavigateNext";

import LatestPackages from "~/components/LatestPackages";
import type { Package } from "~/types";

export const Route = createFileRoute("/packages")({
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
  component: UsersLayoutComponent,
});

function UsersLayoutComponent() {
  const packages = Route.useLoaderData();

  return (
    <M.Box pt={8}>
      <M.Container maxWidth="xl">
        <M.Toolbar disableGutters>
          <M.Breadcrumbs separator={<IconNavigateNext fontSize="small" />}>
            <M.Link component={Link} to="/" color="inherit" underline="hover">
              s3://active-bucket
            </M.Link>
            <M.Typography color="text.primary">Latest packages</M.Typography>
          </M.Breadcrumbs>
        </M.Toolbar>
        <LatestPackages component={M.Paper} rows={packages} />
        <Outlet />
      </M.Container>
    </M.Box>
  );
}
