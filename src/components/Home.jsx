import Herosection from './Herosection'
import PopularSkills from './PopularSkills'
import TopRatedProviders from './TopRatedProviders'
import HowWorks from './HowWorks'
import CommunityStats from './CommunityStats'

const Home = () => {
  return (
    <div>
        <Herosection></Herosection>
        <PopularSkills></PopularSkills>
        <TopRatedProviders></TopRatedProviders>
        <CommunityStats></CommunityStats>
        <HowWorks></HowWorks>
    </div>
  )
}

export default Home