const userInfos = (user) => {
        const userInfosData = {
            id : user.id,
            firstName : user.userInfos.firstName,
        }
        return userInfosData
    }

const userKeyData = (user) =>{
        const userKeyDataModel ={
            score: user.score?user.score * 100 : user.todayScore * 100,
            calorie: user.keyData.calorieCount,
            protein: user.keyData.proteinCount,
            carbs: user.keyData.carbohydrateCount,
            lipid: user.keyData.lipidCount
        }
        return userKeyDataModel
    }

const userAverage = (user) =>{
    const userAverageData ={
        average: user.sessions
    }
    return userAverageData
}

const userPerformance = (user) =>{
    const userPerformanceData={
        performance: user.data
    }
    return userPerformanceData
}

const userActivity = (user) =>{
    const userActivityData={
        activity: user.sessions
    }
    return userActivityData
}

export {userInfos, userKeyData, userAverage, userPerformance, userActivity}