import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
// import { setStorageData } from '../../../utils/helper';
import { getBills } from '../../../service/bill.service';

export interface BillState {
  data: any;
}

const initialState: BillState = {
  data: {},
}

export const fetchBillsDetails = createAsyncThunk(
  'bills/fetchDetails',
  async () => {
    const bills = await getBills();
    return bills;
  }
)

export const billSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBillsDetails.fulfilled, (state, action) => {
        state.data = action.payload.data;
      })
  },
})

export const selectBill = (state: RootState) => state.bills;

export default billSlice.reducer;