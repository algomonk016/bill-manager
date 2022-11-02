import React from "react";
import AppRouter from "./router";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material";
import { Navbar } from "./components";
import { 
  Chart, 
  ArcElement, 
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend, 
} from "chart.js";

Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const theme = createTheme({});

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
          <AppRouter />
        </ThemeProvider>
    </BrowserRouter>
  )
}

export default App