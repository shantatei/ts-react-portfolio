import { useState, MouseEvent } from "react";
import {
  Button,
  MenuItem,
  Container,
  Menu,
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeToggleButton from "./ThemeToggleButton";

const pages = [
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              component={"a"}
              noWrap
              sx={{
                color: "inherit",
                textDecoration: "inherit",
                position: { xs: "absolute", md: 'block' },
                left: { xs: '50%', md: '0' },
                transform: { xs: 'translateX(-50%)', md: 'translateX(0%)' }
              }}
              href="#home"
            >
              Shanta
            </Typography>
          
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                marginLeft: "auto",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  href={page.link}
                  sx={{
                    my: 2,
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {page.name}
                </Button>
              ))}
              <ThemeToggleButton />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
