import React from "react";
import AppRouter from "./router";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material";
import { Navbar } from "./components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import type {} from '@mui/x-date-pickers/themeAugmentation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const theme = createTheme({
  components: {
    MuiDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
        },
      },
    },
  },
});

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Navbar />
          <AppRouter />
          </LocalizationProvider>
        </ThemeProvider>
    </BrowserRouter>
  )
}

export default App