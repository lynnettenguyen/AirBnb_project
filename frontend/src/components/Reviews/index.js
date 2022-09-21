import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import './Reviews.css'
import { Modal } from "../../context/Modal";
import CreateReview from "./CreateReview";

const Reviews = ({ room, avgStarRating }) => {
  const sessionUser = useSelector(state => state.session.user);
  const users = useSelector(state => state.users)
  const [showReview, setShowReview] = useState(false);

  return (
    <>
      {room?.Reviews.length > 0 ? <div className="reviews-main">
        <div className="reviews-header">
          <i className="fa-solid fa-star reviews"></i>{avgStarRating}
          <span className="span-separator-review">·</span>
          <span>{room?.Reviews.length} reviews</span>
          {sessionUser && <div className="add-review-header" onClick={() => setShowReview(true)}>Write a review</div>}
        </div>
        <div className="reviews-grid">
          {users && room?.Reviews?.map((review, i) => {
            let date = new Date(review?.createdAt)
            const month = date.toLocaleString('default', { month: 'long' })
            const year = date.getFullYear()
            return (
              <div className="reviews-outer">
                <div className="reviews-upper">
                  <div className='review-profile-outer'>
                    <img src={users[review?.userId]?.profile_url} className="review-profile-img" alt=""></img>
                  </div>
                  <div className='review-user-outer'>
                    <div className="review-first-name">{users[review?.userId]?.firstName}</div>
                    <div className="review-date">{month} {year}</div>
                  </div>
                </div>
                <div className="review-content">{review?.review}</div>
              </div>
            )
          })}
        </div>
      </div> : <></>
      }
      {showReview &&
        <Modal onClose={() => setShowReview(false)}>
          <CreateReview />
        </Modal>
      }
    </>
  )
}

export default Reviews
