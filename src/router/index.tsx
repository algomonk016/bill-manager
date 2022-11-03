import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Layout } from "../components";
import { TimeSeriesChart, Dashboard } from "../pages";

const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/bill-manager" element={<Layout />}>
        <Route path="/bill-manager/" element={<Dashboard />} />
        <Route path="/bill-manager/chart" element={<TimeSeriesChart />} />
      </Route>
    </Routes>
  )
}

export default AppRouter