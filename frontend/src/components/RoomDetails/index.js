import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllRooms, findRoomById, listAllRooms } from "../../store/rooms";
import "./RoomDetails.css"

const RoomDetails = () => {
  let { roomId } = useParams()
  roomId = Number(roomId)

  const dispatch = useDispatch()

  const room = useSelector((state) => state.rooms[roomId])
  const [setCheckIn, checkIn] = useState()
  const [setCheckOut, checkOut] = useState()


  useEffect(() => {
    dispatch(findRoomById(roomId))
  }, [dispatch])

  return (
    <>
      <div className="entire-room-page">
        <div className="room-name">{room?.name}</div>
        <div className="room-information-top">
          <span><i class="fa-solid fa-star"></i>{room?.avgStarRating?.toFixed(2)}</span>
          <span className="span-separator">·</span>
          <span>{`${room?.numReviews} reviews`}</span>
          <span className="span-separator">·</span>
          <span>{`${room?.city}, ${room?.state}, ${room?.country}`}</span>
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
            <div>{room?.price}</div><span>night</span>
            <div>{room?.avgStarRating}</div>
            <div>{room?.numReviews}</div>
            <div>
              <form>
                <div className="reservation-dates">
                <div className="check-in">
                <label>CHECK-IN</label>
                    <input
                      type="date"
                      className="select-date"
                      value={checkIn}
                      onChange={(e)=>setCheckIn(e.target.value)}
                    />
                </div>
                <div className="check-out">
                <label>CHECK-OUT</label>
                    <input
                      type="date"
                      className="select-date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                </div>
                </div>
                <button>Reserve</button>
              </form>
            </div>
            <div>
              <div>{room?.price} x # nights</div>
              <div>Cleaning Fee</div>
              <div>Service Fee</div>
              <div>Total before taxes</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RoomDetails;
