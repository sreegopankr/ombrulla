import React from 'react'

const Generator = () => {
  return (
    <div className='flex flex-col gap-3 mt-3'>
        <h3 className='text-lg'>Generator</h3>
        <div className='grid grid-cols-12 gap-y-2'>

            <div className='col-span-4 font-semibold bg-blue-200'>Asset Name</div>
            <div className='col-span-4 font-semibold bg-blue-200'>Health Status</div>
            <div className='col-span-2 font-semibold bg-blue-200'>Co2e</div>
            <div className='col-span-2 font-semibold bg-blue-200'>icon</div>

            <div className='col-span-4'>Generator FCF ABD</div>
            <div className='col-span-4'>--------------</div>
            <div className='col-span-2'>5.56</div>
            <div className='col-span-2  text-green-600'>172</div>

            <div className='col-span-4'>Generator CPF JBZ-01</div>
            <div className='col-span-4'>--------------</div>
            <div className='col-span-2'>5.56</div>
            <div className='col-span-2 text-green-600'>172</div>

            <div className='col-span-2'>Generator GPI-01</div>
            <div className='col-span-4'> --------------</div>
            <div className='col-span-2'>6.89</div>
            <div className='col-span-2 text-green-600'>214</div>

            <div className='col-span-2'>Generator GFI-01</div>
            <div className='col-span-4'> --------------</div>
            <div className='col-span-2'>6.89</div>
            <div className='col-span-2 text-green-600'>214</div>

            <div className='col-span-2'>Generator AGF-01</div>
            <div className='col-span-4'> --------------</div>
            <div className='col-span-2'>6.89</div>
            <div className='col-span-2 text-green-600'>214</div>

        </div>
    </div>
  )
}

export default Generator