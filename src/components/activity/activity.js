import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import './activity.css'
import PropTypes from 'prop-types'

/**
 * Display daily kilogram and calorie result of a user
 * @component
 * @param {array} activity - array datas activity 
 * @returns component jsx - chart
 */
function Activity({activity}){

    const formatXAxis = (i) => i + 1;

    const CustomTooltip = ({ active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <div>
                        {payload.map((pld, i) => (
                            <div key={i} style={{
                                display: "block", padding: 10,
                                backgroundColor: '#E60000', width: 40,
                                height: 30, fontFamily: 'Roboto', fontSize: 12,
                                textAlign: 'center'
                            }}>
                                <div style={{ color: '#FFFFFF', marginTop: 8 }}>
                                    {((pld.dataKey) === 'kilogram') ?
                                        <div> {pld.value}kg</div> :
                                        <div>{pld.value}Kcal</div>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <ResponsiveContainer>
                <BarChart data={activity.activity} barGap={8}
                    margin={{ top: 65, right: 30, bottom: 20, left: 0 }}
                >
                    <CartesianGrid strokeDasharray='3' vertical={false} />

                    <XAxis tickLine={false} domain={['dataMin', 'dataMax']}
                        tickFormatter={formatXAxis} tickMargin={15}
                        tick={{ fill: '#9B9EAC', fontFamily: 'Roboto', fontSize: 14 }}
                        padding={{ left: -45, right: -45 }}
                    />

                    <YAxis yAxisId='left' orientation='right' dataKey='kilogram'
                        domain={['dataMin -1', 'dataMax +2']} tickMargin={40} tickCount={3}
                        tick={{ fill: '#9B9EAC', fontFamily: 'Roboto', fontSize: 14 }}
                        axisLine={false} tickLine={false}
                    />

                    <YAxis yAxisId='right' orientation='left' dataKey='calories'
                        domain={[0, 'dataMax + 50']}
                        axisLine={false} tickLine={false} tickCount={6}
                        tick={false}
                    />
                    <Tooltip
                        content={<CustomTooltip />} wrapperStyle={{ top: -50, left: 35 }}
                    />

                    <Bar yAxisId='left' dataKey='kilogram' fill='#282D30'
                        barSize={10}
                        radius={[5, 5, 0, 0]} name='Poids (kg)' />

                    <Bar yAxisId='right' dataKey='calories' fill='#E60000'
                        barSize={10}
                        name='Calories br??l??es (kCal)'
                        radius={[5, 5, 0, 0]} />

                    <Legend
                        verticalAlign='top' wrapperStyle={{
                            right: 16, top: 20,
                            fontFamily: 'Roboto', fontWeight: 500, fontSize: 14,
                            width: 300
                        }}
                        align='right' iconSize={8} iconType='circle'
                    />
                    <text className='graphTitle' x="8%" y="12%" width={147} height={48}  fill="#000000" style={{fontWeight:500}} > Activit?? quotidienne</text>
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}

Activity.propTypes = {
    activity: PropTypes.object,
}

export default Activity