import React from 'react'
import { useFetch } from 'react-async'
// import { IfFulfilled } from 'react-async'


function User({ id }) {

  // useFetch
  const headers = {Accept: 'application/json'}
  const { data: user, error, isLoading, run} = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`, { headers:{...headers}, method: 'GET' })
  // IfFulfilled 쓸 때
  // const state = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`, { headers: {Accept: 'application/json'}, method: 'GET' })
  const runFn = () => {
    run(init => ({
      ...init
    }))
  }
  runFn()

  if (isLoading) return <div>로딩중..{console.log('user 로딩')}</div>
  if (error) return <div>에러 발생{console.log('user error')}</div>
  if (!user) return <>{console.log('user none')}</>

  return (
    <div>
      <h2>{ user.username }</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
      {/* <IfFulfilled state={state}>{data => (<div>{data.name}</div>)}</IfFulfilled> */}
    </div>
  )
}

export default User