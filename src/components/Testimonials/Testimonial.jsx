import React from 'react'
import Star from '../../assets/icons/Star'
import Quote from '../../assets/icons/Quote'

function Testimonial() {
  return (
    <div data-aos="fade-up" className='grid grid-cols-7 pl-2 pr-16 pb-16 pt-8 border-2 rounded-tr-[100px] rounded-bl-[100px] relative mt-5'>
        <div className='fill-[#B69D74] absolute bottom-3 right-5'>
            <Quote/>
        </div>
        <img className='col-span-1 rounded-full' src="https://scholaritinc.com/assets/img/man_80x80.jpg" alt="" />
        <div className='col-span-6'>
            <div className="flex justify-between pl-6">
                <div className='leading-7'>
                    <b>Md Ashikul Islam</b>
                    <p>Team Leader</p>
                </div>
                <div className='flex fill-[#B69D74] gap-2'>
                    {
                        (new Array(5).fill()).map((e, i)=>
                        <div key={i}>
                            <Star/>
                        </div>
                        )
                    }
                </div>
            </div>
            <br/>
            <p className='pl-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
    </div>
  )
}

export default Testimonial