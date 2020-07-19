from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.wait import WebDriverWait
from bs4 import BeautifulSoup
from selenium import webdriver
import time

options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging']) #selenium 메시지 팝업 제거
browser = webdriver.Chrome(executable_path="./chromedriver.exe", options=options)
browser.get('https://datalab.naver.com/keyword/realtimeList.naver?where=main')
time.sleep(1)

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