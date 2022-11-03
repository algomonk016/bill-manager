
import { ColDef, GridOptions } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useRef } from "react";
import { columnDef, Bill } from '../../constants'


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