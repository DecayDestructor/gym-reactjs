import AboutUs from '../Sections/AboutUs'
import Home from '../Sections/Home'
import Plans from '../Sections/Plans'
import Reasons from '../Sections/Reasons'
import TrainerStaff from '../Sections/TrainerStaff'
import Footer from '../Sections/Footer'
const Landingpage = () => {
  return (
    <div className="flex flex-col gap-20 max-w-full mx-24 mt-4">
      <Home />
      <Reasons />
      <Plans />
      <AboutUs />
      <TrainerStaff />
      <Footer />
    </div>
  )
}
export default Landingpage
