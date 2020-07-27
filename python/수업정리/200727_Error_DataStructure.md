## 에러



### 예외(Exception)

> 실행도중 예상치 못한 상황을 맞이하면 프로그램 멈춤

* ZeroDivisionError
  - 0으로 나누기
* NameError
  * 정의되지 않은 변수 호출
* TypeError
  * 자료형에 대한 타입 자체가 잘못됨
* ValueError
  * 자료형에 대한 타입은 맞지만 값이 이상할 때
  * 존재하지 않는 값을 찾을때
* IndexError
  * 존재하지않는 Index로 조회할 때
* KeyError
  * Dict에서 Key가 없는 경우
* ModuleNotFoundError
  * 모듈을 찾을 수 없는 경우
* ImportError
  * 존재하지 않는 클래스/함수 호출
* KeyboardInturrupt
  * 강제종료



### 예외처리

`try` & `except`

```python
try:
    pass
except Error as err:
    print(err)
else:
    # 에러가 발생하지 않는 경우
```

```python
try:
    pass
except Error as err:
    pass
finally:
    # 예외에 상관없이 반드시 실행되어야하는 코드
```



### 예외 발생 시키기(Exception Raising)

`raise`를 통해 예외를 강제로 발생시킬 수 있다.

```python
raise TypeError('aaaa')
```

```python
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-34-5c3548b5b5be> in <module>
      1 #
----> 2 raise TypeError('aaaa')

TypeError: aaaa
```



`assert`문은 예외를 발생시키는 다른 방법

상태를 검증하는데 사용, 무조건 AssertiononError 발생

```python
assert 판정식 , errorMessage

# 판정식이 거짓이면 Assertionerror 발생
```









---







## 데이터 구조(Data Structure)

> Program = Data Structure + Algorithm



### 문자열(String)

> immutable(변경x), ordered(순서o), interable(순회o)

* `.find(x)`
  * x의 첫번째 위치 반환, 없으면 -1 반환

* `.index(x)`
  * x의 첫번째 우치 반환, 없으면 오류발생

* `.replace(old,new[, count])`
  * old를 new로 count개 바꿈

* `.strip([chars])`
  * 특정 문자를 양쪽,왼쪽,오른쪽 에서 제거한다.
  * 지정하지 않으면 공백 제거
* `.split()`
  * 문자열을 특정한 단위로 나누어 리스트로 반환
* `'searator'.join(interable)`
  * 특정한 문자열로 만들어 반환
  * 반복가능한 컨테이너의 요소들을 separator를 구분자로 합쳐 문자열로 반환
* `.capitalize()` : 앞글자를 대문자로 만들어 반환

* `.title()` : 어포스트로피나 공백 이후를 대문자로 만들어 반환

* `.upper()` : 모두 대문자로 만들어 반환

* `.lower()` : 모두 소문자로 만들어 반환
* `.swapcase()` : 대소문자 서로 변경하여 반환



### 리스트(List)

> mutable(변경o), ordered(순서o), interable(순회o)

* `append(x)`
  * 리스트에 값 추가
* `.extend(interable)`
  * 리스트에 interable값 붙이기
* `.insert(i,x)`
  * 정해진 위치에 i값 추가
* `.remove(x)`
  * 리스트에서 값이 x인 것을 삭제
* `.pop(i)`
  * 정해진 위치 i에 있는 값 삭제, 그 항목 반환
  * default는 마지막 항목 삭제, 반환
* `.clear()`
  * 리스트의 모든 항목 삭제
* `.index(x)`
  * x값을 찾아 index값 반환

* `.count(x)`
  * x의 개수 확인
* `.sort()`
  * 정렬
* `.revers()`
  * 거꾸로



### 리스트 복사

```python
a = [1,2,3]
b = a
b.append(a)
print(a)
# => [1,2,3,5]
```

```python
import copy

## 얕은 복사
a = [1,2,[3,4]]
b = a
b[2][0] = 5
print(a)
# => [1,2,[5,4]]

c = copy.copy(a)
c[2][1] = 6
print(a)
# => [1,2,[5,6]]

## 깊은복사
a = [1,2,[3,4]]
d = copy.deepcopy(a)
d[2,0] = 7
print(a)
# => [1,2,[5,6]]
```





### list Comprehesion

```python
[식 for 변수 in interable if 조건식 else 식 if 조건식 else 식 ...]

list(식 for 변수 in interable if 조건식 else 식 if 조건식 else 식 ...)
```





### 데이터 구조에 적용가능한 Built-in Function

`map(function, interable)`

- interable의 모든 요소에 function을 적용한 후 결과 리턴
- return은 map_object 형태

```python
a = map(func,arg)
print(list(a))

# 리스트형태로 프린트
```



`filter(function, interable)`

- interable에서 function의 리턴값이 True인 것만 구성하여 반환
- return은 filter object 형태



`zip(*interables)`

- 복수의 interable객체를 `zip()`에 넣으면 결과가 튜플로 순서대로 한짝씩 나옴.





### 세트(set)

> mutable, unordered, iterable

* `.add(elem)`
  * elem을 세트에 추가
* `.update(*others)`
  * 여러가지의 값을 추가(others는 반듣시 interable)
  * set 안의 set,dict는 안됨
* `.remove(elem)`
  * elem을 세트에서 삭제하고 없으면 에러
* `.discard(elem)`
  * elem을 세트에서 삭제하고 없어도 에러X
* `.pop()`
  * 임의의 원소 제거하여 리턴





### 딕셔너리(Dictionary)

> mutable, unorderable, iterable

* `.get(key,[,default])`

  * key를 이용해 value값을 가져오고 key 없어도 에러X
  * default =None

* `.pop(key[,default])`

  * 찾고자하는 key가 딕셔너리에 있으면 제거후 value 리턴, 없으면 default 반환
  * default 설정 안해주면 key 없을 때 에러

* `. update(key=value)`

  * 값을 제공하는 key,value로 덮어쓴다
  * key값이 str이여도 `''` 붙이면 안됨

* 딕셔너리 순회

  ```python
  for a,b in my_dict.items():
      pass
  
  for a in my_dict:  # key값을 순회
      pass
  
  for a in my_dict.value(): # value값을 순회
      pass
  ```

  

### Dictionary Comprehension

```python
{키: 값 for i in iterable if 조건식 else 식 if 조건식...}
# list와 비슷함
```

