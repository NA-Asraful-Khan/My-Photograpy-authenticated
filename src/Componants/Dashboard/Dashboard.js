import React from 'react';
import useRechartData from '../../customhook/ChartData';
import './Dashboard.css'
import { Line,Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart } from 'recharts';

const Dashboard = () => {
    // [month, investment, sell, revenue]
    const [rechart, setRechart] = useRechartData();
    return (
        <div className='dashboard pd'>
            <div>
                <BarChart width={600} height={300} data={rechart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="month" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                    <Bar dataKey="sell" fill="#000000" />
                </BarChart>
            </div>
            <div>
                <AreaChart width={600} height={300} data={rechart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="month" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="sell" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Dashboard;