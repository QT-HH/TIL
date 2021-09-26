import requests, json

baseUrl = 'https://kox947ka1a.execute-api.ap-northeast-2.amazonaws.com/prod/users'
headers = { 'X-Auth-Token': '3fc67a92db80ecf388de61f9d0ee8962', 'Content-Type': 'application/json' }
data = { 'problem': 1 }
res = requests.post(baseUrl+'/start', headers=headers, data=json.dumps(data), params={} )
auth_key = res.json()['auth_key']
# print(res.json())

def getReq(path='', headers={}, params={}):
  URL = baseUrl + path
  res = requests.get(URL, headers=headers, params=params).json()
  return res

def postReq(path='', headers={}, data={}):
  URL = baseUrl + path
  res = requests.post(URL, headers=headers, data=json.dumps(data)).json()
  return res