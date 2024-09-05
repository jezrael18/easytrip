import React from "react"
import { Link } from "react-router-dom"

function heading () {
    return(
        <div className="flex justify-center items-center shadow-sm space-x-11">
            <div><img className="h-20" src="./imgs/Easy.png" alt="logo" ></img></div>
            <div className="text-black font-semibold text-[15px] ">
            <ul className="flex flex-row  space-x-12">
                <li><Link to="/" >HOME</Link></li>
                <li>SHIPPING COMPANIES</li>
                <li>ABOUT US</li>
                <li>HELP</li>
                <li>MY BOOKINGS</li>
                
            </ul>
            </div>
            <div className="pl-20">
            <button className="bg-cyan-700/90 py-4 px-8 rounded-xl font-semibold text-white text-[15px]"><Link to="/Booking">BOOK NOW!</Link></button>
            </div>
        </div>
    
    )
}
export default heading