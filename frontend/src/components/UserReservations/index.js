import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { findUserReservation, getAllReservations, removeReservation, updateReservation } from "../../store/reservations";
import "./UserReservations.css"

const UserReservations = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const history = useHistory()

  const trips = useSelector(getAllReservations)

  const [reservationId, setReservationId] = useState()
  const [roomId, setRoomId] = useState()
  const [checkIn, setCheckIn] = useState(new Date().toISOString().slice(0, 10))
  const [checkOut, setCheckOut] = useState(new Date().toISOString().slice(0, 10))
  const [editReservation, setEditReservation] = useState(false)

  useEffect(() => {
    dispatch(findUserReservation())
  }, [])

  const handleDelete = (reservationId) => async (e) => {
    e.preventDefault()
    const response = await dispatch(removeReservation(reservationId))

    if (response) {
      dispatch(findUserReservation())
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
      dispatch(findUserReservation())
    }
  }

  return (
    <>
      <h1>Trips</h1>
      <div className="trips-left-div"></div>
      <div className="trips-main-div">
        {trips?.map((reservation, i) => {
          return (
            <>
              <div key={reservation.id}>
                <div>room: {reservation?.roomId}</div>
                <div>reservation: {reservation.id}</div>
                <div>{reservation?.Room?.name}</div>
                <div>start: {reservation?.startDate}</div>
                <div>end: {reservation?.endDate}</div>
                <div>
                  {editReservation ? <form onSubmit={handleSubmit}>
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
                      <div>
                        <button type="submit">Change Reservation</button>
                      </div>
                    </div>
                  </form> : <></>}
                  <button type="button" onClick={() => { setRoomId(reservation?.roomId); setCheckIn(reservation?.startDate); setCheckOut(reservation?.endDate); setReservationId(reservation?.id); setEditReservation(!editReservation) }}>Edit</button>
                  <button onClick={handleDelete(reservation.id)}>Delete</button>
                </div>
              </div>
              <br></br>
            </>
          )
        })}
      </div>
      <div className="trips-right-div"></div>
    </>
  )
}

export default UserReservations;
