import React, { useEffect } from "react";
import { Counter } from "./redux/counter/Counter";
import { useAppDispatch } from "./redux/hooks";
import { setThemeMode, toggleThemeMode } from "./redux/theme/slice";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { darkMode, lightMode } from "./theme";
import { useSelector } from "react-redux";
import { selectTheme } from "./redux/theme/selectors";
import { Theme } from "./redux/theme/types";

function App() {
  const dispatch = useAppDispatch();
  const mode = useSelector(selectTheme);
  useEffect(() => {
    const themeMode = (localStorage.getItem("mode") as Theme) || Theme.LIGHT;
    dispatch(setThemeMode(themeMode));
  }, []);

  return (
    <ThemeProvider theme={mode === Theme.DARK ? lightMode : darkMode}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
