import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './RoomCategory.css'
import Slider from "react-slick";

const RoomCategory = ({ handleFilter }) => {

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  return (
    <div className="categories-nav-outer">
      <div className="category-scroll">
        {/* <Slider {...settings}> */}
        <div className="room-category-outer" onClick={()=>handleFilter('A-Frames')}>
          <img className='room-category-icon' src='https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg' alt='catergories'></img>
          <div className="room-category-name">A-Frames</div>
        </div>
        <div className="room-category-outer" onClick={() => handleFilter('Amazing Pools')}>
          <img className='room-category-icon' src='https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg' alt='catergories'></img>
          <div className="room-category-name">Amazing Pools</div>
        </div>
        <div className="room-category-outer" onClick={() => handleFilter('Beach')}>
          <img className='room-category-icon' src='https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg' alt='catergories'></img>
          <div className="room-category-name">Beach</div>
        </div>
        <div className="room-category-outer" onClick={() => handleFilter('Cabins')}>
          <img className='room-category-icon' src='https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg' alt='catergories'></img>
          <div className="room-category-name">Cabins</div>
        </div>
        <div className="room-category-outer" onClick={() => handleFilter('Design')}>
          <img className='room-category-icon' src='https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg' alt='catergories'></img>
          <div className="room-category-name">Design</div>
        </div>
        <div className="room-category-outer" onClick={() => handleFilter('Domes')}>
          <img className='room-category-icon' src='https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg' alt='catergories'></img>
          <div className="room-category-name">Domes</div>
        </div>
        <div className="room-category-outer" onClick={() => handleFilter('Luxe')}>
          <img className='room-category-icon' src='https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg' alt='catergories'></img>
          <div className="room-category-name">Luxe</div>
        </div>
        <div className="room-category-outer" onClick={() => handleFilter('Treehouses')}>
          <img className='room-category-icon' src='https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg' alt='catergories'></img>
          <div className="room-category-name">Treehouses</div>
        </div>
        <div className="room-category-outer" onClick={() => handleFilter('Tiny Homes')}>
          <img className='room-category-icon' src='https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg' alt='catergories'></img>
          <div className="room-category-name">Tiny Homes</div>
        </div>
        <div className="room-category-outer" onClick={() => handleFilter('Tropical')}>
          <img className='room-category-icon' src='https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg' alt='catergories'></img>
          <div className="room-category-name">Tropical</div>
        </div>
        {/* </Slider> */}
      </div>
    </div>

  )
}

export default RoomCategory
