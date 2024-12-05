import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import StockInEquip from '../../Components/StockInEquip/StockInEquip';
import StockOutEquip from '../../Components/StockOutEquip/StockOutEquip';


const Dashboard = () => {
    return (
        <div>
            <Helmet>
        <title>Dashboard Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className='lg:w-[90%] w-[95%] mx-auto'>
            <div className="flex flex-col justify-center items-center lg:w-[70%] w-[85%] mx-auto gap-y-5 lg:py-[50px]">
            <h1 className="font-[700] lg:text-3xl text-xl  text-center">Dashboard</h1>
            
            
            </div>
            
            <Tabs className="flex flex-col lg:flex-row lg:justify-center ">
                {/* Tab List (Left Side) */}
                <TabList className="lg:w-1/5 w-full flex flex-col ">
                    
                    <Tab className="p-3 cursor-pointer border-b hover:bg-gray-200 focus:bg-gray-300">
                        Stoke In
                    </Tab>
                    <Tab className="p-3 cursor-pointer border-b hover:bg-gray-200 focus:bg-gray-300">
                        Stoke Out
                    </Tab>
                </TabList>

                {/* Tab Panels (Right Side) */}
                <div className="lg:w-3/4 w-full p-5 border bg-white shadow-sm">
                    
                    <TabPanel>
                        <h2 className="text-xl font-semibold">Stoke In</h2>
                        <StockInEquip></StockInEquip>
                    </TabPanel>
                    <TabPanel>
                        <h2 className="text-xl font-semibold">Stoke Out</h2>
                        <StockOutEquip></StockOutEquip>
                    </TabPanel>
                </div>
            </Tabs>


        </div>
        </div>
        
    );
};

export default Dashboard;