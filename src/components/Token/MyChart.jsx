import React from 'react';
import { Pie, PieChart, Cell, ResponsiveContainer } from 'recharts';

const MyChart = () => {
    const data = [
        
        { name: 'Group D', value: 5 },
        { name: 'Group C', value: 12.5 },
        { name: 'Group B', value: 2.5 },
        { name: 'Group A', value: 60 },
        { name: 'Group E', value: 20 },
        
        
    ];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const COLORS = [ '#EE4089', '#40EE85', '#EE7440','#40EEE4', '#2399EF'];
    return (
        <div>
            <PieChart className='border mx-auto w-full' width={350} height={450}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={160}
                    innerRadius={60}

                    // label
                >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))
                    }
                </Pie>
            </PieChart>
        </div>
    );
};

export default MyChart;