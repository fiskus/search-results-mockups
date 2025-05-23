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
            <M.Typography variant="h6">Filters</M.Typography>
            <M.Typography sx={{ mt: 2 }} variant="subtitle1">
              Results type
            </M.Typography>
            <Paper sx={{ mt: 1 }}>
              <M.FormControl>
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
            <M.Typography sx={{ mt: 2 }} variant="subtitle1">
              Workflow
            </M.Typography>
            <Paper sx={{ mt: 1 }}>
              <M.FormGroup>
                <M.FormControlLabel
                  control={<M.Checkbox />}
                  label="Workflow A"
                />
                <M.FormControlLabel
                  control={<M.Checkbox />}
                  label="Workflow B"
                />
                <M.FormControlLabel
                  control={<M.Checkbox />}
                  label="Workflow C"
                />
              </M.FormGroup>
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
