import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateRoom, findRoomById } from "../../store/rooms";
import "./EditListing.css"

const EditListing = ({ listingId, returnToListing }) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const room = useSelector((state) => state.rooms[listingId])

  const [roomId, setRoomId] = useState(listingId)
  const [ownerId, setOwnerId] = useState(room.ownerId)
  const [address, setAddress] = useState(room.address)
  const [city, setCity] = useState(room.city)
  const [state, setState] = useState(room.state)
  const [country, setCountry] = useState(room.country)
  const [lat, setLat] = useState(room.lat)
  const [lng, setLng] = useState(room.lng)
  const [name, setName] = useState(room.name)
  const [description, setDescription] = useState(room.description)
  const [price, setPrice] = useState(room.price)

  const handleSubmit = async (e) => {
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
      price,
    }

    const response = await dispatch(updateRoom(roomData))

    if (response) {
      dispatch(findRoomById(listingId))
      return returnToListing()
    }
  }

  return (
    <>
      <button onClick={returnToListing}>Return to Listing</button>
      <h1>Edit your Listing</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label>address</label>
          <input
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <label>city</label>
          <input
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <label>state</label>
          <input
            type="text"
            value={state}
            onChange={e => setState(e.target.value)}
          />
          <label>country</label>
          <input
            type="text"
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
          <label>latitude</label>
          <input
            type="text"
            value={lat}
            onChange={e => setLat(e.target.value)}
          />
          <label>longitude</label>
          <input
            type="text"
            value={lng}
            onChange={e => setLng(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <button type="submit">Update Listing</button>
      </form>
    </>
  )
}

export default EditListing
