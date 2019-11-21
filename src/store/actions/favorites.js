export const addFavoriteRequest = (repository) => ({
  type: 'ADD_FAVORITES_REQUEST',
  payload: { repository }
})

export const addFavoriteSuccess = (data) => ({
  type: 'ADD_FAVORITES_SUCCESS',
  payload: { data }
})
