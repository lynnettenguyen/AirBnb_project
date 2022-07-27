import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { hostNewRoom, findRoomById } from "../../store/rooms";
import "./CreateListingForm.css"
import { uploadNewImage } from "../../store/images";

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
    setAddress("19508 Boggy Ford Rd")
    setCity("Lago Vista")
    setState("Texas")
    setCountry("United States of America")
    setLat(30.501039)
    setLng(-97.966791)
    setCheckInput(false)
  }

  const setDemoImages = () => {
    setImage1("https://a0.muscache.com/im/pictures/miso/Hosting-583106032718062723/original/6bc37b8f-af10-4675-b143-67f6262cec6a.jpeg?im_w=1200")
    setImage2("https://a0.muscache.com/im/pictures/miso/Hosting-583106032718062723/original/63ab41e2-fafc-4c12-be32-bd6ffb25f51d.jpeg?im_w=720")
    setImage3("https://a0.muscache.com/im/pictures/miso/Hosting-583106032718062723/original/8cafaeb8-bfbb-4500-b676-e1af5307017f.jpeg?im_w=1440")
    setImage4("https://a0.muscache.com/im/pictures/miso/Hosting-583106032718062723/original/88abd551-55d8-4b00-b853-763455ce96a2.jpeg?im_w=1200")
    setImage5("https://a0.muscache.com/im/pictures/miso/Hosting-583106032718062723/original/2637ca05-6186-4106-b2b2-84fc77a81729.jpeg?im_w=1200")
    setCheckInput(false)
  }

  let formButtons;
  if (page > 1) {
    formButtons = (
      <>
        <button onClick={() => setPage(page - 1)} className="back-button">Back</button>
        <button onClick={() => { setPage(page + 1); setCheckInput(true) }} className="next-button" disabled={checkInput}>Next</button>
      </>
    )
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

    const roomResponse = await dispatch(hostNewRoom(roomData))

    if (roomResponse) {
      setRoomId(roomResponse.id)
      // dispatch(findRoomById(roomId))
      // history.push(`/rooms/${roomResponse.id}`)
    }
  }


  const handleImagesSubmit = async (e) => {
    e.preventDefault()

    const imageData = {
      userId,
      roomId,
      type: "room"
    }

    const imageData1 = {
      ...imageData,
      url: image1
    }

    const imageData2 = {
      ...imageData,
      url: image2
    }

    const imageData3 = {
      ...imageData,
      url: image3
    }

    const imageData4 = {
      ...imageData,
      url: image4
    }

    const imageData5 = {
      ...imageData,
      url: image5
    }

    const newImage1 = await dispatch(uploadNewImage(imageData1))
    const newImage2 = await dispatch(uploadNewImage(imageData2))
    const newImage3 = await dispatch(uploadNewImage(imageData3))
    const newImage4 = await dispatch(uploadNewImage(imageData4))
    const newImage5 = await dispatch(uploadNewImage(imageData5))

    if (newImage1 && newImage2 && newImage3 && newImage4 && newImage5) {
      dispatch(findRoomById(roomId))
      history.push(`/rooms/${roomId}`)
    }
  }

  return (
    <div className="create-page">
      <div></div>
      {page === 1 &&
        <div className="create-content">
          <div className="header-div">
            <div className="create-header">Welcome</div>
          </div>
          <div>
            <div className="create-new-label">Start a new listing</div>
            <div className="create-new-button-div">
              <button onClick={() => setPage(2)} className="create-new-button"><i className="fa-solid fa-plus"></i>Create a new listing &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{`>`}</button>
              <span className="white-space"></span>
            </div>
          </div>
        </div>
      }
      <form onSubmit={handleSubmit} className={page < 6 ? "block" : "hidden"}>
        {page >= 2 &&
          <section className={page === 2 ? "block" : "hidden"}>
            <div className="create-content">
              <div className="create-header">Let's give your place a name</div>
              <div className="create-content-right">
                <div className="right-content-label">
                  <label className="create-new-label">
                    Create your title
                  </label>
                  <div className="right-content-demo">
                    <button onClick={() => { setName("Unique Eco-Glamping in Texas Hill Country"); setCheckInput(false) }}>demo title</button>
                  </div>
                </div>
                <div className="right-content-input">
                  <input
                    type="text"
                    placeholder="Breathtaking Lakefront Villa"
                    className="create-input"
                    value={name}
                    onChange={updateName}
                    required
                  />
                </div>
                <div className="right-content-buttons">
                  <div className="back-next-buttons">{formButtons}</div>
                </div>
              </div>
            </div>
          </section>
        }
        {page >= 3 &&
          <section className={page === 3 ? "block" : "hidden"}>
            <div className="create-content">
              <div className="create-header">Where's your place located?</div>
              <div className="create-content-right">
                <div className="right-content-label">
                  <div>
                    <button onClick={setDemoAddress}>demo address</button>
                  </div>
                </div>
                <div className="right-content-input">
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
                </div>
                <div className="create-content-buttons">
                  <div className="back-next-buttons">{formButtons}</div>
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
                <div className="right-content-label">
                  <div>
                    <label>
                      Create Your Description
                    </label>
                  </div>
                  <div>
                    <button onClick={() => { setDescription("UDOSCAPE - a unique, heart-throbbing eco-Glamping resort in Texas Hill Country. Site currently has 8 luxuriously furnished pods ranging from Deluxe to Deluxe-plus, all nestled up a hill with amazing hill country views. Amenities include grills, fire-pit, and hammock sites. Each Pod comes with a dedicated hot tub. All Pods are luxuriously furnished with plush beddings, en-suite restroom, kitchenette, dinning area, etc. Get ready to experience camping like never before!"); setCheckInput(false) }}>demo description</button>
                  </div>
                </div>
                <div className="right-content-input">
                  <div>
                    <textarea
                      type="text"
                      placeholder="This is a beautiful beachfront, 3 bedroom cozy family cabin/home with breathtaking views of the lake! Enjoy two outside decks for relaxation and entertainment and the panoramic views of the West shore."
                      className="create-input-textarea"
                      value={description}
                      onChange={e => { setDescription(e.target.value); setCheckInput(false) }}
                      required>
                    </textarea>
                  </div>
                </div>
                <div className="right-content-button">
                  <div className="back-next-buttons">{formButtons}</div>
                </div>
              </div>
            </div>
          </section>)
        }
        {page >= 5 &&
          (<section className={page === 5 ? "block" : "hidden"}>
            <div className="create-content">
              <div className="create-header">Now for the fun part - set your price</div>
              <div className="create-content-right">
                <div className="right-content-label">
                  <button type="button" onClick={() => { setPrice(456); setCheckInput(false) }}>demo price</button>
                </div>
                <div className="right-content-input">
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
                </div>
                <div className="right-content-button">
                  <div className="back-next-buttons">
                    <button onClick={() => setPage(4)} className="back-button">Back</button>
                    <button type="submit" onClick={() => setPage(6)} className="next-button" disabled={checkInput}>Next</button>
                  </div>
                </div>
              </div>
            </div>
          </section>)
        }
      </form >
      <form onSubmit={handleImagesSubmit}>
        {page >= 6 &&
          (<section className={page === 6 ? "block" : "hidden"}>
            <div className="create-content">
              <div className="create-header">Let's add some photos of your place</div>
              <div className="create-content-right">
                <div className="right-content-label">
                  <div>
                    <button type="button" onClick={setDemoImages}>demo images</button>
                  </div>
                </div>
                <div className="right-content-input">
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
                </div>
                <div className="right-content-button">
                  <button type="submit" className="next-button" disabled={checkInput}>Submit</button>
                </div>
              </div>
            </div>
          </section>)
        }
      </form>
      <div></div>
    </div>

  )
}

export default CreateListingForm
