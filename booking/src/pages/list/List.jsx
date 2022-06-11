import { React, useState } from 'react'
import './list.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import SearchItems from '../../components/searchitems/SearchItems'

const List = () => {

  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOption] = useState(location.state.options);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpendate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='list-container'>
        <div className='list-wrapper'>
          <div className='list-search'>
            <h1 className='list-title'>Search</h1>
            <div className='list-item'>
              <label>Destination</label>
              <input type='text' placeholder={destination} />
            </div>
            <div className='list-item'>
              <label>Check-in Date</label>
              <span onClick={() => { setOpendate(!openDate) }}>{`${format(date[0].startDate, "MM/dd/yyyy")} 
                        to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
              {openDate && <DateRange onChange={(item) => setDate([item.selection])}
                minDate={new Date()} ranges={date} />}
            </div>
            <div className='list-item'>
              <label>Options</label>
              <div className='list-option'>
                <div className='list-option-items'>
                  <span className='list-option-text'>
                    Min Price <small>per night</small>
                  </span>
                  <input type='number' className='list-option-input' />
                </div>
                <div className='list-option-items'>
                  <span className='list-option-text'>
                    Max Price <small>per night</small>
                  </span>
                  <input type='number' className='list-option-input' />
                </div>
                <div className='list-option-items'>
                  <span className='list-option-text'>
                    Adult
                  </span>
                  <input type='number' min={1} className='list-option-input' placeholder={options.adult} />
                </div>
                <div className='list-option-items'>
                  <span className='list-option-text'>
                    Child
                  </span>
                  <input type='number' min={0} className='list-option-input' placeholder={options.child} />
                </div>
                <div className='list-option-items'>
                  <span className='list-option-text'>
                    Room
                  </span>
                  <input type='number' min={1} className='list-option-input' placeholder={options.room} />
                </div>
              </div>
            </div>
            <button className='search-btn'>Search</button>
          </div>
          <div className='list-result'>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List