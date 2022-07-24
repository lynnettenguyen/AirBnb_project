import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import "./HomePage.css"
import { getAllRooms, listAllRooms } from "../../store/rooms";

const HomePage = () => {
  const dispatch = useDispatch()

  const allRooms = useSelector(getAllRooms)

  // for (let room of allRooms) console.log(room.previewImage[0].url)
  // console.log(allRooms[0].previewImage[0])

  useEffect(() => {
    dispatch(listAllRooms())
  }, [dispatch])

  return (
    <>
      <h1>HomePage</h1>
      {allRooms?.map((rooms) => {
        return (
          <div>
            <div>{rooms.name}</div>
            <div>{rooms.price}</div>
            <img src={`${rooms.previewImage[0]?.url}`}></img>
          </div>
        )
      })
      }
    </>
  )
}
export default HomePage
