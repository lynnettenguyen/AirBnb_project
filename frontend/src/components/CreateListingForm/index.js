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

  const updateName = (e) => {
    setName(e.target.value)
    if (e.target.value.length > 1) setCheckInput(false)
    else setCheckInput(true)
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
          <div className="create-header">What name would you give your place?</div>
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
              <button onClick={() => setPage(3)} className="next-button" disabled={checkInput}>Next</button>
            </div>
          </div>
        </div>
      }
      <div></div>
    </div>
  )
}

export default CreateListingForm
