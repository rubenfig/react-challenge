import {
  REQUEST_FAILURE,
  REQUEST_STARTED,
  REQUEST_SUCCESS
} from '../config/commonTypes'
import {actionTypes} from '../actions/author'

const initialState = {
  authors: [],
  authorPublications: [],
  loading: false,
  error: null
}

export default (state = initialState, action)=>{
  switch (action.type) {
    case REQUEST_STARTED(actionTypes.GET_AUTHORS):
    case REQUEST_STARTED(actionTypes.GET_AUTHOR_PUBLICATIONS):
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE(actionTypes.GET_AUTHORS):
    case REQUEST_FAILURE(actionTypes.GET_AUTHOR_PUBLICATIONS):
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case REQUEST_SUCCESS(actionTypes.GET_AUTHORS):
      return {
        ...state,
        loading: false,
        error: null,
        authors: action.payload.data
      }
    case REQUEST_SUCCESS(actionTypes.GET_AUTHOR_PUBLICATIONS):
      return {
        ...state,
        loading: false,
        error: null,
        authorPublications: action.payload.data && action.payload.data.publications
      }
    default:
      return state
  }
};
