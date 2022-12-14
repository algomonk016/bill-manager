import {
  ColDef,
  ColGroupDef,
} from 'ag-grid-community';
import { KeyValues } from '../constants/interfaces';
import ButtonCellRendererForDocumentsTable from '../components/ag-grid/ButtonCellRendererForDocumentsTable';

export const columnDef: (ColDef | ColGroupDef | KeyValues)[] = [
  // default show
  {
    headerName: 'Bill Id',
    field: 'id',
    sortable: true,
    filter: 'agTextColumnFilter',
  },
  {
    headerName: 'Description',
    field: 'description',
    sortable: true,
    filter: 'agTextColumnFilter',
  },
  {
    headerName: 'Category',
    field: 'category',
    sortable: true,
    filter: 'agTextColumnFilter',
  },
  {
    headerName: 'Amount',
    field: 'amount',
    sortable: true,
    filter: 'agTextColumnFilter',
  },
  {
    headerName: 'Date',
    field: 'date',
    sortable: true,
    filter: 'agTextColumnFilter',
  },
  {
    headerName: 'Actions',
    field: 'id',
    cellRenderer: ButtonCellRendererForDocumentsTable
  },
]
