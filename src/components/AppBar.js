import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { pages } from "../constants/pages";
import { Outlet, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const drawerWidth = 240;

export default function ResponsiveAppBar(props, children) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const [count, setCount] = React.useState(0);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  setInterval(() => {
    ListCart();
  }, 1000);
  const ListCart = () => {
    const qtd = JSON.parse(localStorage.getItem("products"));
    setCount(qtd?.length);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography sx={{ my: 2 }}>MUI</Typography>
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.route} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", bgcolor: "#F5F0F0" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "#708F2C" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {}
          <img
            src="/Logo03.png"
            alt="Logo"
            style={{ height: "60px", marginRight: "10px" }}
          />
          {}
          <Typography
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {pages.map((item) => {
              return (
                <Button
                  key={item.id}
                  sx={{ color: "#fff" }}
                  onClick={() => navigate(item.route)}
                >
                  {item.route === "/cart" ? (
                    <Badge badgeContent={count} color="error">
                      <AddShoppingCartIcon />
                    </Badge>
                  ) : (
                    item.name
                  )}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main">
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
