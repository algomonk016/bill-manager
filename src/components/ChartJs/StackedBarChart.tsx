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

const StackedBarChart = (props: ChartProps) => {

  let { data, width } = props

  const [chartData, setChartData] = useState<ChartData>()

  useEffect(() => {
    setChartData(ConvertBillDataToChartData(data))
  }, [])

  const options = {
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            const { dataIndex } = tooltipItem
            const data = tooltipItem.chart.data;
            let total = data.datasets.reduce((acc: number, current: any) => acc + (current.data[dataIndex] ?? 0), 0)
            const toolTip = []
            for (const ld of data.datasets) {
              toolTip.push(ld.label + " : " + (ld.data[dataIndex] ?? 0));
            }
            toolTip.push('-----------------')
            toolTip.push('Total : ' + total);
            return toolTip
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 5,
          minRotation: 0,
          maxRotation: 0
        },
        stacked: true,
      },
      y: {
        title: {
          color: 'green',
          display: true,
        },
        gridLines: {
          display: false,
          color: "rgba(0, 0, 0, 0)",
        },
        stacked: true
      }
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