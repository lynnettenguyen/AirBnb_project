import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import searchIcon from './MagnifyingGlass.svg'
import './SearchBar.css'
import { DateRangePicker } from 'react-date-range'
import { addDays } from 'date-fns'
import format from 'date-fns/format'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function SearchBar() {
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectDates, setSelectDates] = useState(false)
  const [selectDate, setSelectDate] = useState([{
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection',
  }])

  const history = useHistory()
  const [destination, setDestination] = useState()

  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`/search/${destination}`)
    setDestination("")
  }

  return (
    <div className='searchBar-outer'>
      <form onSubmit={handleSearch} className="searchBar-form">
        <div className="searchBar-where">
          {/* <div className="searchBar-label">Where</div> */}
          <input
            type='text'
            placeholder='Search destinations! Indonesia, Thailand, Mexico ...'
            className='searchBar-input'
            value={destination}
            onChange={e => setDestination(e.target.value)}
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
          <button type='submit' className='searchBar-button'><img src={searchIcon} className='searchBar-glass' alt='search'></img></button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
