import './average.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer, Rectangle } from 'recharts'

/**
 * @param {boolean}  [Props.active='true']
 * @param {array}   [Props.payload=[]]
 * @returns an active tooltip or null
 */
 const CustomTooltip=({active, payload})=>{
    if (active) {
        return (
            <div className="customTooltipSession"
            style={{
                display: "flex", padding: 10,
                backgroundColor: '#FFFFFF', width: 40,
                height: 15, fontFamily: 'Roboto', fontSize: 12,alignItems:'center'
            }}>
                <p className="tooltipDataSession">{`${payload[0].value} `}min</p>
            </div>
        );
    }
    return null;
}

/** 
 * @returns grey rectangle displayed moving over the chart
 */
const CustomCursor = ({points}) => {
    return <Rectangle fill="#000000" opacity={0.2} x={points[1].x} width={1100} height={350} />;
};

/**
 * Name the different days of the week
 * @param {object} day 
 * @returns string ou null
 */
function nameDay(day){
    switch(day){
        case 1 : return "L";
        case 2 : return "M";
        case 3 : return "M";
        case 4 : return "J";
        case 5 : return "V";
        case 6 : return "S";
        case 7 : return "D";

        default : return null;
    }
}

function Average({average}){
    /*const activitySessions = average.sessions;
    let tab = [];

    if (activitySessions) {
        activitySessions.map(session => {
            return tab.push(session);
        })
    }*/

    return (
        <ResponsiveContainer>
            <LineChart style={{backgroundColor: "#FF0000", borderRadius: "5px"}} data={average} margin={{top: 50, right: -2, left: -60, bottom: 10 }}>    
                    
                <CartesianGrid  vertical={false} horizontal={false}/>

                <XAxis dataKey="day" tickFormatter={nameDay} tickLine={false} fillOpacity={0.5} style={{ transform: 'scale(0.9)', transformOrigin: 'bottom' }}tick={{fill:"#FFFFFF",  fontWeight:500, fontSize:12}} tickMargin={10}  axisLine={false} interval="preserveStartEnd"/>
        
                <YAxis axisLine={false} tickLine={false} tick={false} domain={['dataMin - 5', 'dataMax + 5']}/>         
                <Tooltip  content={<CustomTooltip/>} cursor={<CustomCursor/>} 
                    wrapperStyle={{
                        marginTop: "15"
                    }}
                />          

                <Line  type="natural" dataKey="sessionLength" dot={false} activeDot={{ stroke: "red", strokeWidth: 2, r: 5 }}stroke={"#FFF"}/>

                <text className='graphTitle' x="8%" y="12%" width={147} height={48}  fill="#FFFFFF" style={{fontWeight:500, opacity:0.5}} > Durée moyenne des </text>
                    
                <text className='graphTitle' x="8%" y="20%" width={147} height={48}  fill="#FFFFFF" style={{ fontWeight:500, opacity:0.5}} >  sessions</text>

            </LineChart>
        </ResponsiveContainer>
    );
}

export default Average