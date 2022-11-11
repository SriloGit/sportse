import {userInfos,userKeyData,userActivity,userAverage,userPerformance} from '../models/model'

function ApiHook(){

const getUserInfos = async (id) => {
  try {
      const response = await fetch(`http://localhost:3000/user/${id}`);
      if (!response.ok) {
          throw new Error
              (response.status)
      } else {
          const datas = await response.json();
          /* models avec return*/
          return userInfos(datas.data);
      }
  } catch (error) {
      console.log('error', error)
  }
}

const getUserKeyData = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${id}`);
        if (!response.ok) {
            throw new Error
                (response.status)
        } else {
            const datas = await response.json();
            /* models avec return*/
            return userKeyData(datas.data);
        }
    } catch (error) {
        console.log('error', error)
    }
  }

const getUserActivity = async (id) => {
  try {
      const response = await fetch(`http://localhost:3000/user/${id}/activity`);
      if (!response.ok) {
          throw new Error
              (response.status)
      } else {
          const allDataActivity = await response.json();
          return userActivity(allDataActivity.data);
      }
  } catch (error) {
      console.log('error', error)
  }
}

const getUserAverage = async (id) => {
  try {
      const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
      if (!response.ok) {
          throw new Error
              (response.status)
      } else {
          const allDataAverage = await response.json();
          return userAverage(allDataAverage.data);
      }
  } catch (error) {
      console.log('error', error)
  }
}

const getUserPerformance = async (id) => {
  try {
      const response = await fetch(`http://localhost:3000/user/${id}/performance`);
      if (!response.ok) {
          throw new Error
              (response.status)
      } else {
          const allDataPerformance = await response.json();
          return userPerformance(allDataPerformance.data);
      }
  }

  catch (error) {
      console.log('error', error)
  }
}
return { getUserInfos, getUserActivity, getUserAverage, getUserPerformance, getUserKeyData }

}

export default ApiHook