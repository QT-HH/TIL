import React from 'react'
import { useAsync } from 'react-async'
// import { IfFulfilled } from 'react-async'

async function getUser({ id, method }, { signal }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: method }, { signal })
  if (!response.ok) console.log('err')
  return response.json()
}

function User({ id }) {
  // IfFulFilled 쓸 때
  // const [state] = useAsync(() => getUser(id), [id])
  // const { loading, data: user, error } = state

  const { data: user, error, isLoading } = useAsync({
    promiseFn: getUser,
    id,
    watch: id,
    method: 'GET',
    onResolve: () => console.log('Resolved'),
    onCancel: () => console.log('Canceled')
  })


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