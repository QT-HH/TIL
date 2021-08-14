# axios interceptors 사용

> axios를 인스턴스로 빼내서 사용할 때 요청하기전, 후로 사전작업을 할 수 있는 기능

```javascript
import axios from 'axios'

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });

  instance.interceptors.request.use(function(config) {
    // config에는 intance의 정보들이 들어가있다.
    // (url, headers, data, method, timeout 등등)
    // 그래서 config에 작업을 해주면 
    // instance를 이용한 axios요청에 적용된당.
    return config;
  })
  
  return instance;
}



export const instance = createInstance();
```



