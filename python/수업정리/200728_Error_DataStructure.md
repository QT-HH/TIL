### 예외처리

* 문법에러 : 문법적 오류가 있을 때

* exception

  * NameError
  * TypeError
  * ValueError : int('3.5')
  * ZeroDivisionError
  * Index Error
  * KeyError
  * ModuleError
  * importError

* 예외처리

  * try & except

    ```python
    try:
        <코드블럭1>
    except 예외1:
        <코드블럭2>
    except 예외2,예외3:
        <코드블럭3>
    except 예외4 as err:
        print(f'{err}에러 메시지를 프린트 할 수 있다.')
    else: # 코드블럭1에서 에러가 발생하지 않았을 때만 발생
        <코드블럭4>
    finally: # 반드시 실행
        <코드블럭5>
    ```



* 예외 발생

  * raise : 예외를 강제로 발생 `raise ValueError('숫자를 입력해주세요')`

  * assert : 예외를 강제로 발생

    * 상태를 주로 검증하기위해서 `assert Boolean expression, error message`

      `assert type(x) == int, '숫자형이 아닙니다'`



### 데이터구조 1

* 데이터 구조 : 데이터에 편리하게 접근,변경하기위해 데이터를 저장하거나 조작하는 방법

* 순서가 있는 구조 (ordered)

  * 문자열, 리스트

* 순서가 없는구조 (unordered)

  * set, dictionary

  

  ### 문자열

  * immutable / ordered / interable

