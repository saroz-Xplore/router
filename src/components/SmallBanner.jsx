import React from 'react'

const SmallBanner = ({ subTitle, Title }) => {
  return (
    <div className='bg-[#051922] w-screen h-[75vh] flex flex-col justify-center items-center'>
      <p className='text-[#F28123] tracking-[7px] font-bold text-sm uppercase '>{subTitle}</p>
      <h1 className='text-[50px] font-black text-white'>{Title}</h1>
    </div>
  )
}

export default SmallBanner