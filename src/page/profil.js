import Dashboard from "../components/dashboard/dashboard"
import NavLeft from "../components/navleft/navleft"
import { useEffect, useState } from 'react'
import { Navigate, useParams} from 'react-router-dom'
//import dataUser from "../services/fetchmocked"
import dataUser from "../services/fetchapi.js"

/**
 * Header
 * @component
 * @returns component jsx
 */
function Profil(){

    const {id} = useParams()
    const {categorie} = useParams()
    const [userMain, setUserMain] = useState()
    const [userActivity, setUserActivity] = useState()
    const [userSessions, setUserSessions] = useState()
    const [userPerformance, setUserPerformance] = useState()
    
    useEffect(() => {
        dataUser(id,categorie)
            .then(data => {
                    setUserMain(data)

                    dataUser(id, "activity")
                    .then(data => setUserActivity(data))
                    .catch(error => console.log("erreur activity",error))

                    dataUser(id, "average-sessions")
                    .then(data => setUserSessions(data))
                    .catch(error => console.log("erreur sessions", error))

                    dataUser(id, "performance")
                    .then(data => setUserPerformance(data))
                    .catch(error => console.log("erreur performance", error))
            })
            .catch(error => console.log("erreur données id", error))
    },
    [id, categorie])
    
    if (!userMain || !userActivity || !userSessions || !userPerformance) {
        return null
    }

    return(
        <main>
                <NavLeft/>
                <Dashboard userData={userMain} activity={userActivity} performance={userPerformance} average={userSessions} keyData={userMain}/>
        </main>
    )
}

export default Profil