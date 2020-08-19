## Model

* DB에 데이터를 저장하고 가져오는 것
* SQL
* ORM (쉽게 말해 통역기)
  * 쿼리를 python에서 object로 사용할 수 있게 해줌.



### 모델 정의

* `models.py`에 모델 클래스를 정의해서 사용할 수 있다.

  * class 테이블명(models.Model):

    title = models.CharField(max_length=100)

    * 자주 사용하는 필드명
    * CharField / DateTimeField / TextField / integerField / BooleanField
    * Django 공식문서 Model field 참조



### DB 생성

* 클래스를 다 정의하면 반드시 해야하는 일
  * makemigrations
    * pyhon manage.py makemigrations [app 이름]
    * DB에 적용하기 위한 설계도를 제작
    * app 이름을 뒤에 적으면 해당 app에 있는 models.py의 내용만 설계도를 만듦.
  * migrate
    * python manage.py migrate [app 이름]
    * 만들어진 설계도를 가지고 DB에 테이블을 생성
    * app 이름을 적으면 해당 app에 있는 migration 파일을 db에 적용시킴.
  * showmigrations
  * sqlmigrate



### DB 사용

* DB api

  ```
  모델클래스이름.objects.QeurySetAPI
  
  Article.objects.all()
  * objects : s가 뒤에 붙음
  ```

  











## CharField(max_length=None)

* 길이의 제한이 있는 문자열을 넣을 때 사용
* max_length가 필수 인자
* 필드의 최대 길이, 데이터베이스와 django의 유효성 검사에서 사용
* input type text



## TextField()

* 글자의 수가 많을 때 사용
* `<textarea>`



## DateTimeField()

* 최초 생성 일자 : `auto_now_add = True`
  * django ORM이 최초 데이터 입력시에만 현재 날짜와 시간으로 갱신
  * 테이블에 어떤 데이터를 최초로 넣을 때
* 최종 수정 일자 :  `auto_now=True`
  * django ORM이 save를 할 때마다 현재 날짜와 시간으로 갱신

---



## Migrations

### makemigrations

* 모델을 변경한 것에 기반한 새로운 마이그레이션(설계도)을 만들 때 사용
* 모델을 활성화하기 전에 DB 설계도를 작성
* 생성된 마이그레이션 파일은 데이터베이스 스키마를 위한 버전관리 시스템이라고 생각



### migrate

* 작성된 마이그레이션 파일들을 기반으로 실제 DB에 반영
* db.sqlite3라는 데이터베이스 파일에 테이블을 생성
* 모델에서의 변경사항들과 DB의 스키마가 동기화를 이룸



### sqlmigrate

* 해당 마이그레이션 파일이 SQL문으로 어떻게 해석되어서 동작할지 미리 확인하기 위한 명령어





### showmigrations

* 마이그레이션 파일들의 migrate여부를 확인하기 위한 명령어





### Model의 중요 3단계

1. models.py : 변경사항(작성,수정,삭제...) 발생
2. makemigrations : 설계도 만들기
3. migrate : DB에 적용



---

python manage.py shell_plus

### CREAT

데이터를 작성하는 3가지 방법

1. 첫 번째 방법
   * article=Article(): 모델 클래스로부터 인스턴스 생성
   * article 인스턴스로 클래스 변수에 접근해 해당 인스턴스 변수를 변경 (article.title= 'first')
   * article.save() 메서드 호출 -> DB에 실제로 저장이 끝
2. 두 번째 방법
   * 클래스 인스턴스 생성시 keword 인자를 함께 작성
   * `article=ARticle(title='',content='')`
   * article.save() 메서드 호출 -> DB에 실제로 저장이 끝
3. 세 번째 방법
   * creat() 메서드를 사용하면 쿼리셋 객체를 생성하고 save하는 로직이 한 번의 step으로 가능
   * `Article.objects.create(title='',content='')`



## READ

`all()`

* `QuerySet` return
* 리스트는 아니지만 리스트와 거의 비슷하게 동작(조작할 수 있음)



`get()`

* 객체가 없으면 `DoesNotExist` 에러가 발생
* 객체가 여러 개일 경우는 `MultipleObjectReturned`에러가 발생
* 위와 같은 특징을 가지고 있기 때문에 unique 혹은 



`filter()`

* 지정된 조회 매개 변수와 일칳나느 객체를 포함하는 QuerySet을 return





### Update









## Migrations Commands

* makemigrations
  * model을 변경한 것에 기반한 새로운 마이그레이션을 만들 때 사용
* migrate
  * 마이그레이션을 DB에 반영하기 위해 사용
* sqlmigrate
  * 마이그레이션에 대한 SQL구문을 보기 위해 사용
* showmigrations
  * 프로젝트 전체의 마이그레이션과 각각의 상태를 확인하기 위해 사용



클래스명.objects.Queryset



* QuerySet
  * 데이트베이스로부터 전달받은 객체 목록
  * queryset 안의 객체는 0개,1개 혹은 여러 개일 수 있음
  * 데이터베이스로부터 조회, 필터, 정렬 등을 수행할 수 있음



