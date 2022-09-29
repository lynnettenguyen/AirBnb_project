import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import searchIcon from './MagnifyingGlass.svg'
import './SearchBar.css'
import { DateRangePicker } from 'react-date-range'
import { addDays } from 'date-fns'
import format from 'date-fns/format'

function SearchBar() {
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectDates, setSelectDates] = useState(false)
  const [guests, setGuests] = useState(0)

  const tomorrow = new Date()
  const nextDay = new Date()
  tomorrow.setDate(tomorrow.getDate() + 4)
  nextDay.setDate(nextDay.getDate() + 5)

  const [checkIn, setCheckIn] = useState(tomorrow.toISOString().slice(0, 10))
  const [checkOut, setCheckOut] = useState(nextDay.toISOString().slice(0, 10))


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
        <div className="searchBar-outer">
          <label className="searchBar-label">Where</label>
          <input
            type='text'
            placeholder='Search destinations'
            className='searchBar-input'
            value={destination}
            onChange={e => setDestination(e.target.value)}
            maxLength="140"
          />
        </div>
        <div className="searchBar-outer">
          <label className="searchBar-label">Check In</label>
          <input
            type='date'
            className='searchBar-input-date'
            min={new Date().toISOString().split('T')[0]}
            value={new Date(checkIn).toISOString().slice(0, 10)}
            onChange={(e) => setCheckIn(new Date(e.target.value).toISOString().slice(0, 10))}
          />
        </div>
        <div className="searchBar-outer">
          <label className="searchBar-label">Check Out</label>
          <input
            type='date'
            className='searchBar-input-date'
            min={new Date().toISOString().split('T')[0]}
            value={new Date(checkOut).toISOString().slice(0, 10)}
            onChange={(e) => setCheckOut(new Date(e.target.value).toISOString().slice(0, 10))}
          />
        </div>
        <div className="searchBar-outer">
          <label className="searchBar-label">Who</label>
          <div className="searchBar-guests-outer" id="who-buttons">
            <button type='button' onClick={() => { if (guests > 0) setGuests(guests - 1) }} disabled={guests === 0} className='searchBar-guests-minus'>-</button>
            {guests}
            <button type='button' onClick={() => setGuests(guests + 1)} disabled={guests === 16} className='searchBar-guests-plus'>+</button>
          </div>
        </div>
        <div>
          <button type='submit' className='searchBar-button'><img src={searchIcon} className='searchBar-glass' alt='search'></img></button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
