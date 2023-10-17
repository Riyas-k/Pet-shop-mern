import React from "react";
import {FiUsers} from "react-icons/fi"
import {BiSolidCategoryAlt} from "react-icons/bi"
import ProductIcon from "../../assets/adminicons/product.png"
import OrderIcon from "../../assets/adminicons/order (1).png"
import Carresicon from "../../assets/adminicons/carreer.png"
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import "./test.css";
const Dashboard = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className="main-container">
      <div className="flex m-4 justify-between">
        <div className="flex flex-col rounded-lg bg-blue-500 animate-bounce cursor-pointer h-20 w-40 justify-center p-3  shadow-inherit">
          <div className="flex justify-between items-center ">
            <h3>PRODUCTS</h3>
            <img src={ProductIcon} className="w-5"alt="" />
          </div>
          <h1>300</h1>
        </div>

        <div className="flex flex-col rounded-lg bg-orange-500 animate-bounce cursor-pointer h-20 w-40 justify-center p-3 shadow-inherit">
          <div className="flex justify-between items-center ">
            <h3>ORDERS</h3>
              <img src={OrderIcon} className="w-5" alt="" />
          </div>
          <h1>300</h1>
        </div>

        <div className="flex flex-col rounded-lg bg-green-400 animate-bounce cursor-pointer h-20 w-40 justify-center p-3 shadow-inherit ">
          <div className="flex justify-between items-center ">
            <h3>CUSTOMERS</h3>
            <FiUsers className="text-black"/>
          </div>
          <h1>300</h1>
        </div>

        <div className="flex flex-col rounded-lg bg-indigo-500 animate-bounce cursor-pointer h-20 w-40 justify-center p-3 shadow-inherit ">
          <div className="flex justify-between items-center ">
            <h3>CATEGORIES</h3>
             <BiSolidCategoryAlt className="text-black"/>
          </div>
          <h1>300</h1>
        </div>

        <div className="flex flex-col rounded-lg bg-lime-500 animate-bounce cursor-pointer h-20 w-40 justify-center p-3  ">
          <div className="flex justify-between items-center ">
            <h3>CAREERS</h3>
            <img src={Carresicon} className="w-5" alt="" />
          </div>
          <h1>300</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
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
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
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
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default Dashboard;
