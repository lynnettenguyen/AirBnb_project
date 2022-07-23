import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import "./HomePage.css"
import { getAllRooms, listAllRooms } from "../../store/rooms";

const HomePage = () => {
  const dispatch = useDispatch()

  const allRooms = useSelector(getAllRooms)
  
  useEffect(() => {
    dispatch(listAllRooms())
  }, [dispatch])

  return (
    <div>
      <h1>HomePage</h1>
      <div>
      </div>
    </div>
  )
}

export default HomePage
