import {
  createContext,
  useState,
  useMemo,
  useContext,
  PropsWithChildren,
  FC,
} from "react";
import { light, dark } from "../utils/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

interface IColorModeContext {
  toggleColorMode: () => void;
  mode: "dark" | "light";
}

export const ColorModeContext = createContext<IColorModeContext>({
  mode: "light",
  toggleColorMode: () => {},
});

export const ColorModeContextProvider: FC<PropsWithChildren<{}>> = (props) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = mode === "light" ? light : dark;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
