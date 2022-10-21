import { createTheme } from "@mui/material";

const light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#e9ebf2',
    },
    background: {
      paper: '#e9ebf2', 
    },
    success: {
      main: '#f7f8fa',      
      contrastText: '#0f0f0f', 
    },
  },
});

const dark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#4f77e3',
    },
    success:{
      main:'#121212',
    }
  },
});

export { light, dark };
