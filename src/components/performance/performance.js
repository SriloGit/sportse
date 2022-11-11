import './performance.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts'

    function namePerf(kind){
        switch(kind){
            case 1 : return "cardio";
            case 2 : return "energy";
            case 3 : return "endurance";
            case 4 : return "strength";
            case 5 : return "speed";
            case 6 : return "intensity";
            default : return null;
        }
    }
    /**
     * Display performance of a user
     * @component
     * @param {array} performance - array datas performance
     * @returns component jsx - chart
     */
    
    const Performance = ({performance}) => {
        /*const performanceData = performance.data;
        let tab = [];

        if (performanceData) {
            performanceData.map(data => {
                return tab.push(data);
            })
        }*/
        return (
                <ResponsiveContainer>
                    
                    <RadarChart margin={{ top: 30, right: 30, bottom: 30, left: 70 }} style={{backgroundColor: "#282D30",borderRadius: "5px"}}  data={performance.performance} >
    
                        <PolarGrid radialLines={false} />
    
                        <PolarAngleAxis dataKey="kind" tickFormatter={namePerf} tickLine={false} axisLine={false} dy={5} stroke="#FFF" tick={{fill:"#FFFFFF",fontSize:12}}  />
    
                        <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />
    
                        <Radar  dataKey="value"  fill="#FF0101" fillOpacity={0.6} />
    
                    </RadarChart>
                </ResponsiveContainer>
        );
    };

export default Performance