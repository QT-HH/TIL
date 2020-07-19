## selenium을 이용한 web crawling

> 자바스크립트에 의해 동적으로 생성되는 사이트의 데이터를 크롤링 할 때 유용하다.



### selenium 설치

cmd창에서

```
pip install selenium
```

+

https://chromedriver.storage.googleapis.com/index.html?path=84.0.4147.30/

에서 운영체제에 맞는 드라이버 다운, 설치 후 exe파일을 곧 만들 py 파일이 있는 곳으로 이동



### selenium 이용해서 네이버 실시간 급상승 검색어 크롤링

```python
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.wait import WebDriverWait
from bs4 import BeautifulSoup
from selenium import webdriver
import time

options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging']) #selenium 메시지 팝업 제거
browser = webdriver.Chrome(executable_path="./chromedriver.exe", options=options)
browser.get('https://datalab.naver.com/keyword/realtimeList.naver?where=main')
time.sleep(1) #사이트 로딩 대기

html = browser.page_source
soup = BeautifulSoup(html, 'html.parser')

ranking = soup.select('#content > div > div.selection_area > div.selection_content > div.field_list > div > div > ul > li > div > span.item_title_wrap > span.item_title')
day = soup.select_one('#content > div > div.selection_area > div.selection_header > div:nth-child(1) > div > div > div > div.date_indo > a.date_box._date_trigger > span.date_txt._title_ymd')
tiktok = soup.select_one('#content > div > div.selection_area > div.selection_header > div:nth-child(1) > div > div > div > div.time_indo > a.time_box._time_trigger > span.time_txt._title_hms')

print(day.text, tiktok.text, '기준 실시간 급상승 검색어')


n=0
for i in ranking:
    n+=1
    print(n, i.text)

browser.quit()
```

#### 

#### 결과값

```bash
2020.07.19. (일) 16:42 기준 실시간 급상승 검색어
1 8월17일
2 에이핑크 덤더럼
3 콘택트
4 김나영
5 이정재
6 이수민 프로
7 김연경
8 김세진
9 최불암
10 이수민
11 조승연
12 진혜지
13 칼세이건
14 신진식
15 마이너리티 리포트
16 황정민
17 이정재 나이
18 임시공휴일
19 미쓰리는 알고있다
20 한소희
```



---



### requests, Beautifulsoup을 이용하여 크롤링에 실패한 코드

```python
import requests
from bs4 import BeautifulSoup

url = 'https://datalab.naver.com/keyword/realtimeList.naver?where=main'

response = requests.get(url).text

data = BeautifulSoup(response,'html.parser')

day = data.select_one('#content > div > div.selection_area > div.selection_header > div:nth-child(1) > div > div > div > div.date_indo > a.date_box._date_trigger > span.date_txt._title_ymd')
tiktok = data.select_one('#content > div > div.selection_area > div.selection_header > div:nth-child(1) > div > div > div > div.time_indo > a.time_box._time_trigger > span.time_txt._title_hms')

ranking = data.select('#content > div > div.selection_area > div.selection_content > div.field_list > div > div > ul > li > div > span.item_title_wrap > span.item_title')

print(day, tiktok, '기준 실시간 급상승 검색어')

n=0
for i in ranking:
    n+=1
    print(n, i.text)

```



#### 결과값

```bash
None None 기준 실시간 급상승 검색어

```



---



### 참고

* https://engkimbs.tistory.com/896
* [http://pythonstudy.xyz/python/article/404-%ED%8C%8C%EC%9D%B4%EC%8D%AC-Selenium-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0](http://pythonstudy.xyz/python/article/404-파이썬-Selenium-사용하기)
* [https://velog.io/@swhybein/Python-Selenium%EC%9C%BC%EB%A1%9C-%ED%81%AC%EB%A1%A4%EB%A7%81%ED%95%98%EA%B8%B0](https://velog.io/@swhybein/Python-Selenium으로-크롤링하기)
* https://chromedriver.chromium.org/downloads
* [https://www.it-swarm-ko.tech/ko/python/python-%ec%85%80%eb%a0%88%eb%8a%84-devtools-ws-127001%ec%97%90%ec%84%9c-%eb%93%a3%ea%b8%b0/835183559/](https://www.it-swarm-ko.tech/ko/python/python-셀레늄-devtools-ws-127001에서-듣기/835183559/)

