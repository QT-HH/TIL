import React from 'react'
import Async from 'react-async'

async function getUser({ id, method }, { signal }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: method }, { signal })
  if (!response.ok) console.log('err')
  return response.json()
}

function User({ id }) {

  return (
    <Async promiseFn={getUser} id={id} method={'GET'} watch={id}>
      {({ data: user, error, isPending }) => {
        if (isPending) return "Loading..."
        if (error) return "error!!"
        if (user) {
          return (
            <div>
              <h2>{user.username}</h2>
              <p>
                <b>Email:</b> {user.email}
              </p>
          </div>
          )
        }
      }}
    </Async>
  )
}

export default User