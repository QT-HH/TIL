### React.memo

> 속성값이 변경될 때만 새로 렌더링

```javascript
import React from 'react'

const Title = ({ title }) => {
	console.log('Title render')
	return <p>{title}</p>
}

export default React.memo(Title)
```

같은 컴포넌트라도 자신만의 메모리가 존재한다. (각자의 상태값을 유지한다)



### 불변변수

속성값은 불변변수이다.

자식컴포넌트의 속성값은 부모 컴포넌트에서 관리하기 때문에 자식에서 직접 수정하지 못한다.

상태값도 불변변수로 관리하는게 좋당~~

상태값 변경 유무를 이전값과의 단순비교로 상태변화를 본다.

```react
import React, { useState } from 'react'
import Title from './Title'

export default function Counter() {
  const [count, setCount] = useState({ value1: 0, value2: 0, value3: 0})
  const onClick = () => {
    setCount({...count, value1: count.value1 + 1 })
  }
  
  return (
  	<div>
    	<Title title={`현재 카운트: ${count.value1}`} />
			<button> onClick={onClick}>증가</button>
		</div>
  )
}
```





