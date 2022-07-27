import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { findRoomById, removeRoom } from "../../store/rooms";
import "./RoomDetails.css"
import EditListingForm from "../EditListingForm";

const RoomDetails = () => {
  let { roomId } = useParams()
  roomId = Number(roomId)

  const dispatch = useDispatch()
  const history = useHistory()
  const room = useSelector((state) => state.rooms[roomId])
  const sessionUser = useSelector(state => state.session.user);

  const [page, setPage] = useState(1)
  const [checkIn, setCheckIn] = useState(new Date().toISOString().slice(0, 10))
  const [checkOut, setCheckOut] = useState(new Date().toISOString().slice(0, 10))

  let avgStarRating = room?.avgStarRating;
  avgStarRating = Math.round(avgStarRating * 100) / 100

  const wholeNumbers = [1, 2, 3, 4, 5]
  if (wholeNumbers.includes(avgStarRating)) avgStarRating = avgStarRating.toString() + ".0"

  const returnToListing = () => {
    setPage(1)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    setPage(2)
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    const deleteResponse = await dispatch(removeRoom(roomId))

    if (deleteResponse) {
      history.push('/')
    }
  }

  useEffect(() => {
    dispatch(findRoomById(roomId))
  }, [dispatch])

  return (
    <>
      {page === 1 && <div className="whole-page">
        <div className="left-space"></div>
        <div className="room-content">
          <div className="room-top-content">
            <div className="room-header">
              <div className="room-name">{room?.name}</div>
              <div className="room-information-top">
                <span><i className="fa-solid fa-star"></i>{avgStarRating}</span>
                <span className="span-separator">·</span>
                <span>{`${room?.numReviews} reviews`}</span>
                <span className="span-separator">·</span>
                <span>{`${room?.city}, ${room?.state}, ${room?.country}`}</span>
              </div>
            </div>
            <div className="session-user-buttons">
              {sessionUser ?
                <>
                  {sessionUser?.id === room?.ownerId &&
                    <div>
                      <button onClick={handleEdit} className="edit-listing-button">Edit</button>
                      <button onClick={handleDelete} className="delete-listing-button">Delete</button>
                    </div>}
                </> : <></>}
            </div>
          </div>
          <div className="room-images">
            <div className="left-image-div">
              {room?.images &&
                <img src={room?.images[0]?.url} alt="exterior" className="main-image"></img>}
            </div>
            <div className="right-image-div">
              {room?.images?.map((image, i) => {
                if (i > 0)
                  return (
                    <div className="side-image-div" key={image.url}>
                      <img src={`${image?.url}`} alt="interior" className={`side-images side-images${i}`}></img>
                    </div>
                  )
              })}
            </div>
          </div>
          <div className="room-information-bottom">
            <div className="room-description">{room?.description}</div>
            <div className="reservation-div">
              <div className="reserve-details">
                <div className="reserve-price">{`$${room?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div>
                <span>night</span>
                <span className="reserve-rating">
                  <i className="fa-solid fa-star smaller"></i>
                  {avgStarRating}</span>
                <span className="span-separator-smaller">·</span>
                <span className="reserve-review">{`${room?.numReviews} reviews`}</span>
              </div>
              <div>
                <form>
                  <div className="reservation-dates">
                    <div className="check-in">
                      <label>CHECK-IN</label>
                      <input
                        type="date"
                        className="select-date"
                        value={new Date(checkIn).toISOString().slice(0, 10)}
                        onChange={(e) => setCheckIn(new Date(e.target.value).toISOString().slice(0, 10))}
                      />
                    </div>
                    <div className="check-out">
                      <label>CHECKOUT</label>
                      <input
                        type="date"
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
          </div>
        </div>
        <div className="right-space"></div>
      </div>
      }
      {page === 2 && <EditListingForm listingId={roomId} returnToListing={returnToListing} />}
    </>
  )
}

export default RoomDetails;
