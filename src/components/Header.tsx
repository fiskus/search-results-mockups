import { useState } from "react";
import { Link } from "@tanstack/react-router";
import * as M from "@mui/material";
import IconMenu from "@mui/icons-material/Menu";
import IconPersonMenu from "@mui/icons-material/Person";
import IconSearch from "@mui/icons-material/Search";
import IconTableView from "@mui/icons-material/TableView";
import IconBubbleChart from "@mui/icons-material/BubbleChart";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  return (
    <M.AppBar>
      <M.Container maxWidth="xl">
        <M.Toolbar>
          <M.IconButton color="inherit" edge="start">
            <IconMenu />
          </M.IconButton>

          <M.Box flexGrow={1} display="flex" justifyContent="center">
            <M.Button color="inherit" component={Link} to="/" size="large">
              Quilt
            </M.Button>
          </M.Box>

          <M.Button
            color="inherit"
            startIcon={<IconSearch />}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          >
            Discover
          </M.Button>

          <M.Box ml={2}>
            <M.IconButton color="inherit" edge="end">
              <IconPersonMenu />
            </M.IconButton>
          </M.Box>
        </M.Toolbar>

        <M.Menu
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          open={!!anchorEl}
        >
          <M.MenuItem component={Link} to="/search">
            <M.ListItemIcon>
              <IconSearch />
            </M.ListItemIcon>
            <M.ListItemText>Search</M.ListItemText>
          </M.MenuItem>
          <M.MenuItem>
            <M.ListItemIcon>
              <IconTableView />
            </M.ListItemIcon>
            <M.ListItemText>Athena queries</M.ListItemText>
          </M.MenuItem>
          <M.MenuItem>
            <M.ListItemIcon>
              <IconBubbleChart />
            </M.ListItemIcon>
            <M.ListItemText>Elastic Search queries</M.ListItemText>
          </M.MenuItem>
        </M.Menu>
      </M.Container>
    </M.AppBar>
  );
}
