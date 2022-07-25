import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllRooms, listAllRooms } from "../../store/rooms";
import "./HomePage.css"

const HomePage = () => {
  const dispatch = useDispatch()
  const allRooms = useSelector(getAllRooms)

  // for (let room of allRooms) console.log(room.previewImage[0].url)
  // console.log(allRooms[0].previewImage[0])
  // console.log(allRooms)

  useEffect(() => {
    dispatch(listAllRooms())
  }, [])

  return (
    <>
      <div className="all-rooms-div">
        {allRooms?.map((room, i) => {
          return (
            <Link to={`/rooms/${room?.id}`} className="room-link" key={room?.id}>
              <div className={`room-div room-div${i}`}>
                <div className="img-div">
                  <img className="room-img" src={`${room?.previewImage[0]?.url}`} alt="preview of room"></img>
                </div>
                <div className="room-info">
                  <p className="room-city-state">{`${room?.city}, ${room?.state}`}</p>
                  <p className="room-price">{`$${room?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} night`}</p>
                </div>
              </div>
            </Link>
          )
        })
        }
      </div>
    </>
  )
}
export default HomePage
