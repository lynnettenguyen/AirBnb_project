import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from "react-router-dom";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api'
import './SearchMap.css'
import { getAPIKey } from '../../store/maps'
import mapOptions from '../Maps/MapStyle'

const SearchMap = ({ searchRooms }) => {
  let { destination } = useParams()
  const dispatch = useDispatch()
  const APIKey = useSelector(state => state.map.APIKey)
  const [midLat, setMidLat] = useState(0)
  const [midLng, setMidLng] = useState(0)
  const [zoom, setZoom] = useState(2)
  const [selected, setSelected] = useState({})

  console.log(searchRooms[0]?.lat)

  useEffect(() => {
    dispatch(getAPIKey())

    if (searchRooms.length < 10) {

      // let numRooms = searchRooms?.length

      // const latSum = () => {
      //   return searchRooms?.reduce((sum, { lat }) => sum + lat, 0)
      // }


      // const lngSum = () => {
      //   return searchRooms?.reduce((sum, { lng }) => sum + lng, 0)
      // }

      // setMidLat(Number((latSum() / numRooms).toFixed(6)))
      // setMidLng(Number((lngSum() / numRooms).toFixed(6)))

      setMidLat(searchRooms[0]?.lat)
      setMidLng(searchRooms[0]?.lng)
      setZoom(5)

      if (searchRooms.length < 5) {
        setZoom(10)
      } else if (searchRooms.length < 6) {
        setZoom(8)
      }

    } else {

      setMidLat(0)
      setMidLng(0)
      setZoom(2)

    }

  }, [destination])


  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: APIKey,
    id: 'google-maps-script'
  })

  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: Number(midLat),
    lng: Number(midLng)
  };

  console.log('center', center)

  return (
    <div className='search-google-map-outer'>
      {isLoaded &&
        (<GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          options={{
            styles: mapOptions,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            scrollwheel: true
          }}
        >
          {searchRooms.map((room) => {
            return (
              <>
                <Marker
                  position={{
                    key: room.id,
                    lat: Number(room.lat),
                    lng: Number(room.lng)
                  }}
                  onClick={() => setSelected(room)}
                />
              </>
            )
          })}

          {selected.id &&
            (<InfoWindow
              position={{
                lat: Number(selected.lat),
                lng: Number(selected.lng)
              }}
              onCloseClick={() => setSelected({})}
            >
              <div className='selected-room-info'>
                <Link to={`/rooms/${selected?.id}`}>
                  <img src={selected?.images[0]?.url} className='selected-room-img'></img>
                </Link>
                <div>
                  <div className='selected-room-name'>{selected?.name}</div>
                  <div><span className='selected-room-price'>{`$${selected?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span> <span>night</span></div>
                </div>
              </div>
            </InfoWindow>
            )}
        </GoogleMap>
        )}
    </div>
  )
}

// React.memo prevents rerenders if props are unchanged
export default React.memo(SearchMap)