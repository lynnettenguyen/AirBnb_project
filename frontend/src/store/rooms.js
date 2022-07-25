const LIST_ROOMS = 'rooms/LIST_ROOMS'
const FIND_ROOM = 'rooms/FIND_ROOM'

export const getAllRooms = (state) => Object.values(state.rooms)

const listRooms = (rooms) => ({
  type: LIST_ROOMS,
  rooms
})

const findRoom = (room) => ({
  type: FIND_ROOM,
  room
})

export const listAllRooms = () => async (dispatch) => {
  const response = await fetch(`/api/rooms`);
  if (response.ok) {
    const roomsObj = await response.json();
    // console.log(typeof roomsObj.Rooms)
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

const initialState = {}
const roomReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case LIST_ROOMS: {
      for (let room of action.rooms) newState[room.id] = room
      return newState
    }
    case FIND_ROOM: {
      newState[action.room.id] = action.room;
      return newState;
    }
    default:
      return state;
  }
}

export default roomReducer;
