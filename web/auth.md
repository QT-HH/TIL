

---



기존주소/login?next=로그인 이전 요청 주소

- GET으로 데이터를 보냈을 때 qeury string 날아감.
- 그 데이터를 받을 때 request.GET.get('next')
- redirect(request.GET.get('next') or index)





- 접근제한

  - request에 로그인 정보가 들어있음. user

  - request.user

    - `request.user.is_authenticated` 로그인 여부
    - is_superuser : 관리자인지 아닌지 여부
    - is_anonymous : 로그아웃 여부

  - 데코레이터

    - login_required

      ```python
      from django.contrib.auth.decorators import login_required
      
      @login_required
      def update(requrest):
          pass
      
      ```

      - 로그아웃 상태에서 update로 접근을 했다!
        - /accounts/login/?next=/accounts/update/ 로 주소가 나타나는 것을 확인가능.
        - 이 주소형식은 전형적인 GET 타입의 querystring
        - request.GET.get('next') 하면 /accounts/update/를 획득할 수 있음.
        - redirect(request.GET.get('next') or 'articles:index')로 이동할 수 있음.



---

- 회원탈퇴
  - urls.py를 정의한다. 회원탈퇴 요청이 들어오면 views에서 함수를 실행하게 정의.
  - views.py에서 삭제하는 함수를 정의
    - 회원 가입 => DB에 유저 정보를 생성
    - 회원 탈퇴 => DB에서 유저 정보를 삭제
    - 유저 정보를 delete() 실행하면 삭제 됨.
      - 유저 정보는 어디에?
        - request.user에 있음.
        - request.user.delete()하면 DB에서 삭제됨.
    - 여기에서 생각해보면 로그인 하지 않은 유저가 요청을 하면 되지 않음
      - 로그인 되었을 때만 회원탈퇴하게끔 is_authenticated로 접근 제한



---

- 회원 정보 수정

  - UserChangeForm 사용

    - 사용을 했더니?

    - 일반유저는 대박.

      - 내가 나를 최고 관리자로 만들 수 있다

        => UserChangeForm을 그대로 사용하면 서비스가 망함.

  - Custom해서 사용해야함.

    - forms.py에서 CustomUserChangeForm을 정의

      - UserChangeForm을 상속받아서 정의

        ```python
        from django.contrib.auth.forms import UserChangeForm
        from django.contrib.auth import get_user_model
        
        class CustomUserChangeForm(UserChangeForm):
            class Meta:
                model = get_user_model()
                fields = ['email','first_name','last_name']
        ```

        

---



### 로그인

- 쿠키
  - 브라우저에 저장
  - 키-밸류 작은 데이터 파일
  - 만료일자
  - 쿠키 종류
    - 세션 쿠키
      - 사용자가 사이트를 탐색할 때, 설정과 선호 사항을 저장하는 임시 쿠키
      - 브라우저를 닫으면 삭제
    - 지속 쿠키
      - 사용자가 주기적으로 방문하는 사이트에 대한 설정 정보나 로그인 이름을 유지하기 위해 주로 사용.
      - 브라우저를 닫거나 컴퓨터를 재시작해도 남아있음.
- 세션
  - 서버 DB 혹은 메모리
  - 정말 중요한 정보를 저장
  - 사용자가 많아지면 서버가 느려질 수 있음.
- 로그인 == 세션을 새롭게 생성(Create)
- AuthenticationForm : Django에서 기본적으로 제공해주는 form
  - 로그인을 위해서 입력창을 제공
  - 로그인 유효성 검사
  - DB 유저 정보와 비교해서 접속 인증해주는 친구
  - DB를 직접 수정하는 폼이 아니기 때문에 form
    - 첫 번째 인자로 request 정보를 보내야 함.
- login 함수 : Django에서 기본적으로 제공해주는 함수
  - 세션에 인증 정보를 생성해주는 함수.



---



### 로그아웃

- 로그아웃 == 세션에서 삭제(Delete)
- logout 함수 : Django에서 기본적으로 제공해주는 함수
  - 현재 request에서 session에 관한 data를 삭제





### 접근제한

- `is_authenticated`
  - User 클래스와 AsnonymousUser의 속성 값.
    - User 해당 값이 항상 True, AnonymousUser는 항상 False
  - 유저가 인증된 유저인지 아닌지를 확인
- `is_anonymous` : 유저가 인증되지 않은 사용자인지 확인
- `is_superuser` : 유저가 최고 관리자인지 확인
- `is_staff` : 유저가 관리자 계쩡에  접근 가능한지 확인.



