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

  // console.log(myRooms)
  // console.log(userRooms)
  // const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(listAllRooms())
  }, [])

  return (
    <>
      <div className="all-rooms-div">
        {userRooms?.map((room, i) => {
          return (
            <Link to={`/rooms/${room?.id}`} className="room-link" key={room?.id}>
              <div className={`room-div room-div${i}`}>
                <div className="img-div">
                  <img className="room-img" src={`${room?.images[0]?.url}`} alt="preview of room"></img>
                </div>
                <div className="room-info">
                  <p>{room.name}</p>
                  <p className="room-city-state">{`${room?.city}, ${room?.state}`}</p>
                  <p className="room-price">{`$${room?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} night`}</p>
                </div>
              </div>
            </Link>
          )
        })
        }
      </div>
    </>
  )
}

export default ManageListings
