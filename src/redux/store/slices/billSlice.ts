import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
// import { setStorageData } from '../../../utils/helper';
import { getBills } from '../../../service/bill.service';

export interface BillState {
  data: any;
  status: 'idle' | 'failed' | 'loading';
}

const initialState: BillState = {
  data: {},
  status: 'idle',
}

export const fetchBillsDetails = createAsyncThunk(
  'bills/fetchDetails',
  async () => {
    const bills = await getBills();
    return bills.data.data;
  }
)

export const billSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBillsDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBillsDetails.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(fetchBillsDetails.rejected, (state) => {
        state.status = 'failed';
      })
  },
})

// export const {  } = billSlice.actions;

export const selectBill = (state: RootState) => state.bill.data;

export default billSlice.reducer;