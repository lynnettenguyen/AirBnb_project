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

const findOwnRooms = (rooms) => ({
  type: FIND_OWN_ROOMS,
  rooms
})

const editRoom = (updatedRoom) => ({
  type: EDIT_ROOM,
  updatedRoom
})

const createRoom = () => ({
  type: CREATE_ROOM
})

const deleteRoom = () => ({
  type: DELETE_ROOM
})

export const listAllRooms = () => async (dispatch) => {
  const response = await fetch(`/api/rooms`);
  if (response.ok) {
    const roomsObj = await response.json();
    // console.log(typeof roomsObj.Rooms)
    console.log(roomsObj)
    dispatch(listRooms(roomsObj.Rooms))
  }
  return response;
}

export const findRoomById = (roomId) => async (dispatch) => {
  const response = await fetch(`/api/rooms/${roomId}`)
  if (response.ok) {
    const room = await response.json()
    dispatch(findRoom(room))
  }
  return response;
}

export const updateRoom = (roomData) => async (dispatch) => {
  const { roomId, ownerId, address, city, state, country, lat, lng, name, description, price } = roomData
  const response = await fetch(`/api/rooms/${roomId}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ownerId, address, city, state, country, lat, lng, name, description, price
    })
  })
  if (response.ok) {
    const updatedRoom = await response.json()
    dispatch(editRoom(updatedRoom));
    return updatedRoom;
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
    case EDIT_ROOM: {
      newState[action.updatedRoom.id] = action.updatedRoom;
      return newState;
    }
    default:
      return state;
  }
}

export default roomReducer;
