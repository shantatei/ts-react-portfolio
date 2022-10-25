import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from "../context/ColorModeContext";

const ThemeToggleButton = () => {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <IconButton color="inherit" onClick={toggleColorMode}>
      {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggleButton;
