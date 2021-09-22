import * as api from 'api/movies.js'
import {
  reducerUtils,
  handleAsyncActions
} from 'state/asyncUtils'
import { put, call, takeLatest} from 'redux-saga/effects'

const GET_WEEKLY_DATA = 'GET_WEEKLY_DATA'
const GET_WEEKLY_DATA_SUCCESS = 'GET_WEEKLY_DATA_SUCCESS'
const GET_MOVIE_INFO = 'GET_MOVIE_INFO'
const GET_MOVIE_INFO_SUCCESS = 'GET_MOVIE_INFO_SUCCESS'

export const getWeeklyData = (payload) => ({type: GET_WEEKLY_DATA, data: payload})
export const getMovieInfo = (payload) => ({type: GET_MOVIE_INFO, data: payload})


function* getWeeklyDataSaga(payload) {
  try {
    const data = yield call(api.getWeeklyData, payload.data)
    yield put({
      type: GET_WEEKLY_DATA_SUCCESS,
      payload: data
    })
  } catch (e) {
    console.log(e)
  }
}

function* getMovieInfoSaga(payload) {
  try {
    const data = yield call(api.getMovieInfo, payload.data)
    yield put({
      type: GET_MOVIE_INFO_SUCCESS,
      payload: data
    })
  } catch (e) {
    console.log(e)
  }
}

export function* getMovieSaga() {
  yield takeLatest(GET_WEEKLY_DATA, getWeeklyDataSaga)
  yield takeLatest(GET_MOVIE_INFO, getMovieInfoSaga)
}

const initialState = {
  weeklyData: reducerUtils.initial(),
  movieInfo: reducerUtils.initial()
}

export default function movieData(state = initialState, action) {
  switch (action.type) {
    case GET_WEEKLY_DATA:
    case GET_WEEKLY_DATA_SUCCESS:
      return handleAsyncActions(GET_WEEKLY_DATA, 'weeklyData', true)(state, action)
    case GET_MOVIE_INFO:
    case GET_MOVIE_INFO_SUCCESS:
      return handleAsyncActions(GET_MOVIE_INFO, 'movieInfo', true)(state, action)
    default:
      return state
  }
}

