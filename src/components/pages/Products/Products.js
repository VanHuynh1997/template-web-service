import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne,homeObjThree} from './Data'
import Pricing from '../../Pricing'
function Products() {
    return (
        <>
           <HeroSection {...homeObjOne}/>
           <Pricing/>
           <HeroSection {...homeObjThree} />
           <Pricing/>
           <Pricing/>
           <Pricing/>
    
           
        </>
    )
}

export default Products
