import axios from 'axios'
import {API_URL} from '../config/utils'
import {
  REQUEST_FAILURE,
  REQUEST_STARTED,
  REQUEST_SUCCESS
} from '../config/commonTypes'

export const actionTypes = {
  GET_AUTHORS: 'GET_AUTHORS',
  GET_AUTHOR_PUBLICATIONS: 'GET_AUTHOR_PUBLICATIONS'
}

const authorsUrl = `${API_URL}/authors`;

export const getAuthors = () => {
  return dispatch => {
    dispatch(getAuthorsStarted())
    axios
      .get(authorsUrl)
      .then(res => dispatch(getAuthorsSuccess(res.data.data)))
      .catch(err => dispatch(getAuthorsFailure(err.message)))
  }
}

export const getAuthorPublications = (authorId) => {
  return dispatch => {
    dispatch(getAuthorPublicationsStarted())
    axios
      .get(`${authorsUrl}/${authorId}/publications`)
      .then(res =>
        dispatch(getAuthorPublicationsSuccess(res.data.data)))
      .catch(err =>
        dispatch(getAuthorPublicationsFailure(err.message)))
  }
}
const getAuthorsSuccess = data => ({
  type: REQUEST_SUCCESS(actionTypes.GET_AUTHORS),
  payload: {
    data
  }
})


const getAuthorsStarted = () => ({
  type: REQUEST_STARTED(actionTypes.GET_AUTHORS)
})

const getAuthorsFailure = error => ({
  type: REQUEST_FAILURE(actionTypes.GET_AUTHORS),
  payload: {
    error
  }
})

const getAuthorPublicationsSuccess = data => ({
  type: REQUEST_SUCCESS(actionTypes.GET_AUTHOR_PUBLICATIONS),
  payload: {
    data
  }
})


const getAuthorPublicationsStarted = () => ({
  type: REQUEST_STARTED(actionTypes.GET_AUTHOR_PUBLICATIONS)
})

const getAuthorPublicationsFailure = error => ({
  type: REQUEST_FAILURE(actionTypes.GET_AUTHOR_PUBLICATIONS),
  payload: {
    error
  }
})
