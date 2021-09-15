# useReducer

> `useState`로 상태를 관리하는데, `useReducer`로도 상태를 관리할 수 있다.

```react
// Counter.js
import React, { useState } from 'react'

function Counter () {
  const [number, setNumber] = useState(0)
  
  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1)
  }
  
  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1)
  }
  return (
	<div>
  	<h1>{number}</h1>
    <button onClick={onIncrease}>+1</button>
    <button onClick={onDecrease}>-1</button>
  </div>
	)
}

export default Counter
```

위 코드를 `useReducer`를 이용하여 바꾼다면?



## Reducer란?

`reducer`는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수이다.

```react
function reducer(state, action) {
  // 새로운 상태를 만드는 로직
  // const nextState = ...
  return nextState
}
```

reducer에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태가 된다.

여기서 `action`은 업데이트를 위한 정보를 가지고 있다.주로 `type`값을 지닌 객체 형태로 사용하지만, 꼭 따라야할 규칙은 따로 없다.

예시)

```react
// 카운터에 1을 더하는 액션
{
  type: 'INCREMENT'
}

// 카운터에 1을 빼는 액션
{
  type: 'DECREMENT'
}

// input 값을 바꾸는 액션
{
  type: 'CHANGE_INPUT',
  key: 'email',
 	value: 'tester@react.com'
}

// 새 할 일을 등록하는 액션
{
  type: 'ADD_TODO',
  todo: {
    id: 1,
    text: 'useReducer 배우기',
    done: false
  }
}
```

`type`을 대문자와 `_`로 구성하는 관습이 있긴하다.



## useReducer의 사용법

```react
const [state, dispatch] = useReducer(reducer, initialState)
```

- `state`: 컴포넌트에서 사용할 상태

- `dispatch`: 액션을 발생시키는 함수

  ```react
  dispatch({ type: 'INCREMENT' })
  ```

- `useReducer`에 넣는 첫 번째 param는 `reducer`함수, 두 번째 param은 초기 상태이다.



## useReducer를 이용하여 Counter 구현

```react
// Counter.js (useReducer)
import React, { useReducer } from 'react'

function ruducer(state, action) {
   switch (action.type) {
     case 'INCREMENT':
       return state + 1;
     case 'DECREMENT':
       return state - 1;
     default:
       return state
   }
}

function Counter () {
  const [number, dispatch] = useReducer(reducer, 0);
  
  const onIncrease = () => {
    dispatch({ type: 'INCREMENT' })
  }
  
  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' })
  }
  
  return (
  	<div>
    	<h1>{number}</h1>
      <button onClick={ onIncrease }>+1</button>
      <button onClick={ onDecrease }>-1</button>
    </div>
  )
}

export default Counter
```





# useReducer로 요청상태 관리

> useReducer를 사용하여 LOADING, SUCCESS, ERROR 액션에 따라 컴포넌트를 다르게 return 할 수 있다.

```react
.........

// reducer 함수
function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function Users() {
  // useReducer 셋팅
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null
  });

  // users 데이터를 가져오는 함수
  const fetchUsers = async () => {
    // 로딩 on!
    dispatch({ type: 'LOADING' });
    // axios 요청, 에러 처리
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      dispatch({ type: 'SUCCESS', data: response.data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // state.data 를 users 키워드로 조회
  const { loading, data: users, error } = state
  
  if (loading) return <div>로딩중..</div>
  if (error) return <div>에러가 발생했습니다</div>
  if (!users) return null
  return ( ...... );
}

export default Users;
```







# useAsync custom Hook으로 요청상태 관리

> useAsync는 custom Hook으로 만들어 쓰기도하고 `react-async`에서 가져다쓰기도 한다.
>
> 주로 restAPI를 요청하고 로딩, 성공, 에러 처리를 하기위해 쓴다.

```react
// useAsync.js

import { useReducer, useEffect } from 'react';

function reducer (state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useAsync(callback, deps = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false
  });

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    if (skip) return;
    fetchData();
  }, deps);

  return [state, fetchData];
}

export default useAsync;
```

```react
// Users.js
........

async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
}

function Users() {
  const [state, refetch] = useAsync(getUsers, []);

  const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  
  return ( ..... )
.........
```







# react-async

> useAsync, useFetch, Async, createInstance등 사용할 수 있는 훅과 컴포넌트들이 있다.

```
// 설치
npm install react-async
```



## useAsync

```react
// 기본형태
const state = useAsync(options)
```



