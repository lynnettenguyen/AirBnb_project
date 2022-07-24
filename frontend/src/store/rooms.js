const LIST_ROOMS = 'rooms/LIST_ROOMS'

export const getAllRooms = (state) => Object.values(state.rooms)

const listRooms = (rooms) => ({
  type: LIST_ROOMS,
  payload: rooms
})

export const listAllRooms = () => async (dispatch) => {
  const response = await fetch(`/api/rooms`);
  if (response.ok) {
    const roomsObj = await response.json();
    // console.log(typeof roomsObj.Rooms)
    dispatch(listRooms(roomsObj.Rooms))
  }
}

const initialState = {}
const roomReducer = (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case LIST_ROOMS: {
      for (let room of action.payload) newState[room.id] = room
      return {...state, ...newState};
    }
    default:
      return state;
  }
}

export default roomReducer;
