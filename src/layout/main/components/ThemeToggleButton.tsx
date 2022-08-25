import { useContext } from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../../../context/ColorModeContext";

const ThemeToggleButton = () => {

  const { mode,toggleColorMode } = useContext(ColorModeContext);

  return (
    <IconButton
      sx={{ ml: 1 }}
      color="inherit"
      onClick={toggleColorMode}
    >
      {mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};

export default ThemeToggleButton;
