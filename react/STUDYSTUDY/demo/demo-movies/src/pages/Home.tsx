import React, { useEffect } from 'react'
// import { Route } from 'react-router-dom'
import 'pages/Home.styl'
import { useSelector, useDispatch } from 'react-redux'
import { getWeeklyData } from 'state/MovieData'
import CommonCard from 'components/common/CommonCard'
import CommonDialog from 'components/common/CommonDialog'
import { RootState } from 'state/index'

type weeklyDataType = 
  | {
      movieNm: string
      openDt: string
      movieCd: string
    }
  | {
    movieNm: string
    movieNmEn: string
    openDt: string
    movieCd: string
    }

function Home () {
  const weeklyData = useSelector((state: RootState) => state.movieData.weeklyData)
  console.log(weeklyData.data)
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
      <div className={'cardContainer'}>
        {!!weeklyData.data && 
          weeklyData.data.map((movie: weeklyDataType, index: number) => (
            <CommonCard key={index} movie={movie} />))
        }
      </div>
      { !!infoData.data && <CommonDialog info={infoData.data}/>}
    </>
  )
}

export default Home