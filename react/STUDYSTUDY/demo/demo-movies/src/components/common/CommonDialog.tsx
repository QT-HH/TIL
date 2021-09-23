import React from 'react'
import 'components/common/CommonDialog.styl'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieInfo } from 'state/MovieData';
import { like, hate } from 'state/LikeHate';
import { RootState } from 'state/index'

const CommonDialog = ({...props}) => {
  // const movieCd = props
  const dispatch = useDispatch()
  const deleteData = () => {
    dispatch(getMovieInfo({ movieCd: null }))
  }
  const onLike = () => {
    dispatch(like())
  }
  const onHate = () => {
    dispatch(hate())
  }
  const count = useSelector((state: RootState) => state.counter)

  return (
    <>
      <div className={'info'}>
        <img src="http://placehold.it/480x600" alt="" onClick={deleteData} />
        <h3>{props.info.movieNm}</h3>
        <h3>{props.info.movieNmEn}</h3>
        <span>개봉일 : {props.info.openDt}</span>
        <div className={'movieContent'}>
          영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 
        </div>
        <span className={'count'}>{count[`${props.info.movieCd}_LIKE`]}</span>
        <button onClick={onLike}>좋아요</button>
        <button onClick={onHate}>싫어요</button>
        <span className={'count'}>{count[`${props.info.movieCd}_HATE`]}</span>
      </div>
    </>
  )
}

export default CommonDialog