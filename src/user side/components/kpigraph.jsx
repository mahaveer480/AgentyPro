import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';
import '../styles/AverageTeamKPI.css';
import { BsThreeDots } from 'react-icons/bs';

const data = [
  { name: 'Jan', kpi: 30 },
  { name: 'Feb', kpi: 50 },
  { name: 'Mar', kpi: 50 },
  { name: 'Apr', kpi: 40 },
  { name: 'May', kpi: 65 },
  { name: 'Jun', kpi: 60 },
  { name: 'Jul', kpi: 70 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <span>{label} 2025</span>
        <div>{payload[0].value}%</div>
      </div>
    );
  }
  return null;
};

const AverageTeamKPI = () => {
  return (
    <div className="kpi-card">
      <div className="kpi-header">
        <h4>Average Team KPI</h4>
        <BsThreeDots className="kpi-dots" />
      </div>

      <div className="kpi-stats">
        <h2>82,10%</h2>
        <p><span className="green">▲ 10%</span> vs last month 72%</p>
      </div>

      <div className="kpi-chart">
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              padding={{ left: 10, right: 10 }}
              tick={{ fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="linear"
              dataKey="kpi"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#colorBlue)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>

        <hr className="divider" />

        {/* <div className="months-labels"> */}
          {/* {data.map((item, index) => ( */}
            {/* <span key={index}>{item.name}</span> */}
          {/* ))} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default AverageTeamKPI;
