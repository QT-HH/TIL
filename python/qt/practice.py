import requests
from bs4 import BeautifulSoup

url = 'https://search.naver.com/search.naver?where=image&sm=tab_jum&query=%EA%B0%95%EC%95%84%EC%A7%80'

response = requests.get(url).text

data = BeautifulSoup(response,'html.parser')

time_std = data.select_one('#content > div > h5:nth-child(4) > span')
new = data.select_one(r'#_sau_imageTab > div.photowall._photoGridWrapper > div.photo_grid._box > div:nth-child(1) > a.thumb._thumb > img')


print(f'{new}')
