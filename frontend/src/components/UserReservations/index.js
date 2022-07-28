import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { findUserReservation, getAllReservations, listAllReservations } from "../../store/reservations";
import "./UserReservations.css"

const UserReservations = () => {

  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const history = useHistory()

  const allReservations = useSelector(getAllReservations)
  console.log("........", allReservations)

  useEffect(() => {
    dispatch(findUserReservation())
  }, [])

  return (
    <>
      <h1>Trips</h1>
      <div className="trips-left-div"></div>
      <div className="trips-main-div">
        {allReservations?.map((reservation, i) => {
          return (
            <>
              <div>room: {reservation?.roomId}</div>
              <div>{reservation?.Room?.name}</div>
              <div>start: {reservation?.startDate}</div>
              <div>end: {reservation?.endDate}</div>
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
