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

  // id each edit button,-1 to close

  const reservationsPerRoom = allReservations.filter(reservation => reservation.roomId === roomId)
  const trips = allReservations.filter(reservation => sessionUser.id === reservation.userId)
  // console.log(trips)

  console.log(reservationsPerRoom)

  useEffect(() => {
    dispatch(listAllReservations())
  }, [])

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
                            <button type="button" onClick={() => { setRoomId(reservation?.roomId); setCheckIn(reservation?.startDate); setCheckOut(reservation?.endDate); setReservationId(reservation?.id); setEditReservation(reservation?.roomId); setShowEdit(!showEdit) }} className="res-button">Edit</button>
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
                  showEdit ? editReservation === reservation.roomId ?
                    <>
                      <div className="update-res-header">Update reservation:</div>
                      <div className="middle-change-res">
                        <div className="reservation-dates-res">
                          <div className="check-res">
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
                            <button type="button" onClick={handleDelete(reservation.id)} className="res-button">Cancel Reservation</button>
                            <button type="submit" className="res-button">Change Reservation</button>
                          </div>
                        </div>
                      </div>
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
