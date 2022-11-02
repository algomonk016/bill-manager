import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Layout } from "../components";
import { Dashboard } from "../pages";

const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default AppRouter