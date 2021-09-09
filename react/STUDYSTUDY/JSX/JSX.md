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

=> 그리고 HTML attribute이름은 camelCase로 입력한다. ( tabindex => tabIndex )





