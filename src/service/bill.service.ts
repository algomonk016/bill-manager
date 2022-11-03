import { Bill } from "../constants"
import { 
  // getStorageData, 
  setStorageData
} from "../utils/helper"
import {  fetchBillsDetails  } from "../redux/store/slices/billSlice";
import { store } from "../redux/store";
// import { useAppSelector } from "../redux/hooks";

export const getBills = async (): Promise<any> => {
  const promise =  new Promise((resolve) => {
    const data = JSON.parse(localStorage.getItem('bills'))
    resolve({
      data
    })
  })

  return promise
}

export const deleteBill = async (id: number): Promise<any> => {
  const promise =  new Promise((resolve) => {
    let data = JSON.parse(localStorage.getItem('bills'))
    data.bills = data.bills.filter((bill: Bill) => bill.id !== id)
    setStorageData('bills', 'local', data)
    afterUpdateBill();
    resolve({
      status: 'success',
      data: data.bills
    })
  })

  return promise 
}

export const addBill = async (newBillData: any): Promise<any> => {
  const promise = new Promise((resolve) => {
    let data = JSON.parse(localStorage.getItem('bills'))
    data.bills = [{
      id: Math.floor(Math.random() * 10000) + 1,
      ...newBillData
    }, ...data.bills]

    setStorageData('bills', 'local', data)
    afterUpdateBill()
    resolve({
      status: 'success',
      data
    })
  })

  return promise;
}

export const updateBill = async (newBillData: any): Promise<any> => {
  const promise = new Promise((resolve) => {
    let data = JSON.parse(localStorage.getItem('bills'))

    data.bills = data.bills.filter((bill: Bill) => bill.id !== newBillData.id)

    data.bills = [{
      ...newBillData
    }, ...data.bills]

    setStorageData('bills', 'local', data)
    afterUpdateBill()
    resolve({
      status: 'success',
      data
    })
  })

  return promise; 
}

export const afterUpdateBill = () => {
  store.dispatch(fetchBillsDetails())
}