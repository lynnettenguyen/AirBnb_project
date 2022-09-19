import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleMap, useJsApiLoader, Marker, Circle } from '@react-google-maps/api'
import './Maps.css'
import { getAPIKey } from '../../store/maps'

const Maps = ({ room }) => {
  const dispatch = useDispatch()
  const APIKey = useSelector(state => state.map.APIKey)

  useEffect(() => {
    dispatch(getAPIKey())
  }, [])

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: APIKey,
    // id: 'google-map-script'
  })

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: room?.lat,
    lng: room?.lng
  };

  const circleOptions = {
    strokeColor: '#DB0C64',
    strokeOpacity: 0.35,
    strokeWeight: 0,
    fillColor: '#DB0C64',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 1000
  }


  return (
    <div className='maps-outer'>
      <div className='maps-header'>Where you'll be</div>
      <div className='maps-main'>
        {isLoaded &&
          (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
            >
              <Marker
                position={center}
              />
              <Circle
                center={center}
                options={circleOptions}
              />
            </GoogleMap>
          )}
      </div>
    </div>
  )
}

// React.memo prevents rerenders if props are unchanged
export default React.memo(Maps)
