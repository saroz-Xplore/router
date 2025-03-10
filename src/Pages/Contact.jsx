import React from 'react'
import SmallBanner from '../components/SmallBanner'

export const Contact = () => {

    const subtitle = "24/7 available"
    const title = "Contact us"

  return (
    <div>
        <SmallBanner Title = {title} subTitle = {subtitle} />
    </div>
  )
}

export default Contact
