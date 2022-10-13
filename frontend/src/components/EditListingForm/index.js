import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateRoom, findRoomById } from "../../store/rooms";
import "./EditListingForm.css"

const EditListingForm = ({ listingId, returnToListing }) => {
  const dispatch = useDispatch()
  const room = useSelector((state) => state.rooms[listingId])

  const [roomId, setRoomId] = useState(listingId)
  const [ownerId, setOwnerId] = useState(room.ownerId)
  const [type, setType] = useState(room.type)
  const [category, setCategory] = useState(room.category)
  const [guests, setGuests] = useState(room.guests)
  const [bedrooms, setBedrooms] = useState(room.bedrooms)
  const [beds, setBeds] = useState(room.beds)
  const [baths, setBaths] = useState(room.baths)
  const [address, setAddress] = useState(room.address)
  const [city, setCity] = useState(room.city)
  const [state, setState] = useState(room.state)
  const [country, setCountry] = useState(room.country)
  const [lat, setLat] = useState(room.lat)
  const [lng, setLng] = useState(room.lng)
  const [name, setName] = useState(room.name)
  const [description, setDescription] = useState(room.description)
  const [price, setPrice] = useState(room.price)
  const [errors, setErrors] = useState([]);
  const [disableButton, setDisableButton] = useState(false)

  const categories = ['A-Frames', 'Amazing Pools', 'Beach', 'Cabins', 'Design', 'Domes', 'Luxe', 'Treehouses', 'Tiny Homes', 'Tropical']

  useEffect(() => {
    const errors = [];
    if (type === "") errors.push("Type of place required")
    if (name === "") errors.push("Title required")
    if (address === "") errors.push("Address required")
    if (city === "") errors.push("City required")
    if (state === "") errors.push("State required")
    if (country === "") errors.push("Country required")
    if (lat === "" || lat > 90 || lat < -90) errors.push("Latitude must be between - 90 to 90")
    if (lng === "" || lng > 180 || lng < -180) errors.push("Longitude must be between - 180 to 180")
    if (description === "") errors.push("Description required")
    if (price > 1000000 || price < 1) errors.push("Price must be between $1 and $1,000,000")

    if (errors.length > 0) {
      setErrors(errors)
      setDisableButton(true)
    } else {
      setErrors([])
      setDisableButton(false)
    }

  }, [type, name, address, city, state, country, lat, lng, description, price])


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
      type,
      category,
      guests,
      beds,
      bedrooms,
      baths
    }

    const response = await dispatch(updateRoom(roomData))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors)
          if (data) {
            const errors = Object.values(data.errors)
            setErrors(errors)
          }
      })

    if (response) {
      dispatch(findRoomById(listingId))
      return returnToListing()
    }
  }

  return (
    <div className="edit-listing-page">
      <div className="return-div">
        <button onClick={returnToListing} className="return-to-listing-button">Return to Listing</button>
      </div>
      <div className="edit-listing-header">Edit your Listing</div>
      <form onSubmit={handleSubmit} className="edit-listing-form">
        <div className='edit-listing-place'>
          <label className="edit-listing-label">Update your Place and Guests</label>
          <input
            type="text"
            className="edit-listing-input place-input"
            value={type}
            onChange={e => setType(e.target.value)}
            required
          />
          <span>
            <label className="edit-guests-label"> Guests: </label>
            <span className="edit-guests-buttons">
              <button type='button' onClick={() => { if (guests > 1) setGuests(guests - 1) }} disabled={guests === 1}>-</button>
              {guests}
              <button type='button' onClick={() => setGuests(guests + 1)} disabled={guests === 16}>+</button>
            </span>
            <label className="edit-guests-label"> Beds: </label>
            <span className="edit-guests-buttons">
              <button type='button' onClick={() => { if (beds > 1) setBeds(beds - 1) }} disabled={beds === 1}>-</button>
              {beds}
              <button type='button' onClick={() => setBeds(beds + 1)} disabled={beds === 16}>+</button>
            </span>
            <label className="edit-guests-label"> Bedrooms: </label>
            <span className="edit-guests-buttons">
              <button type='button' onClick={() => { if (bedrooms > 1) setBedrooms(bedrooms - 1) }} disabled={bedrooms === 1}>-</button>
              {bedrooms}
              <button type='button' onClick={() => setBedrooms(bedrooms + 1)} disabled={bedrooms === 20}>+</button>
            </span>
            <label className="edit-guests-label"> Bathrooms: </label>
            <span className="edit-guests-buttons">
              <button type='button' onClick={() => { if (baths > 0.5) setBaths(Number(baths) - Number(0.50)) }} disabled={baths === 0.5}>-</button>
              {baths}
              <button type='button' onClick={() => setBaths(Number(baths) + Number(0.50))} disabled={baths === 20}>+</button>
            </span>
          </span>
        </div>
        <div>
          <label className="edit-listing-label">Select Property Type</label>
          <div className="edit-categories-main">
            {categories.map((room_category) => {
              return (
                <div className="edit-categories-outer">
                  <input
                    name={category}
                    type="radio"
                    className="edit-category-radio"
                    checked={category === room_category}
                    value={category}
                    onChange={() => setCategory(room_category)}
                    required
                  />
                  <label className="edit-category-label">{room_category}</label>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <label className="edit-listing-title">Edit your Title</label>
        </div>
        <input
          type="text"
          className="edit-listing-input title-input"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
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

        <div className="edit-listing-coordinates">
          <div>
            <div className="edit-listing-lat">
              <label>Latitude</label>
            </div>
            <input
              type="number"
              className="edit-listing-input lat"
              value={lat}
              onChange={e => setLat(e.target.value)}
            // min="-90"
            // max="90"
            // required
            />
          </div>
          <div>
            <div className="edit-listing-lng">
              <label>Longitude</label>
            </div>
            <input
              type="number"
              className="edit-listing-input lng"
              value={lng}
              onChange={e => setLng(e.target.value)}
            // min="-180"
            // max="180"
            // required
            />
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
            maxLength={1000}
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
            min={1}
            max={100000}
          />
        </div>
        {errors.length > 0 && (<ul>
          {errors.map((error, i) => <li key={i} className='update-error'>{error}</li>)}
        </ul>)}
        <button type="submit" disabled={disableButton} className="update-listing-button">Confirm</button>
      </form>
    </div >
  )
}

export default EditListingForm
