## 모듈

> 특정 기능을 하는 코드를 담고 있는 파일

* `import`

  모듈을 활용하기위해 `import`를 통해 내장 모듈을 이름공간으로 가져온다.



## 패키지

> 모듈을 구조화하는 방법

* `__init__.py`

  패키지에 꼭 필요하진 않지만 하위 버전 및 프레임워크와의 호환을 위해 권장된다.



## 패키지와 모듈 활용

* `from` 패키지 `import` 모듈 
* `from` 패키지.모듈 `import` 데이터
* `from` 모듈 `import` *
* `from`모듈 `import` 데이터 `as` 별명



### pip에서 외부 라이브러리 받을 수 있음.





---





## OOP 1

### 객체(Object)

> 파이썬에서 모든 것은 객체
>
> 모든 객체는 type, attribute, method 가짐.



### Type

* 공통된 attribute와 method를 가진 객체들의 분류



### Instance

* 특정 type의 실제 데이터 예시
* 모든 객체는 특정 타입의 인스턴스이다.



### Attribute

> Object의 상태/데이터 

`(1+2j).imag`   => 허수부분의 데이터



### Method

> 특정 객체에 적용할 수 있는 행위

```python
a = [1,2]
a.append(3)  # 3을 리스트에 추가하는 메서드
print(a)  	 # =>[1,2,3]
```







## 객체지향 프로그래밍

> 컴퓨터 프로그램을 여러 개의 독립된 단위인 Object들의 모임으로 파악하고자 하는 것.

#### 장점

* 코드의 직관성
* 활용의 용이성
* 변경의 유연성





### 클래스 생성

> PascalCase로 작성하기로 약속!

```python
class 클래스이름:
    메소드
```





### 인스턴스 생성

```python
인스턴스 = 클래스이름()
# 인스턴스는 클래스라는 타입을 가진 객체가 된다.
```





### Method 정의

```python
class Car:
    def bangbang(self):
        return '빵빵'
```





### constructor method

> 인스턴스 객체가 생성될 때 호출되는 함수

```python
def __init__(self):
    pass
```

* 인스턴스의 속성을 정의할 수 있다.





### destructor method

> 인스턴스 객체가 소멸되기 직전에 호출되는 함수

```python
def __del__(self):
    pass
```





### Attribute 정의

> 특정 데이터 타입의 객체들이 가지게 될 상태/데이터를 의미

```python
class Car:
    def __init(self,color):
        self.color = color
        
    def bangbang(self):
        return '빵빵'
```





### 매직매서드

> 더블언더스코어(`__`)가 있는 메서드는 특별한 일을 하기 위해 만들어진 메서드

* `__str__(self)` : 특정 객체를 print()할 때 보여줄 내용을 정의





### `self` : 인스턴스 자신

> 메서드는 호출시 첫 번째 인자로 인스턴스 자신이 전달되게 설계되었다.
>
> 보통 매개변수명으로 self를 첫 번째 인자로 설정(다른 이름도 가능)

