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
console.log(room)

  useEffect(() => {
    dispatch(listAllRooms())
    // dispatch(findRoomById(roomId))
    // using a dispatch for the specific room will change the state of the store so trying to navigate back to the room page will force a refresh

  }, [dispatch])

  return (
    <>
      <h1>{room?.name}</h1>
      <div>
        <span>{room?.avgStarRating}</span>
        <span>{` · ${room?.numReviews} reviews`}</span>
        <span>{` · ${room?.city}, ${room?.state}, ${room?.country}`}</span>
      </div>
      <div>
        {room?.images?.map(image => {
          return (
            <div key={image.url}>
              <img src={`${image?.url}`} alt="room"></img>
            </div>
          )
        })}
      </div>
      <div>{room?.description}</div>
    </>
  )
}

export default RoomDetails;
