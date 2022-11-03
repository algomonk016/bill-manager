import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { BudgetTable } from "../components";
import { store } from "../redux/store";
import { fetchBillsDetails, selectBill } from "../redux/store/slices/billSlice";
import { useAppSelector } from "../redux/hooks";

const Dashboard = (): JSX.Element => {

  const data = useAppSelector(selectBill)

  useEffect(() => {
    store.dispatch(fetchBillsDetails())
  }, [])

  return (
    <Container>
      <BudgetTable data={data.bills} />
    </Container>
  )
}

export default Dashboard;