import About from '../About/About'
import Experiences from '../Experiences/Experiences'
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Timeline from '../Timeline/Timeline';


function Home() {
  return (
    <>
    <About/>         
    <Timeline />
    <Projects/>
    <Contact/>
    </>
  )
}

export default Home