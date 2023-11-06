import React from 'react'
import Justice from '../../assets/images/justice.svg'
import Services1 from '../../assets/images/services1.jpg'

function Services(props) {
  return (
    <div data-aos="zoom-in-up" className='relative bg-white rounded pt-8'>
        <img className='absolute bottom-0 right-0 z-[-10]' src={Justice} alt="" />
        <p className='text-[24px] text-[#033A5B] font-bold px-3 pb-4'>{props.name}</p>
        <p className='px-3'>{props.content}</p>
        <img className='rounded-tr-full' src={require(`../../assets/images/${props.image}`)} alt="" />
    </div>
  )
}

export default Services