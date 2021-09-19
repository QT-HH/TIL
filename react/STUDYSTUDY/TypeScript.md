# TypeScript

## 기본타입

```typescript
let age:number = 30;
let isAdult:boolean = true;
let a:number[] = [1,2,3]
let a2:Array<number> = [1,2,3]

let week1:string[] = ['m','t','w']
let week2:Array<string> = ['m','t','w']

// week1.push(1) ==> error
```



```typescript
// tuple

let b:[string, number];
b= ['z', 1]
```



```typescript
// void, never

// void
function sayHello():void {
  console.log('hello')
  // 아무것도 반환하지 않음
}

// never
// 항상 에러를 반환하거나 영원히 끝나지 않는 타입
function showError():never{
  throw new Error();
}

function infLoob():never{
  while (true) {
    // do something,...
  }
}
```



```typescript
// enum
// 자동으로 0부터 1씩 증가하면서 value를 준다.
// 값을 설정해준다면 그 다음숫자는 자동으로 +1로 잡힌다.
enum Os {
  Window,
  Ios = 10,
  Android
}
// 숫자값을 설정해주면 양방향 맵핑을 할 수 있다.

// 문자열도 할당할 수 있다.
// 문자열로 설정해주면 단방향 맵핑만 할 수 있다.
enum Os {
  Window = 'win',
  Ios = 'ios',
  Android = 'and'
}

let myOs:Os;
myOs = Os.Window;
```



```typescript
// null, undefined

let a:null = null;
let b:undefined = undefined;
```





## Interface

```typescript
let user:object;

user = {
  name: 'xx',
  age: 30
}
// => 에러가 난다

type Score = 'A' | 'B' | 'C' | 'F';

interface User {
  name: string;
  age: number;
  gender? :string; // 있어도 되고 없어도 됨
  readonly bitrhYear: number; // 읽기 전용
  [grade:number] : Score;
}

let user: User = {
  name: 'xx',
  age: 30,
  birthYear: 2000,
  1: 'A',
  2: 'B'
}
```



```typescript
// 인터페이스로 함수

interface Add {
  (num1:number, num2:number): number;
}

const add: Add = function(x, y) {
  return x + y
}

add(10,20)


///////////

interface isAdult {
  (age: number):boolean;
}

const a:isAdult = (age) => {
  return age > 19;
}

age(33)
```





```typescript
// implements

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Benz extends Car {
  door: number;
  stop(): void;
}

class Bmw implements Car {
  color;
  wheels = 4;
  constructor(c:string) {
    this.color = c;
  }
  start() {
    console.log('go..')
  }
}

const b = new Bmw('green');
b.start();

const benz: Benz = {
  door: 5,
  wheels: 4
  stop() {
    console.log('stop')
  }
  start(){
    console.log('go..')
  }
}

```



## 함수

```typescript
function add(num1: number, num2: numer): void {
  console.log(num1 + num2)
}
```



```typescript
// ?를 써서 optional하게 줄 수 있다.
function hello(name?: strint) {
  return `hello, ${name || "world"}`;
}
const result = hello();

function hello2(name="world") {
  return `hello, ${name}`;
}
```



```typescript
// optional param은 뒤에 와야한다.
function hello(name: string, age?: number): string{
  if (age !== undefined) {
    return `hello, ${name}. You are ${age}`;
  } else {
    return `hello, ${name}`;
  }
}

// 앞에 굳이 놔두고싶다면 undefined를 활용한다.
function hello2(age: number | undefined, name: string): string {
  if (age !== undefined) {
    .....
  } else {
    .....
  }
}

console.log(hello2(undefined, 'Sam'))
```



```typescript
function add(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0)
}

add(1,2,3);
```



```typescript
// this 활용

interface User {
  name: string;
}

const Sam: User = {name:'Sam'}

function showName(this:User, age: number, gender:'m'|'f') {
  console.log(this.name, age, gender)
}

const a = showName.bind(Sam);
a(30, 'm');
```



```typescript
// overload

interface User {
  name: string;
  age: number;
}

function join(name: string, age: string): string;
function join(name: string, age: number): User;
function join(name: string, age: number | string): User | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력해주세요.";
  }
}

const sam: User = join("Sam", 30);
const jane: string = join("Jane", "30");
```





## Literal Types

```typescript
const userName1 = "Bob";
let userName2:string | number = "Tom";
userName2 = 3;

type Job = "police" | "developer" | "teacher";

interface User {
  name: string;
  job: Job;
}

const user: User = {
  name: "Bob",
  job: "developer",
};

interface HighSchoolStudent, {
  name: number | string;
  grade: 1 | 2 | 3;
}
```



