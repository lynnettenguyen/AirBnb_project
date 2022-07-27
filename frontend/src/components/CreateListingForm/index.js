import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { hostNewRoom, findRoomById } from "../../store/rooms";
import "./CreateListingForm.css"

const CreateListingForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user);

  const [userId, serUserId] = useState(sessionUser?.id)
  const [roomId, setRoomId] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [page, setPage] = useState(1)
  const [checkInput, setCheckInput] = useState(true)
  const [validationErrors, setValidationErrors] = useState([])

  const toggleNext = (e) => {
    if (e.length > 1) setCheckInput(false)
    else setCheckInput(true)
  }

  const updateName = (e) => {
    setName(e.target.value)
    toggleNext(e.target.value)
  }

  // const handleValidation = () => {
  useEffect(() => {
    const errors = []
    if (!address.length) errors.push("valid address required")
    if (!city.length) errors.push("valid city required")

    if (!state.length) errors.push("valid state required")
    if (!country.length) errors.push("valid country required")
    if (isNaN(lat) || lat > 90 || lat < -90) errors.push("valid latitude between -90 to +90 required")
    if (isNaN(lng) || lng > 180 || lng < -180) errors.push("valid longitude -180 to +180 required")

    if (errors.length > 0) setValidationErrors(errors)
    else setCheckInput(false)

  }, [address, city, state, country, lat, lng])

  const setDemoAddress = () => {
    setAddress("demo address")
    setCity("demo city")
    setState("demo state")
    setCountry("demo country")
    setLat(34.123453)
    setLng(-34.323223)
    setCheckInput(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const roomData = {
      userId,
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
      setRoomId(response.id)
      dispatch(findRoomById(roomId))
      history.push(`/rooms/${roomId}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="create-page">
        <div></div>
        {page === 1 &&
          <div className="create-content">
            <div className="header-div">
              <div className="create-header">Welcome</div>
            </div>
            <div>
              <div className="create-new-listing">Start a new listing</div>
              <div className="create-new-button-div">
                <button onClick={() => setPage(2)} className="create-new-button"><i className="fa-solid fa-plus"></i>Create a new listing &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{`>`}</button>
                <span className="white-space"></span>
              </div>
            </div>
          </div>
        }
        {page >= 2 &&
          <section className={page === 2 ? "block" : "hidden"}>
            <div className="create-content">
              <div className="create-header">What will you name your place?</div>
              <div className="create-content-right">
                <div>
                  <button onClick={() => { setName("demo title"); setCheckInput(false) }}>demo title</button>
                </div>
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
                  <button onClick={() => { setPage(3); setCheckInput(true) }} className="next-button" disabled={checkInput}>Next</button>
                </div>
              </div>
            </div>
          </section>
        }
        {page >= 3 &&
          <section className={page === 3 ? "block" : "hidden"}>
            <div className="create-content">
              <div className="create-header">Where is your place located?</div>
              <div className="create-content-address">
                <div>
                  <button onClick={setDemoAddress}>demo address</button>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="address"
                    className="location-input"
                    value={address}
                    onChange={e => { setAddress(e.target.value); }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="city"
                    className="location-input"
                    value={city}
                    onChange={e => { setCity(e.target.value); }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="state"
                    className="location-input"
                    value={state}
                    onChange={e => { setState(e.target.value); }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="country"
                    className="location-input"
                    value={country}
                    onChange={e => { setCountry(e.target.value); }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="latitude"
                    className="location-input"
                    value={lat}
                    onChange={e => { setLat(e.target.value); }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="longitude"
                    className="location-input"
                    value={lng}
                    onChange={e => { setLng(e.target.value); }}
                    required
                  />
                </div>
                <div className="back-next-buttons smaller-buttons">
                  <button onClick={() => setPage(2)} className="back-button">Back</button>
                  <button onClick={() => { setPage(4); setCheckInput(true) }} className="next-button" disabled={checkInput}>Next</button>
                </div>
              </div>
            </div>
          </section>
        }
        {page >= 4 &&
          (<section className={page === 4 ? "block" : "hidden"}>
            <div className="create-content">
              <div className="create-header">How will you describe your place?</div>
              <div className="create-content-right">
                <div>
                  <textarea
                    type="text"
                    placeholder="This is a beautiful beachfront, 3 bedroom cozy family cabin/home with breathtaking views of the lake! Enjoy two outside decks for relaxation and entertainment and the panoramic views of the West shore."
                    className="create-input-textarea"
                    value={description}
                    onChange={e => { setDescription(e.target.value); setCheckInput(false) }}
                    required
                  ></textarea>
                </div>
                <div className="back-next-buttons smaller-buttons">
                  <button onClick={() => setPage(3)} className="back-button">Back</button>
                  <button onClick={() => { setPage(5); setCheckInput(true) }} className="next-button" disabled={checkInput}>Next</button>
                </div>
              </div>
            </div>
          </section>)
        }
        {page >= 5 &&
          (<section className={page === 5 ? "block" : "hidden"}>
            <div className="create-content">
              <div className="create-header">How much will you charge per night?</div>
              <div className="create-content-right">
                <div>
                  <input
                    type="text"
                    placeholder="$"
                    className="create-input"
                    value={price}
                    onChange={e => { setPrice(e.target.value); setCheckInput(false) }}
                    required
                  />
                </div>
                <div className="back-next-buttons">
                  <button onClick={() => setPage(4)} className="back-button">Back</button>
                  <button type="submit" onClick={() => { setPage(6) }} className="next-button" disabled={checkInput}>Submit</button>
                </div>
              </div>
            </div>
          </section>)
        }
        <div></div>
      </div>
    </form>
  )
}

export default CreateListingForm
