import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';



const Statistics = () => {
    const topics = useLoaderData();
    const topicsData = topics.data;
    return (
        <div>
            <h2 className='text-primary text-center ms-5 fw-bold'>Amount of questions per topic</h2>
            <div className='d-flex justify-content-center'>
                <div className='mt-5'>
                    <BarChart width={400} height={300} data={topicsData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="total" fill="#0d6efd" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Statistics;