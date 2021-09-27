import React from 'react'
import 'components/common/CommonCard.styl'
import { useDispatch } from 'react-redux'
import { getMovieInfo } from 'state/MovieData'
import { changeNum } from 'state/LikeHate'

function CommonCard ({movie}) {
  const dispatch = useDispatch()
  const movieCd = movie.movieCd
  const getData = () => {
    dispatch(getMovieInfo({ movieCd: movieCd }))
    dispatch(changeNum({ movieCd: movieCd }))
  }

  return (
    <>
      <div className={'card'} onClick={getData}>
        <img src="http://placehold.it/240x200" alt="이미지 없음"/>
        <h3>{movie.movieNm}</h3>
        <span>개봉일 : {movie.openDt}</span>
        <div className={'movieContent'}>
          영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 
        </div>
      </div>
    </>
  )
}

export default CommonCard