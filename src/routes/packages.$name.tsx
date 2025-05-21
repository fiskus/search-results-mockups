import { createFileRoute } from "@tanstack/react-router";
import { NotFound } from "~/components/NotFound";
import { UserErrorComponent } from "~/components/UserError";

export const Route = createFileRoute("/packages/$name")({
  loader: async ({
    params: { name },
  }: {
    params: { name: string };
  }) => {
    return { name };
  },
  errorComponent: UserErrorComponent,
  component: UserComponent,
  notFoundComponent: () => {
    return <NotFound>User not found</NotFound>;
  },
});

function UserComponent() {
  const pkg = Route.useLoaderData();

  return <h1>It works: {pkg.name}!</h1>;
}
