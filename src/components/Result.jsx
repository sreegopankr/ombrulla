import React, { useState } from 'react'

const Result = () => {
    const [data,setData] = useState({
        data1: "31418",
        data2: "43170",
        data3: "84828.6",
        data4: "20289.9",
    });
    return (
        <div className='border-2 border-gray-200 rounded-xl p-4 flex justify-content gap-[10px] mt-3'>
            <div className='border-[2px] border-blue-200 rounded-xl p-4'>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <span className='text-xl text-blue-600 font-bold'>{data.data1}</span>
                    <p className='text-sm '>Generators Fuel Consumption (Litre)</p>
                </div>
            </div>

            <div className='border-[2px] border-red-200 rounded-xl p-4'>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <span className='text-xl text-red-600 font-bold'>{data.data2}</span>
                    <p className='text-sm '>Generators Fuel Consumption (Litre)</p>
                </div>
            </div>

            <div className='border-[2px] border-green-200 rounded-xl p-4'>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <span className='text-xl text-green-600 font-bold'>{data.data3}</span>
                    <p className='text-sm '>Generators Fuel Consumption (Litre)</p>
                </div>
            </div>

            <div className='border-[2px] border-yellow-200 rounded-xl p-4'>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <span className='text-xl text-yellow-600 font-bold'>{data.data4}</span>
                    <p className='text-sm '>Generators Fuel Consumption (Litre)</p>
                </div>
            </div>
        </div>
    )
}

export default Result;