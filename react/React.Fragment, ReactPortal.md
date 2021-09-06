### 컴포넌트 함수의 반환값

리액트 요소(div, span 등등), 문자열, 배열, 숫자 등등을 반환할 수 있다.

배열로 반환할 땐 key값을 줘야함.

`React.Fragment`는 key를 입력하지 않아도 요소들의 순서가 key역할을 한다.

여러개의 요소를 반환할 때 `React.Fragment`를 사용하고 div같은 태그로 감싸지않는다.

축약형으로 `<> </>` 이렇게 반환할 수 있당

=> 조건부 렌더링을 할 때 유용하게 사용할 수 있다.



### 조건부 렌더링

```react
return (
  <div>
  	{count.value > 0 && <Title title={`현재 카운트: ${count.value}`} />}
    <button onClick={onClick}>증가</button>
  </div>
)
```

=> && 왼쪽에 있는 조건이 모두 충족되어야 오른쪽에 있는 것이 렌더링됨.





### React Portal

html에서 root말고 다른 멀리 떨어진 엘리먼트에 렌더링하고싶을 때 사용할 수 있다.

```react
// index.html
<div id="root"></div>
<div id="something"></div>
-----
import ReactDOM from 'react-dom'

export default function App() {
  return (
  	<>
    	{ReactDOM.createPortal(
    		<div>
     			<p>안녕하세요</p>
      		<p>실전 리액트 프로그래밍입니당.</p>
     		</div>,
     		document.getElementById('something'),
     	)}
		</>
  )
}
```

=> 모달을 위해 쓰이기도 한다.





