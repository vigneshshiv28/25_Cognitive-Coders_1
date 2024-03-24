import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './scenes/homepage';
import MainPage from './scenes/mainpage';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import DisplayData from './scenes/result';

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              path='/'
              element={<HomePage />} />
            <Route
              path='/home'
              element={<MainPage />} />
              <Route
              path='/result'
              element={<DisplayData />} />
            
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
