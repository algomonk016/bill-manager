import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { BudgetTable } from "../components";
import { store } from "../redux/store";
import { fetchBillsDetails } from "../redux/store/slices/billSlice";
import { useSelector } from "react-redux";

const Dashboard = (): JSX.Element => {

  const data = useSelector((state: any) => state?.bills?.data)

  useEffect(() => {
    store.dispatch(fetchBillsDetails())
  }, [])

  return (
    <Container>
      <BudgetTable data={data?.bills} />
    </Container>
  )
}

export default Dashboard;