import { put, delay, takeEvery, takeLatest } from 'redux-saga/effects'

const LIKE = 'LIKE'
const HATE = 'HATE'
const LIKE_ASYNC = 'LIKE_ASYNC'
const HATE_ASYNC = 'HATE_ASYNC'
const CHANGE_NUM = 'CHANGE_NUM'
const CHANGE_NUM_ASYNC = 'CHANGE_NUM_ASYNC'

export const like = () => ({ type: LIKE })
export const hate = () => ({ type: HATE })
export const likeAsync = () => ({ type: LIKE_ASYNC })
export const hateAsync = () => ({ type: HATE_ASYNC })
export const changeNum = (number: {movieCd: Number}) => ({ type: CHANGE_NUM, number: number.movieCd })
export const changeNumAsync = (number: {number: number}) => ({ type: CHANGE_NUM_ASYNC, number: number.number })

function* likeSaga() {
  yield delay(1)
  yield put(like())
}

function* hateSaga() {
  yield delay(1)
  yield put(hate())
}


function* changeNumSaga(number: number) {
  yield delay(1)
  yield put({
    type: CHANGE_NUM,
    number: number
  })
}

export function* counterSaga() {
  yield takeEvery(LIKE_ASYNC, likeSaga)
  yield takeEvery(HATE_ASYNC, hateSaga)
  yield takeLatest(CHANGE_NUM_ASYNC, changeNumSaga)
}

type initialStateType = 
  | { number: number } 
  | { }

type ActionType = 
  | { type: 'LIKE' }
  | { type: 'HATE' }
  | { type: 'CHANGE_NUM'; number: number }
  | { type: 'LIKE_ASYNC' }
  | { type: 'HATE_ASYNC' }
  | { type: 'CHANGE_NUM_ASYNC'; number: number }

const initialState: initialStateType = { }

export default function counter(state: initialStateType = initialState, action: ActionType) {
  const number: number = state.number
  if (number === undefined) {
    // pass
  } else if (state[`${number}_LIKE`] === undefined || state[`${number}_LIKE`] === null) {
    state[`${number}_LIKE`] = 0
    state[`${number}_HATE`] = 0
  }
  const count_like = state[`${number}_LIKE`]
  const count_hate = state[`${number}_HATE`]
  switch (action.type) {
    case LIKE:
      return { ...state, [`${number}_LIKE`]: count_like+1}
    case HATE:
      return { ...state, [`${number}_HATE`]: count_hate-1}
    case CHANGE_NUM:
      return { ...state, number: action.number}
    default:
      return state
  }
}
