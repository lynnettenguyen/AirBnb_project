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
  console.log("room", room)

  useEffect(() => {
    // dispatch(listAllRooms())
    // navigating back to homepage works but room query does not have all the room details
    dispatch(findRoomById(roomId))
    // navigating back to homepage require a refresh
  }, [dispatch])

  return (
    <>
      <div className="entire-room-page">
        <h1>{room?.name}</h1>
        <div>
          <span>{room?.avgStarRating}</span>
          <span>{` · ${room?.numReviews} reviews`}</span>
          <span>{` · ${room?.city}, ${room?.state}, ${room?.country}`}</span>
        </div>
        <div>
          {room?.images &&
            <img src={room?.images[0]?.url} alt="exterior"></img>}
        </div>
        <div>
          {room?.images?.map((image, i) => {
            if (i > 0)
              return (
                <div key={image.url}>
                  <img src={`${image?.url}`} alt="interior"></img>
                </div>
              )
          })}
        </div>
        <div>{room?.description}</div>
      </div>
    </>
  )
}

export default RoomDetails;
