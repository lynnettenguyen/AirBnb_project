import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllRooms, listAllRooms } from "../../store/rooms";
import "./ManageListings.css"
import Navigation from "../Navigation";

const ManageListings = ({isLoaded}) => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const allRooms = useSelector(getAllRooms)
  const userRooms = allRooms.filter(room => room.ownerId === sessionUser.id)

  useEffect(() => {
    dispatch(listAllRooms())
  }, [])

  const manageReservations = () => { }

  return (
    <div className="manage-listing-outer">
      <div className="manage-nav-main">
        <Navigation isLoaded={isLoaded}/>
      </div>
      <div className="navigation-border"></div>
      {sessionUser ?
        <div className="manage-listing-page">
          <div className="all-listings-div">
            <div className="manage-listings-header">Manage your Listings</div>
            {userRooms?.map((room, i) => {
              return (
                <>
                  <div className={`listing-div listing-div${i}`}>
                    <Link to={`/rooms/${room?.id}`} className="room-link" key={room?.id}>
                      <div className="user-img-div">
                        <img className="listing-img" src={`${room?.images[0]?.url}`} alt="preview of room"></img>
                      </div>
                    </Link>
                    <div className="listing-info">
                      <div>
                        <div className="listing-name">{room?.name}</div>
                        <div className="listing-city-state">{`${room?.city}, ${room?.state}`}</div>
                        <div className="listing-price">{`$${room?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} night`}</div>
                      </div>
                      <div>
                        <button onClick={manageReservations} className="listings-reservation-button">View Reservations</button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
            }
          </div>
        </div> : <>
          <div className="no-session-user">
            Error 401 - Unauthorized
            <div className="no-session-inner">
              Please login to continue
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default ManageListings
