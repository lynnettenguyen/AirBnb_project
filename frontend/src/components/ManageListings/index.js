import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllRooms, listAllRooms, findRoomsOwned } from "../../store/rooms";
import "./ManageListings.css"

const ManageListings = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const allRooms = useSelector(getAllRooms)
  const userRooms = allRooms.filter(room => room.ownerId === sessionUser.id)

  useEffect(() => {
    dispatch(listAllRooms())
  }, [])

  const manageReservations = () => { }

  return (
    <div className="user-rooms-whole-page">
      <div className="user-rooms-left"></div>
      <div className="all-user-rooms-div">
        {userRooms?.map((room, i) => {
          return (
            <>
              <div className={`user-room-div user-room-div${i}`}>
                  <Link to={`/rooms/${room?.id}`} className="room-link" key={room?.id}>
                <div className="user-img-div">
                    <img className="user-room-img" src={`${room?.images[0]?.url}`} alt="preview of room"></img>
                </div>
                  </Link>
                <div className="user-room-info">
                  <div>{room.name}</div>
                  <div className="user-room-city-state">{`${room?.city}, ${room?.state}`}</div>
                  <div className="user-room-price">{`$${room?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} night`}</div>
                  <div>
                    <button onClick={manageReservations} className="user-reservation-button">Manage Reservations</button>
                  </div>
                </div>
              </div>
            </>
          )
        })
        }
      </div>
      <div className="user-rooms-right"></div>
    </div>
  )
}

export default ManageListings
