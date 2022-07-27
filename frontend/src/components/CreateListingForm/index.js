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
  const [image1, setImage1] = useState("")
  const [image2, setImage2] = useState("")
  const [image3, setImage3] = useState("")
  const [image4, setImage4] = useState("")
  const [image5, setImage5] = useState("")
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
      history.push(`/rooms/${response.id}`)
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
              <div className="create-header">Let's give your place a name?</div>
              <div className="create-content-right">
                <div>
                  <button onClick={() => { setName("demo title"); setCheckInput(false) }}>demo title</button>
                </div>
                <div>
                  <label>
                    Create your title
                  </label>
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
              <div className="create-header">Where's your place located?</div>
              <div className="create-content-address">
                <div>
                  <button onClick={setDemoAddress}>demo address</button>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="address"
                    className="multi-input"
                    value={address}
                    onChange={e => { setAddress(e.target.value); }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="city"
                    className="multi-input"
                    value={city}
                    onChange={e => { setCity(e.target.value); }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="state"
                    className="multi-input"
                    value={state}
                    onChange={e => { setState(e.target.value); }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="country"
                    className="multi-input"
                    value={country}
                    onChange={e => { setCountry(e.target.value); }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="latitude"
                    className="multi-input"
                    value={lat}
                    onChange={e => { setLat(e.target.value); }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="longitude"
                    className="multi-input"
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
              <div className="create-header">Now, let's describe your place</div>
              <div className="create-content-right">
                <div>
                  <label>
                    Create Your Description
                  </label>
                </div>
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
              <div className="create-header">Let's add some photos of your place</div>

              <div className="create-content-right">
                <div>
                  <input
                    type="text"
                    placeholder="image.url"
                    className="multi-input"
                    value={image1}
                    onChange={e => { setImage1(e.target.value); setCheckInput(false) }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="image.url"
                    className="multi-input"
                    value={image2}
                    onChange={e => { setImage2(e.target.value); setCheckInput(false) }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="image.url"
                    className="multi-input"
                    value={image3}
                    onChange={e => { setImage3(e.target.value); setCheckInput(false) }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="image.url"
                    className="multi-input"
                    value={image4}
                    onChange={e => { setImage4(e.target.value); setCheckInput(false) }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="image.url"
                    className="multi-input"
                    value={image5}
                    onChange={e => { setImage5(e.target.value); setCheckInput(false) }}
                    required
                  />
                </div>
                <div className="back-next-buttons">
                  <button onClick={() => setPage(4)} className="back-button">Back</button>
                  <button onClick={() => setPage(6)} className="next-button" disabled={checkInput}>Next</button>
                </div>
              </div>
            </div>
          </section>)
        }
        {page >= 6 &&
          (<section className={page === 6 ? "block" : "hidden"}>
            <div className="create-content">
              <div className="create-header">Now for the fun part - set your price</div>
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
                  <button onClick={() => setPage(5)} className="back-button">Back</button>
                  <button type="submit" className="next-button" disabled={checkInput}>Submit</button>
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
