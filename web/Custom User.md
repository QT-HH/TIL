## Custom User

```python
# accounts/models.py

class User(AbstractUser):
    pass
```

- ~~AbstractBaseUser~~
- AbstractUser

```python
# settings.py
AUTH_USER_MODEL = 'accounts.User'
```

- 기존 DB 삭제
- makemigrations
- migrate

---

## Custom User를 했을 시 수정되어야 하는 Form

- user를 모델로 하는 모델품들을 수정해야 함.
- 제공되는 user 관련 모델품은 auth.User(Django에서 제공해주는 User 클래스)를 model 정보로 가지고 있기 때문.
- UserCreationForm / UserChangeForm

```python
# accounts/forms.py

class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm):
        model = get_user_model()
        fields = UserCreationForm.Meta.fields + ('email')
```

- get_user_model()

  - return 유저 클래스
  - models.py를 제외한 모든 곳

  

- settings.AUTH_USER_MODEL

  - return 유저 클래스 문자열(str)
  - models.py에서 사용.



---



User - Article(1:N)

User - Comment(1:N)

```
articles/models.py

class Article / class Comment
	...
	user = modles.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
```

---



원인)

1. 비로그인으로 POST 요청
2. login_required로 인해서 `accounts/login/`으로 이동 (POST요청에 대한 내용이 상실, http는 현재 상태를 저장x)
3. login 진행
4. login 함수의 redirect 부분에서 request.GET.get('next')에 저장도니 delete 경로로 다시 요청 (GET 방식)
   - redirect는 항상 GET 방식으로 주소 요청
5. require_POST 때문에 405 Method not Allowed status code가 발생함.



해결방법

- POST method로 처리
- 인증되지 않은 사용자는 메인페이지.

```python

```

