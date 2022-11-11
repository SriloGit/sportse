import './score.css'
import { RadialBarChart, RadialBar,  ResponsiveContainer, PolarAngleAxis } from 'recharts'

function Score({score}){
  /*let scoreData
  if (score.score !== undefined){
    scoreData = score.score * 100
  }
  else{
    scoreData = score.todayScore * 100
  }*/
    const data = 
    [{
      uv: score.score,
      fill: '#E60000'
    }]

    return (
        <ResponsiveContainer width='100%'>

          <RadialBarChart cx="50%" cy="50%" style={{backgroundColor: "var(--gris)", borderRadius: "5px"}} width="100%" height="100%" innerRadius={70}  barSize={10} data={data} startAngle={80} endAngle={450} >
            
            <circle cx="50%" cy="50%" fill="white" r="70" ></circle>

            <PolarAngleAxis type='number' domain={[0, 100]} angleAxisId={1} tick={false}/>

            <RadialBar  background dataKey="uv" angleAxisId={1} fill="var(--red)" cornerRadius="10" data={[data[0]]} />

            <text className='scoreSize' fontWeight="700" fontSize={26} fill='#282D30' x="50%" y="45%" textAnchor='middle'>{`${score.score}%`}</text>

            <text className='graphTitle' fontWeight="500"  fill='#74798C' x="50%" y="55%" textAnchor='middle'>de votre</text>

            <text className='graphTitle' fontWeight="500"  fill='#74798C' x="50%" y="65%" textAnchor='middle'>objectif</text>

            <text className='graphTitle' x="8%" y="15%" width={147} height={48}  dominantBaseline="middle"  fill="#20253A" style={{ fontWeight:500}} >
            Score </text>

          </RadialBarChart>
        </ResponsiveContainer>
    );
}

export default Score