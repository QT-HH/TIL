# JSX

> JavaScript eXtension  JS를 확장한 문법
>
> UI가 어떻게 생겨야 하는지 설명하기 위해 React와 함께 사용한다.
>
> JS의 모든 기능이 포함되어있다.
>
> React에서 필수는 아니지만, UI 가독성과 생산성을 높이는데 큰 역할을 한다



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
    Hello, { formatName(user) }!
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



JSX를 변수에 할당하거나, 인자로 받아들이거나, 함수로 반환할 수 있다.

```react
function getGreeting(user) {
  if (user) {
    return <h1>Hello, { formatName(user) }!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```





## Babel

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
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```





## JSX 속성 정의

attribute에 따옴표`""`를 이용하여 문자열 리터럴을 정의할 수 있다.

```react
const element = <div className="my-class"></div>
```



중괄호를 이용하여 attribute에 JS표현식을 삽입할 수도 있다.

```react
const element = <img src={ user.avatarUrl }></img>
```

=>  attribute에 JS표현식을 삽입할 때 따옴표 또는 중괄호 중 하나만 사용해야한다.



따옴표는 문자열값, 중괄호는 표현식 값에 사용된다.

=> 요소에 class를 줄 때는 `class` 대신 `className`을 사용 (class는 JS예약어임)

=> 그리고 HTML attribute이름은 camelCase로 입력한다. ( `onclick` => `onClick` ) (style도 마찬가지 { `margin-top` x => `marginTop` })







## Tag, Fragment

HTML과 똑같이 여는 태그가 있으면 닫는 태그가 있어야하며, `input`과 `br`태그도 꼭 닫아줘야한다.

`<div />` 와 같이 셀프클로징도 가능하다.



함수의 return 시 두 개 이상의 태그는 반드시 하나의 태그로 감싸져야한다.

( Vue component에서 template 안에는 무조건 하나의 태그로 감싸는것처럼 )

결과적으로 나누어져있는 상태로 렌더링하고싶다면 `React.Fragment`로 감싸주어야한다.

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



Fragment에 key를 줘서 반복문을 감싸지않고 렌더링할 수 있다.

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





## 조건부 연산자

JSX 내부의  JS표현식에서는 if문을 사용할 수 없다.

따라서 JSX문 밖에서 사전에 if문을 사용하여 값을 설정하거나 `{}` 안에 삼항 연산자를 사용하면 된다.

```react
import React from 'react'

function App () {
  const name = 'react'
  return (
  	<div>
    	{ name === 'react' ? (<h1>This is React.</h1>) : (<h2>This is not React</h2>) }
    </div>
  )
}
```



`v-if` 처럼 특정 조건에서 렌더링을 할지 안할지 정해야한다면  `&&` 연산자도 사용할 수 있다.

```react
function App () {
  const name = 'react'
  return (
  	<div>
    	{ name === 'react' && <h1>It's correct!</h1> }
    </div>
  )
}
```





## 사용자 정의 컴포넌트

 `<div>` 나 `<span>` 같은 내장컴포넌트는 소문자로 시작하지만,
사용자 정의 컴포넌트는 반드시 대문자로 시작해야한다.

```react
import React from 'react';

// 잘못된 사용법입니다! 아래는 컴포넌트이므로 대문자화 해야 합니다.
function hello(props) {
  // 올바른 사용법입니다! 아래의 <div> 사용법은 유효한 HTML 태그이기 때문에 유효합니다.
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // 잘못된 사용법입니다! React는 <hello />가 대문자가 아니기 때문에 HTML 태그로 인식하게 됩니다.
  return <hello toWhat="World" />;
}
```



```react
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};


// 1
function Story(props) {
  // 잘못된 사용법입니다! JSX 타입은 표현식으로 사용할 수 없습니다.
  return <components[props.storyType] story={props.story} />;
}

// 2
function Story(props) {
  // 올바른 사용법입니다! 대문자로 시작하는 변수는 JSX 타입으로 사용할 수 있습니다.
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
```





## boolean, null, undefined

`false`, `null`, `undefined`, `true`는 렌더링되지 않는다.

아래 코드는 모두 동일하게 렌더링된다.

```react
<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>
```



하지만 0같이 false처럼 행세하는 값들은 렌더링된다.

```react
// messages.length가 0일때
<div>
  {props.messages.length &&
    <MessageList messages={props.messages} />
  }
</div>

/// 결과값
0


// 반드시 && 앞의 값이 Boolean이 되도록 해야한다.
<div>
  {props.messages.length > 0 &&
    <MessageList messages={props.messages} />
  }
</div>
```





## JSX에서 자식 다루기

여는 태그와 닫는 태그가 있는 JSX 표연에서 두 태그 사이의 내용은 `props.children`이라는 것으로 넘겨진다.

```react
// App.js
return (
 <MyComp>
  <div>
    123412342
    <div>
      555
    </div>
  </div>
  <span>nnnnn</span>
  <span></span>
  {5+2}
  <MyChild></MyChild>
</MyComp>
)

/////////
// MyComp.js
function MyComp(props) {
  console.log(props)
  return (
      <div>Hello
          {props.children}
      </div>
  );
}

export default MyComp;


// MyChild.js
function MyChild(props) {
    return (
        <div>Child!!</div>
    );
  }
  
  export default MyChild;
```

```
// 렌더링 결과

Hello
123412342
555
nnnnn7
Child!!
```



다음과 같이 함수를 자식으로 사용할 수도 있다.

```react
// 자식 콜백인 numTimes를 호출하여 반복되는 컴포넌트를 생성합니다.
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
```







## 주석

JSX의 내부 주석은

`{/* 주석주석주석 */}` 이런 형태로 작성한다.





- 온라인 바벨 컴파일러
  https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.15.6&externalPlugins=&assumptions=%7B%7D

