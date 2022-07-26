import { csrfFetch } from "./csrf"

const LIST_ROOMS = 'rooms/LIST_ROOMS'
const FIND_ROOM = 'rooms/FIND_ROOM'
const FIND_OWN_ROOMS = 'rooms/FIND_OWN_ROOMS'
const EDIT_ROOM = 'rooms/EDIT_ROOM'
const CREATE_ROOM = 'rooms/CREATE_ROOM'
const DELETE_ROOM = 'rooms/DELETE_ROOM'

export const getAllRooms = (state) => Object.values(state.rooms)

const listRooms = (rooms) => ({
  type: LIST_ROOMS,
  rooms
})

const findRoom = (room) => ({
  type: FIND_ROOM,
  room
})

const editRoom = (room) => ({
  type: EDIT_ROOM,
  room
})

const createRoom = (newRoom) => ({
  type: CREATE_ROOM,
  newRoom
})

const deleteRoom = () => ({
  type: DELETE_ROOM
})

export const listAllRooms = () => async (dispatch) => {
  const response = await csrfFetch(`/api/rooms`);
  if (response.ok) {
    const roomsObj = await response.json();
    // console.log(typeof roomsObj.Rooms)
    console.log(roomsObj)
    dispatch(listRooms(roomsObj.Rooms))
  }
  return response;
}

export const findRoomById = (roomId) => async (dispatch) => {
  const response = await csrfFetch(`/api/rooms/${roomId}`)
  if (response.ok) {
    const room = await response.json()
    dispatch(findRoom(room))
  }
  return response;
}

export const hostNewRoom = (roomData) => async (dispatch) => {
  const { roomId, ownerId, address, city, state, country, lat, lng, name, description, price } = roomData;
  const response = await csrfFetch(`/api/rooms/${roomId}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      roomId, ownerId, address, city, state, country, lat, lng, name, description, price
    })
  })
  if (response.ok) {
    const newRoom = await response.json()
    dispatch(createRoom(newRoom));
    return newRoom;
  }
}

export const updateRoom = (roomData) => async (dispatch) => {
  const { roomId, ownerId, address, city, state, country, lat, lng, name, description, price } = roomData;
  const response = await csrfFetch(`/api/rooms/${roomId}`, {
    method: "PUT",
    // headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({
      roomId, ownerId, address, city, state, country, lat, lng, name, description, price
    })
  })
  if (response.ok) {
    const room = await response.json()
    dispatch(editRoom(room));
    console.log('ROOM', room)
    return room;
  }
}

const initialState = {}
const roomReducer = (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case LIST_ROOMS: {
      for (let room of action.rooms) newState[room.id] = room
      return newState
    }
    case FIND_ROOM: {
      newState[action.room.id] = action.room;
      return { ...state, ...newState };
    }
    case CREATE_ROOM: {
      newState[action.newRoom.id] = action.newRoom;
      return newState;
    }
    case EDIT_ROOM: {
      const currentState = JSON.parse(JSON.stringify({...state}))
      currentState[action.room.id.address] = action.room.address;
      currentState[action.room.id.city] = action.room.city;
      currentState[action.room.id.state] = action.room.state;
      currentState[action.room.id.country] = action.room.country;
      currentState[action.room.id.lat] = action.room.lat;
      currentState[action.room.id.lng] = action.room.lng;
      currentState[action.room.id.name] = action.room.name;
      currentState[action.room.id.description] = action.room.description;
      currentState[action.room.id.price] = action.room.price;
      return currentState;

      // newState[action.room.id] = { ...action.room, name: action.room.name }
      // return newState;
    }
    default:
      return state;
  }
}

export default roomReducer;
