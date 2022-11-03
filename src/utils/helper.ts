import * as _ from 'lodash'
import moment, { isDate } from 'moment';
import { store } from '../redux/store'

const pureData = ['string', 'number', 'Date'];
type storageType = 'local' | 'session';

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

export const getStorageData = (key: string, storage: storageType = 'local'): any => {
  if (typeof window !== 'undefined') {
    let data = (storage === 'local') ? localStorage.getItem(key) : sessionStorage.getItem(key);

    if (!data) {
      return undefined;
    }

    try{
      return JSON.parse(data);
    } catch(e){
      return data;
    }
  }

  return undefined;
}

export const setStorageData = (key: string, storage: storageType = 'local', data: any): any => {
  if (!pureData.includes(typeof data)) {
    data = JSON.stringify(data);
  }

  storage === 'session' ? sessionStorage.setItem(key, data) : localStorage.setItem(key, data);
}

export const getReduxStateData = (key: string = '') => {
  const data: any = store.getState()
  if (key.length !== 0) {
    return data[key];
  }

  return undefined;
}