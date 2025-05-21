import * as M from "@mui/material";
import {
  Link,
  Outlet,
  createFileRoute,
  useMatchRoute,
} from "@tanstack/react-router";
import IconNavigateNext from "@mui/icons-material/NavigateNext";

export const Route = createFileRoute("/search")({
  component: PackagesIndexComponent,
});

const Paper = M.styled(M.Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

function PackagesIndexComponent() {
  // const matchRoute = useMatchRoute();
  // const match = matchRoute({ to: "/search/packaged" });
  // console.log({ match });
  return (
    <M.Box pt={8}>
      <M.Container maxWidth="xl">
        <M.Toolbar disableGutters>
          <M.Breadcrumbs separator={<IconNavigateNext fontSize="small" />}>
            <M.Link component={Link} to="/" color="inherit" underline="hover">
              s3://active-bucket
            </M.Link>
            <M.Typography color="text.primary">Search</M.Typography>
            <M.Typography color="text.primary">
              "test" in packaged objects
            </M.Typography>
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
            <Outlet />
          </M.Grid>
        </M.Grid>
      </M.Container>
    </M.Box>
  );
}
