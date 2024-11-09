import React, { useState } from 'react';
import { format, subMonths, startOfMonth } from 'date-fns';
import {
  BarChart,
  LineChart,
  DoughnutChart,
  MapChart,
} from './charts';
import { generateDummyData } from '../data/analyticsData';
import { Calendar, Filter } from 'lucide-react';

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const data = generateDummyData(selectedDate);

  const handlePreviousMonth = () => {
    setSelectedDate(prev => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(prev => subMonths(prev, -1));
  };

  return (
    <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white rounded-lg shadow-sm p-2">
              <button
                onClick={handlePreviousMonth}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                ←
              </button>
              <div className="flex items-center px-4">
                <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-gray-700">
                  {format(selectedDate, 'MMMM yyyy')}
                </span>
              </div>
              <button
                onClick={handleNextMonth}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                →
              </button>
            </div>
            <button className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-sm hover:bg-gray-50">
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {data.totalUsers.toLocaleString()}
            </p>
            <div className="text-green-500 text-sm mt-2">↑ 12% from last month</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-gray-500 text-sm font-medium">Active Users</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {data.activeUsers.toLocaleString()}
            </p>
            <div className="text-green-500 text-sm mt-2">↑ 8% from last month</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-gray-500 text-sm font-medium">New Users</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {data.newUsers.toLocaleString()}
            </p>
            <div className="text-green-500 text-sm mt-2">↑ 15% from last month</div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* User Demographics */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">User Demographics</h3>
            <DoughnutChart data={data.usersByGender} />
          </div>

          {/* Age Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Age Distribution</h3>
            <BarChart data={data.usersByAge} />
          </div>

          {/* Geographic Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Geographic Distribution</h3>
            <MapChart data={data.usersByLocation} />
          </div>

          {/* Daily Activity */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Daily Activity</h3>
            <LineChart data={data.userActivityByTime} />
          </div>
        </div>
      </div>
    </div>
  );
}