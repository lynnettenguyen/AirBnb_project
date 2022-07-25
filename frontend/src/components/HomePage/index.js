import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import "./HomePage.css"
import { getAllRooms, listAllRooms } from "../../store/rooms";

const HomePage = () => {
  const dispatch = useDispatch()

  const allRooms = useSelector(getAllRooms)

  // for (let room of allRooms) console.log(room.previewImage[0].url)
  // console.log(allRooms[0].previewImage[0])

  console.log(allRooms)

  useEffect(() => {
    dispatch(listAllRooms())
  }, [dispatch])

  return (
    <>
      <div className="all-rooms-div">
      {allRooms?.map((room, i) => {
        return (
          <div className={`room-div${i}`}>
            <span>
              <img className="room-img" src={`${room.previewImage[0]?.url}`}></img>
            </span>
            <h4>{`${room.city}, ${room.state}`}</h4>
            <p>{`$${room.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} night`}</p>
          </div>
        )
      })
      }
    </div>
    </>
  )
}
export default HomePage
