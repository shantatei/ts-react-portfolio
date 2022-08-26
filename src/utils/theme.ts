import { createTheme } from "@mui/material";

const light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#073391',
    }

  },
});

const dark = createTheme({
  palette: {
    mode: "dark",
  },
});

export { light, dark };
