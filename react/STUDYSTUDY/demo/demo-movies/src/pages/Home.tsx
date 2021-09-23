import React, { useEffect } from 'react';
// import { Route } from 'react-router-dom'
import 'pages/Home.styl'
import { useSelector, useDispatch } from 'react-redux'
import { getWeeklyData } from 'state/MovieData';
import CommonCard from 'components/common/CommonCard'
import CommonDialog from 'components/common/CommonDialog'
import { RootState } from 'state/index'

const Home = () => {
  const weeklyData = useSelector((state: RootState) => state.movieData.weeklyData)
  const infoData = useSelector((state: RootState) => state.movieData.movieInfo)
  const state = useSelector(state => state)
  const body = { targetDt: '20210917' }
  const dispatch = useDispatch()

  const getData = () => {
    dispatch(getWeeklyData(body))
  }
  const check = () => {
    console.log(state)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <h1>주간 박스오피스</h1>
      <button onClick={check}>state</button>
      {/* <button onClick={getData}>데이터 불러오기</button> */}
      {/* <button>이름순 정렬</button> */}
      <div className={'cardContainer'}>
        {!!weeklyData.data && 
          weeklyData.data.weeklyBoxOfficeList.map((movie, index) => (
            <CommonCard key={index} movie={movie} />))
        }
      </div>
      { !!infoData.data && <CommonDialog info={infoData.data}/>}
    </>
  )
}

export default Home