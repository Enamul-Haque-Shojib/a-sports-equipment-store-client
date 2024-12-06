import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import StockInEquip from '../../Components/StockInEquip/StockInEquip';
import StockOutEquip from '../../Components/StockOutEquip/StockOutEquip';


const Dashboard = () => {




  return (
    <div className="min-h-screen bg-gray-50">
      
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <div className="lg:w-[90%] w-[95%] mx-auto py-10">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your inventory efficiently</p>
        </div>

        
        <Tabs className="lg:flex bg-white shadow-lg rounded-lg overflow-hidden">
          
          <TabList className="lg:w-1/4 bg-gray-100 border-r">
            <Tab className="py-4 px-6 text-lg font-medium text-gray-800 border-b hover:bg-gray-200 focus:outline-none focus:bg-gray-300">
              Stock In
            </Tab>
            <Tab className="py-4 px-6 text-lg font-medium text-gray-800 border-b hover:bg-gray-200 focus:outline-none focus:bg-gray-300">
              Stock Out
            </Tab>
          </TabList>

        
          <div className="lg:w-3/4 p-6 bg-gray-50">
            <TabPanel>
              <h2 className="text-2xl font-semibold mb-4">Stock In Items</h2>
              <StockInEquip />
            </TabPanel>
            <TabPanel>
              <h2 className="text-2xl font-semibold mb-4">Stock Out Items</h2>
              <StockOutEquip/>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;