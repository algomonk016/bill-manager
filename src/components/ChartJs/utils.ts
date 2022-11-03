import { ChartData } from "./types";
import { Bill } from "../../constants";
import { getDate } from "../../utils/helper";

export const COLORS = ['green', 'blue', 'orange', 'purple', 'violet', 'dodgerblue', 'lightGray', 'MediumSeaGreen', 'tomato', 'cyan']
export const TOTAL_COLORS = COLORS.length;

export const ConvertBillDataToChartData = (billData: Bill[]): ChartData => {
  let chartData: ChartData = {
    labels: [],
    datasets: []
  };

  let usedLabels: {
    [key: string]: boolean
  } = {}

  let middleData: {
    [key: string]: any;
    // [key: string]: { label: string, amount: number }[]
  } = {};

  // generate labels
  for(const bill of billData){
    const label: string = getDate(bill.date, 'MMMM YYYY');
    if( !usedLabels[label] ){
      chartData.labels.push(label)
      usedLabels[label] = true
    }

    // if(!!middleData[bill.category]){

    // } else{
      const update = { ...middleData[bill.category] }
      update[label] = Number(bill.amount)
      middleData[bill.category] = update
    // }
  
    // if(!!middleData[bill.category]){
    //   middleData[bill.category].push({label, amount: Number(bill.amount)})
    // } else{
    //   middleData[bill.category] = [{label, amount: Number(bill.amount)}]
    // }
  }

  // generate datasets

  // for(const label of chartData.labels){
  //   for(const category in middleData){
  //     const categoryBills = middleData[category]
  //     let found = false;
  //     for(const categoryBill of categoryBills){
  //       if(categoryBill.label === label){
  //         found = true;
  //         console.log('label', label, category, categoryBill)
  //         // insert in chart data
  //       }
  //     }

  //     if(!found){
  //       // insert 0
  //     }
  //   }
  // }

  let colorCount = 0;
  for(const category in middleData){
    let created = false;
    for(const dataset of chartData.datasets){
      if(dataset.label === category){
        created = true;
        break;
      }
    }

    if(!created){
      chartData.datasets = [ ...chartData.datasets, {
          label: category,
          backgroundColor: COLORS[colorCount],
          borderColor: COLORS[colorCount++],
          data: []
        }
      ]
      colorCount %= TOTAL_COLORS;
    }

    for(const label of chartData.labels){
      const amount = middleData[category][label] ?? 0;
      chartData.datasets = chartData.datasets.map((data) => {
        if(data.label === category){
          data.data.push(amount);
        }
        return data;
      } )
    }
  }

  return chartData
}