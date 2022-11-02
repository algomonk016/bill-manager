import { Box, Button, Grid, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CurrencyRupeeTwoTone } from '@mui/icons-material'
import Select from 'react-select'
import { Bill, Option } from "../constants";

interface Props{
  hasBillData?: boolean;
  billData?: Bill
}

const BillForm = (props: Props): JSX.Element => {
  console.log('props', props)
  const [date, setDate] = useState<any>();
  const [description, setDescription] = useState<string>('')
  const [amount, setAmount] = useState<string>('')
  const [category, setCategory] = useState<Option>()

  const options: Option[] = [
    { value: 'FoodNDining', label: 'FoodNDining' },
    { value: 'Utility', label: 'Utility' },
    { value: 'Shopping', label: 'Shopping' },
    { value: 'Food & Dining', label: 'Food & Dining' },
    { value: 'Education', label: 'Education' },
    { value: 'Personal Care', label: 'Personal Care' },
    { value: 'Travel', label: 'Travel' },
  ]

  const saveBill = (): void => {
    const billDetail = {
      description,
      amount,
      date: date.format("DD-MM-YYYY") ,
      category: category.label,
    }

    console.table(billDetail)
  }

  return (
    <Box
      component="form"
      sx={{
        width: 550,
        maxWidth: '100%',
        height: 430
      }}
      noValidate
      p={2}
      autoComplete="off"
    >
      <Grid width={'100%'} height={10 / 12}>
        <Grid>
          <TextField 
            value={description}
            onChange={(e) => setDescription(e.target.value) } 
            fullWidth size="small" label="Description" variant="outlined" margin="dense" />
        </Grid>

        <Grid container alignItems={'center'} justifyContent={'space-between'} pt={1} >
          <TextField
            size="small"
            InputProps={{
              endAdornment: <InputAdornment position="start"> <CurrencyRupeeTwoTone /> </InputAdornment>
            }}
            onChange={(e) => setAmount(e.target.value) }
            value={amount}
            label="Amount" variant="outlined" margin="dense"
          />

          <DatePicker
            label="Date"
            value={date}
            openTo="day"
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => <TextField margin="dense" {...params} size="small" />}
          />
        </Grid>

        <Grid my={2} >
          <Select
            options={options}
            isSearchable
            onChange={(selected) => setCategory(selected)}
            value={category}
          />
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" color="success" onClick={saveBill} >
            Save Bill
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="outlined" color="error">
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BillForm;