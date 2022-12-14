import { Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Line } from 'react-chartjs-2'
import { ChartProps, ChartData } from "./types";
import { ConvertBillDataToChartData } from "./utils";

const LineChart = (props: ChartProps): JSX.Element => {

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
            <Line
              data={chartData}
              options={options}
            />
          </Grid>
        )
      }
    </Grid>
  )
}

export default LineChart;