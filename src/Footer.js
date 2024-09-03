import React from "react";

const Footer = () =>{
    return(
        <div className="flex flex-row border-2 space-x-10 justify-center">
                <div className="p-10 w-300">
                    <h3 className="pb-12 font-medium text-xl">Contact Us</h3>
                    <p className="pb-5 text-m">Email Us</p>
                    <p className="pb-5 text-sm font-medium">support@EasyTrip.com</p>
                    <p className="pb-5 text-m">Call Us</p>
                    <p className="pb-5 text-sm font-medium">63+9915337918</p>
                </div>
                <div className="p-10 w-300">
                    <h3 className="pb-12 font-medium text-xl">Manuals</h3>
                    <a href="#"><p className="pb-5 text-sm transition-all duration-400 ease-in-out hover:underline hover:text-cyan-700">Boarding Guidelines</p></a>
                    <a href="#"><p className="pb-5 text-sm hover:underline duration-400 ease-in-out hover:underline hover:text-cyan-700">Payment Options</p></a>
                    <a href="#"><p className="pb-5 text-sm hover:underline duration-400 ease-in-out hover:underline hover:text-cyan-700">Passenger Ticket Booking Manual</p></a>
                    <a href="#"><p className="pb-5 text-sm hover:underline duration-400 ease-in-out hover:underline hover:text-cyan-700">Rolling Cargo Booking Manual</p></a>
                </div>
                <div className="p-10 w-300">
                    <h3 className="pb-12 font-medium text-xl">How To</h3>
                    <a href="#"><p className="pb-5 text-sm hover:underline duration-400 ease-in-out hover:underline hover:text-cyan-700">How to Refund</p></a>
                    <a href="#"><p className="pb-5 text-sm hover:underline duration-400 ease-in-out hover:underline hover:text-cyan-700">How to Rebook</p></a>
                    <a href="#"><p className="pb-5 text-sm hover:underline duration-400 ease-in-out hover:underline hover:text-cyan-700">EasyTrip Terms & Conditions</p></a>
                    <a href="#"><p className="pb-5 text-sm hover:underline duration-400 ease-in-out hover:underline hover:text-cyan-700">Privacy Policy</p></a>
                </div>
                <div className="p-10 w-300">
                    <h3 className="pb-12 font-medium text-xl">Credits</h3>
                    <p className="pb-5 text-sm">Kami ra duha</p>
                </div>
        </div>
    )
}
export default Footer;