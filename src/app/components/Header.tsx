// src/app/components/Header.tsx

"use client";
import React, { useState, MouseEvent } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Button,
  Container,
  useMediaQuery,
  Fade,
} from "@mui/material";
import { Menu as MenuIcon, MoreVert as MoreVertIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

const navItems = [
  { label: "صفحه اصلی", href: "/" },
  { label: "قیمت رمز ارزها", href: "/crypto-prices" },
  { label: "مقالات", href: "/articles" },
  { label: "تماس با ما", href: "/contact" },
  { label: "سایر", href: "/others" },
];

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeItem, setActiveItem] = useState<string>("صفحه اصلی");

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const handleNavClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        boxShadow: "8px 8px 16px #babecc, -8px -8px 16px #ffffff",
        backdropFilter: "blur(10px)",
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(240, 240, 240, 0.8))",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center" gap={2}>
            <Image src="/images/logo.png" alt="Logo" width={80} height={72} />
          </Box>

          {!isMobile && (
            <Box display="flex" gap={3}>
              {navItems.map((item) => (
                <Link href={item.href} key={item.label} passHref>
                  <Button
                    color="inherit"
                    onClick={() => handleNavClick(item.label)}
                    sx={{
                      fontSize: "1.1rem",
                      color: item.label === activeItem ? "#3f51b5" : "inherit",
                      fontWeight: item.label === activeItem ? "bold" : "normal",
                      position: "relative",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "#5a67d8",
                        "&::after": {
                          width: "100%",
                        },
                      },
                      "&::after": {
                        content: "''",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        height: "2px",
                        width: item.label === activeItem ? "100%" : "0%",
                        backgroundColor: "#3f51b5",
                        transition: "width 0.3s ease",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Box>
          )}

          <Box display="flex" alignItems="center" gap={2}>
            {!isMobile && (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: 2,
                  padding: "4px 8px",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                  fontFamily: "IranianSans, sans-serif",
                }}
              >
                <Typography variant="body1" fontWeight="bold" fontSize="1.1rem">
                  علی اسماعیل
                </Typography>
                <Typography variant="body2" color="textSecondary" fontSize="1rem">
                  0912-000-0000
                </Typography>
              </Box>
            )}
            <Avatar alt="User Avatar" src="/images/user-avatar.webp" sx={{ width: 36, height: 36 }} />
            <IconButton onClick={handleMenuOpen} color="inherit">
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              disableScrollLock
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleMenuClose} sx={{ fontSize: "1rem" }}>
                پروفایل
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ fontSize: "1rem" }}>
                تنظیمات
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ fontSize: "1rem" }}>
                خروج
              </MenuItem>
            </Menu>
          </Box>

          {isMobile && (
            <IconButton edge="end" color="inherit" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
            sx={{
              "& .MuiPaper-root": {
                width: 250,
                borderRadius: "0",
                backgroundColor: "#ffffff",
                boxShadow: "4px 0 10px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Box
              role="presentation"
              onClick={() => toggleDrawer(false)}
              onKeyDown={() => toggleDrawer(false)}
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <List>
                {navItems.map((item) => (
                  <Link href={item.href} key={item.label} passHref>
                    <ListItem
                      onClick={() => handleNavClick(item.label)}
                      sx={{
                        padding: "10px 0",
                        display: "flex",
                        justifyContent: "flex-end",
                        color: item.label === activeItem ? "#007bff" : "#333",
                        cursor: "pointer",
                        "&:hover": {
                          color: "#007bff",
                          backgroundColor: "transparent",
                        },
                        transition: "color 0.3s ease",
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: "1.1rem",
                          fontWeight: item.label === activeItem ? "bold" : "normal",
                          fontFamily: "IranianSans, sans-serif",
                          textAlign: "right",
                        }}
                      />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
