import {
  REQUEST_FAILURE,
  REQUEST_STARTED,
  REQUEST_SUCCESS
} from '../config/commonTypes'
import {actionTypes} from '../actions/publication'

const initialState = {
    publications: [],
    searchedPublications: [],
    loading: false,
    error: null
}

export default (state = initialState, action)=>{
    switch (action.type) {
        case REQUEST_STARTED(actionTypes.GET_PUBLICATIONS):
        case REQUEST_STARTED(actionTypes.SEARCH_PUBLICATIONS):
            return {
                ...state,
                loading: true
            }
        case REQUEST_FAILURE(actionTypes.GET_PUBLICATIONS):
        case REQUEST_FAILURE(actionTypes.SEARCH_PUBLICATIONS):
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case REQUEST_SUCCESS(actionTypes.GET_PUBLICATIONS):
            return {
                ...state,
                loading: false,
                error: null,
                publications: action.payload.data
            }
        case REQUEST_SUCCESS(actionTypes.SEARCH_PUBLICATIONS):
            return {
                ...state,
                loading: false,
                error: null,
                searchedPublications: action.payload.data
            }
        default:
            return state
    }
};
