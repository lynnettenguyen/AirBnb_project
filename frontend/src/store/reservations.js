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

const findReservations = (reservations) => ({
  type: FIND_RESERVATIONS,
  reservations
})

const editReservation = (reservation) => ({
  type: EDIT_RESERVATIONS,
  reservation
})

const createReservation = (newReservation) => ({
  type: CREATE_RESERVATIONS,
  newReservation
})

const deleteReservation = (reservationId) => ({
  type: DELETE_RESERVATIONS,
  reservationId
})

export const listAllReservations = (roomId) => async (dispatch) => {
  const response = await csrfFetch(`/api/rooms/${roomId}/reservations`);
  if (response.ok) {
    const reservationObj = await response.json();
    console.log("!!!!!!!! first", reservationObj.reservations)
    // console.log("!!!!!!!! without", reservationObj)
    dispatch(listReservations(reservationObj.reservations))
  }
  return response;
}

export const findUserReservation = () => async (dispatch) => {
  const response = await csrfFetch(`/api/reservations`)
  if (response.ok) {
    const reservations = await response.json()
    // console.log("!!!!!!!! second", reservations.Reservations)
    dispatch(findReservations(reservations.Reservations))
  }
  return response;
}

export const bookNewReservation = (reservationData) => async (dispatch) => {
  const { userId, roomId, startDate, endDate } = reservationData;
  const response = await csrfFetch(`/api/rooms/${roomId}/reservations`, {
    method: "POST",
    body: JSON.stringify({
      userId, roomId, startDate, endDate
    })
  })
  if (response.ok) {
    const newReservation = await response.json()
    dispatch(createReservation(newReservation));
    return newReservation;
  }
}

export const updateReservation = (reservationData) => async (dispatch) => {
  const { reservationId, userId, roomId, startDate, endDate } = reservationData;
  const response = await csrfFetch(`/api/rooms/${roomId}/reservations/${reservationId}`, {
    method: "PUT",
    body: JSON.stringify({
      userId, roomId, startDate, endDate
    })
  })
  if (response.ok) {
    const reservation = await response.json()
    dispatch(editReservation(reservation));
    return reservation;
  }
}

export const removeReservation = (reservationId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reservations/${reservationId}`, {
    method: "DELETE",
    body: JSON.stringify({
      reservationId
    })
  })
  const deletedReservation = await response.json();
  dispatch(deleteReservation(reservationId));
  return deletedReservation;
}

const initialState = {}
const reservationReducer = (state = initialState, action) => {
  const newState = {}
  switch (action.type) {
    case LIST_RESERVATIONS: {
      action.reservations.map(reservation => newState[reservation.id] = reservation)
      return { ...newState} ;
    }
    case FIND_RESERVATIONS: {
      action.reservations.map(reservation => newState[reservation.id] = reservation)
      return { ...newState };
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
