const key = '9502f4cc5627e9a2111c6e6e83bfe8fe'
const weeklyUrl = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json'
// const dailyUrl = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json'
const infoUrl = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json'
const nameUrl = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json'

export const getWeeklyData = async (body) => {
  const requestUrl = weeklyUrl + '?key=' + key + '&targetDt=' + body.targetDt

  const result = await fetch(requestUrl).then(res => {
    return res.json()
  })
  .catch(err => {
    console.log(err)
  })
  const dataArr = result.boxOfficeResult.weeklyBoxOfficeList
  const dataArrRes = dataArr.map(data => {
    return {
      movieNm: data.movieNm,
      openDt: data.openDt,
      movieCd: data.movieCd
    }
  })
  console.log('asdf', dataArrRes)
  return dataArrRes
}

export const getWeeklyDataName = async (body) => {
  const requestUrl = nameUrl + '?key=' + key + '&movieNm=' + body.movieNm

  const result = await fetch(requestUrl).then(res => {
    return res.json()
  })
  .catch(err =>{
    console.log(err)
  })

  const dataArr = result.movieListResult.movieList
  const dataArrRes = dataArr.map(data => {
    return {
      movieNm: data.movieNm,
      movieNmEn: data.movieNmEn,
      openDt: data.openDt,
      movieCd: data.movieCd,
    }
  })
  return dataArrRes
}

export const getMovieInfo = async (body) => {
  if (!body.movieCd) {
    return null
  }
  const requestUrl = infoUrl + '?key=' + key + '&movieCd=' + body.movieCd
  const data = await fetch(requestUrl).then(res => {
    return res.json()
  })
  .catch(err =>{
    console.log(err)
  })
  return data.movieInfoResult.movieInfo
}