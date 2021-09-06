L.range

1. range

   ```javascript
   // 숫자를 받아 그 크기만큼 반환한다.
   const range = l => {
     let i = -1
     let response = []
     
     while(++i < l) {
       response.push(i)
     }
     
     return response
   }
   
   const list = range(4)
   
   console.log(list) // [0,1,2,3]
   console.log(reduce(add, list)) // 6
   ```

2. L.range

   ```javascript
   // 배열이 바로 반환되지않고 Iterator가 반환된다.
   
   const L = {}
   
   L.range = function *(l) {
     let i = -1
     while (++i < l) {
       yield i
     }
   }
   
   const list = L.range(4)
   
   console.log(list) // L.range(<suispended)
   console.log(reduce(add, list)) // 6
   ```



일반 `range`함수는 함수 호출 시점에 이미 배열로 평가가 되어 list에 대입되지만 `L.range`는 함수 호출 시점에 실제 값이 대입되지 않는다.

`L.range`에서 값이 실제로 호출되는 시기는 이터레이터의 내부를 순회할 때이다.

`list.next()`를 통해 순회를 할 때 결과가 꺼내진다.