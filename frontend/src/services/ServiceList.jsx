
import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guideImg'
import customizationImg from '../assets/images/customizationImg'

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Write anything here "

  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Write anything here "

  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Write anything here "

  }

]

const ServiceList = () => {
  return <>
  {
    servicesData.map((item,index)=> <c)
  }
  </>
}

export default ServiceList
