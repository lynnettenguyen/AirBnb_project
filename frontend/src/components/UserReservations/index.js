import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { findUserReservation, getAllReservations, removeReservation } from "../../store/reservations";
import "./UserReservations.css"

const UserReservations = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const history = useHistory()

  const trips = useSelector(getAllReservations)

  // const [reservationId, setReservationId] = useState()

  // console.log(reservationId)

  useEffect(() => {
    dispatch(findUserReservation())
  }, [])

  const handleDelete = (reservationId) => async (e) => {
    e.preventDefault()
    console.log("RESERVATION", reservationId)
    console.log(typeof reservationId)
    const response = await dispatch(removeReservation(reservationId))

    if (response) {
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
                  <button>Edit</button>
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
