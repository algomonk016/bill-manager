import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { store } from "../redux/store";
import { fetchBillsDetails } from "../redux/store/slices/billSlice";
import { useSelector } from "react-redux";
import { BillForm, Modal, BudgetTable } from "../components";
import { AddCardSharp, CalculateTwoTone, CurrencyRupeeOutlined } from "@mui/icons-material";
import { Typography, Grid, Paper, InputBase, Divider, IconButton } from "@mui/material";
import { Bill } from "../constants";
import { sortByKey } from "../utils/helper";

const Dashboard = (): JSX.Element => {
  const [monthlyBudget, setMonthlyBudget] = useState<number>(0)
  const [billsAccToBudget, setBillsAccToBudget] = useState<any>()
  const [filterBills, setFilterBills] = useState<boolean>(false)
  const data = useSelector((state: any) => state?.bills?.data)

  useEffect(() => {
    store.dispatch(fetchBillsDetails())
  }, [])

  const filterBillsAccToBudget = () => {
    if(monthlyBudget === 0){
      setFilterBills(false)
      return;
    }

    let newData = [...data.bills].map((data: Bill) => {
      return {
        id: data.id,
        amount: Number(data.amount)
      }
    })

    sortByKey(newData, 'amount', true)

    setBillsAccToBudget(getBillsFromIds(getMinimumIds(newData)))
    setFilterBills(true)
  }

  const getBillsFromIds = (ids: number[]) => {
    return data.bills.filter((dt: any) => ids.includes(dt.id))
  }

  const getMinimumIds = (data: {id: number, amount: number}[]): number[] => {
    let ids: number[] = [];

    let currentBudget = monthlyBudget;

    for(const bill of data){
      const { id, amount } = bill;
      if(amount < currentBudget){
        currentBudget -= amount;
        ids.push(id);
      }
    }

    return ids;
  }

  return (
    <Container>
      <Grid container justifyContent={'space-between'} alignItems={'center'} mb={2} >
        <Typography typography={'caption'} fontSize={'20px'} > Monthly Bill </Typography>

        <Grid display={'flex'} alignItems={'center'} width={300} justifyContent={'space-between'} >
          <Paper
            component="form"
            sx={{ p: '3px 3px', display: 'flex', alignItems: 'center', width: 230, height: 35 }}
          >
            <CurrencyRupeeOutlined />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Monthly Budget"
              onChange={(e) => setMonthlyBudget(Number(e.target.value))}
              value={monthlyBudget === 0 ? '' : monthlyBudget}
              inputProps={{ 'aria-label': 'monthly budget' }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton onClick={filterBillsAccToBudget} color="primary" sx={{ p: '10px' }} aria-label="directions">
              <CalculateTwoTone />
            </IconButton>
          </Paper>

          <Modal
            title="Add Bill Details"
            text={<AddCardSharp color="success" />}
            content={<BillForm />}
            icon
          />
        </Grid>
      </Grid>

      <BudgetTable data={filterBills ? billsAccToBudget : data?.bills} />
    </Container>
  )
}

export default Dashboard;