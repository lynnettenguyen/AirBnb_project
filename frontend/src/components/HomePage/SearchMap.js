import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleMap, useJsApiLoader, Marker, Circle } from '@react-google-maps/api'
import './SearchMap.css'
import { getAPIKey } from '../../store/maps'
import mapOptions from '../Maps/MapStyle'

const SearchMap = ({ searchRooms }) => {
  const dispatch = useDispatch()
  const APIKey = useSelector(state => state.map.APIKey)

  useEffect(() => {
    dispatch(getAPIKey())
  }, [])

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: APIKey,
    id: 'google-maps-script'
  })

  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: Number(11),
    lng: Number(11)
  };

  const circleOptions = {
    strokeColor: '#f3b2d0',
    strokeOpacity: 0.45,
    strokeWeight: 0,
    fillColor: '#f3b2d0',
    fillOpacity: 0.45,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 1000
  }

  return (
    <div className='search-google-map-outer'>
      {isLoaded &&
        (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            options={{ styles: mapOptions }}
          >
            <Circle
              center={center}
              options={circleOptions}
            />
            <Marker position={center} />
          </GoogleMap>
        )}
    </div>
  )
}

// React.memo prevents rerenders if props are unchanged
export default React.memo(SearchMap)
