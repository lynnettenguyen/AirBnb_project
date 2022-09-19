import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

const Reviews = ({ room, roomId }) => {
  return (
    <>
      {room?.reviews?.map((review, i) => {
        return (
          <div>

          </div>
        )
      })}
    </>
  )
}

export default Reviews
