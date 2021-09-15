import React from 'react'
// import axios from 'axios'
// import useAsync from './useAsync'
import { useFetch, IfFulfilled } from 'react-async'
// import { useAsync, IfFulfilled } from 'react-async'
// import { createInstance } from 'react-async'
// import Async from 'react-async'

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
  // useAsync
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

  // useFetch
  const headers = {Accept: 'application/json'}
  const { data: user, error, isLoading, run} = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`, { headers:{...headers}, method: 'GET' })
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

  // use async with helperComponent
  // const state = useAsync({promiseFn: getUser, id: id, watch: id, method: 'GET'})

  // use Async
  // return (
  //   <Async promiseFn={getUser} id={id} method={'GET'} watch={id}>
  //     {({ data, error, isPending }) => {
  //       if (isPending) return "Loading..."
  //       if (error) return "error!!"
  //       if (data) {
  //         return (
  //           <div>
  //             <pre>{JSON.stringify(data.name, null, 2)}</pre>
  //           </div>
  //         )
  //       }

  //       return <div>I don't know</div>
  //     }}
  //   </Async>
  // )

  return (
    <div>
      <h2>{ user.username }</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
      {/* <IfFulfilled state={state}>{data => (<div>{data.name}</div>)}</IfFulfilled> */}
    </div>
    // <div>
    //   <AsyncUser id={id}>
    //     <AsyncUser.Fulfilled>{user => user.name}</AsyncUser.Fulfilled>
    //   </AsyncUser>
    // </div>
  )
}

export default User