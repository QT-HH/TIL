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



참고 : https://twpower.github.io/17-with-usage-in-python