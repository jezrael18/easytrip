import Heading from "./Heading"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarDays, faUsers, faUserShield } from '@fortawesome/free-solid-svg-icons'

function Booking () {
    return (
        <div className="">
           
            <Heading />
            <div id="main-holder" className="two-holder">
                <div className="IamPicture">
                    <img src="" alt="" />
                </div>
                <div id="bookingHolder" className="">
                    <p className="text-center text-[35px] font-medium pb-[35px]">Online Booking</p>
                    <table className="">
                        <tr className="">
                            <td className="text-[20px] pr-[20px] pl-[20px]"><p><FontAwesomeIcon className="text-cyan-800 text-lg" icon={faLocationDot} /> Origin</p></td>
                            <td className="text-[20px] pr-[20px] pl-[20px]"><p><FontAwesomeIcon className="text-cyan-800 text-lg" icon={faLocationDot} /> Destination</p></td>
                        </tr>
                        <tr>
                            <td className="text-[20px] pr-[20px] pl-[20px]">
                                <select name="" id="">
                                    <option value="">---</option>
                                    <option value="CEB">CEB- CEBU</option>
                                </select>
                            </td>
                            <td className="text-[20px] pr-[20px] pl-[20px]">
                                <select name="" id="">
                                    <option value="">---</option>
                                    <option value="">---</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-[20px] pr-[20px] pl-[20px]"><p><FontAwesomeIcon className="text-cyan-800 text-lg" icon={faCalendarDays} /> Departure Date</p></td>
                            <td className="text-[20px] pr-[20px] pl-[20px]"><p><FontAwesomeIcon className="text-cyan-800 text-lg"  icon={faUsers} /> Adult/Child</p></td>
                        </tr>
                        <tr>
                            <td className="text-[20px] pr-[20px] pl-[20px]">
                                <select name="" id="">
                                    <option value="">---</option>
                                </select>
                            </td>
                            <td className="text-[20px] pr-[20px] pl-[20px]">
                                <select name="" id="">
                                    <option value="">---</option>
                                </select>
                            </td>
                        </tr>
                        <br />
                        <p className="ml-[20px]"><FontAwesomeIcon className="text-cyan-800 text-lg" icon={faUserShield} /> With Insurrances</p>
                        <input id="insurance-radio-yes" name="insurance" type="radio" className="ml-[20px] hover:cursor-pointer"/> &nbsp; <label htmlFor="insurance-radio-yes">Yes</label> &nbsp;&nbsp;
                        <input id="insurance-radio-no" name="insurance" type="radio" className="hover:cursor-pointer" /> &nbsp; <label htmlFor="insurance-radio-no">Gusto Na Mamatay</label>
                    </table>
                </div>
            </div>

        </div>

    )
}

export default Booking