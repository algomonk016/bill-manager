import { deleteBill } from '../../service/bill.service';
import { DeleteTwoTone, EditTwoTone } from '@mui/icons-material';
import { Typography, Grid, Button } from '@mui/material';
import React from "react";
import {Modal, BillForm} from "..";
import { Bill } from "../../constants/interfaces";

interface EditBillProps {
  data: Bill;
}

const EditDocument = (props: EditBillProps): JSX.Element => {
  const { data } = props;
  
  return (
    <div>
      <BillForm billData={data} />
    </div>
  )
}

const DeleteDocument = (props: {id: string}): JSX.Element => {
  const {id} = props;

  return (
    <Grid py={2}>
      <Typography textAlign={'center'} variant='h6'>Would you like to delete the bill with id {id}?</Typography> 
      <Grid container spacing={1} justifyContent={'center'} mt={2}>
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" color="error" onClick={() => deleteBill(Number(id))} >
            Delete Bill
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="contained" color="success">
            Keep it!
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}


const ButtonCellRendererForDocumentsTable = (props: any): JSX.Element => {
  const { data } = props;

  return (
    <div>
      <Modal
        title="Edit"
        text={<EditTwoTone color="primary" />}
        content={<EditDocument data={data} />}
        icon
      />
      <Modal
        title="Delete"
        text={<DeleteTwoTone color='error' />}
        content={<DeleteDocument id={data.id} />}
        icon
      />
    </div>
  )
}

export default ButtonCellRendererForDocumentsTable;