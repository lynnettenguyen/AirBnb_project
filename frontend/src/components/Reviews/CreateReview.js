import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import './CreateReview.css'

const CreateReview = () => {
  let { roomId } = useParams()
  const [review, setReview] = useState("")
  const [stars, setStars] = useState()
  const [ratedStar1, setRatedStar1] = useState(false)
  const [ratedStar2, setRatedStar2] = useState(false)
  const [ratedStar3, setRatedStar3] = useState(false)
  const [ratedStar4, setRatedStar4] = useState(false)
  const [ratedStar5, setRatedStar5] = useState(false)

  const changeReviewStars = (num) => {
    if (num >= 1) {
      setStars(1)
      setRatedStar1(true)
      setRatedStar2(false)
      setRatedStar3(false)
      setRatedStar4(false)
      setRatedStar5(false)
    }
    if (num >= 2) {
      setStars(2)
      setRatedStar2(true)
    }
    if (num >= 3) {
      setStars(3)
      setRatedStar3(true)
    }
    if (num >= 4) {
      setStars(4)
      setRatedStar4(true)
    }
    if (num >= 5) {
      setStars(5)
      setRatedStar5(true)
    }
  }


  const handleWriteReview = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleWriteReview} className='review-form'>
        <div className="review-return-outer">
        <button className="review-return-button">Return to Listing</button>
        </div>
        <div className="review-header">How was your stay?</div>
        <div className="review-star-rating">
          <div className="rating-review-header">Overall experience*</div>
          <i className={ratedStar1 ? "fa-solid fa-star rated-true" : "fa-solid fa-star rated-false"} onClick={() => changeReviewStars(1)} alt='star'></i>
          <i className={ratedStar2 ? "fa-solid fa-star rated-true" : "fa-solid fa-star rated-false"} onClick={() => changeReviewStars(2)} alt='star'></i>
          <i className={ratedStar3 ? "fa-solid fa-star rated-true" : "fa-solid fa-star rated-false"} onClick={() => changeReviewStars(3)} alt='star'></i>
          <i className={ratedStar4 ? "fa-solid fa-star rated-true" : "fa-solid fa-star rated-false"} onClick={() => changeReviewStars(4)} alt='star'></i>
          <i className={ratedStar5 ? "fa-solid fa-star rated-true" : "fa-solid fa-star rated-false"} onClick={() => changeReviewStars(5)} alt='star'></i>
        </div>
        <div>
          <div className="review-content-header">Share your story*</div>
          <div className="review-content-caption">The best reviews are helpful ones</div>
          <textarea
            type='text'
            className="review-text"
            value={review}
            onChange={e => setReview(e.target.value)}
            maxLength={1001}
          />
        </div>
      </form>
    </>
  )
}

export default CreateReview
