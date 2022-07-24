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
      {allRooms?.map((room) => {
        return (
          <div>
            <div>{`${room.city}, ${room.state}`}</div>
            <div>{`$${room.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} night`}</div>
            <img src={`${room.previewImage[0]?.url}`}></img>
          </div>
        )
      })
      }
    </>
  )
}
export default HomePage
