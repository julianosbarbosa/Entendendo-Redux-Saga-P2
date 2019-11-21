const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITES_SUCCESS':
      return [...state, action.payload.data];
    default:
      return state
  }
}
