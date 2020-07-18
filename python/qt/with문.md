## with문

> 파일 입출력을 위함.



```python
with open('file.txt') as file_data:
    print(file_data.readline(), end="")
```



### 파일 열기모드

* `r` 읽기모드
* `w` 쓰기모드, 동일한 이름 있을시 덮어쓰기, 파일 없을시 생성
* `a` 추가모드, 추가할 때 사용, 파일 없을시 생성
* `r+` 읽기+쓰기, 파일 없을시 에러발생
* `w+` 쓰기+읽기, 파일 없을시 새로 만듦
* `a+` 추가+읽기, 파일 없을시 새로 만듦

* `rb+` `wb+` `ab+`  바이너리 포맷으로 읽,쓰,추



### 쓰기

```python
with open('file.txt','w') as file_data:
    file_data.write("First\n")
    file_data.write("Second")
```



### 읽기

```python
with open('file.txt','r') as file_data:
    for linen in file_data:
        print(line)
```



### 추가

```python
with open('file.txt','a') as file_data:
    file_data.write("Third\n")
```





### 문자 자동변환

- `urllib.parse.quote`(*string*, *safe='/'*, *encoding=None*, *errors=None*)[¶](https://docs.python.org/ko/3/library/urllib.parse.html#urllib.parse.quote)

  `%xx` 이스케이프를 사용하여 *string*의 특수 문자를 치환합니다. 글자, 숫자 및 문자 `'_.-~'`는 절대 인용되지 않습니다. 기본적으로, 이 함수는 URL의 경로 섹션을 인용하기 위한 것입니다. 선택적 *safe* 매개 변수는 인용해서는 안 되는 추가 ASCII 문자를 지정합니다 — 기본값은 `'/'`입니다.*string*은 [`str`](https://docs.python.org/ko/3/library/stdtypes.html#str)이나 [`bytes`](https://docs.python.org/ko/3/library/stdtypes.html#bytes)일 수 있습니다.*버전 3.7에서 변경:* URL 문자열 인용을 [**RFC 2396**](https://tools.ietf.org/html/rfc2396.html)에서 [**RFC 3986**](https://tools.ietf.org/html/rfc3986.html)으로 옮겼습니다. 《~》는 이제 예약되지 않은 문자 집합에 포함됩니다.선택적 *encoding*과 *errors* 매개 변수는 [`str.encode()`](https://docs.python.org/ko/3/library/stdtypes.html#str.encode) 메서드에서 받아들이는 것처럼 비 ASCII 문자를 처리하는 방법을 지정합니다. *encoding*의 기본값은 `'utf-8'`입니다. *errors*의 기본값은 `'strict'`로, 지원되지 않는 문자는 [`UnicodeEncodeError`](https://docs.python.org/ko/3/library/exceptions.html#UnicodeEncodeError)를 발생시킴을 의미합니다. *string*이 [`bytes`](https://docs.python.org/ko/3/library/stdtypes.html#bytes)이면 *encoding*과 *errors*를 제공해서는 안 됩니다, 그렇지 않으면 [`TypeError`](https://docs.python.org/ko/3/library/exceptions.html#TypeError)가 발생합니다.`quote(string, safe, encoding, errors)`는 `quote_from_bytes(string.encode(encoding, errors), safe)`와 동등함에 유의하십시오.예: `quote('/El Niño/')`는 `'/El%20Ni%C3%B1o/'`를 산출합니다.

- `urllib.parse.``quote_plus`(*string*, *safe=''*, *encoding=None*, *errors=None*)

  [`quote()`](https://docs.python.org/ko/3/library/urllib.parse.html#urllib.parse.quote)와 유사하지만, URL로 이동하기 위한 쿼리 문자열을 만들 때 HTML 폼값을 인용하는 데 필요한 대로 스페이스를 더하기 부호로 치환하기도 합니다. *safe*에 포함되지 않으면 원래 문자열의 더하기 부호가 이스케이프 됩니다. 또한 *safe*의 기본값은 `'/'`가 아닙니다.

  예: `quote_plus('/El Niño/')`는 `'%2FEl+Ni%C3%B1o%2F'`를 산출합니다





### 참고

* https://twpower.github.io/17-with-usage-in-python
* https://docs.python.org/ko/3/library/urllib.parse.html

