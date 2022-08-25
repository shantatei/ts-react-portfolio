import { createTheme } from "@mui/material";

const light = createTheme({
  palette: {
    mode: "light",

  },
});

const dark = createTheme({
  palette: {
    mode: "dark",
  },
});

export { light, dark };
