import { StackedBarChart } from '../components';
import React from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const TimeSeriesChart = (): JSX.Element => {

  const data = useSelector((state: any) => state?.bills?.data)

  return (
    <div>
      <Typography textAlign={'center'} variant={'h5'} fontFamily={'sans-serif'} > Monthly Bill Chart </Typography>
      <StackedBarChart data={data.bills} />
    </div>
  )
}

export default TimeSeriesChart;