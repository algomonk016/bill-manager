import React from 'react';
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { ChartProps, ChartData } from "./types";
import { ConvertBillDataToChartData } from "./utils";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Monthly Bill',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: false,
    },
    y: {
      stacked: true,
    },
  },
};

const StackedBarChart = (props: ChartProps) => {

  let { data, width } = props

  const [chartData, setChartData] = useState<ChartData>()

  useEffect(() => {
    setChartData(ConvertBillDataToChartData(data))
  }, [])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Bill Timeline',
      },
    },
  };

  return (
    <Grid container alignItems={'center'} justifyContent={'center'} >
      {
        !!chartData && (
          <Grid width={width ? width : 700} >
            <Bar
              data={chartData}
              options={options}
            />
          </Grid>
        )
      }
    </Grid>
  )
}

export default StackedBarChart;