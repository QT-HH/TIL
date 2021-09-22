import { put, delay, takeEvery, takeLatest } from 'redux-saga/effects'

const LIKE = 'LIKE'
const HATE = 'HATE'
const LIKE_ASYNC = 'LIKE_ASYNC'
const HATE_ASYNC = 'HATE_ASYNC'
const INITIALIZE = 'INITIALIZE'
const CHANGE_NUM = 'CHANGE_NUM'
const INITIALIZE_ASYNC = 'INITIALIZE_ASYNC'
const CHANGE_NUM_ASYNC = 'CHANGE_NUM_ASYNC'

export const like = (number) => ({ type: LIKE, number: number })
export const hate = (number) => ({ type: HATE, number: number })
export const likeAsync = (number) => ({ type: LIKE_ASYNC, number: number})
export const hateAsync = (number) => ({ type: HATE_ASYNC, number: number})
export const initialize = () => ({ type: INITIALIZE })
export const changeNum = (number) => ({ type: CHANGE_NUM, number: number})
export const initializeAsync = () => ({ type: INITIALIZE_ASYNC })
export const changeNumAsync = (number) => ({ type: CHANGE_NUM_ASYNC, number: number})

function* likeSaga(number) {
  yield delay(1)
  yield put(like(number))
}

function* hateSaga(number) {
  yield delay(1)
  yield put(hate(number))
}

function* initializeSaga() {
  yield delay(1)
  yield put(initialize)
}

function* changeNumSaga(number) {
  yield delay(1)
  yield put(changeNum(number))
}

export function* counterSaga() {
  yield takeEvery(LIKE_ASYNC, likeSaga)
  yield takeEvery(HATE_ASYNC, hateSaga)
  yield takeLatest(INITIALIZE, initializeSaga)
  yield takeLatest(CHANGE_NUM, changeNumSaga)
}

const initialState = { count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], number: 0}

export default function counter(state = initialState, action) {
  console.log('action',action)
  const newCount = state.count.slice()
  switch (action.type) {
    case LIKE:
      newCount[action.number] += 1
      return { ...state, count: newCount}
    case HATE:
      newCount[action.number] -= 1
      return { ...state, count: newCount}
    case INITIALIZE:
      return { count: [0,0,0,0,0,0,0,0,0,0], number: 0 }
    // case CHANGE_NUM:
    //   return { ...state, number: action.number }
    default:
      return state
  }
}
