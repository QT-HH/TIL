```bash
python -m venv (이름)

source venv/Scripts/activate

deactivate
```

vscode

ctrl shift p  ->  select interpreter  -> venv

![image-20200821102300358](C:\Users\gyutae\AppData\Roaming\Typora\typora-user-images\image-20200821102300358.png)

### 라이브러리 맞춰주기

pip freeze

* 현재 환경에 설치된 패키지를 requirements format으로 출력
* 대소문자를 구분하지 않는 순서로 나열



* 패키지 요구사항 파일 생성
  * pip freeze > requirements.txt
* 다운받기
  * pip install -r requirements.txt





### DB 맞춰주기

초기 데이터 만들어서 다른 곳에서 import

`fixture`

- 앱을 처음 설정할 때 데이터베이스를 미리 채워야 하는 상황이 있는데 이러한 초기 데이터를 제공하는 방법 중 하나



`dumpdata`

- 특정 앱의 관련된 데이터베이스의 모든 데이터를 출력 > 파일명

`loaddata`

- dumpdata를 통해 만들어진 fixtures 파일을 데이터베이스에 import
- fixtures 파일은 반드시 app 디렉토리 안에 fixtures 디렉토리에 위치해야한다. (app/fixtures/)

```bash
python manage.py dumpdata app_name.ModelName [--options]
python manage.py dumpdata articles.Article --indent 4 > articles.json
```

```bash
python manage.py loaddata articles/articles.json articles/user.json
```

