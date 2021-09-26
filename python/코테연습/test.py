from urlReq import *

baseUrl = 'https://kox947ka1a.execute-api.ap-northeast-2.amazonaws.com/prod/users'
headers = { 'X-Auth-Token': '3fc67a92db80ecf388de61f9d0ee8962', 'Content-Type': 'application/json' }
data = { 'problem': 1 }

# print(postReq('/start', headers, data))
print(auth_key)