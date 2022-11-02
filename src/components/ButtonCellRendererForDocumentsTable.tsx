import { DeleteTwoTone, EditTwoTone } from '@mui/icons-material';
import React from "react";
import {Modal, BillForm} from ".";
import { Bill } from "../constants/interfaces";

interface EditBillProps {
  data: Bill;
}

const EditDocument = (props: EditBillProps): JSX.Element => {
  const { data } = props;
  
  return (
    <div>
      <BillForm billData={data} hasBillData />
    </div>
  )
}

const DeleteDocument = (props: {id: string}): JSX.Element => {
  const {id} = props;

  return (
    <div>
      Delete form {id}
    </div>
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