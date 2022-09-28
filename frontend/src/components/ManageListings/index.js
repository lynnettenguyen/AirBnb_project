import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllRooms, listAllRooms } from "../../store/rooms";
import "./ManageListings.css"
import Navigation from "../Navigation";
import greenIcon from './green-listed.svg'
import greenCheck from './green-check.svg'

const ManageListings = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const allRooms = useSelector(getAllRooms)
  const userRooms = allRooms.filter(room => room.ownerId === sessionUser.id)

  useEffect(() => {
    dispatch(listAllRooms())
  }, [])

  const formatDate = (date) => {
    let dateParts = date.slice(0,10).split("-");
    let jsDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0, 2));
    return jsDate.toLocaleString('default', { month: 'short' }) + " " +  jsDate.getDate() + ", " + jsDate.getFullYear()
  }

  return (
    <div className="manage-listing-outer">
      <div className="manage-nav-main">
        <Navigation isLoaded={isLoaded} />
      </div>
      <div className="navigation-border"></div>
      {sessionUser ?
        <div className="manage-listing-page">
          <div className="manage-listings-header">{userRooms?.length} listings</div>
          <table className="manage-table-main">
            <tr>
              <th>LISTING</th>
              <th>STATUS</th>
              <th>PRICE</th>
              <th>INSTANT BOOK</th>
              <th>BEDROOMS</th>
              <th>BEDS</th>
              <th>BATHS</th>
              <th>LOCATION</th>
              <th>LAST MODIFIED</th>
            </tr>
            {userRooms?.map((room, i) => {
              return (
                <tr>
                  <td className="listing-column">
                    <Link to={`/rooms/${room?.id}`} className="room-link" key={room?.id}>
                      <img className="listing-img" src={`${room?.images[0]?.url}`} alt="preview of room"></img>
                      <span className="listing-name">{room?.name}</span>
                    </Link>
                  </td>
                  <td><img src={greenIcon} alt='listed' className="green-icon"></img>Listed</td>
                  <td className="listing-price">{`$${room?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/night`}</td>
                  <td><div className="listing-instant-book"><img src={greenCheck} alt='booking' className="green-checked"></img><span>On</span></div></td>
                  <td>{room?.bedrooms}</td>
                  <td>{room?.beds}</td>
                  <td>{room?.baths}</td>
                  <td className="listing-city-state">{`${room?.city}, ${room?.state}`}</td>
                  <td>{formatDate(room?.updatedAt)}</td>
                </tr>
              )
            })
            }
          </table>
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
