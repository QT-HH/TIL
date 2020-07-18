from bs4 import BeautifulSoup
from urllib.request import urlopen
from urllib.parse import quote_plus

baseurl = 'https://search.naver.com/search.naver?where=image&sm=tab_jum&query='
plusurl = input('검색어 입력 : ')
crawl_num = int(input('사진 갯수 입력 (최대 50개) : '))

url = baseurl + quote_plus(plusurl) #한글 검색 자동 변환
html = urlopen(url)
soup = BeautifulSoup(html, 'html.parser')
img = soup.find_all(class_= "_img")



n = 1
for i in img:
    print(n)
    imgUrl = i['data-source']
    with urlopen(imgUrl) as f:
        with open(('./images/img') +str(n)+'.jpg','wb') as h:
            img = f.read()
            h.write(img)

    n += 1
    if n> crawl_num:
        break

print('Image Crawling is done.')


#출처 : https://bskyvision.com/721
"""
from urllib.request import urlopen
from bs4 import BeautifulSoup as bs
from urllib.parse import quote_plus

baseUrl = 'https://search.naver.com/search.naver?where=image&sm=tab_jum&query='
plusUrl = input('검색어를 입력하세요 : ')
# 한글 검색 자동 변환
url = baseUrl + quote_plus(plusUrl)
html = urlopen(url)
soup = bs(html, "html.parser")
img = soup.find_all(class_='_img')

n = 1
for i in img:
    imgUrl = i['data-source']
    with urlopen(imgUrl) as f:
        with open('./img/' + plusUrl + str(n)+'.jpg','wb') as h: # w - write b - binary
            img = f.read()
            h.write(img)
    n += 1
print('다운로드 완료')
#출처 : https://ultrakid.tistory.com/13
"""