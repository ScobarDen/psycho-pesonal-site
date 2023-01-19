import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useAppDispatch } from "./redux/hooks";
import { selectTheme } from "./redux/theme/selectors";
import { setThemeMode } from "./redux/theme/slice";
import { Theme } from "./redux/theme/types";
import { darkMode, lightMode } from "./theme";
import { AdminLayout, UsersLayout } from "./layouts";

function App() {
  const dispatch = useAppDispatch();
  const mode = useSelector(selectTheme);
  useEffect(() => {
    const themeMode = (localStorage.getItem("mode") as Theme) || Theme.LIGHT;
    dispatch(setThemeMode(themeMode));
  }, []);

  const isAdmin = false; // todo: сделать получение этого значения с бэкенда

  return (
    <ThemeProvider theme={mode === Theme.DARK ? lightMode : darkMode}>
      <CssBaseline />
      <Routes>
        {isAdmin ? (
          <Route path="/" element={<AdminLayout />}></Route>
        ) : (
          <Route path="/" element={<UsersLayout />}></Route>
        )}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
