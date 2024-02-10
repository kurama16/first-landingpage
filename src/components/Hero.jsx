import React from 'react'
import { heroImg } from '../assets'
import {AiOutlineSearch} from 'react-icons/ai'

function Hero() {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px]  max-w-[600px] m-auto grid md:grid-cols-2'>

            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[#20b486] font-medium'>START TO SUCCESS</p>
                <h1 className='md:leading-[72px] py-2 md:text-6x1 text-5xl font-semibold'>Access to <span className='text-[#20b486]'>5000+</span> Courses
                     from <span className='text-[#20b486]'>300</span> instructors 
                     & institutions</h1>
                <p className='py-2 text-lg text-gray-600'>various versions have evolved over the years, sometimes
                    by accident </p>
                <form className='bg-white border max-w-{700px} p-4 input-box-shadow rounded-md flex justify-between'>
                    <input
                        className='bg-white '
                        type='text'
                        placeholder='What do want to learn?'
                    />
                    <button>
                        <AiOutlineSearch
                            size={20}
                            className='icon'
                            style={{color:'#000'}}
                        />
                    </button>
                </form>
            </div>

            <img className='md:order-last order-first' src={heroImg}/>

        </div>
        
    </div>
  )
}

export default Hero