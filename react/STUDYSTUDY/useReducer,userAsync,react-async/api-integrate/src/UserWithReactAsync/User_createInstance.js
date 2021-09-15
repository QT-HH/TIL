import React from 'react'
import { createInstance } from 'react-async'

async function getUser({ id, method }, { signal }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: method }, { signal })
  if (!response.ok) console.log('err')
  return response.json()
}

function User({ id }) {
  const AsyncUser = createInstance({ promiseFn: getUser, method: 'GET'}, "AsyncPlayer")

  return (
    <div>
      <AsyncUser id={id}>
        <AsyncUser.Fulfilled>
          {user => (
          <div>
            <h2>{user.username}</h2>
            <p>
              <b>Email:</b> {user.email}
            </p>
          </div>
          ) }
          {/* <p>
            <b>Email:</b> {user => user.email}
          </p>
            {user => user.name} */}
        </AsyncUser.Fulfilled>
      </AsyncUser>
    </div>
  )
}

export default User