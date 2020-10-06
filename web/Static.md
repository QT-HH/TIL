## Static

- img,js,css : static file
- 따로 폴더에 넣어서 보여줘야합니다.
- like html...



static 파일을 서브하려면

 1. 각 앱의 static이라는 폴더 아래에 static file이 위치해있어야 한다.

    - 앱 폴더 외부에 있는 static 파일이라면 STATICFILES_DIRS를 settings.py 파일에 넣어준다.

 2. static tag를 이용해서 불러와야함.

    ```
    {% load static %} 상단에 있어야함. extends tag보다는 밑에 있어야함.
    <img src="{% static "스태틱 파일 경로"}" alt = "" %}
    ```

    



### STATIC_URL

- 웹 페이지에서 사용하는 static file의 최상위  URL 경로
- 실제 파일이나 디렉토리 경로는 아님.
- url로만 존재하는 단위
- 반드시 `/`로 끝나야한다.
- STATIC_ROOT 설정에 있는 static file을 참조할 때 사용하는 URL



### STATIC_ROOT

- 배포할 때 사용하는 static file 경로
- `python manage.py collectstatic`
  - 프로젝트 배포 시 흩어져 있는 static file을 모아서 특정 디렉토리로 옮기는 작업
  - 앱 폴더 내부의 static 폴더와 STATICFILES_DIRS에 등록된 디렉토리의 static file을 모아줌.
- DEBUG = True인 경우에는 파일경로로 인식되지 않음
  - 실 서비스 환경에서만 동작.
- DEBUG = False인 경우 우리는 더이상 장고에서 static파일을 서비스할 수 없음.
  - 웹 서버에서 static 파일을 전송해줘야 함



### STATICFILES_DIRS(only 개발용)

- 외부에 있는 static file을 찾아오기위해 등록.

- like ... base.html

  ```
  STATICFILES_DIRS = [
  	BASE_DIR / 'assets',
  ]
  ```



---



## MEDIA

- 사용자가 업로드한 사진을 서비스하는 방법
- 파일 자체는 static이지만 언제, 어떤 파일을 제공하는지 예측할 수 없는 파일
- 모델 정의
  -  
- form의 enctype 속성을 설정
  - apllication/x-www : 기본값, 모든 문자 인코딩
  - multipart/form-data : 파일 / 이미지 업로드시 반드시 사용해야함.
  - text/plain : 인코딩을 하지 않은 문자 그대로 전송 공백'+'로 전환



### MEDIA_ROOT

- 업로드가 끝난 파일을 배치할 최상위 경로를 지정하는 설정.



### MEDIA_URL

- like STATIC_URL



---

이미지 사이즈 조절





---

blank vs null

- null : DB와 관련
- blank : 데이터의 유효성
- CharField, TextField 문자열을 기반으로 저장하는 필드들
  - `null=True x`  `blank=true o`