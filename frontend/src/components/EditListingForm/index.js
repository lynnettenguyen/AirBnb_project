import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateRoom, findRoomById } from "../../store/rooms";
import "./EditListingForm.css"

const EditListingForm = ({ listingId, returnToListing }) => {
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
      <div className="edit-listing-page">
        <div className="edit-listing-left"></div>
        <div className="edit-listing-content">
          <div className="return-div">
            <button onClick={returnToListing} className="return-to-listing-button">Return to Listing</button>
          </div>
          <div className="edit-listing-header">Edit your Listing</div>
          <form onSubmit={handleSubmit} className="edit-listing-form">
            <div className="edit-listing-label">
              <label>Edit your Title</label>
              <input
                type="text"
                className="edit-listing-input title-input"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div className="edit-listing-label">
              <label>Update your Location</label>
            </div>
            <div className="edit-listing-address">
              <input
                type="text"
                className="edit-listing-input address-input"
                value={address}
                onChange={e => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="edit-listing-location">
              <div>
                <input
                  type="text"
                  className="edit-listing-input city-state-country"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  className="edit-listing-input city-state-country"
                  value={state}
                  onChange={e => setState(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  className="edit-listing-input city-state-country"
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <div className="edit-listing-coordinates">
                <div>
                  <div className="edit-listing-lat">
                    <label>Latitude</label>
                  </div>
                  <input
                    type="text"
                    className="edit-listing-input lat"
                    value={lat}
                    onChange={e => setLat(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="edit-listing-lng">
                    <label>Longitude</label>
                  </div>
                  <input
                    type="text"
                    className="edit-listing-input lng"
                    value={lng}
                    onChange={e => setLng(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="edit-listing-label">
              <label>Update your Description</label>
              </div>
              <textarea
                value={description}
                className="edit-listing-input description"
                onChange={e => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div>
              <div className="edit-listing-label">
              <label>Price per Night</label>
              </div>
              <input
                type="number"
                value={price}
                className="edit-listing-input price-input"
                onChange={e => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="update-button">
            <button type="submit" className="update-listing-button">Confirm</button>
            </div>
          </form>
        </div>
        <div className="edit-listing-right"></div>
      </div >
    </>
  )
}

export default EditListingForm
