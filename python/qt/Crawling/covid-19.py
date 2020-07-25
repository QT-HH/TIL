import requests
from bs4 import BeautifulSoup

url = 'http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun='

response = requests.get(url).text

data = BeautifulSoup(response,'html.parser')

time_std = data.select_one('#content > div > h5:nth-child(4) > span')
new = data.select_one('#content > div > div.caseTable > div:nth-child(1) > ul > li:nth-child(2) > dl > dd > ul > li:nth-child(1) > p')


print(f'{time_std.text} 코로나 신규 발생자 : {new.text} 명')
