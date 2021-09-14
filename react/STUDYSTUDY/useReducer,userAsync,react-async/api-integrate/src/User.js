import React from 'react'
// import axios from 'axios'
// import useAsync from './useAsync'
import { useFetch, IfFulfilled } from 'react-async'
// import { useAsync } from 'react-async'
// import { createInstance } from 'react-async'

// async function getUser({ id, method }, { signal }) {
//   // const response = await axios.get(
//   //   `https://jsonplaceholder.typicode.com/users/${id}`
//   // )
//   // return response.data
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: method }, { signal })
//   // AbortController.abort()
//   console.log(response)
//   if (!response.ok) console.log('err')
//   return response.json()
// }

function User({ id }) {
  // const [state] = useAsync(() => getUser(id), [id])
  // const { loading, data: user, error } = state

  // const AsyncUser = createInstance({ promiseFn: getUser, method: 'GET'}, "AsyncPlayer")

  // const { data: user, error, isLoading } = useAsync({
  //   promiseFn: getUser,
  //   id,
  //   watch: id,
  //   method: 'GET',
  //   onResolve: () => console.log('Resolved'),
  //   onCancel: () => console.log('Canceled')
  // })
  const headers = {}
  const { user, error, isLoading, run} = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`, { headers: {}, method: 'GET' })

  run(init => ({
    ...init,
    headers: { ...headers, method: 'POST' }
  }))

  if (isLoading) return <div>로딩중..{console.log('user 로딩')}</div>
  if (error) return <div>에러 발생{console.log('user error')}</div>
  if (!user) return <>{console.log('user none')}</>

  return (
    <div>
      <h2>{ user.username }</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <IfFulfilled state={user}>풀필풀필풀필</IfFulfilled>
    </div>
    // <div>
    //   <AsyncUser id={id}>
    //     <AsyncUser.Fulfilled>{user => user.name}</AsyncUser.Fulfilled>
    //   </AsyncUser>
    // </div>
  )
}

export default User