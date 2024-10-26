import CallToAction from '../components/CallToAction'
import Faq from '../components/Faq'
import Hero from '../components/Hero'
// import Landing from '../components/Landing'
import Partners from '../components/Partners'
import PastEvents from '../components/PastEvents'
import Stats from '../components/Stats'
import UpcommingEvent from '../components/UpcommingEvent'

function Home() {
    return (
        <>
            <div className=''>
                <div className='h-screen'>
                    <Hero />
                </div>
                {/* <Landing /> */}
                <Partners />
                <UpcommingEvent />
                <PastEvents />
                <Stats />
                <CallToAction />
                <Faq />
            </div>
        </>
    )
}

export default Home