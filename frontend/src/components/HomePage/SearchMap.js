import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api'
import './SearchMap.css'
import { getAPIKey } from '../../store/maps'
import mapOptions from '../Maps/MapStyle'

const SearchMap = ({ searchRooms }) => {

  let latSum;
  let lngSum;

  useEffect(() => {
    dispatch(getAPIKey())
  }, [latSum, lngSum])

    if (searchRooms.length > 0) {

      latSum = () => {
        return searchRooms.reduce((sum, { lat }) => sum + lat, 0)
      }

      lngSum = () => {
        return searchRooms.reduce((sum, { lng }) => sum + lng, 0)
      }
    }

  const dispatch = useDispatch()
  const APIKey = useSelector(state => state.map.APIKey)
  const [room, setRoom] = useState()
  const [midLat, setMidLat] = useState(searchRooms.length > 0 ? latSum() / searchRooms.length : 0)
  const [midLng, setMidLng] = useState(searchRooms.length > 0 ? lngSum() / searchRooms.length : 0)


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


  return (
    <div className='search-google-map-outer'>
      {isLoaded &&
        (<GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
          options={{ styles: mapOptions }}
        >
          {searchRooms.map((room) => {
            return (
              <Marker
                position={{
                  lat: Number(room.lat),
                  lng: Number(room.lng)
                }}
                onClick={() => setRoom(room)}
              />
            )
          })}
          {/* {room &&
            (<InfoWindow
              position={{
                lat: Number(room.lat),
                lng: Number(room.lng)
              }}
              onCloseClick={() => setRoom(false)}
            >
            </InfoWindow>
            )} */}
        </GoogleMap>
        )}
    </div>
  )
}

// React.memo prevents rerenders if props are unchanged
export default React.memo(SearchMap)
