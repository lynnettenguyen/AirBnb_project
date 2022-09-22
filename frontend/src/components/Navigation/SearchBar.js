import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './SearchBar.css'
import searchIcon from './MagnifyingGlass.svg'
import { DateRangePicker } from 'react-date-range'
import { addDays } from 'date-fns'
import format from 'date-fns/format'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function SearchBar() {
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectDates, setSelectDates] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
  }

  const [selectDate, setSelectDate] = useState([{
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection',
  }])


  return (
    <div className='searchBar-outer'>
      <form onSubmit={handleSearch} className="searchBar-form">
        <div className="searchBar-where">
          <label className="searchBar-label">Where</label>
          <input
            type='text'
            placeholder='Search destinations'
            className='searchBar-input'
            // value={}
            // onChange={}
            maxLength="140"
          />
        </div>
        {/* <div className="searchBar-dates">
          <div className="searchBar-date-header">Selected Dates</div>
          <input
            value={selectDates ? `${format(selectDate[0].startDate, "LLL dd")} - ${format(selectDate[0].endDate, "LLL dd")}` : 'Add dates'}
            readOnly
            onClick={() => setShowCalendar(!showCalendar)}
            className='searchBar-input'
          />
          <div className="date-range-picker">
            {showCalendar && <DateRangePicker
              months={2}
              ranges={selectDate}
              minDate={new Date()}
              direction='horizontal'
              onChange={item => { setSelectDate([item.selection]); setSelectDates(true) }}
              moveRangeOnFirstSelection={false}
              className='DateRangePicker'
            />}
          </div>
        </div> */}
        <div>
          <button type='submit' className='searchBar-button'><img src={searchIcon} className='searchBar-glass' alt='search'></img>Search</button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
