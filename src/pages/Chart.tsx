import { StackedBarChart } from '../components';
import { BudgetData } from '../constants';
import React from 'react';

const data: BudgetData = {
  "bills": [
    {
      "id": 1,
      "description": "Dominoes",
      "category": "FoodNDining",
      "amount": "430",
      "date": "01-02-2020"
    },
    {
      "id": 2,
      "description": "Car wash",
      "category": "utility",
      "amount": "500",
      "date": "01-06-2020"
    },
    {
      "id": 3,
      "description": "Amazon",
      "category": "shopping",
      "amount": "2030",
      "date": "01-07-2020"
    },
    {
      "id": 4,
      "description": "House rent",
      "category": "Food & Dining",

      "amount": "35900",
      "date": "01-03-2020"
    },
    {
      "id": 5,
      "description": "Tuition",
      "category": "education",
      "amount": "2200",
      "date": "01-12-2020"
    },
    {
      "id": 6,
      "description": "Laundry",
      "category": "Personal Care",
      "amount": "320",
      "date": "01-14-2020"
    },
    {
      "id": 7,
      "description": "Vacation",
      "category": "Travel",
      "amount": "3430",
      "date": "01-18-2020"
    },
    {
      "id": 1,
      "description": "Dominoes",
      "category": "FoodNDining",
      "amount": "430",
      "date": "02-02-2020"
    },
    {
      "id": 2,
      "description": "Car wash",
      "category": "utility",
      "amount": "500",
      "date": "02-06-2020"
    },
    {
      "id": 3,
      "description": "Amazon",
      "category": "shopping",
      "amount": "2030",
      "date": "02-07-2020"
    },
    {
      "id": 4,
      "description": "House rent",
      "category": "Food & Dining",

      "amount": "35900",
      "date": "02-03-2020"
    },
    {
      "id": 5,
      "description": "Tuition",
      "category": "education",
      "amount": "2200",
      "date": "02-12-2020"
    },
    {
      "id": 6,
      "description": "Laundry",
      "category": "Personal Care",
      "amount": "320",
      "date": "02-14-2020"
    },
    {
      "id": 7,
      "description": "Vacation",
      "category": "Travel",
      "amount": "3430",
      "date": "02-18-2020"
    },
    {
      "id": 1,
      "description": "Dominoes",
      "category": "FoodNDining",
      "amount": "430",
      "date": "06-02-2020"
    },
    {
      "id": 2,
      "description": "Car wash",
      "category": "utility",
      "amount": "500",
      "date": "06-06-2020"
    },
    {
      "id": 3,
      "description": "Amazon",
      "category": "shopping",
      "amount": "2030",
      "date": "06-07-2020"
    },
    {
      "id": 4,
      "description": "House rent",
      "category": "Food & Dining",

      "amount": "35900",
      "date": "06-03-2020"
    },
    {
      "id": 5,
      "description": "Tuition",
      "category": "education",
      "amount": "2200",
      "date": "06-12-2020"
    },
    {
      "id": 6,
      "description": "Laundry",
      "category": "Personal Care",
      "amount": "320",
      "date": "06-14-2020"
    },
    {
      "id": 7,
      "description": "Vacation",
      "category": "Travel",
      "amount": "3430",
      "date": "06-18-2020"
    }
  ]
}

const TimeSeriesChart = (): JSX.Element => {
  return (
    <div>
      <StackedBarChart data={data.bills} />
    </div>
  )
}

export default TimeSeriesChart;