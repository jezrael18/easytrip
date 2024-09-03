import Heading from "./Heading"
import Footer from "./Footer";

function Content() {
  return (
    
    <div className="">
      <Heading />
      <div className=" px-[8em]">
      <div className="h-96">
        <div className=" w-[40em] py-[6em] px-[4em]"><h1 className="text-[3em] font-bold flex flex-col text-cyan-600">TRAVEL <span className="text-cyan-950">WITH EASE</span></h1><p>Ferry bookings now made easier with Barkota- multiple shipping lines in one booking site! Check ferry schedules and rates today.</p></div>
        <div></div>
      </div>
      </div>
      <Footer />
    </div>
  

  )
}
export default Content;