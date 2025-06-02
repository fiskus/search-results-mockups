import { useMemo } from "react";
import * as M from "@mui/material";
import * as Lab from "@mui/lab";
import {
  Link,
  Outlet,
  createFileRoute,
  useMatchRoute,
} from "@tanstack/react-router";
import IconNavigateNext from "@mui/icons-material/NavigateNext";

import type { FileRouteTypes } from "~/routeTree.gen";

export const Route = createFileRoute("/search")({
  component: PackagesIndexComponent,
});

const Paper = M.styled(M.Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Timeline = M.styled(Lab.Timeline)(({ theme }) => ({
  [`& .${Lab.timelineItemClasses.root}:before`]: {
    flex: 0,
    padding: 0,
  },
}));

const TimelineItem = ({
  label,
  to,
}: {
  to: FileRouteTypes["to"];
  label: string;
}) => {
  return (
    <Lab.TimelineItem>
      <Lab.TimelineSeparator>
        <Lab.TimelineDot />
        <Lab.TimelineConnector />
      </Lab.TimelineSeparator>
      <Lab.TimelineContent>
        <M.Link component={Link} to={to}>
          {label}
        </M.Link>
      </Lab.TimelineContent>
    </Lab.TimelineItem>
  );
};

function PackagesIndexComponent() {
  const matchRoute = useMatchRoute();

  const matchPackaged = matchRoute({ to: "/search/packaged" });
  const matchMetadataGrid = matchRoute({ to: "/search/metadata-grid" });
  const matchWideTable = matchRoute({ to: "/search/wide-table" });
  const matchCards = matchRoute({ to: "/search/cards" });
  const mockupsMatch = useMemo(() => {
    if (matchPackaged) return "compact";
    if (matchMetadataGrid) return "grid";
    if (matchWideTable) return "wide";
    if (matchCards) return "cards";
  }, [matchPackaged, matchMetadataGrid, matchWideTable]);

  return (
    <M.Box pt={8}>
      <M.Container maxWidth={matchWideTable ? false : matchCards ? "lg" : "xl"}>
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
              Mockups
            </M.Typography>
            <Paper sx={{ mt: 1 }}>
              <M.FormControl>
                <M.RadioGroup value={mockupsMatch}>
                  <M.Link component={Link} to="/search/packaged">
                    <M.FormControlLabel
                      control={<M.Radio />}
                      label="Compact table"
                      value="compact"
                    />
                  </M.Link>
                  <M.Link component={Link} to="/search/metadata-grid">
                    <M.FormControlLabel
                      control={<M.Radio />}
                      label="Metadata grid"
                      value="grid"
                    />
                  </M.Link>
                  <M.Link component={Link} to="/search/wide-table">
                    <M.FormControlLabel
                      control={<M.Radio />}
                      label="Wide table"
                      value="wide"
                    />
                  </M.Link>
                  <M.Link component={Link} to="/search/cards">
                    <M.FormControlLabel
                      control={<M.Radio />}
                      label="Cards"
                      value="cards"
                    />
                  </M.Link>
                </M.RadioGroup>
              </M.FormControl>
            </Paper>

            <M.Typography sx={{ mt: 2 }} variant="subtitle1">
              Wide table drill
            </M.Typography>
            <Paper sx={{ mt: 1 }}>
              <Timeline>
                <TimelineItem label="Initial" to="/search/wide/initial" />
              </Timeline>
            </Paper>

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
