import React, { useState } from 'react';
// import { Route } from 'react-router-dom'
import 'pages/Home.styl'
import { useSelector, useDispatch } from 'react-redux'
import { getWeeklyDataName } from 'state/MovieData';
import CommonCard from 'components/common/CommonCard'
import CommonDialog from 'components/common/CommonDialog'
import { RootState } from 'state/index'


const About: React.FC = () => {
  const [input, setInput] = useState<String>('')
  const weeklyData = useSelector((state: RootState) => state.movieData.weeklyDataName)
  const infoData = useSelector((state: RootState) => state.movieData.movieInfo)
  // const body = { movieNm: input }
  const dispatch = useDispatch()

  const getData = () => {
    dispatch(getWeeklyDataName({ movieNm: input }))
  }
  const valChange = (e) => {
    setInput(e.target.value)
  }
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      getData()
    }
  }
  return (
    <>
      <h1>이름으로 검색</h1>
      <input type="text" onChange={valChange} onKeyPress={onKeyPress}/>
      <button onClick={getData}>검색</button>
      <div className={'cardContainer'}>
        {!!weeklyData.data && 
          weeklyData.data.map((movie, index) => (
            <CommonCard key={index} movie={movie} />))
        }
      </div>
      { !!infoData.data && <CommonDialog info={infoData.data}/>}
    </>
  )
}

export default About