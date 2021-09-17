// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         hello!
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react'
import MyComp from './MyComp'
import MyChild from './MyChild'

export default function App () {
  const [todoList, setTodoList] = useState([])
  const [currentId, setCurrentId] = useState(1)
  const [desc, setDesc] = useState('')
  const [showOdd, setShowOdd] = useState(false)
  useEffect(() => {
    console.log('App.js useEffect!!!')
  })

  const onAdd = () => {
    const todo = { id: currentId, desc }
    setCurrentId(currentId + 1)
    setTodoList([...todoList, todo])

    setDesc('')
  }
  const onDelete = (e) => {
    const id = Number(e.target.dataset.id)
    const newTodoList = todoList.filter(todo => todo.id !== id)
    setTodoList(newTodoList)
  }
  const onSaveToServer = () => {}

  function Repeat(props) {
    console.log('props', props)
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i+1));
    }
    console.log('items', items)
    return <div>{items}</div>;
  }

  console.log('before app return');
  (() => {
    console.log('App 즉시실행함수')
  })()

  return (
    <div>
      <h3>할 일 목록</h3>
      <div>
      { !!0 &&
        <div>
          asdfsafasfd
        </div>
      }
      </div>
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

      [
        <li key='1' style={{marginTop: '40px'}}>hihi</li>,
        <li key='2'>hihi</li>,
        <li key='3'>hihi</li>,
      ]

      <Repeat numTimes={10}>
          {(index) => <div key={index}>This is item {index} in the list</div>}
      </Repeat>

      <div></div>

      <ul>
        {todoList
          .filter((_, index) => (showOdd ? index % 2 === 0 : true))
          .map(todo => (
            <li key={todo.id}>
              <span>{todo.desc}</span>
              <button data-id={todo.id} onClick={onDelete}>
                삭제
              </button>
            </li>
          ))}
      </ul>
      <input type="text" value={desc} onChange={e => setDesc(e.target.value)} />
      <button onClick={ onAdd }>추가</button>
      <button onClick={() => setShowOdd(!showOdd)}>홀수 아이템만 보기 on/off</button>
      <button onClick={ onSaveToServer }>서버에 저장</button>
      { console.log('App.js return')}
    </div>
  )
}