```typescript
// Union Types

interface Car {
  name: "car";
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

function getGift(gift: Car | Mobile) {
  console.log(gift.color);
  if (gift.name === "car") {
    gift.start();
  } else {
    gift.call();
  }
}
```



```typescript
// Intersection Types

interface Car {
  name: string;
  start(): void;
}

interface Toy {
  name: string;
  color: string;
  prince: number;
}

const toyCar: Toy & Car = {
  name: "타요",
  start() {},
  color: "blue",
  price: 1000,
}
```



## Class

```typescript
class Car {
  // color: string;
  constructor(public color: string) {
    this.color = color;
  }
  start() {
    console.log("start")
  }
}

const bmw = new Car("red")
```



```typescript
// 접근제한자(Access modifier) - public, private, protected

class Car {
  // private name: string = "car";
  // #name: string = "car";
  // #과 private의 기능상 차이는 없다. 해당클래스 내부에서만 접근 가능
  // protected는 자식 클래스에서는 접근할 수 있지만 클래스 인스턴스로는 참조할 수 없다.
  readonly name: string = "car"
  color: string; 
  constructor(color: string, name) {
    this.color = color;
    this.name = name;
  }
  start() {
    console.log("start")
  }
}

class BMW extends Car {
  constructor(color: string, name) {
    super(color, name)
  }
  showName() {
    console.log(super.name)
  }
}
```





## Generic

> Generic을 이용하면 클래스나 함수, 인터페이스를 다양한 타입으로 재사용할 수 있다.
>
> 선언할 때는 타입 파라미터만 정해주고 생성하는 시점에 사용하는 타입을 결정한다.

​	

```typescript
function getSize<T>(arr: T[]):number {
  return arr.length;
}

const arr1 = [1,2,3]
getSize<number | string>(arr1)

const arr2 = ["a","b","c"];
getSize<string>(arr2)

```



```typescript
interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<{ color: string; coupon: boolean }> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  }
}

const m2: Mobile<string> = {
  name: "s20",
  price: 900,
  option: "good",
}
```



```typescript
interface Book {
  price: number;
}

const book: Book = { price: 2000 }

function showName<T extends { name: string }>(data: T): string {
  return data.name;
}

showName(book);
```





## Utility type

```typescript
interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f"
}

type Userkey = keyof User; // 'id' | 'name' | 'age' | 'gender'

const uk:Userkey = "id";
```





```typescript
// Partial<T>
// 프로퍼티를 모두 optional로 바꿔준다.

interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f"
}

let admin: Partial<User> = {
  id: 1,
  name: "Bob"
}
```





```typescript
// Required<T>
// 모두 필수로 바꿔준다.

interface User {
  id: number;
  name: string;
  age?: number;
}

let admin: Required<User> = {
  id: 1,
  name: 'Bob',
  age: 20,
}
```



```typescript
// Readonly<T>

interface User {
  id: number;
  name: string;
  age?: number;
}

let admin: Readonly<User> = {
  id: 1,
  name: "Bob",
};

admin.id = 4; // 불가늉
```



```typescript
// Record<K,T>
// 프로퍼티를 정해줘서 사용

type Grade = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D";
const score: Record<Grade, Score> = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
}

interface User {
  id: number;
  name: string;
  age: number;
}

function isValid(user:User) {
  const result:Record<keyof User, boolean> = {
    id: user.id > 0,
    name: user.name !== 0,
    age: user.age > 0
  };
  return result;
}
```





```typescript
// Pick<T,K>
// 특정 프로퍼티만 가져와서 사용

interface User {
  id: number;
  name: string;
  age: number;
  gender: "M" | "W"
}

const admin: Pick<User, "id" | "name"> = {
  id: 0,
  name: "Bob",
}
```



```typescript
// Omit<T,K>
// 특정 프로퍼티만 빼고 사용

interface User {
  id: number;
  name: string;
  age: number;
  gender: "M" | "W"
}

const admin: Omit<User, "age" | "gender"> = {
  id: 0,
  name: "Bob",
}
```



```typescript
// Exclude<T1,T2>
// T1중에서 T2와 겹치는걸 제외시킨다.

type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>; //boolean만 남음

```



```typescript
// NonNullable<Type>
// null과 undefined를 제외시킨다.

type T1 = string | null | undefined | void;
type T2 = NonNullable<T1>; // string, void만 남는다.
```

