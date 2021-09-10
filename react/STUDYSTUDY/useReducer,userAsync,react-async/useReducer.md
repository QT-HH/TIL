# useReducer 이해하기

> `useState`로 상태를 관리하는데, `useReducer`로도 상태를 관리할 수 있다.



```react
// Counter.js
import React, { useState } from 'react'

function Counter () {
  const [number, setNumber] useState(0)
  
  const onIncrease = () => {
    setNiumber(prevNumber => prevNumber + 1)
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

