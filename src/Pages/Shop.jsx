import React from 'react'
import SmallBanner from '../components/SmallBanner'

export const Shop = () => {

    const subTitle = 'Fresh & Organic'
    const title = 'Shop'

  return (
    <div>
        <SmallBanner  subTitle= {subTitle} Title = {title}/>
    </div>
  )
}
export default Shop