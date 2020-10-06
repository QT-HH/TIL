## Form

- Form의 주요 역할
  - 입력값 검증
  - 입력된 값이 검증에 통과하면 검증 된 값을 Dictionary 형식으로 제공(cleaned_data)
- Form을 선언하는 방법
  - Model 선언하는 방법과 굉장히 유사하다
  - Form 정의
  - views.py에서 정의한 Form 인스턴트를 만들어서 context로 전달
- ModelForm