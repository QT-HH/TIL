```bash
vi ~/.bashrc
```



```bash
sqlite3 tutorial.sqlite3

```

```sqlite
.databases
.mode csv
.import hellodb.csv examples

SELECT * FROM examples;
.headers on
. mode column
m .mode csv

```



- Table 생성

```squlite
CREATE TABLE table(
column1 datatype PRIMARY KEY,
column2 datatype,
column3 datatype,
)

CREATE TABLE classmates(
id INTEGER PRIMARY KEY,
name TEXT
);
```



- Datatype

| Affinity | datatype                                                     |
| -------- | ------------------------------------------------------------ |
| INTEGER  | TINYINT(1byte), SMALLINT(2bytes), MEDIUMINT(3bytes), INT(4bytes), BITINT(8bytes), UNSIGNED BIT INT |
| TEXT     | CHARACTER(20byte 고정), VARCHAR(255 용량 자유롭게), TEXT     |
| REAL     | REAL(부동소수점 8byte), DUOBLE, FLOAT                        |
| NUMERIC  | NUMERIC(소수점 제외한 길이), DECIMAL(소수점 포함), BOOLEAN, DATE, DATETIME |
| BLOB     | no datatype specified                                        |



- table 목록 조회 : `.tables`
- schema 조회 : `.schema table`

- 특정 table 삭제 : `DROP TABLE table;`



- DATA 추가(INSERT)

  ```
  INSERT INTO table(columne1, columne2,...)
  VALUES(value1,value2,...)
  
  모든 col에 넣을 때는 col 생략 가능
  -> values에는 col 순서대로 값을 넣어준다.
  ```

  

`SELECT rowid, * FROM classmates;`

rowid는 자동으로 작성되지만 직접 id칼럼을 만든 후에는 컬럼을 명시해야한다.

혹은 칼럼을 생략하지 않는다(id만 생략)

PK칼럼은 rowid를 사용하는 것이 편하다.



- Data 조회

  ```sqlite
  SELECT * FROM table;
  SELECT col1,col2 FROM table;
  
  -- 특정한 개수만 가져오기
  SELECT col1,col2 FROM table
  LIMIT num;
  
  -- 특정한 위치에서부터 몇 개만 가져오기
  SELECT col1,col2 FROM table
  LIMIT num1 OFFSET num2;
  --> num2 초과부터 num1개
  
  --table에서 id,name column값 중에 특정ㅎ안 값만 가져온다면?
  SELECT col1,col2 FROM table
  WHERE column=value;
  
  --table에서 특정 column 값을 중복없이 가져오기
  SELECT DISTINCT column FROM table
  
  ```



- DATA 삭제(DELETE)

  ```sqlite
  --특정 table에 특정한 레코드 삭제
  --where 없으면 전체삭제
  DELETE FROM table
  WHERE condition;
  ```

  

- AUTOINCREMENT

  - 옵션을 주면 id를 사용하지않게된다.

  ```sqlite
  CREATE TABLE test(
  	id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
  );
  ```



- Data 수정(Update)

  ```sqlite
  --condition을 만족하는 record만 수정한다.
  UPDATE table
  SET col1=val1, col2=val2,..
  WHERE condition;
  ```

  

![캡처](sqlite.assets/캡처.PNG)



- 외부 데이터 추가

```sqlite
.mode csv
.import users.csv users
```



- WHERE문 심화

  ```sqlite
  --users에서 나이가 30이상인 사람만 가지고온다면
  SELECT rowid,* FROM users
  WHERE age>=30;
  
  --users에서 age가 30 이상이고 성이 김인 사람의 성과 나이만 가져온다면?
  SELECT last_name,age FROM users
  WHERE age>=30 and last_name='김';
  ```



- record

  ```sqlite
  --users table의 모든 record의 개수는?
  SELECT COUNT(*) FROM users;
  
  --30살 이상의 평균 나이는?
  SELECT AVG(age) FROM users
  WHERE age>=30;
  
  --users에서 계좌 잔액이 가장 높은 사람과 그 금액은?
  SELECT MAX(balance), balance FROM users;
  
  --users에서 30살 이상인 사람의 계좌 평균 잔액은?
  SELECT AVG(balance) FROM users
  WHERE age>=30;
  
  ```



- LIKE(wild cards)

  > 정확한 값에 대한 비교가 아닌, 패턴을 확인하여 해당하는 값을 반환한다.

  - 와일드카드 2가지 패턴
    - `_` 반드시 이 자리에 한 개의 문자가 존재해야한다.
    - `%` 이 자리에 문자가 있어도 되고 없어도 된다.

  ```sqlite
  SELECT * FROM table
  WHERE col LIKE val_conition;
  
  --users에서 20대인 사람은?
  SELECT * FROM users
  WHERE age LIKE '2_';
  
  
  --users에서 지역번호가 02인 사람만?
  SELECT * FROM users
  WHERE phone LIKE '02-%';
  
  --users에서 이름이 '준'으로 끝나는 사람만
  SELECT * FROM users
  WHERE first_name LIKE '%준';
  
  --users에서 중간 번호가 5114인 사람만?
  SELECT * FROM users
  WHERE phone LIKE '%5114%';
  ```





- order(정렬)

  ```sqlite
  SELECT col FROM table
  ORDER BY col1,col2 ASD|DESC;
  
  --ASC : 오름차순
  --DESC : 내림차순
  
  
  --users에서 나이순으로 오름차순 정렬하여 상위 10개만 뽑아보면?
  SELECT * FROM users
  ORDER BY age ASC
  LIMIT 10;
  
  --users에서 나이순, 성 순으로 오름차순 정렬하여 상위 10개만 뽑아보면?
  -- ASC 생략 가능
  SELECT * FROM users
  ORDER BY age,last_name ASC
  LIMIT 10;
  
  
  --users에서 계좌 잔액 순으로 내림차순 정렬하여 해당하는 사람의 성과 이름을 10개만 뽑으면?
  SELECT last_name,first_name FROM USERS
  ORDER BY balance DESC
  LIMIT 10;
  
  ```



- GROUP BY

  ```sqlite
  SELECT
  	column_1
  	aggregate_function(num2)
  
                         
  users에서 각 성(last_name)씨가 몇 명씩 있는지 조회하시오.
  SELECT COUNT(*) FROM users
  GROUP BY last_name;
  
  ```

  

### ALTER

- 테이블 명 변경

  ```ㄴ비ㅑㅅㄷ
  
  ```











---

python manage.py shell_plus --print-sql