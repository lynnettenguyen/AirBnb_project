import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { findUserReservation, getAllReservations, removeReservation, updateReservation } from "../../store/reservations";
import "./UserReservations.css"
import ReserveRoom from "../ReserveRoom";

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
      <h2>Trips</h2>
      <h3>Upcoming Reservations</h3>
      <div className="trips-left-div"></div>
      <div className="trips-main-div">
        {trips?.map((reservation, i) => {
          return (
            <div key={reservation.id} className="main-reservation div">
              <div className="left-res-content">
                <div className="top-left-res-content">
                  <div className="top-left-name">
                    <div>{reservation?.Room?.name}</div>
                  </div>
                  <div className="top-left-delete">
                    <button onClick={handleDelete(reservation.id)} className="res-delete">Delete</button>
                  </div>
                </div>
                <div className="bottom-left-res-content">
                  <div className="bottom-location">
                    <div>{reservation?.Room?.address}</div>
                    <div>{`${reservation?.Room?.city}, ${reservation?.Room?.state}`}</div>
                    <div>{reservation?.Room?.country}</div>
                  </div>
                  <div className="bottom-change-res">
                    <div className="bottom-edit-res">
                      <button type="button" onClick={() => { setRoomId(reservation?.roomId); setCheckIn(reservation?.startDate); setCheckOut(reservation?.endDate); setReservationId(reservation?.id); setEditReservation(!editReservation) }}>Edit</button>
                    </div>
                    <div className="bottom-dates">
                      <div>start: {reservation?.startDate}</div>
                      <div>end: {reservation?.endDate}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="middle-change-res">
                <section>
                  {editReservation ? <form onSubmit={handleSubmit}>
                    <div className="reservation-dates">
                      <div className="res-check-in">
                        <label className="res-check-label">CHECK-IN</label>
                        <input
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          className="res-select-date"
                          value={new Date(checkIn).toISOString().slice(0, 10)}
                          onChange={(e) => setCheckIn(new Date(e.target.value).toISOString().slice(0, 10))}
                        />
                      </div>
                      <div className="res-check-out">
                        <label className="res-check-label">CHECKOUT</label>
                        <input
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          className="res-select-date"
                          value={new Date(checkOut).toISOString().slice(0, 10)}
                          onChange={(e) => setCheckOut(new Date(e.target.value).toISOString().slice(0, 10))}
                        />
                      </div>
                      <div>
                        <button type="submit">Change Reservation</button>
                      </div>
                    </div>
                  </form> : <></>}
                </section>
              </div>
              <div className="right-res-content">
                <div className="right-image-res">
                  <img className="res-img" src={`${reservation?.Room?.images[0]?.url}`}></img>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="trips-right-div"></div>
    </>
  )
}

export default UserReservations;
