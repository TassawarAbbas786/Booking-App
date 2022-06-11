import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faTaxi, faCalendar, faPerson, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Header = (props) => {
    const [openDate, setOpendate] = useState(false);
    const [destination, setDestination]=useState("");
    const [openOption, setOpenOption] = useState(false);
    const [options, setOption] = useState({
        adult: 1,
        child: 0,
        room: 1
    });
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const navigateHotels=useNavigate();

    const handleOptions = (nameOfThing, operation) => {
        setOption((prev) => {
            return {
                ...prev,
                [nameOfThing]: operation == "i" ? options[nameOfThing] + 1 : options[nameOfThing] - 1
            };
        });
    }
    const handleSearch = () =>{
        navigateHotels("/hotels",{state:{destination,options,date}});
    }

    return (
        <div className='header'>
            <div className={props.type ==="list" ? "header-container list-mode":"header-container"}>
                <div className='header-list'>
                    <div className='header-list-item active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className='header-list-item'>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className='header-list-item'>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className='header-list-item'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className='header-list-item'>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
               { props.type!=="list" &&
                   <>
                   <h1 className='header-title'>A life time of disconts? It's genius.</h1>
                <p className='header-description'>
                    Get rewards for yor travels-unlock instant svaings of 10% or move with
                    free ainos booking account.
                </p>
                <button className='header-button'>Sign in / Register</button>
                <div className='header-search'>
                    <div className='header-search-item'>
                        <FontAwesomeIcon icon={faBed} className="header-icon" />
                        <input type="text" placeholder='Where are u going?'
                        onChange={(e) => setDestination(e.target.value)} className='header-search-input' />
                    </div>
                    <div className='header-search-item'>
                        <FontAwesomeIcon icon={faCalendarDays} className="header-icon" />
                        <span onClick={() => { setOpendate(!openDate) }} className='header-search-text'> {`${format(date[0].startDate, "MM/dd/yyyy")} 
                        to ${format(date[0].endDate, "MM/dd/yyyy")} `} </span>
                        {openDate && <DateRange className='date '
                            editableDateInputs={true} onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false} ranges={date} />
                        }
                    </div>
                    <div className='header-search-item'>
                        <FontAwesomeIcon icon={faPerson} className="header-icon" />
                        <span className='header-search-text' onClick={()=> setOpenOption(!openOption)}>{`${options.adult} adult . ${options.child} child . ${options.room} room .`}</span>
                       {openOption && <div className='options'>
                            <div className='option-item'>
                                <span className='option-text'>Adult</span>
                                <div className='option-counter'>
                                    <button className="option-counter-button" disabled={options.adult <= 1}
                                        onClick={() => { handleOptions("adult", "d") }}>-</button>
                                    <span className='option-counter-num'>{options.adult}</span>
                                    <button className="option-counter-button"
                                        onClick={() => { handleOptions("adult", "i") }}>+</button>
                                </div>
                            </div>
                            <div className='option-item'>
                                <span className='option-text'>Child</span>
                                <div className='option-counter'>
                                    <button className="option-counter-button" disabled={options.child <= 0}
                                        onClick={() => { handleOptions("child", "d") }}>-</button>
                                    <span className='option-counter-num'>{options.child}</span>
                                    <button className="option-counter-button"
                                        onClick={() => { handleOptions("child", "i") }}>+</button>
                                </div>
                            </div>
                            <div className='option-item'>
                                <span className='option-text'>Room</span>
                                <div className='option-counter'>
                                    <button className="option-counter-button" disabled={options.room <= 1}
                                        onClick={() => { handleOptions("room", "d") }}>-</button>
                                    <span className='option-counter-num'>{options.room}</span>
                                    <button className="option-counter-button"
                                        onClick={() => { handleOptions("room", "i") }}>+</button>
                                </div>
                            </div>
                        </div>
                       }
                    </div>
                    <div className='header-search-item'>
                        <button className='header-search-btn' onClick={handleSearch}>Search</button>
                    </div>
                </div>
                   </>
               }
              </div>
        </div>
    )
}

export default Header