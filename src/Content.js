import Heading from "./Heading"
import Footer from "./Footer";

function Content() {
  return (

    <div>
      <Heading />
      <div className="h-full">
        <div className="bg-neutral-100 flex flex-row px-[8em] py-[5em]">
          <div className="h-[30em]">
            <div className=" w-[40em] py-[6em] px-[4em]"><h1 className="text-[4em] font-bold flex flex-col text-cyan-600">TRAVEL <span className="text-cyan-950">WITH EASE</span></h1><p className="text-[18px]">Ferry bookings now made easier with EastyTrip multiple shipping lines in one booking site! Check ferry schedules and rates today.</p></div>
          </div>
          <div className="absolute z-0 top-12 right-[6em] justify-center items-center ">
            <img className="h-[40em]" src="./imgs/trip.png"></img>
          </div>
        </div>
        <div className="">
          <h1 className="flex justify-center items-center text-cyan-600 font-medium text-xl pt-[4em]">OUR SERVICES</h1>
        </div>
        <div className="px-20 pt-20 flex justify-center items-center">
          <ul className="flex flex-row space-x-52 text-center">
            <li className="flex flex-col justify-center items-center w-72 pb-20"><h1 className="pb-4 text-xl font-bold text-cyan-500">ONLINE BOOKING</h1><p>We offer you the necessary tools needed for a hassle-free online booking experience.
              Passengers can also book tickets through our partner ticket agents throughout the country. We do the marketing for you.</p></li>
            <li className="flex flex-col justify-center items-center w-72 pb-20"><h1 className="pb-4 text-xl font-bold text-cyan-500">ONLINE BOOKING</h1><p>We offer you the necessary tools needed for a hassle-free online booking experience.
              Passengers can also book tickets through our partner ticket agents throughout the country. We do the marketing for you.</p></li>
            <li className="flex flex-col justify-center items-center w-72 pb-20"><h1 className="pb-4 text-xl font-bold text-cyan-500">ONLINE BOOKING</h1><p>We offer you the necessary tools needed for a hassle-free online booking experience.
              Passengers can also book tickets through our partner ticket agents throughout the country. We do the marketing for you.</p></li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>


  )
}
export default Content;