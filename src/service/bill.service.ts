import { getStorageData } from "../utils/helper"

export const getBills = async (): Promise<any> => {
  const promise =  new Promise((resolve) => {
    const data = getStorageData('bills', 'local')
    resolve({
      data
    })
  })

  return promise
}