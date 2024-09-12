import React from "react";
import Heading from "./Heading"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationDot, faCalendarDays, faUsers, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react"

function Booking() {
    const [isListVisible, setIsListVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selected, setSelected] = useState('');
    const [origins, setOrigins] = useState([]);

    const origin = () => {
        const allOrigins = [
            { id: 1, name: 'Cebu' },
            { id: 2, name: 'Bohol' },
            { id: 3, name: 'Leyte' },
            { id: 4, name: 'Negros' },
            { id: 5, name: 'Masbate' }

        ]
        return allOrigins.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
    }
    useEffect(() => {
        setOrigins(origin(searchTerm));
    }, [searchTerm]);

    const handleInputClick = () => {
        setIsListVisible(true);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleOptionSelect = (item) => {
        setSelected(item.name);
        setSearchTerm(item.name);
        setIsListVisible(false);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.search-container')) {
            setIsListVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);

    }, []);

    return (
        <div className="">
            <Heading />
            <div id="main-holder" className="two-holder">
                {/* <div className="IamPicture">
                    <img src="" alt="" />
                </div> */}
                <div className="w-[60em] flex flex-col search-container"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}>
                    <p className="text-center text-[35px] font-medium pb-[35px]">Online Booking</p>

                    <label htmlFor="origin">From</label>
                    <input id="origin"
                        name="origin"
                        type="text"
                        placeholder="Search..."
                        value={selected || searchTerm}
                        onClick={handleInputClick}
                        onChange={handleInputChange}
                        className="w-96 h-10 border-2 p-2 " />

                    {isListVisible && searchTerm && origins.length > 0 && (
                        <ul>
                            {origins.map(item => (
                                <li className="cursor-pointer" key={item.id} onClick={() => handleOptionSelect(item)}>{item.name}</li>
                            ))}
                        </ul>
                    )}
                </div>

            </div>

        </div>

    )
}

export default Booking