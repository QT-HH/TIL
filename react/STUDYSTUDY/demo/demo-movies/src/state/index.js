import { combineReducers } from 'redux'
import movieData, { getMovieSaga } from './MovieData'
import counter, {counterSaga} from 'state/LikeHate'
import { all } from 'redux-saga/effects'


const rootReducer = combineReducers({ movieData, counter })
export function* rootSaga() {
  yield all([getMovieSaga(), counterSaga()])
}

export default rootReducer