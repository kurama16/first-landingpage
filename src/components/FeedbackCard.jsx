import React from 'react'
import { avatar, quotationMark } from '../assets'
function FeedbackCard() {
  return (
    <div className='bg-white rounded-3xl p-8 shadow-xl my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <img src ={avatar} />
          <div className=''>
            <h1>Jenny Wilson</h1>
            <p>UI-UX Designer</p>
          </div>

        </div>

        <img  className='h-8' src ={quotationMark} />
      </div>
      <div className='py-8'>
        <h3 className='text-lg'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
        </h3>
      </div>

    </div>
  )
}

export default FeedbackCard