import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { getAllRooms, listAllRooms } from "../../store/rooms";
import Navigation from "../Navigation";
import SearchMap from "./SearchMap";
import './SearchResults.css'

function SearchResults({ isLoaded }) {
  let { destination } = useParams()
  const dispatch = useDispatch()
  const rooms = useSelector(getAllRooms)

  useEffect(() => {
    dispatch(listAllRooms())
  }, [])

  const searchRooms = rooms.filter(room => {
    destination = destination.toLowerCase()
    return room.city.toLowerCase().includes(destination) || room.state.toLowerCase().includes(destination) || room.country.toLowerCase().includes(destination)
  })

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <div className="search-rooms-main">
        <div className="search-rooms-left">
          {searchRooms.length > 0 ? <>
            {searchRooms?.map((room, i) => {

              if (room?.Reviews) {
                let sum = 0;
                const reviews = room?.Reviews

                for (let review of reviews) sum += review.stars
                let avgStars = sum / Object.values(reviews).length || 0
                avgStars = Math.round(avgStars * 100) / 100

                const wholeNumbers = [0, 1, 2, 3, 4, 5]
                if (wholeNumbers.includes(avgStars)) avgStars = avgStars.toString() + ".0"
                return (
                  <Link to={`/rooms/${room?.id}`} className="room-link" key={room?.id}>
                    <div className={`search-room-outer`}>
                      <div className="search-room-img-outer">
                        <img className="search-room-img" src={`${room?.images[0]?.url}`} alt="preview of room"></img>
                      </div>
                      <div className="search-room-detail">
                        <div className="search-room-info">
                          <div className="search-room-city-state">{`${room?.city}, ${room?.state}`}</div>
                          <div className="room-price-night">
                            <div className="room-price">{`$${room?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div>
                            <span className="room-night">night</span>
                          </div>
                        </div>
                        <div className="room-rating">
                          <div className="star-icon">
                            <i className="fa-solid fa-star star-design"></i>
                            <div className="number-rating">
                              {avgStars != 0 ? avgStars : "New"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              }
            })} </> : <>No Search Results</>
          }
        </div>
        <div className="search-rooms-right">
          <SearchMap searchRooms={searchRooms} />
        </div>
      </div>
    </>
  )
}

export default SearchResults
