import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { date: '28 Apr', pageViews: 25, uniqueVisitors: 1 },
//   { date: '30 Apr', pageViews: 56, uniqueVisitors: 5 },
//   { date: '1 May', pageViews: 97, uniqueVisitors: 4 },
//   { date: '2 May', pageViews: 10, uniqueVisitors: 1 },
// ];

const CustomLineChart = ({data, type}) => {
  return (
    <div className="w-full min-w-[700px] h-[400px] bg-custom-half-gray py-4 pe-4 rounded-lg">
      <ResponsiveContainer width="100%" height="100%" >
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="date" stroke="#ffffff" />
          <YAxis stroke="#ffffff"/>
          <Tooltip
            contentStyle={{ backgroundColor: '#1C2A48', color: '#ffffff', borderRadius: '5px' }}
            itemStyle={{ color: '#ffffff' }}
          />
          <Line type="monotone" dataKey={type} stroke="#352cd4" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
