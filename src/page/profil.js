import Dashboard from "../components/dashboard/dashboard"
import NavLeft from "../components/navleft/navleft"
import  MockedHook  from '../services/mockedhook'
import  ApiHook  from '../services/apihook'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Profil(){
    const [userData, setData] = useState([]);
    const [userDataActivity, setDataActivity] = useState([]);
    const [userDataAverage, setDataAverage] = useState([]);
    const [userDataPerformance, setDataPerformance] = useState([]);
    const [userKeyData, setDataKeyData] = useState([])
    const { id } = useParams();
    let apiData = true;
    

   useEffect(() => {
        if (apiData) {
            ApiHook().getUserInfos(id).then(user => setData(user));
            ApiHook().getUserKeyData(id).then(user => setDataKeyData(user));
            ApiHook().getUserActivity(id).then(activity => setDataActivity(activity));
            ApiHook().getUserAverage(id).then(session => setDataAverage(session));
            ApiHook().getUserPerformance(id).then(performance => setDataPerformance(performance));
        }
        else {
            MockedHook().getUserInfos(id).then(user => {
                user.forEach((item) => {
                    if (item.id.toString() === id) {
                        setData(item);
                    }
                })
            });
            MockedHook().getUserKeyData(id).then(keyData => {
                keyData.forEach((item) => {
                    if (item.id.toString() === id) {
                        setDataKeyData(item);
                    }
                })
            });
            MockedHook().getUserActivity(id).then(activity => {
                activity.forEach((item) => {
                    if (item.userId.toString() === id) {
                        setDataActivity(item);
                    }
                })
            });
            MockedHook().getUserAverage(id).then(session => {
                session.forEach((item) => {
                    if (item.userId.toString() === id) {
                        setDataAverage(item);
                    }
                })
            });
            MockedHook().getUserPerformance(id).then(performance => {
                performance.forEach((item) => {
                    if (item.userId.toString() === id) {
                        setDataPerformance(item);
                    }
                })
            });
        }
    }, [id, apiData]);
    
    return(
        <main>
            {userData !== undefined &&
            <>
                <NavLeft/>
                <Dashboard userData={userData} activity={userDataActivity} performance={userDataPerformance} average={userDataAverage} keyData={userKeyData}/>
            </>
}
        </main>
    )
}

export default Profil