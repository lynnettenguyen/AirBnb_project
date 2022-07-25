import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllRooms, findRoomById } from "../../store/rooms";
import "./RoomDetails.css"

const RoomDetails = () => {
  let { roomId } = useParams()
  roomId = Number(roomId)

  const dispatch = useDispatch()

  const room = useSelector((state) => state.rooms[roomId])
  console.log(room.numReviews)

  useEffect(() => {
    dispatch(findRoomById(roomId))
  }, [dispatch, roomId])

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
            <div>
              <img src={`${image?.url}`}></img>
            </div>
          )
        })}
      </div>
      <div>{room?.description}</div>
    </>
  )
}

export default RoomDetails;