- login_required 데코레이터
  - 로그인 된 유저만 해당 함수를 실행가능하게 하는 데코레이터
  - 만약 로그인이 되지 않은 유저라면
    - /accounts/login/으로 리다이렉트 해줌
    - next라는 쿼리 문자열에 이전에 접근하려 했던 주소를 keep해준다.
      - 킵된 주소를 사용하려면 request.GET.get('next')해서 리다이렉트
    - `@login_required(login_url='/accounts/test/')
    - settings.py에 LOGIN_URL을 설정해주면 해당 주소로 갈 수 있음.
      - LOGIN_URL 기본값이 `/accounts/login/`



- login_required와 require_POST를 샅이 사용할 수 없는 이유.

  ```python
  @reqruie_POST
  #@login_required
  def logout(request):
      if request.user.is_authenticated:
      	auth_logout(request)
      return redirect('accounts:index')
  ```

  - 비로그인 상태로 POST로 logout을 시도했을 때
    1. login_required에서 로그인 페이지로 리다이렉트(POST 데이터 손실)
       - 리다이렉트는 GET
    2. 로그인을 완료 후 next를 이용해서 다시 logout으로 접근
       - 리다이렉트로 logout을 접근하게 됨.
    3. 결국 403 http method에러 생성



### 회원탈퇴

- 회원탈퇴 == DB에서 유저 정보를 삭제

- 이전에 데이터베이스로 정보를 삭제하는 방법

  ```python
  def delete(request,pk):
      data = Article.objects.get(pk=pk) # Article 정볼르 가져와서 
      data.delete() # Article 정보에서 delete를 실행
      ...
  ```

  

- 유저 정보는 request.user에 담겨져있다.

  - request.user.delete()를 하면 삭제



- 디버깅 순서
  - 개발순서(요청->url->view->template->응답)
  - 개발 순서의 역순으로 생각하면서 오류를 트래킹
    - 응답(오류메세지) -> template -> views -> url -> 요청(주소줄 확인, or 장고 log에 찍힌 요청을 확인)



### 회원정보 수정

- 회원 정보를 Update
- `UserChangeform` : Django에서 기본적으로 제공해주는 폼
  - DB를 수정해야하는 폼
  - ModelForm
  - 문제점
    - 일반 유저가 권한 설정을 할 수 ㅣㅇㅆ게 된다.
    - 그대로 ㅅ용하면 절대 안된다.
- `CustomUserChangeForm`: `UserChangeForm`을 상속받아서 커스텀한 폼
  - 원하는 필드맘ㄴ 수정할 수 있게 해야한다.
  - 유저의 정보를 채워서 입력창을 보여줘야하므로 `instacance`설정해야한다.



### 비밀번호 변경

- DB를 수정하는데,,...
  - 비밀번호는 텍스트 그대로 저장되면 안됨.
  - Django는 비밀번호를 그냥 저장하지 않고 암호화
- PasswordChangeForm
  - `Form`을 상속받아서 정의되어 있음.
  - 첫 번째 인자로 `request.user`가 필요하다.
  - data=request.POST를 넣어서 사용한다.
- 비밀번호 변경을 성공하게 된다면 로그인이 풀려버린다
  - 로그인 되면 유저 정보를 세션에 저장하는데
  - 비밀번호가 변경이 되면 유저 정보가 업데이트 되어서 세션에 저장된 유저 정보와 데이터가 일치하지 않게 된다.
  - `update_session_auth_hash` 함수를 사용해서 세션의 유저 정보를 업데이트 시켜줘야함.



---

### url resolver

- resolver는 웹 브라우저에서 요청을 서버로 전달하고 서버에서 주소를 받아 브라우저에 제공하는 기능을 수행.
- Django에서 url resolver는 `urls.py`에서 정의한 `path`
- reverse() 함수가 존재하는데 이 함수는 url resolvers 모듈 안에 있는 메서드
  - redirect('articles:index, articles.pk')로 사용하는 redirect도 reverse함수를 사용
  - app_name과 path의 name에 일치하는 실제 주소창에 입력되는 /article/1/을 찾아줌.
  - 찾지 못하면 NoReverseMatch 오류가 발생
- 결과적으로 resolver라는건 실제 주소창에 입력되는 주소와 장고 내부에서 사용하는 url을 서로 번역해주는 역할을 함.