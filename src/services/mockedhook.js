import {userInfos,userKeyData,userActivity,userAverage,userPerformance} from '../models/model'

function MockedHook(){

    const getUserInfos = async (id) => {
        try {
            const response = await fetch('/mock/data.json');
            if (!response.ok) {
                throw new Error
                    (response.status)
            } else {
                const datas = await response.json();
                return userInfos(datas.user);
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    const getUserKeyData = async (id) => {
        try {
            const response = await fetch('/mock/data.json');
            if (!response.ok) {
                throw new Error
                    (response.status)
            } else {
                const datas = await response.json();
                return userKeyData(datas.user);
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    const getUserActivity = async (id) => {
        try {
            const response = await fetch('/mock/data.json');
            if (!response.ok) {
                throw new Error
                    (response.status)
            } else {
                const datas = await response.json();
                return userActivity(datas.activity);
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    const getUserAverage = async (id) => {
        try {
            const response = await fetch('/mock/data.json');
            if (!response.ok) {
                throw new Error
                    (response.status)
            } else {
                const datas = await response.json();
                return userAverage(datas.average);
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    const getUserPerformance = async (id) => {
        try {
            const response = await fetch('/mock/data.json');
            if (!response.ok) {
                throw new Error
                    (response.status)
            } else {
                const datas = await response.json();
                return userPerformance(datas.performance);
            }
        } catch (error) {
            console.log('error', error)
        }
    }
    return { getUserInfos, getUserActivity, getUserAverage, getUserPerformance, getUserKeyData }


}

export default  MockedHook 