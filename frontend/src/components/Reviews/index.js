import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Reviews.css'
import { Modal } from "../../context/Modal";
import CreateReview from "./CreateReview";
import { removeReview } from "../../store/reviews";
import { findRoomById } from "../../store/rooms";

const Reviews = ({ room, roomId, avgStarRating }) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const users = useSelector(state => state.users)
  const reviews = useSelector(state => state.reviews)
  const [showReview, setShowReview] = useState(false);
  const [checkDuplicate, setCheckDuplicate] = useState(false)
  const [editReview, setEditReview] = useState(false)
  const [reviewId, setReviewId] = useState()

  useEffect(() => {
    setCheckDuplicate(false)
    Object.values(reviews).forEach(review => {
      if (review.userId === sessionUser.id) setCheckDuplicate(true)
    })
  })

  const handleEditReview = (editReviewId) => {
    setReviewId(editReviewId)
    setEditReview(true)
    setShowReview(true)
  }

  const handleDeleteReview = async (deleteReviewId) => {
    const deleteReview = await dispatch(removeReview(deleteReviewId))
    if (deleteReview) {
      dispatch(findRoomById(roomId))
      setEditReview(false)
    }
  }

  return (
    <>
      {<div className="reviews-main">
        <div className="reviews-header">
          <i className="fa-solid fa-star reviews"></i><span>{avgStarRating === 0 ? <>New</> : <>{avgStarRating}</>}</span>
          <span className="span-separator-review">·</span>
          <span>
            {room?.Reviews.length === 1 ? <>{room?.Reviews.length} review </> : <>{room?.Reviews.length} reviews </>}
          </span>
          {sessionUser && sessionUser?.id !== room?.ownerId && !checkDuplicate && <div className="add-review-header" onClick={() => setShowReview(true)}>Write a review</div>}
        </div>
        <div className="reviews-grid">
          {users && room?.Reviews?.map((review, i) => {
            let date = new Date(review?.createdAt)
            const month = date.toLocaleString('default', { month: 'long' })
            const year = date.getFullYear()
            return (
              <div className="reviews-outer" key={i}>
                <div className="reviews-upper">
                  <div className='review-profile-outer'>
                    <img src={users[review?.userId]?.profile_url} className="review-profile-img" alt=""></img>
                  </div>
                  <div className='review-user-outer'>
                    <div className="review-first-name">{users[review?.userId]?.firstName}</div>
                    <div className="review-date">{month} {year}</div>
                  </div>
                  {review.userId === sessionUser.id && <div className="review-update-buttons-outer">
                    <button onClick={() => handleEditReview(review.id)} className='review-edit-button'>Edit</button>
                    <button onClick={() => handleDeleteReview(review.id)} className='review-delete-button'>Delete</button>
                  </div>}
                </div>
                <div className="review-content">{review?.review}</div>
              </div>
            )
          })}
        </div>
      </div>
      }
      {showReview &&
        <Modal onClose={() => setShowReview(false)}>
          <CreateReview setShowReview={setShowReview} editReview={editReview} setEditReview={setEditReview} reviewId={reviewId} />
        </Modal>
      }
    </>
  )
}

export default Reviews
