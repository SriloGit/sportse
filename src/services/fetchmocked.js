import {userMainData, userActivityData, userAverageSessionsData, userPerformanceData } from "../data/data.js"
import {userInfos, userAverage, userPerformance, userActivity} from "../models/model"

/**
 * retrieve the mocked data
 * @param {number} id 
 * @returns array with the correct data
 */
function getUserMainData(id) {
    const data = userMainData.find(value => value.id.toString() === id);
    const userMain = userInfos(data);
    return userMain;
}

function getUserActivity(id) {
    const data = userActivityData.find (value => value.userId.toString() === id);
    const userActivitydata = userActivity(data);
    return userActivitydata;
}

function getUserAverageSessions(id) {
    const data = userAverageSessionsData.find (value => value.userId.toString() === id);
    const userSessions = userAverage(data);
    return userSessions;
    ;
}
function getUserPerformance(id) {
    const data = userPerformanceData.find (value => value.userId.toString() === id);
    const userPerformancedata = userPerformance(data);
    return userPerformancedata;
}

/**
 * retrieve data 
 * @param {number} id 
 * @param {string} categorie 
 * @returns promise
 */
const getData = async (id, categorie) => {
    switch (categorie) {
        case "activity": return getUserActivity(id);
        case "average-sessions": return getUserAverageSessions(id);
        case "performance": return getUserPerformance(id);

        default: return getUserMainData(id);
    }
}

export default getData