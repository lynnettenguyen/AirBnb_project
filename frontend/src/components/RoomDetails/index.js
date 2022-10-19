import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { findRoomById, removeRoom } from "../../store/rooms";
import "./RoomDetails.css"
import EditListingForm from "../EditListingForm";
import ReserveRoom from "../ReserveRoom";
import { getAllReservations, listRoomReservations } from "../../store/reservations";
import Maps from '../Maps'
import Reviews from "../Reviews";
import { listAllUsers } from "../../store/users";
import { getAllRoomReviews } from "../../store/reviews";
import Navigation from "../Navigation";
import { Modal } from "../../context/Modal";
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const RoomDetails = ({ isLoaded }) => {
  let { roomId } = useParams()
  roomId = Number(roomId)

  const dispatch = useDispatch()
  const history = useHistory()
  const room = useSelector((state) => state.rooms[roomId])
  const sessionUser = useSelector(state => state.session.user);
  const users = useSelector(state => state.users)
  const [confirmDelete, setConfirmDelete] = useState(false);
  const currRoomReservations = useSelector(getAllReservations)
  const [selectDate, setSelectDate] = useState(false)

  const today = new Date()
  const tomorrow = new Date()
  const nextDay = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)
  nextDay.setDate(nextDay.getDate() + 2)

  const [checkIn, setCheckIn] = useState(today)
  const [checkOut, setCheckOut] = useState(tomorrow)
  const [dates, setDates] = useState([
    {
      startDate: tomorrow,
      endDate: nextDay,
      key: 'selection'
    }
  ])

  useEffect(() => {
    if (dates[0].startDate !== tomorrow) {
      setCheckIn(dates[0].startDate.toISOString().slice(0, 10))
      setCheckOut(dates[0].endDate.toISOString().slice(0, 10))
    }
  }, [dates])

  useEffect(() => {
    if (checkIn !== today) {
      setDates([
        {
          startDate: new Date(checkIn),
          endDate: new Date(checkOut),
          key: 'selection'
        }
      ])
    }

  }, [selectDate])

  useEffect(() => {
    dispatch(listRoomReservations(roomId))
  }, [])

  const allStartDates = currRoomReservations.map(reservation => reservation.startDate)
  const allEndDates = currRoomReservations.map(reservation => reservation.endDate)

  const getDaysArray = function (start, end) {
    for (var arr = [], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
      arr.push(new Date(dt));
    }
    return arr;
  };

  const getBookedDates = () => {
    let i = 0
    let bookedDates;
    while (i < allStartDates.length) {
      bookedDates = getDaysArray(new Date(allStartDates[i]), new Date(allEndDates[i]));
      bookedDates.map((date) => date.toISOString().slice(0, 10)).join("")
      i++
    }
    return bookedDates
  }

  const [page, setPage] = useState(1)

  let avgStarRating = room?.avgStarRating;
  avgStarRating = Math.round(avgStarRating * 100) / 100

  const wholeNumbers = [1, 2, 3, 4, 5]
  if (wholeNumbers.includes(avgStarRating)) avgStarRating = avgStarRating.toString() + ".0"

  const returnToListing = () => {
    setPage(1)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    setPage(2)
  }

  const handleConfirmDelete = () => {
    setConfirmDelete(true)
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    const deleteResponse = await dispatch(removeRoom(roomId))

    if (deleteResponse) {
      history.push('/')
    }
  }

  useEffect(() => {
    dispatch(findRoomById(roomId))
    dispatch(listRoomReservations(roomId))
    dispatch(listAllUsers())
    dispatch(getAllRoomReviews(roomId))
    document.documentElement.scrollTop = 0;

  }, [dispatch])


  return (
    <div className="room-details-outer">
      <div className="room-nav-main">
        <Navigation isLoaded={isLoaded} />
      </div>
      <div className="navigation-border"></div>
      {page === 1 &&
        <div className="room-content">
          <div className="main-top">
            <div className="outer-top-content">
              <div className="room-top-content">
                <div className="room-header">
                  <div className="room-name">{room?.name}</div>
                  <div className="room-information-top">
                    <span><i className="fa-solid fa-star"></i>{avgStarRating}</span>
                    <span className="span-separator">·</span>
                    <span className="room-reviews" onClick={() => { document.getElementById('reviews').scrollIntoView() }}>{`${room?.Reviews ? room?.Reviews.length : 0} reviews`}</span>
                    <span className="span-separator">·</span>
                    <span className="room-location" onClick={() => { document.getElementById('maps').scrollIntoView() }}>{`${room?.city}, ${room?.state}, ${room?.country}`}</span>
                  </div>
                </div>
                <div className="session-user-buttons">
                  {sessionUser ?
                    <>
                      {sessionUser?.id === room?.ownerId &&
                        <div>
                          <button onClick={handleEdit} className="edit-listing-button">Edit</button>
                          <button onClick={handleConfirmDelete} className="delete-listing-button">Delete</button>
                          {confirmDelete &&
                            <Modal onClose={() => setConfirmDelete(false)}>
                              <div className="delete-confirmation-modal">
                                Permanently remove listing?
                                <div className="delete-confirmation-button-outer">
                                  <button onClick={handleDelete} className='delete-confirm-button'>Delete</button>
                                </div>
                              </div>
                            </Modal>}
                        </div>}
                    </> : <></>}
                </div>
              </div>
            </div>
            <div className="outer-room-images">
              <div className="room-images">
                <div className="left-image-div">
                  {room?.images &&
                    <img src={room?.images[0]?.url} alt="exterior" className="main-image"></img>}
                </div>
                <div className="right-image-div">
                  {room?.images?.map((image, i) => {
                    if (i > 0)
                      return (
                        <div className="side-image-div" key={image.url}>
                          <img src={`${image?.url}`} alt="interior" className={`side-images side-images${i}`}></img>
                        </div>
                      )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="room-information-bottom">
            <div className="default-description">
              <div className="room-info-general">
                <div className="room-info-left">
                  <div className="room-info-header">{room?.type} hosted by {users[room?.ownerId]?.firstName}</div>
                  <div className="room-info-beds">{room?.guests} guests · {room?.bedrooms} bedrooms · {room?.beds} beds · {room?.baths} baths </div>
                </div>
                <div className="room-info-right">
                  <img src={users[room?.ownerId]?.profile_url} className='room-owner-img'></img>
                </div>
              </div>
              <div className="room-description">{room?.description}</div>
              <div className="room-calendar">
                <div className="calendar-header">Select Travel Dates</div>
                <DateRange
                  ranges={dates}
                  editableDateInputs={false}
                  moveRangeOnFirstSelection={false}
                  rangeColors={['black']}
                  onChange={(e) => setDates([e.selection])}
                  showDateDisplay={false}
                  months={2}
                  minDate={new Date()}
                  direction={"horizontal"}
                  disabledDates={getBookedDates()}
                />
              </div>
            </div>
            <ReserveRoom roomId={roomId} avgStarRating={avgStarRating} checkIn={checkIn} setCheckIn={setCheckIn} checkOut={checkOut} setCheckOut={setCheckOut} selectDate={selectDate} setSelectDate={setSelectDate} />
          </div>
          <Reviews room={room} avgStarRating={avgStarRating} roomId={roomId} />
          <Maps room={room} />
        </div>
      }
      {page === 2 && <EditListingForm listingId={roomId} returnToListing={returnToListing} />}
    </div>
  )
}

export default RoomDetails;
