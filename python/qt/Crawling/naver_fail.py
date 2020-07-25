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