```react
// Users.js

import { useAsync } from "react-async"

// async/await을 쓸 수 있다.
const loadPlayer = async ({ playerId }, { signal }) => {
  const res = await fetch(`/api/players/${playerId}`, { signal })
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}

const MyComponent = () => {
  const { data, error, isPending, reload } = useAsync({ 
    promiseFn: loadPlayer, 
    playerId: 1,
    watch: playerId
  }) // deferFn, run, watchFn
  
  if (isPending) return "Loading..."
  if (error) return `Something went wrong: ${error.message}`
  if (data)
    return (
      <div>
        <strong>Player data:</strong>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <button onClick={reload}>reload!!!!</button>
      </div>
    )
  return null
}
```





## with helper components

```react
import { useAsync, IfPending, IfFulfilled, IfRejected } from "react-async"

const loadPlayer = async ({ playerId }, { signal }) => {
  // ...
}

const MyComponent = () => {
  const state = useAsync({ promiseFn: loadPlayer, playerId: 1 })
  return (
    <>
      <IfPending state={state}>Loading...</IfPending>
      <IfRejected state={state}>{error => `Something went wrong: ${error.message}`}</IfRejected>
      <IfFulfilled state={state}>
        {data => (
          <div>
            <strong>Player data:</strong>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </IfFulfilled>
    </>
  )
}
```







## useFetch

```react
// 기본형태
const state = useFetch(resource, init, options)
```



```react
import { useFetch } from "react-async"

const MyComponent = () => {
  const headers = { Accept: "application/json" }
  const { data, error, isPending, run } = useFetch("/api/example", { headers }, options)

  function clickHandler() {
    run(init => ({
      ...init,
      headers: {
        ...init.headers,
        authentication: "...",
      },
    }))
  }

  function clickHandler2() {
    run({ body: JSON.stringify(formValues) })
  }
}
```



## Async (as a component)

```react
// 기본형태
<Async {...options}>{state => ...}</Async>
```



```react
import Async from "react-async"

const loadPlayer = async ({ playerId }, { signal }) => {
  const res = await fetch(`/api/players/${playerId}`, { signal })
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}

const MyComponent = () => (
  <Async promiseFn={loadPlayer} playerId={1}>
    <Async.Pending>Loading...</Async.Pending>
    <Async.Fulfilled>
      {data => (
        <div>
          <strong>Player data:</strong>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </Async.Fulfilled>
    <Async.Rejected>{error => `Something went wrong: ${error.message}`}</Async.Rejected>
  </Async>
)
```



## createInstance

```react
// 기본형태
const CustomAsync = createInstance(defaultOptions, displayName)
```



```react
import { createInstance } from "react-async"

const loadPlayer = async ({ playerId }, { signal }) => {
  const res = await fetch(`/api/players/${playerId}`, { signal })
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}

// createInstance takes a defaultOptions object and a displayName (both optional)
const AsyncPlayer = createInstance({ promiseFn: loadPlayer }, "AsyncPlayer")

const MyComponent = () => (
  <AsyncPlayer playerId={1}>
    <AsyncPlayer.Fulfilled>{player => `Hello ${player.name}`}</AsyncPlayer.Fulfilled>
  </AsyncPlayer>
)
```





- react-async 공식 문서
  https://docs.react-async.com/
  
- react-async 참고
  https://ichi.pro/ko/useasyncui-himgwa-pyeonliham-251392565657923

- 실습

  https://github.com/QT-HH/TIL/tree/master/react/STUDYSTUDY/useReducer%2CuserAsync%2Creact-async/api-integrate





# SWR

>[SWR](https://www.npmjs.com/package/swr)은 Nextjs 로 유명한 vercel 에서 만든 원격데이터 fetch 를 위한 커스텀 훅 npm 모듈입니다. SWR은 원격서버의 상태를 가져와서 리액트 컴포넌트에 꽂아주는 기능을 제공합니다.
>
>(redux 대신 쓸 수 있음)

## 특징

- 한번 fetch 한 원격상태의 데이터를 내부적으로 캐시하고 다른 컴포넌트에서 동일한 상태를 사용하고자 할 경우 이전에 캐시했던 상태를 그대로 리턴해 주기 때문에 서로 다른 컴포넌트가 동일한 상태를 공유할 수 있다는 점

- 내부적으로 **적절한 타이밍에 지속적으로 데이터를 폴링**



## 소개 링크

- https://tech.madup.com/swr-intro1/
- https://min9nim.vercel.app/2020-10-05-swr-intro2/
