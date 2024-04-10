// GraphComponent.jsx
import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const GraphComponent = ({ labels, data, colors, graphWidth }) => {
  const chartData = labels.map((label, index) => {
    return {
      name: label,
      value: data[index] || 0,
      color: colors[index] || '#8884d8',
    };
  });

  return (
    <div className='flex flex-col items-center'>
      <BarChart
        width={graphWidth}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='value'>
          {chartData.map((entry, index) => (
            <Cell key={index} dataKey='value' fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default GraphComponent;
