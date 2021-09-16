/* 
run()으로 시작
run(t)로 각 함수 실행 t는 0~5
'noAsyncWaitTest', 'asyncAwaitTest', 'noAsyncWaitParentTest', 'asyncAwaitParentTest', 'noAsyncWaitAsyncParentTest', 'asyncAwaitAsyncParentTest'
*/

const asyncFn1 = () => { return axios.get('https://jsonplaceholder.typicode.com/users').then(() => {console.log('asyncFn1')}) }
const asyncFn2 = () => { return axios.get('https://jsonplaceholder.typicode.com/users').then(() => {console.log('asyncFn2')}) }
const noAsyncFn = () => { console.log('noAsyncFn') }

const parentOfFn1 = () => { asyncFn1() }
const parentOfFn2 = () => { asyncFn2() }
const parentOfNoAsyncFn = () => { noAsyncFn() }

const asyncParentOfFn1 = async () => { await asyncFn1() }
const asyncParentOfFn2 = async () => { await asyncFn2() }

// 0. async/await 없이 쌩으로 돌림
const noAsyncWaitTest = () => {
  asyncFn1()
  asyncFn2()
  noAsyncFn()
}

// 1. async/await을 적용해서 돌림
const asyncAwaitTest = async () => {
  await asyncFn1()
  await asyncFn2()
  noAsyncFn()
}

// 2. async/await을 적용하지 않고 async/await 없는 상위함수를 돌림
const noAsyncWaitParentTest = () => {
  parentOfFn1()
  parentOfFn2()
  parentOfNoAsyncFn()
}

// 3. async/await을 적용하고 async/await 없는 상위함수를 돌림
const asyncAwaitParentTest = async () => {
  await parentOfFn1()
  await parentOfFn2()
  parentOfNoAsyncFn()
}

// 4. async/await을 적용하지 않고 async/await을 적용한 상위함수를 돌림
const noAsyncWaitAsyncParentTest = () => {
  asyncParentOfFn1()
  asyncParentOfFn2()
  parentOfNoAsyncFn()
}

// 5. async/await을 적용하고 async/await을 적용한 상위함수를 돌림
const asyncAwaitAsyncParentTest = async () => {
  await asyncParentOfFn1()
  await asyncParentOfFn2()
  parentOfNoAsyncFn()
}


function* generatorFunction () {
  console.log('모니터링 시작')
  while(true) {
    const action = yield
    console.log('actionType: ', action.type)
    switch (action.type) {
      case 'noAsyncWaitTest':
        noAsyncWaitTest()
        break
      case 'asyncAwaitTest':
        asyncAwaitTest()
        break
      case 'noAsyncWaitParentTest':
        noAsyncWaitParentTest()
        break
      case 'asyncAwaitParentTest':
        asyncAwaitParentTest()
        break
      case 'noAsyncWaitAsyncParentTest':
        noAsyncWaitAsyncParentTest()
        break
      case 'asyncAwaitAsyncParentTest':
        asyncAwaitAsyncParentTest()
        break
    }
  }
}

const watch = generatorFunction ()

const types = ['noAsyncWaitTest', 'asyncAwaitTest', 'noAsyncWaitParentTest', 'asyncAwaitParentTest', 'noAsyncWaitAsyncParentTest', 'asyncAwaitAsyncParentTest']
const run = (t) => {
  watch.next({ type: types[t] })
}

