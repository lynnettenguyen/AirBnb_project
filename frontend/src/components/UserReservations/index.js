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
    // .filter(reservation => reservation.userId === sessionUser.id)
  // console.log("........", trips)

  useEffect(() => {
    dispatch(findUserReservation())
  }, [])

  const handleDelete = async (e) => {
    e.preventDefault()
    const deleteResponse = await dispatch(removeReservation())

    // if (deleteResponse) {
    //   history.push('/')
    // }
  }

  return (
    <>
      <h1>Trips</h1>
      <div className="trips-left-div"></div>
      <div className="trips-main-div">
        {trips?.map((reservation, i) => {
          return (
            <>
              <div>room: {reservation?.roomId}</div>
              <div>reservation: {reservation.id}</div>
              <div>{reservation?.Room?.name}</div>
              <div>start: {reservation?.startDate}</div>
              <div>end: {reservation?.endDate}</div>
              <div>
                <button>Edit</button>
                <button onClick={handleDelete}>Delete</button>
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
