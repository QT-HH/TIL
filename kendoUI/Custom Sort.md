Kendo Grid에서 새로운 기준으로 정렬하기

```javascript
$("#grid").kendoGrid({
    dataSource: dataSource,
    sortable: true,
    columns: [{
        field: "item",
        sortable: {
            compare: function(a, b) {
                return numbers[a.item] - numbers[b.item];
            }
        }
    }]
});
```



이렇게 하면 안에서 자신만의 커스텀 기준을 만들고 정렬할 수 있다.