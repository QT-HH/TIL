import React from 'react'
import 'components/common/CommonCard.styl'
import { useDispatch } from 'react-redux'
import { getMovieInfo } from 'state/MovieData'
import { changeNum } from 'state/LikeHate'

interface MovieInfo = {

}

const CommonCard = (props) => {
  const dispatch = useDispatch()
  const movieCd = props.movie.movieCd
  const getData = () => {
    dispatch(getMovieInfo({ movieCd: movieCd }))
    dispatch(changeNum({ movieCd: movieCd }))
  }

  return (
    <>
      <div className={'card'} onClick={getData}>
        <img src="http://placehold.it/240x200" />
        <h3>{props.movie.movieNm}</h3>
        <span>개봉일 : {props.movie.openDt}</span>
        <div className={'movieContent'}>
          영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 영화정보가 없어용 
        </div>
      </div>
    </>
  )
}

export default CommonCard