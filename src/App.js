import React from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';


const pdata = [
  {
    name: 'Python',
    students: 13,
    fees: 10
  },
  {
    name: 'JavaScript',
    students: 15,
    fees: 12
  },
  {
    name: 'React js',
    students: 5,
    fees: 10
  },
  {
    name: 'Node js',
    students: 10,
    fees: 5
  }
];

function App() {
  return (
    <>
    <div className="back-ground">
    <h1 className="chart-heading">Line Chart</h1>
    <ResponsiveContainer width="100%" aspect={3} >
      <LineChart data={pdata} width={500} height={300} margin={{top:5, right:300, left:20, bottom:5}} >
        <CartesianGrid  strokeDasharray="3 3"/>
        <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={ (value) => value +  "Programming" }/>
        <YAxis />
        <Tooltip contentStyle={{ backgroundColor: 'yellow'}}/>
        <Legend />
        <Line type="monotone" dataKey="students" stroke='red' activeDot={{ r: 6}} />
        <Line type="monotone" dataKey="fees"  stroke='green' activeDot={{ r: 6}} />

      </LineChart>
    </ResponsiveContainer>
    </div>

      
      <div className="back-ground">
      <h1 className="chart-heading">Bar Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="student" fill="#8884d8" />
          <Bar dataKey="fees" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </>
  );
}


export default App;