*  String method

  * 값을 변경하는 method

    * replace(old,바꾸려는 문자열(new)[, count]

      ```python
      'yay!'.replace('a','-') # 'y-y!'
      'wOOOOOOO'.replace('o','!',3) # 'w!!!OOOO'
      ```

    * strip([char])

      * 특정 문자를 지정하면 해당 문자를 양쪽에서 찾아 제거한다.
      * lstrip 해당문자를 왼쪽에서 찾아서 제거 /rstrip

    * split([char])

      * 문자열을 특정 단위로 나누어서 리스트로 반환

        ```python
        inp = '1 2 3 4 5'
        li_inp = inp.split() # ['1', '2', '3', '4', '5']
        
        a = 'a_b_c'
        print(a.split('_')) #['a', 'b', 'c']
        print(a.split('b')) #['a_', '_c']
        ```

    * seperater.join(iterable)

      * 특정 문자열로 만들어서 반환

      ```python
      word = '배고파'
      '!'.join(word) #'배!고!파'
      words = ['a','b','c']
      b = '_'.join(words) # 'a_b_c'
      ```

  * 문자변경

    * capitalize()
    * title()
    * upper()
    * lower()
    * swapcase()

  *  문자열 관련 검증

    * istitle()
    * isalpha()
    * isspace()
    * isupper() / islower()
    * isdecimal()  순수 int로 형변환이 가능한 문자열인지
    * isdigit()  윗첨자도 숫자로 인식
    * isnumeric()  분수의 특수기호, 특수 로마자도 숫자로 인식
      * 주의 : 해당 decimal, digit, numeric은 float형태의 문자열은 False 반환

  * 기타 문자열 관련 메소드

    `dir('string')`

  ### 리스트

  * mutable, ordered, interable

  * List method

    * 값을 추가 및 삭제
      * append(x)
      * extend(iterable)
      * insert(i, x)
      * remove(x) : 지우려는 값이 없으면 에러발생
      * pop(i) : 정해진 위치에 있는 값을 삭제하고 그 값을 반환, i에 값이 없으면 마지막 항목
      * clear()
    * 탐색 및 정렬
      * index(x) : 값이 없으면 에러
      * count(x) : 리스트에서 x의 갯수를 count 후 반환
      * sort() : None을 반환, 그리고 원본을 변경 `sort(revers=False)`
        * sorted(iterable) : 정렬된 값을 반환, 그리고 원본 유지
      * reverse() : 정렬없이 앞뒤를 뒤집어준다.
        * reversed(): 앞뒤를 뒤집어준다. `list_reverseitherator object`반환

  * 리스트 복사

    ```python
    a = [1,2,3]
    b = a
    b[0] = 10
    print(a) #[10,2,3]
    
    1. slicing 활용하여 복사
    	
        a = [1,2,3,4]
        b = a[:]
    
    2. list()메서드를 활용해서 복사
    
    	a = [1,2,3]
        b = list(a)
        
        b[1] =200
        print(a[1]) # =>2
        
    3. copy모듈 활용
    	import copy
        
        a = [1,2,[3,4]]
        b = copy.deepcopy(a)
        b[1][1] = 6
        print(b) # => [1,2,[3,6]]
        print(a) # => [1,2,[3,4]]
    ```

  * 데이터 분류

    * immutable
      * number,string,bool,range,tuple,frozenset
    * mutable
      * list,set,dictionary

* Built-in Function

  * map(function iterable)

    * iterable한 데이터를 인자로 받아 모든 요소에 function을 적용한 후 결과를 `map object`로 반환한다.

      ```python
      def square(num):
          return num**2
      
      numbers = [1,2,3,4,5]
      double_li = list(map(square, numbers))
      print(double_li)
      
      a = '1 2 3 4 5'
      numbers = a.split()
      new_numbers = list(map(int, numbers))
      print(new_numbers)
      ```

  * filter(function, iterable)

    * function의 return값이 Trud인 값만 추출, `filter object` 값을 반환

      ```python
      def pos_num(num):
          if(num>0):
              return num
          
      numbers = list(range(-10,10))
      pos = list(filter(pos_num, numbers)) # [1,2,3,4,5,6,7,8,9]
      ```

  * zip(*iterable)

    * 복수의 iterable한 객체를 모아준다. tuple 모음으로 구성된 zip object를 반환

      ```python
      girls = ['jane', 'iu', 'mary']
      boys = ['justin', 'david', 'kim']
      ranking = [1,2,3]
      
      couples = list(zip(girls, boys))
      #[('jane', 'justin',1), ('iu','david',2), ('mary','kim',3)]
      ```

    * 되도록이면 길이가 같은 객체를 사용하는 것이 좋다.

    * 길이가 다르다면 짧은 객체를 기준으로 합쳐주고 나머지는 무시된다.

    * itertools 내장 모듈 안에 `zip_loges` 함수를 사용하면 긴 것을 기준으로 합쳐준다.

      ```python
      from itertools import zip_longest
      num1 = [1,2]
      num2 = [4,5,6]
      list(zip(num1,num2)) #[(1,4), (2,5)]
      list(zip_longeste(num1,num2, fillvalue = 0)) #[(1,4), (2,4), (0,6)]
      ```



---



## 데이터 구조 2

### 세트(set)

* mutable, unordered, iterable
* 집합 요소의 중복이 불가능
* 집합의 요소는 immutable한 값만 가능, mutable객체를 넣으면 TypeError 발생
* Set Methods
  * 추가 및 삭제
    * add(elem) : 값을 하나 추가시킬때 사용
    * update(*others) : 여러개의 값을 넣을 때 immutable한 값을 넣음
    * remove(elem) : 값을 삭제하고 만약 값이 없으면 KeyError 발생
    * discard(elem) : 값을 삭제하고 값이 없어도 Error발생 X
    * pop() : 임의의 요소를 제거한 후 반환해준다.



### 딕셔너리

* mutable, unordered, iterable

* dictionary Methods

  * get(key[, default])  default = None

    * key를 통해서 해당  value를 가져온다.

      dic['key'] : 키 값을 직접 넣어서 값을 가져올 때 키가 없으면 KeyError 발생

    * 하지만 get[key] 를 이용하면 Error X, default 반환

  * pop(key[, default])

    * 해당 key값이 있으면 dict에서 제거하고 키가 없으면 default값 반환
    * default가 없으면 keyerror 발생,.

  * update()

    * 1개 이상의 값을 'key=value'의 형식으로 값을 추가할 수 있다.
    * key가 존재하면 그 값을 수정
    * key가 존재하지않으면 새로운 값 추가

  * keys()

    * 해당 dictionary의 key와 value를 tuple 형태로 반환. `(dict_items object)`

* Dictionary 순회

  ```python
  # 1. dictionary를 for로 순회 했을때
  
  for dic in dicts:
      print(dic) # dicts의 key값이 들어있다.
      
  #2. keys로 순회 했을 때
  for dic in dicts.keys():
      print(dic) #dicts의 키 값이 들어있다.
   
  #3. value로 순회했을 때
  for val in dicts.values():
      priint(val) # dicts의 value값이 들어있다.
      
  #4. items로 순회했을 때
  for dic in dicts.items():
      print(dic) # dic에는 (key, value)형태의 tuple값이 들어있다.
      
  for key, value in dicts.items():
      print(key)
      print(value)
  ```

  



### List Comprehension

* 간결함

* pythonic한 코드

* 속도도 빠르다

* 무분별하게 사용하게 되면 가독성이 떨어질 수 있다.

  ```python
  # 기본형태
  li_comp = [식 for 임시변수 in iterable]
  li_comp2 = list(식 for 임시변수 in iterable)
  
  # 기본형태 + 조건식
  li_comp3 = [식 for 임시변수 in iterable if 조건식]
  li_comp4 = [식1 if 조건식 else 식2 for 임시변수 in iterable]
  
  li_comp5 = [식1 for 임시변수 in iterable if 조건식1 else 식2 if 조건식2 else 식3...]
  ```

