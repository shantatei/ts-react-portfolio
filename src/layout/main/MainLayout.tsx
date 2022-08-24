import React from "react";
import { Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <Stack>
      <Navbar />
      <Outlet />
    </Stack>
  );
};

export default MainLayout;