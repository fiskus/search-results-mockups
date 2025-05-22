import * as M from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { DEPLOY_URL } from "../utils/users";

import LatestPackages from "~/components/LatestPackages";
import type { Package } from "~/types";

export const Route = createFileRoute("/search/packaged")({
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
  component: RouteComponent,
});

function RouteComponent() {
  const packages = Route.useLoaderData();
  console.log({ packages });
  return <LatestPackages component={M.Paper} rows={packages} expanded />;
}
