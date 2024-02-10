import React from 'react'
import { cta } from '../assets'

function CTA() {
  return (
    <div className='w-full bg-[#E9F8F3] py-24'>
        <div className='md:max-w-[1480px]  max-w-[600px] m-auto grid gap-8 md:grid-cols-2 items-center'>
            <img src={cta} className='w-[650px] mx-auto'/>

            <div>
                <h1 className=' py-2 text-3xl font-semibold'>Join <span className='text-[#20b486]'>world's largest</span> learning platform today</h1>
                <p className='py-2 text-lg text-gray-600'>Start learning by registering for free</p>
                <button className='max-[780px]:w-full my-4 px-8 py-3 rounded-md bg-[#20B486] text-white font-bold'>Sign Up for free</button>


            </div>


        </div>
        
    </div>
  )
}

export default CTA