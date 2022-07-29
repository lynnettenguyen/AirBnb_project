import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listAllReservations, getAllReservations, removeReservation, updateReservation } from "../../store/reservations";
import "./UserReservations.css"

const UserReservations = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const history = useHistory()

  const allReservations = useSelector(getAllReservations)
  const [reservationId, setReservationId] = useState()
  const [roomId, setRoomId] = useState()
  const [checkIn, setCheckIn] = useState(new Date().toISOString().slice(0, 10))
  const [checkOut, setCheckOut] = useState(new Date().toISOString().slice(0, 10))
  const [editReservation, setEditReservation] = useState(0)
  const [showEdit, setShowEdit] = useState(false)
  const [reservationErrors, setReservationErrors] = useState([])
  const [checkDates, setCheckDates] = useState(true)
  const [cancel, setCancel] = useState(true)

  const reservationsPerRoom = allReservations.filter(reservation => reservation.roomId === roomId && sessionUser.id !== reservation.userId)
  const trips = allReservations.filter(reservation => sessionUser.id === reservation.userId)

  const allStartDates = reservationsPerRoom.map(reservation => reservation.startDate)
  const allEndDates = reservationsPerRoom.map(reservation => reservation.endDate)

  console.log(cancel)

  useEffect(() => {
    dispatch(listAllReservations())

    const errors = []

    if (new Date() > new Date(checkIn)) {
      errors.push("Cannot modify previous reservations")
      setCancel(false)
    }

    if (checkIn === checkOut)
      errors.push("Reservations must be a minimum of 1 day")
    else if (new Date(checkIn) > new Date(checkOut))
      errors.push("Check-in date must be prior to check-out date")

    for (let i = 0; i < allStartDates.length; i++) {
      let startReq = new Date(checkIn);
      let endReq = new Date(checkOut);
      let startRes = new Date(allStartDates[i]);
      let endRes = new Date(allEndDates[i]);

      if ((startReq >= startRes && startReq < endRes) ||
        (endReq > startRes && endReq <= endRes) ||
        startRes >= startReq && startRes < endReq ||
        endRes > startReq && endRes <= endReq)
        errors.push("Selected dates conflict with an existing booking")
      else if (startRes === startReq)
        errors.push("Check-in date conflicts with an existing booking")
      else if (endRes === endReq)
        errors.push("Check-out date conflicts with an existing booking")
    }

    if (errors.length > 0) {
      setReservationErrors(errors)
      setCheckDates(true)
    } else {
      setReservationErrors([])
      setCheckDates(false)
    }

  }, [dispatch, checkIn, checkOut])

  const handleDelete = (reservationId) => async (e) => {
    e.preventDefault()
    const response = await dispatch(removeReservation(reservationId))

    if (response) {
      dispatch(listAllReservations())
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const reservationData = {
      reservationId,
      userId: sessionUser.id,
      roomId,
      startDate: checkIn,
      endDate: checkOut
    }

    const updatedReservation = await dispatch(updateReservation(reservationData))

    if (updateReservation) {
      setShowEdit(false)
      dispatch(listAllReservations())
    }
  }

  return (
    <div className="trips-page">
      <div className="trips-left-div"></div>
      <div className="trips-main-div">
        <div className="trips-header">Trips</div>
        <div className="reservation-header">Upcoming Reservations</div>
        <form onSubmit={handleSubmit}>
          {trips?.map((reservation, i) => {
            let startDate = new Date(reservation?.startDate)
            startDate = new Date(startDate.getTime() + startDate.getTimezoneOffset() * 60000)
            const startMonth = startDate.toLocaleString('default', { month: 'short' })
            const startDay = startDate.getDate()

            let endDate = new Date(reservation?.endDate)
            endDate = new Date(endDate.getTime() + endDate.getTimezoneOffset() * 60000)
            const endMonth = endDate.toLocaleString('default', { month: 'short' })
            const endDay = endDate.getDate()
            const endYear = endDate.getFullYear()

            return (
              <div className="outer-main">
                <div key={reservation.id} className="main-reservation-content">
                  <div className="left-res-content">
                    <div className="left-res-inner">
                      <div className="top-left-res-content">
                        <div className="top-left-name">
                          <div>{reservation?.Room?.name}</div>
                        </div>
                      </div>
                      <div className="bottom-left-res-content">
                        <div className="bottom-change-res">
                          <div className="bottom-dates">
                            {startMonth === endMonth ? <div className="res-month-day">
                              <span className="month-res">{startMonth}</span>
                              <div className="day-res">{' '}{startDay} - {endDay} </div>
                            </div> :
                              <div className="res-month-day">
                                <span className="date-res-other">{startMonth} {startDay} - </span>
                                <div className="date-res-other">{endMonth} {endDay}</div>
                              </div>
                            }
                            <div className="res-year">{endYear}</div>
                          </div>
                          <div className="bottom-edit-res">
                            <button type="button" onClick={() => { setReservationId(reservation?.id); setRoomId(reservation?.roomId); setCheckIn(reservation?.startDate); setCheckOut(reservation?.endDate); setEditReservation(reservation?.id); setShowEdit(!showEdit); setCancel(false) }} className="res-button">{showEdit ? editReservation === reservation.id ? "X" : "Edit" : "Edit"}</button>
                          </div>
                        </div>
                        <div className="bottom-location">
                          <div className="res-address">{reservation?.Room?.address}</div>
                          <div className="res-city-state">{`${reservation?.Room?.city}, ${reservation?.Room?.state}`}</div>
                          <div className="res-country">{reservation?.Room?.country}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-res-content">
                    <div className="right-image-res">
                      <img className="res-img" src={`${reservation?.Room?.images[0]?.url}`}></img>
                    </div>
                  </div>
                </div>
                {
                  showEdit ? editReservation === reservation.id ?
                    <>
                      <div className={new Date() > new Date(checkIn) ? "hidden" : "update-res-header"}>Update reservation:</div>
                      <div className={new Date() > new Date(checkIn) ? "hidden" : "middle-change-res"}>
                        <div className={new Date() > new Date(checkIn) ? "hidden" : "reservation-dates-res"}>
                        <div className="check-res" disabled>
                          <label className="check-label">CHECK-IN</label>
                          <input
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            className="select-date-res"
                            value={new Date(checkIn).toISOString().slice(0, 10)}
                            onChange={(e) => setCheckIn(new Date(e.target.value).toISOString().slice(0, 10))}
                          />
                        </div>
                        <div className="check-res">
                          <label className="check-label">CHECKOUT</label>
                          <input
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            className="select-date-res"
                            value={new Date(checkOut).toISOString().slice(0, 10)}
                            onChange={(e) => setCheckOut(new Date(e.target.value).toISOString().slice(0, 10))}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="edit-delete-buttons">
                          <button type="submit" className="res-button update-button" disabled={checkDates}>Update Reservation</button>
                          <button type="button" onClick={handleDelete(reservation.id)} className="res-button cancel-button" disabled={new Date() > new Date(checkIn)}>Cancel Reservation</button>
                        </div>
                      </div>
                    </div>
                      {reservationErrors.length > 0 && (
                  <>
                    <ul>
                      {reservationErrors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                  </>
                )}
              </> : <></> : <></>
                }
      </div>
      )
          })}
    </form>

      </div >
  <div className="trips-right-div"></div>
    </div >
  )
}

export default UserReservations;
