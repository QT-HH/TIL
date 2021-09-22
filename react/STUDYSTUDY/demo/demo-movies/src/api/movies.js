const key = 'f75fb1679b76f50c359afdc85053e53a'
const weeklyUrl = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json'
// const dailyUrl = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json'
const infoUrl = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json'

export const getWeeklyData = async (body) => {
  const requestUrl = weeklyUrl + '?key=' + key + '&targetDt=' + body.targetDt
  const data = await fetch(requestUrl).then(res => {
    return res.json()
  })
  .catch(err =>{
    console.log(err)
  })
  return data.boxOfficeResult
}

export const getMovieInfo = async (body) => {
  console.log('body',body)
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