import React from 'react'
import 'components/common/CommonDialog.styl'
import { useDispatch } from 'react-redux'
import { getMovieInfo } from 'state/MovieData';

const CommonDialog = ({...props}) => {
  // const movieCd = props
  const dispatch = useDispatch()
  const deleteData = () => {
    dispatch(getMovieInfo({ movieCd: null }))
  }

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
        <span className={'count'}>0</span>
        <button>좋아요</button>
        <button>싫어요</button>
        <span className={'count'}>0</span>
      </div>
    </>
  )
}

export default CommonDialog