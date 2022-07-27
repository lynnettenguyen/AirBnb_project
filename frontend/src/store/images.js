import { csrfFetch } from "./csrf"

const CREATE_IMAGES = 'images/CREATE_IMAGES'
const LIST_IMAGES ='images/LIST_IMAGES'

export const getAllImages = (state) => Object.values(state.images)

const createImages = (image) => ({
  type: CREATE_IMAGES,
  image
})

const listImages = (images) => ({
  type: LIST_IMAGES,
  images
})

export const listAllImages = () => async (dispatch) => {
  const response = await csrfFetch(`/api/images`);
  if (response.ok) {
    const imageObj = await response.json();
    dispatch(listImages(imageObj.images))
  }
  return response;
}

export const uploadNewImage = (imageData) => async (dispatch) => {
  const { userId, roomId, type, url } = imageData;
  const response = await csrfFetch(`/api/${roomId}/images`, {
    method: "POST",
    body: JSON.stringify({
      userId, roomId, type, url
    })
  })
  if (response.ok) {
    const newImage = await response.json()
    dispatch(createImages(newImage));
    console.log(newImage)
    return newImage;
  }
}

const initialState = {}
const imageReducer = (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case LIST_IMAGES: {
      action.images.map(image => newState[image.id] = image)
      return newState
    }
    case CREATE_IMAGES: {
      newState[action.image.id] = action.image;
      return newState;
    }
    default:
      return state;
  }
}

export default imageReducer;
