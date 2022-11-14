import {userInfos, userActivity, userAverage, userPerformance} from "../models/model"
const url = "http://localhost:3000/user";


/**
 * retrieve data 
 * @param {number} id 
 * @param {string} categorie 
 * @returns promise
 */

const getData = async (id, categorie) => {
    let urlDemande = categorie ? url + `/${id}/${categorie}/` : url+ `/${id}/`;
    console.log (urlDemande)

    const data = await fetch(urlDemande);
    console.log (data)

    const dataFetch = await data.json();
    console.log(dataFetch)
    
    switch (categorie) {
        case "activity": return userActivity(dataFetch.data);
        case "average-sessions": return userAverage(dataFetch.data);
        case "performance": return userPerformance(dataFetch.data);

        default: return userInfos(dataFetch.data);
    }}

export default getData