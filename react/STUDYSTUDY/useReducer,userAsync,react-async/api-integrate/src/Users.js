
import React, { useState } from 'react'
import axios from 'axios'
// import useAsync from './useAsync'
import User from './User'
import { useAsync } from 'react-async'


const getUsers = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  )
  return response.data
}
console.log('aaa')
function Users () {
  const [userId, setUserId] = useState(null)
  // const [state, refetch] = useAsync(getUsers, [], true)
  const { data: users, error, isLoading, run } = useAsync({
    // promiseFn: getUsers
    deferFn: getUsers
  })

  // const { loading, data: users, error } = state

  if (isLoading) return <div>로딩중..{console.log('로딩중')}</div>
  if (error) return <div>에러가 발생했습니다{console.log('에러')}</div>
  if (!users) return <><button onClick={run}>불러오기</button>{console.log('없음')}</>

  return (
    <>
      <ul>
        { users.map(user => (
          <li key={ user.id } onClick={() => setUserId(user.id)}>
            { user.username } ({ user.name })
          </li>
        ))}
      </ul>
      <button onClick={ run }>다시 불러오기</button>
      {userId && <User id={userId} />}
      {console.log('Users 리턴함')}
    </>
  )
}

export default Users

// import React, { useEffect, useReducer } from 'react';
// import axios from 'axios';

// // reducer 함수
// function reducer(state, action) {
//   console.log('call reducer fn')
//   switch (action.type) {
//     case 'LOADING':
//       return {
//         loading: true,
//         data: null,
//         error: null
//       };
//     case 'SUCCESS':
//       return {
//         loading: false,
//         data: action.data,
//         error: null
//       };
//     case 'ERROR':
//       return {
//         loading: false,
//         data: null,
//         error: action.error
//       };
//     default:
//       throw new Error(`Unhandled action type: ${action.type}`);
//   }
// }

// function Users() {
//   console.log('call Users component')
//   // useReducer 셋팅
//   const [state, dispatch] = useReducer(reducer, {
//     loading: false,
//     data: null,
//     error: null
//   });

//   // users 데이터를 가져오는 함수
//   const fetchUsers = async () => {
//     console.log('call fetchUsers fn')
//     // 로딩
//     dispatch({ type: 'LOADING' });
//     // axios 요청, 에러 처리
//     try {
//       const response = await axios.get(
//         'https://jsonplaceholder.typicode.com/users'
//       );
//       dispatch({ type: 'SUCCESS', data: response.data });
//     } catch (e) {
//       dispatch({ type: 'ERROR', error: e });
//     }
//   };

//   useEffect(() => {
//     console.log('call Users useEffect')
//     fetchUsers();
//   }, []);

//   // state.data 를 users 키워드로 조회
//   const { loading, data: users, error } = state
  
//   if (loading) return <div>로딩중..{console.log('Users Loading')}</div>
//   if (error) return <div>에러가 발생했습니다{console.log('Users Error')}</div>
//   if (!users) return <>{console.log('Users Nothing')}</>
//   return (
//     <>
//       {console.log('Users rendered')}
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             {user.username} ({user.name})
//           </li>
//         ))}
//       </ul>
//       <button onClick={fetchUsers}>다시 불러오기</button>
//     </>
//   );
// }

// export default Users;
