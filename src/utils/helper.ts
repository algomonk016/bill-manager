import * as _ from 'lodash'
import moment, { isDate } from 'moment';

export const getDate = (date: string | Date, dateFormat = 'MMMM Do YYYY, h A') => {
  return moment(date).format(dateFormat) ?? 'N.A'
}

export const print = (value: any, dateFormat = 'MMMM Do YYYY, h A') => {
  if (isDate(value)) {
    return getDate(value, dateFormat)
  }

  if (typeof value === 'number') {
    return value.toFixed(2);
  }


  return value ?? 'N.A';
}

export const removeUnderScores = (text: string) => {
  return text.replaceAll('_', ' ').toLowerCase();
}

export const isDevelopmentMode = () => process.env.NODE_ENV === 'development';

export const isArrayWithLength = (arr: any) => (Array.isArray(arr) && arr.length > 0);

export const sortByKey = (array: any[], key: string, desc = false) => {
  return array.sort(function (a, b) {
    var x = a[key]; var y = b[key];
    if(desc){
      return ((x > y) ? -1 : ((x < y) ? 1 : 0)); // TODO: check me later
    }
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}
