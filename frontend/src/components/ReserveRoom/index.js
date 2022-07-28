import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { findRoomById, removeRoom } from "../../store/rooms";
import "./ReserveRoom.css"
import { getAllReservations, listAllReservations, bookNewReservation } from "../../store/reservations";

const ReserveRoom = ({ roomId, avgStarRating }) => {
  const room = useSelector((state) => state.rooms[roomId])
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const history = useHistory()

  const allReservations = useSelector(getAllReservations)
  console.log("......", allReservations)

  const [checkIn, setCheckIn] = useState(new Date().toISOString().slice(0, 10))
  const [checkOut, setCheckOut] = useState(new Date().toISOString().slice(0, 10))
  const [reservationErrors, setReservationErrors] = useState([])
  const [checkOwner, setCheckOwner] = useState(false)
  const [showReservations, setShowReservations] = useState(false)

  const allStartDates = allReservations.map(reservation => reservation.startDate)
  const allEndDates = allReservations.map(reservation => reservation.endDate)

  useEffect(() => {
    dispatch(listAllReservations(roomId))

    const errors = []
    if (sessionUser?.id === room?.ownerId) errors.push("Hosts can't reserve their own listings")
    else if (new Date(checkIn) === new Date(checkOut)) errors.push("Reservations must be a minimum of 1 day")
    else if (new Date().toISOString().slice(0, 10) === checkIn) errors.push("Reservations must be for future dates")
    else if (new Date(checkIn) > new Date(checkOut)) errors.push("Check-in date must be prior to check-out date")
    else if (allStartDates.includes(checkIn) || allEndDates.includes(checkIn) || allStartDates.includes(checkOut) || allEndDates.includes(checkOut)) errors.push("Selected dates conflict with an existing booking")

    if (errors.length > 0) {
      setReservationErrors(errors)
      setCheckOwner(true)
    } else {
      setReservationErrors([])
      setCheckOwner(false)
    }

  }, [checkIn, checkOut])

  const numDays = Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 3600 * 24))
  const cleaningFee = Math.floor(room?.price / 5)
  const serviceFee = Math.floor(room?.price / 8)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const reservationData = {
      userId: sessionUser.id,
      roomId,
      startDate: checkIn,
      endDate: checkOut
    }

    const reservationResponse = await dispatch(bookNewReservation(reservationData))

    if (reservationResponse) {
      history.push("/reservations")
    }
  }

  return (
    < form onSubmit={handleSubmit} >
      <div className="reservation-div">
        <div className="reserve-details">
          <div className="reserve-price">{`$${room?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div>
          <span>night</span>
          <span className="reserve-rating">
            <i className="fa-solid fa-star smaller"></i>
            {avgStarRating}</span>
          <span className="span-separator-smaller">·</span>
          <span className="reserve-review">{`${room?.Reviews ? room.Reviews.length : 0} reviews`}</span>
        </div>
        <div>
          <div className="reservation-dates">
            <div className="check-in">
              <label className="check-label">CHECK-IN</label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                className="select-date"
                value={new Date(checkIn).toISOString().slice(0, 10)}
                onChange={(e) => setCheckIn(new Date(e.target.value).toISOString().slice(0, 10))}
              />
            </div>
            <div className="check-out">
              <label className="check-label">CHECKOUT</label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                className="select-date"
                value={new Date(checkOut).toISOString().slice(0, 10)}
                onChange={(e) => setCheckOut(new Date(e.target.value).toISOString().slice(0, 10))}
              />
            </div>
          </div>
          <button type="button" onClick={() => setShowReservations(!showReservations)} className="view-reservations">{showReservations ? "Dates booked:" : "View current reservations"}</button>
          {showReservations ?
            <div className="outer-list-reservation">
              <div className="list-reservations-div"></div>
              {allReservations.map(reservation => {
                return (
                  <>
                    <div>{reservation.startDate} to {reservation.endDate}</div>
                  </>
                )
              })}
            </div> : <></>}
          {/* <div className="guests">
            <label>Guests</label>
            <input
            type="number"
            className="select-guests"
            min="1" />
          </div> */}
          <div className="reserve-button-div">
            {sessionUser ?
              <button type="submit" className="reserve-button" disabled={checkOwner}>{checkOwner ? "Unable to Reserve" : "Reserve"}</button> : <button className="reserve-button" disabled>Log in to Reserve</button>
            }
            {reservationErrors.length > 0 && (
                <div className="reserve-errors">
                  {reservationErrors.map((error) => (
                    <div key={error}>{error}</div>
                  ))}
                </div>
              )
            }
          </div>
        </div>
        <div className="fee-warning">
          <div>You won't be charged yet</div>
        </div>
        <div className="total-fees">
          <div className="top-fees">
            <div className="fee-label">
              <div className="each-fee">{`${room?.price} x ${numDays} nights`}</div>
              <div className="each-fee">Cleaning Fee</div>
              <div className="each-fee">Service Fee</div>
            </div>
            <div className="fee-price">
              <div className="fee-number">{`$${(numDays * room?.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div>
              <div className="fee-number">{`$${cleaningFee}`}</div>
              <div className="fee-number">{`$${serviceFee}`}</div>
            </div>
          </div>
          <div className="total-fees-bottom">
            <div className="total-each-fee">Total before taxes</div>
            <div className="total-fee-number">{`$${((numDays * room?.price) + cleaningFee + serviceFee).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div>
          </div>
        </div>
      </div>
    </form >
  )
}

export default ReserveRoom
