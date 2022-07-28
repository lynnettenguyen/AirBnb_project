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

  const numDays = Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 3600 * 24))
  const cleaningFee = Math.floor(room?.price / 5)
  const serviceFee = Math.floor(room?.price / 8)

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
          {/* <div className="guests">
            <label>Guests</label>
            <input
              type="number"
              className="select-guests"
              min="1" />
          </div> */}
          <div className="reserve-button-div">
            <button className="reserve-button">Reserve</button>
          </div>
        </form>
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
  )
}

export default ReserveRoom
