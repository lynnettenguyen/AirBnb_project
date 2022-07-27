import { csrfFetch } from "./csrf"

const LIST_RESERVATIONS = 'reservations/LIST_RESERVATIONS'
const FIND_RESERVATIONS = 'reservations/FIND_RESERVATIONS'
const EDIT_RESERVATIONS = 'reservations/EDIT_RESERVATIONS'
const CREATE_RESERVATIONS = 'reservations/CREATE_RESERVATIONS'
const DELETE_RESERVATIONS = 'reservations/DELETE_RESERVATIONS'

export const getAllReservations = (state) => Object.values(state.reservations)

const listReservations = (reservations) => ({
  type: LIST_RESERVATIONS,
  reservations
})

const findReservation = (reservation) => ({
  type: FIND_RESERVATIONS,
  reservation
})

const editReservation = (reservation) => ({
  type: EDIT_RESERVATIONS,
  reservation
})

const createReservation = (newReservation) => ({
  type: CREATE_RESERVATIONS,
  newReservation})

const deleteReservation = (reservationId) => ({
  type: DELETE_RESERVATIONS,
  reservationId
})

export const listAllReservations = (roomId) => async (dispatch) => {
  const response = await csrfFetch(`/api/rooms/${roomId}/reservations`);
  if (response.ok) {
    const reservationObj = await response.json();
    // console.log(typeof reservationObj.reservations)
    console.log(reservationObj.reservations)
    dispatch(listReservations(reservationObj.reservations))
  }
  return response;
}

// export const findRoomById = (roomId) => async (dispatch) => {
//   const response = await csrfFetch(`/api/rooms/${roomId}`)
//   if (response.ok) {
//     const room = await response.json()
//     dispatch(findRoom(room))
//   }
//   return response;
// }

// export const hostNewRoom = (roomData) => async (dispatch) => {
//   const { ownerId, address, city, state, country, lat, lng, name, description, price } = roomData;
//   const response = await csrfFetch(`/api/rooms`, {
//     method: "POST",
//     body: JSON.stringify({
//       ownerId, address, city, state, country, lat, lng, name, description, price
//     })
//   })
//   if (response.ok) {
//     const newRoom = await response.json()
//     dispatch(createRoom(newRoom));
//     return newRoom;
//   }
// }

// export const updateRoom = (roomData) => async (dispatch) => {
//   const { roomId, ownerId, address, city, state, country, lat, lng, name, description, price } = roomData;
//   const response = await csrfFetch(`/api/rooms/${roomId}`, {
//     method: "PUT",
//     // headers: { "Content-Type": "Application/json" },
//     body: JSON.stringify({
//       roomId, ownerId, address, city, state, country, lat, lng, name, description, price
//     })
//   })
//   if (response.ok) {
//     const room = await response.json()
//     dispatch(editRoom(room));
//     console.log('ROOM', room)
//     return room;
//   }
// }

// export const removeRoom = (roomId) => async (dispatch) => {
//   const response = await csrfFetch(`/api/rooms/${roomId}`, {
//     method: "DELETE",
//     body: JSON.stringify({
//       roomId
//     })
//   })
//   const deletedRoom = await response.json();
//   dispatch(deleteRoom(roomId));
//   return deletedRoom;
// }

const initialState = {}
const reservationReducer = (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case LIST_RESERVATIONS: {
      for (let reservation of action.reservations) newState[reservation.id] = reservation
      return newState
    }
    case FIND_RESERVATIONS: {
      newState[action.reservation.id] = action.reservation;
      return { ...state, ...newState };
    }
    case CREATE_RESERVATIONS: {
      newState[action.newReservation.id] = action.newReservation;
      return newState;
    }
    case EDIT_RESERVATIONS: {
      newState[action.reservation.id] = action.reservation;
      return newState;
    }
    case DELETE_RESERVATIONS: {
      delete newState[action.reservationId]
      return newState;
    }
    default:
      return state;
  }
}

export default reservationReducer;
