import { AddCardTwoTone } from "@mui/icons-material";
import { Typography, Grid } from "@mui/material";
import { ColDef, GridOptions } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useRef } from "react";
import { columnDef, Bill } from '../../constants'
import BillForm from "./BillForm";
import Modal from "../Modal";

interface Props {
  data: Bill[]
}

const BudgetTable = (props: Props): JSX.Element => {
  const { data } = props;

  const gridRef = useRef<AgGridReact>(null);
  const containerStyle = useMemo(() => ({ width: '100%', height: '500px' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

  const gridOptions: GridOptions = {
    columnDefs: columnDef,
    rowSelection: 'single',
    animateRows: true,
  };

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 200,
      resizable: true,
      floatingFilter: true,
      menuTabs: ['filterMenuTab'],
    };
  }, []);

  return (
    <div style={containerStyle} >
      <Grid container justifyContent={'space-between'} alignItems={'center'} mb={1} >
        <Typography typography={'caption'} fontSize={'20px'} > Monthly Bill </Typography>

        <Modal
          title="Add Bill Details"
          text={ <AddCardTwoTone color="success" /> }
          content={<BillForm />}
          icon
        />
      </Grid>

      <div className="ag-theme-alpine" style={gridStyle}>
        <AgGridReact
          ref={gridRef}
          rowData={data}
          gridOptions={gridOptions}
          defaultColDef={defaultColDef}
          paginationPageSize={10}
          pagination
        // domLayout="autoHeight"
        />
      </div>
    </div>
  )
}

export default BudgetTable;