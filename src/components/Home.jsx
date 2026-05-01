import React from 'react'
import Herosection from './Herosection'
import PopularSkills from './PopularSkills'
import TopRatedProviders from './TopRatedProviders'
import HowWorks from './HowWorks'

const Home = () => {
  return (
    <div>
        <Herosection></Herosection>
        <PopularSkills></PopularSkills>
        <TopRatedProviders></TopRatedProviders>
        <HowWorks></HowWorks>
    </div>
  )
}

export default Home