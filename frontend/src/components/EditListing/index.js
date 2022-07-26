import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllRooms, listAllRooms, findRoomsOwned } from "../../store/rooms";
import "./EditListing.css"

const EditListing = ({listingId, returnToListing}) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const room = useSelector((state) => state.rooms[listingId])

  const [roomId, setRoomId] = useState()
  const [ownerId, setOwnerId] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [country, setCountry] = useState()
  const [lat, setLat] = useState()
  const [lng, setLng] = useState()
  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()


  const handleSubmit = (e) => {
    e.preventDefault()

    const roomData = {
      roomId,
      ownerId,
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price
    }

    // const response = await dispatch(updateRoom(roomData))
  }

  return (
    <>
      <h1>Edit your Listing</h1>
      <form>
        <div>
          <label>Title</label>
          <input
            type="text"
          ></input>
        </div>
        <div>
          <label>address</label>
          <input
            type="text"
          ></input>
          <label>city</label>
          <input
            type="text"
          ></input>
          <label>state</label>
          <input
            type="text"
          ></input>
          <label>country</label>
          <input
            type="text"
          ></input>
          <label>latitude</label>
          <input
            type="text"
          ></input>
          <label>longitude</label>
          <input
            type="text"
          ></input>
        </div>
        <div>
          <label>Description</label>
          <textarea></textarea>
        </div>
        <div>
          <label>Price</label>
        </div>
      </form>
    </>
  )
}

export default EditListing
