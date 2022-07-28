import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { findRoomById, removeRoom } from "../../store/rooms";
import "./ReserveRoom.css"
import { getAllReservations, listAllReservations } from "../../store/reservations";

const ReserveRoom = ({ roomId, avgStarRating }) => {
  const room = useSelector((state) => state.rooms[roomId])
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()

  const allReservations = useSelector(getAllReservations)
  console.log(allReservations)

  const [checkIn, setCheckIn] = useState(new Date().toISOString().slice(0, 10))
  const [checkOut, setCheckOut] = useState(new Date().toISOString().slice(0, 10))

  useEffect(() => {
    dispatch(listAllReservations(roomId))
  }, [])

  return (
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
        <form>
          <div className="reservation-dates">
            <div className="check-in">
              <label>CHECK-IN</label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                className="select-date"
                value={new Date(checkIn).toISOString().slice(0, 10)}
                onChange={(e) => setCheckIn(new Date(e.target.value).toISOString().slice(0, 10))}
                />
            </div>
            <div className="check-out">
              <label>CHECKOUT</label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                className="select-date"
                value={new Date(checkOut).toISOString().slice(0, 10)}
                onChange={(e) => setCheckOut(new Date(e.target.value).toISOString().slice(0, 10))}
              />
            </div>
          </div>
          {/* <div className="guests">
            <label>Guests</label>
            <input
              type="number"
              className="select-guests"
              min="1" />
          </div> */}
          <button className="reserve-button">Reserve</button>
        </form>
      </div>
      <div className="total-fees">
        <div>{room?.price} x # nights</div>
        <div className="price">$$$$</div>
        <div>Cleaning Fee</div>
        <div className="price">$$$$</div>
        <div>Service Fee</div>
        <div className="price">$$$$</div>
        <div>Total before Taxes</div>
        <div className="price">$$$$</div>
      </div>
    </div>
  )
}

export default ReserveRoom
