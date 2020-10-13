# DOM 조작

- HTML을 JS로 조작
  - window
  - document
  - elements
- selector를 이용해서 조작
  - `querySelector` / `querySelectorAll`
  - dir( 선택된 엘리먼트를 가진 변수)
    - 사용할 수 있는 속성 정보를 볼 수있다.
    - mdn 문서 (mdn + 찾으려는 속성 정보)
- DOM 조작 정리
  1. 선택한다.
  2. 수정 및 변경한다.



---



# 이벤트 리스너

- 이벤트는 브라우저에서 벌어지는 일
- 특정 이벤트가 벌어지면 특정 행동을 한다. `~하면 ~한다.`
- `preventDefault()`
  - 기본 동작을 동작하지 않게 막을 수 있다.



---

# 식별자 (identifier)

- 변수명은 식별자라고도 불림.
- 규칙
  1. 반드시 문자,달러($) 또는 밑줄로 시작해야한다.(숫자나 `-`로 시작할 수 없다.)
  2. 대소문자를 구분한다.
  3. 예약어는 사용할 수 없다.(const, function,class,...)
- 스타일
  - 카멜케이스 (lowerCamelCase)
    - 객체, 변수, 함수
  - 파스칼 케이스 (UpperCamelCase)
    - 클래스, 생성자
  - 대문자 스네이크 케이스(UPPER_CASE)
    - 상수 : 변수나 변수의 속성이 변하지 않는 것.



---



# Hoisting

- var로 선언된 변수는 선언 이전에 참조할 수 있는 현상

  ```javascript
  // 에러 발생 X
  console.log(name)
  var name = '홍길동'
  
  console.log(age)
  let age = 10
  ```

  ※TDZ ( Temporal Dead Zone ) 참조



---



# String

- js에서 문자열을 표현하는 방법

  ```javascript
  const str1 = '홑 따옴표 사용.'
  const str2 = "쌍 따옴표 사용."
  
  str1 + str2
  
  const str "줄바꿈
  은 허락되지 않는다."
  
  // escape sequence
  const  str4 = "줄바꿈은 \n 이렇게 해야합니다."
  
  // Template literal (ES6+) 백틱(' : 물결표 쉬프트 없이.)
  const str5 = `안녕하세요
  줄바꿈도 가능합니다`
  
  const num = 100
  const str8 = ` ${num} - ${str1}`
  ```

  - 리터럴
    - 리터럴이라는 단어는 값을 프로그램 안에서 직접 지정한다라는 의미



# for문

```javascript
for (let i = 0; i < 6; i++) {
    
}
```



# 함수의 object 축약형

```javascript
let obj = {
    name: 'ssafy',
    sayHi: function() {
        console.log('hello')
    }
}

obj.sayHi() // 'hello'

// ES6+
let obj2 = {
    name: 'ssafy',
    // 함수의 object 축약형,
    sayHi () {
        console.log('hi!')
    }
}

obj2.sayHi()
```

---

# JSON (JavaScript Object Notation)

> JavaScript Object 형태를 가지는 문자열

### object -> JSON (string)

```javascript
const objData = {
    coffe: 'Americano',
    icecrea: 'Bravo corn',
}

const jsonData = JSON.stringify(objData)
console.log(typeof(jsonData))
```

### JSON -> object

```javascript
const objData2 = Json.parse(jsonData)
console.log(typeof(objData2))
```

---



### forEach

- exercise

  ```javascript
  // 배열 안에 있는 정보를 곱해서 그 넓이를 areas 배열에 저장.
  const images = [
      { height: 10, width: 30},
      { height: 20, width: 90},
      { height: 54, width: 32}
  ]
  
  const area = []
  ```

  - 풀이코드

    ```javascript
    images.forEach(function (img) {
      areas.push(img.height * img.width) // {height:10, width:30}  
    })
    console.log(areas)
    ```

    



### map

- exercise

  ```javascript
  // 각 숫자들의 제곱근이 들어있는 새로운 배열을 만드세요.
  const newNumbers = [4,9,16]
  ```

  - 풀이코드

    ```javascript
    const root = newNumbers.map(function (num) {
    	return num ** 0.5  
    })
    console.log(root)
    ```

    ```javascript
    const areas2 = images.map(function (img) {
        return img.height * img.width
    })
    console.log(areas2)
    ```



### filter

```javascript
const products = [
    { name : 'cucumber', type = 'vegetable' },
    { name : 'banana', type = 'fruit' },
    { name : 'carrot', type = 'vegetable' },
    { name : 'apple', type = 'fruit' },
]

const fruits = products.filter(function (product) {
    return product.type === 'fruit'
})

console.log(fruits)
```

- exercise

  ```javascript
  // numbers 배열중 50보다 큰 값들만 모은 배열 filteredNumbers를 만드세요.
  const numbers = [15,25,35,45,55,65,75,85,95]
  const filteredNumbers = numbers.filter(function (number) {
  	return number > 50
  })
  
  console.log(filteredNumbers)
  ```





---

### some

```javascript
const request = [
    { url:'/photos', status:'complete'},
    { url:'/albums', status:'pending'},
    { url:'/users', status:'failted'},
]

const inProgress = request.some(function (request) {
    return request.stats === 'pending'
})
console.log(inProgress)
```



### every

```javascript
// users 배열에서 모두가 submmited인지 여부를 hasSubmmited에 저장하세요.
const users = {
    { id:23, submmited:true },
    { id:33, submmited:false },
    { id:712, submmited:true},
}

const hasSubmmited = users.every(function (user) {
    return user.submmited === 'true'
})
console.log(hasSubmmited)
```





### reduce

```javascript
// 주어진 baseurl 문자열 뒤에 필수 요청 변수인 api key - value 값을 key=value 의 형태로 더하여 요청 url을 만드세요. URL에서 요청 변수는 & 문자로 구분합니다.

const baseUrl =
'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?' key=API_KEY&targetDT=20200115

const api = {
    'key': 'API_KEY',
    'targetDT':'20200115'
}
```

