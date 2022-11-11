import './dashboard.css'
import Activity from '../activity/activity'
import Keydata from '../keydata/keydata'
import Average from '../average/average'
import Performance from '../performance/performance'
import Score from '../score/score'
import Calorie from "../../assets/calories-icon.png";
import Carbs from "../../assets/carbs-icon.png";
import Fat from "../../assets/fat-icon.png";
import Protein from "../../assets/protein-icon.png";

function Dashboard({userData, activity, performance, average, keyData}){
    return(
        <div className="Dashboard">
            <div className="dashboard_Header">
                <p className="greeting">Bonjour <span className="secondary-color">{userData.firstName}</span></p>
                <p className="congratulation">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className='userData'>
                <div className='userData_Graph'>
                    <div className='userData_Graph_Activity'>
                        <Activity activity={activity}/>
                    </div>
                    <div className='userData_Graph_Small'>  
                        <div className='userData_Graph_Average'>
                            <Average average={average}/>
                        </div>
                        <div className='userData_Graph_Performance'>
                            <Performance performance={performance}/>
                        </div>
                        <div className='userData_Graph_Score'>
                            <Score score={userData}/>
                        </div>
                    </div>
                </div>
                <div className='userData_Keydata'>
                    <div className='userData_Keydata_Data'>
                        <Keydata keydataData={keyData.calorie} keydataTitle='Calories' keydataIcon={Calorie} keyDataUnit='kCal'/>
                    </div>
                    <div className='userData_Keydata_Data'>
                        <Keydata keydataData={keyData.protein} keydataTitle='Proteines' keydataIcon={Protein} keyDataUnit='g'/>
                    </div>
                    <div className='userData_Keydata_Data'>
                        <Keydata keydataData={keyData.carbs} keydataTitle='Glucides' keydataIcon={Carbs} keyDataUnit='g'/>
                    </div>
                    <div className='userData_Keydata_Data'>
                        <Keydata keydataData={keyData.lipid} keydataTitle='Lipides' keydataIcon={Fat} keyDataUnit='g'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard