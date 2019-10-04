import axios from 'axios'
import {API_URL} from '../config/utils'
import {
  REQUEST_FAILURE,
  REQUEST_STARTED,
  REQUEST_SUCCESS
} from '../config/commonTypes'

export const actionTypes = {
  GET_PUBLICATIONS: 'GET_PUBLICATIONS',
  SEARCH_PUBLICATIONS: 'SEARCH_PUBLICATIONS'
}

const publicationsUrl = `${API_URL}/publications`
const searchUrl = `${API_URL}/search`

export const getPublications = (params) => {
  return dispatch => {
    dispatch(getPublicationsStarted())
    axios
      .get(publicationsUrl, {
          params
      })
      .then(res => dispatch(getPublicationsSuccess(res.data.data)))
      .catch(err => dispatch(getPublicationsFailure(err.message)))
  }
}

export const searchByTitle = (searchText) => {
  return dispatch => {
    dispatch(searchPublicationsStarted())
    axios
      .get(`${searchUrl}/${searchText}`)
      .then(res => dispatch(searchPublicationsSuccess(res.data.data)))
      .catch(err => dispatch(searchPublicationsFailure(err.message)))
  }
}

const getPublicationsSuccess = data => ({
  type: REQUEST_SUCCESS(actionTypes.GET_PUBLICATIONS),
  payload: {
    data
  }
})


const getPublicationsStarted = () => ({
  type: REQUEST_STARTED(actionTypes.GET_PUBLICATIONS)
})

const getPublicationsFailure = error => ({
  type: REQUEST_FAILURE(actionTypes.GET_PUBLICATIONS),
  payload: {
    error
  }
})

const searchPublicationsSuccess = data => ({
  type: REQUEST_SUCCESS(actionTypes.SEARCH_PUBLICATIONS),
  payload: {
    data
  }
})


const searchPublicationsStarted = () => ({
  type: REQUEST_STARTED(actionTypes.SEARCH_PUBLICATIONS)
})

const searchPublicationsFailure = error => ({
  type: REQUEST_FAILURE(actionTypes.SEARCH_PUBLICATIONS),
  payload: {
    error
  }
})
