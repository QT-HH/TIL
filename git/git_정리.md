## Git

> Git은 분산버전관리시스템이다.
>
> 소스코드의 버전 및 이력을 관리할 수 있다.





## 준비하기

윈도우에서 git을 활용하기 위해서 git bash를 설치한다.

**초기 설치**를 완료한 이후에 컴퓨터에 `author`정보를 입력한다.

```bash
$ git config --global user.name {user name}
$ git config --global user.email {user email}
```





## 로컬 저장소(repository) 활용하기

### 1. 저장소 초기화

```bash
$ git init
Initialized empty Git repository in C:\Users\~~~~~
```



### 2. add

`working directory (작업공간)` 변경된 사항을 이력으로 저장하기 위해 반드시 `staging area`에 올려야한다.

```bash
$ git add git_정리.md #특정파일
$ git add python/ #특정폴더
$ git add . #전체 디렉토리의 모든 파일
```



### 3. commit

* 버전의 이력을 확정짓는 명령어, 해당시점을 스냅샷으로 만들어서 기록을 한다.
* 커밋시에는 반드시 log 메시지를 작성해야하며, log메세지는 변경사항을 알 수 있도록 명확하게 작성해주면 된다.

```bash
$ git commit -m 'git 정리 정보 작성'
```







## 원격 저장소(GitHub / GitLab)

### 0. repository 생성

### 1. 원격 저장소를 local에 등록

```bash
$ git remote add origin 'git repository 주소'
$ git remote -v # 현재 등록된 remote 정보를 확인 가능.
```



### 2. Push

* 원격 저장소로 업로드

```bash
$ git push origin master
```



---







### 우리의 루틴

* 집에서 한 것이 최신 버전이고 싸피에서 git 작업을 한 번도 하지 않은 경우

  1. `git clone '원격 저장소 주소(repository 주소)'`
     * 원격 저장소를 기준으로 최신 버전의 파일이 다운로드 받아짐
     * .git 폴더도 자동 생성되어진다. (git DB가 들어가 있기 때문)

  * add, commit, push 루틴은 아래와 같음.

  

* 싸피에서 한 것이 최신 버전이고 집에서 작업을 하는 경우

  `pull -> add -> commit -> push`

  `git pull` `origin master`

  해당 루틴으로 진행하면 끝

* 집에서 한 것이 최신 버전이고 집에서 작업을 하는 경우

  `add -> commit -> push`

  



