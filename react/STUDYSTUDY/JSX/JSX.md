# JSX



> JS를 확장한 문법
>
> UI가 어떻게 생겨야 하는지 설명하기 위해 React와 함께 사용한다.
>
> JS의 모든 기능이 포함되어있다.
>
> React에서 필수는 아니지만, UI 가독성과 생산성을 높이는데 큰 역할을 한다.



 ## JSX 표현식

```react
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

```react
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

name을 중괄호`{}`안에 넣어 변수를 써먹었다.

중괄호 안에는 모든 JS 표현식을 넣을 수 있다.

예) `{ 2+2 }`, `{ user.firstName }`, `{ formatName(user) }` 등



컴파일 후 JSX 표현식이 정규 JS함수 호출이 되고 JS 객체로 인식된다.

즉, JSX를 변수에 할당하거나, 인자로 받아들이거나, 함수로 반환할 수 있다.

```react
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```







## JSX 속성 정의

속성에 따옴표`""`를 이용하여 문자열 리터럴을 정의할 수 있다.

` const element = <div tabIndex="0"></div>`

중괄호를 이용하여 attribute에 JS표현식을 삽입할 수도 있다.

` const element = <img src={ user.avatarUrl }></img>`

=>  attribute에 JS표현식을 삽입할 때 따옴표 또는 중괄호 중 하나만 사용해야한다.

따옴표는 문자열값, 중괄호는 표현식 값에 사용된다.

=> 요소에 class를 줄 때는 class 대신 className을 사용 (class는 JS예약어임)

=> 그리고 HTML attribute이름은 camelCase로 입력한다. ( onclick => onClick )



JSX에 삽입 된 값을 렌더링하기전에 이스케이프 하고, 모든 항목은 렌더링 되기 전에 문자열로 바뀐다.





Babel은 JSX를 React.createElement()로 컴파일한다.

```react
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```javascript
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

위의 두 예시는 동일한 코드이다.

다음과 같은 객체를 생성한다.

```javascript
// 주의: 다음 구조는 단순화되었습니다
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```





JSX의 내부 주석은

`{/* 주석주석주석 */}` 이런 형태로 작성한다.



HTML과 똑같이 여는 태그가 있으면 닫는 태그가 있어야하며, `input`과 `br`태그도 꼭 닫아줘야한다.

`<div />` 와 같이 셀프클로징도 가능하다.



함수의 return 시 두 개 이상의 태그는 반드시 하나의 태그로 감싸져야한다.

( Vue component에서 template 안에는 무조건 하나의 태그로 감싸는것처럼 )

결과적으로 나누어져있는 상태로 렌더링하고싶다면 React.Fragment로 감싸주어야한다.

```react
function App () {
  return (
    <React.Fragment>
    	<Hello />
    	<div>안녕하세용</div>
    </React.Fragment>
  )
}

// 혹은 빈 태그로 감싸주면 Fragment로 감싸는것과 같다.
function App () {
  return (
    <>
    	<Hello />
    	<div>안녕하세용</div>
    </>
  )
}
```



Fragment에 key를 줘서 v-for의 효과를 볼 수도 있다.

```react
function Glossary (props) {
  return (
  	<dl>
    	{ props.items.map(item => {
        <React.Fragment key={item.id}>
        	<dt>{ item.term }</dt>
          <dd>{ item.descriptioin }</dd>
        </React.Fragment>
      }) }
    </dl>
  )
}
```





