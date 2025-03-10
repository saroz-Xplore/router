import React from "react";
import SmallBanner from "../components/SmallBanner";

const About = () => {

    const subTitle = 'We sale fresh fruits'
    const title = 'About us'

    return (
       <>
       <SmallBanner subTitle = {subTitle} Title = {title} />
       </>
    )
}
export default About