const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_FAVORITES_REQUEST":
      return { ...state, loading: true };
    case "ADD_FAVORITES_FAILURE":
      return { ...state, loading: false, error: action.payload.error };
    case "ADD_FAVORITES_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      };
    default:
      return state;
  }
}
