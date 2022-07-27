import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hostNewRoom, findRoomById } from "../../store/rooms";
import "./CreateListingForm.css"

const CreateListingForm = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);

  const [userId, serUserId] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [country, setCountry] = useState()
  const [lat, setLat] = useState()
  const [lng, setLng] = useState()
  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [page, setPage] = useState(1)
  const [checkInput, setCheckInput] = useState(true)

  const toggleNext = (e) => {
    if (e.length > 1) setCheckInput(false)
    else setCheckInput(true)
  }

  const updateName = (e) => {
    setName(e.target.value)
    toggleNext(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const roomData = {
      userId: sessionUser.id,
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

    const response = await dispatch(hostNewRoom(roomData))

    if (response) {
      dispatch(findRoomById())
      // return returnToListing()
    }
  }

  // What kind of place will you host?
  // Which of these best describes your place?
  // What kind of space will guests have?
  // Enter your address
  // How many guests would you like to welcome ? Guest, Beds, Bedrooms, Bathrooms

  return (
    <div className="create-page">
      <div></div>
      {page === 1 &&
        <div className="create-content">
          <div className="create-header">Welcome</div>
          <div>
            <div className="create-new-listing">Start a new listing</div>
            <div className="create-new-button-div">
              <button onClick={() => setPage(2)} className="create-new-button"><i class="fa-solid fa-plus"></i>Create a new listing &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{`>`}</button>
            </div>
          </div>
        </div>
      }
      {page === 2 &&
        <div className="create-content">
          <div className="create-header">What will you name your place?</div>
          <div className="create-content-right">
            <div>
              <input
                type="text"
                placeholder="Breathtaking Lakefront Villa"
                className="create-input"
                value={name}
                onChange={updateName}
                required
              />
            </div>
            <div className="back-next-buttons">
              <button onClick={() => setPage(1)} className="back-button">Back</button>
              <button onClick={() => {setPage(3); setCheckInput(true)}} className="next-button" disabled={checkInput}>Next</button>
            </div>
          </div>
        </div>
      }
      {page === 3 &&
        <div className="create-content">
          <div className="create-header">Where is your place located?</div>
          <div className="create-content-address">
            <div>
              <input
                type="text"
                placeholder="address"
                className="location-input"
                value={address}
                onChange={e => setAddress(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="city"
                className="location-input"
                value={city}
                onChange={e => setCity(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="state"
                className="location-input"
                value={state}
                onChange={e => setState(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="country"
                className="location-input"
                value={country}
                onChange={e => setCountry(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="latitude"
                className="location-input"
                value={lat}
                onChange={e => setLat(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="longitude"
                className="location-input"
                value={lng}
                onChange={e => { setLng(e.target.value); setCheckInput(false) }}
                required
              />
            </div>
            <div className="back-next-buttons smaller-buttons">
              <button onClick={() => setPage(2)} className="back-button">Back</button>
              <button onClick={() => {setPage(4); setCheckInput(true)}} className="next-button" disabled={checkInput}>Next</button>
            </div>
          </div>
        </div>
      }
      {page === 4 &&
        <div className="create-content">
          <div className="create-header">How will you describe your place?</div>
          <div className="create-content-right">
            <div>
              <textarea
                type="text"
                placeholder="This is a beautiful beachfront, 3 bedroom cozy family cabin/home with breathtaking views of the lake! Enjoy two outside decks for relaxation and entertainment and the panoramic views of the West shore."
                className="create-input-textarea"
                value={description}
                onChange={e => { setDescription(e.target.value); setCheckInput(false)}}
                required
              ></textarea>
            </div>
            <div className="back-next-buttons smaller-buttons">
              <button onClick={() => setPage(3)} className="back-button">Back</button>
              <button onClick={() => { setPage(5); setCheckInput(true) }} className="next-button" disabled={checkInput}>Next</button>
            </div>
          </div>
        </div>
      }
      <div></div>
    </div>
  )
}

export default CreateListingForm
