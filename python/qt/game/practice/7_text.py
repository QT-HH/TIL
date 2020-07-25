import pygame

pygame.init() # 초기화(반드시 필요)

# 화면 크기 설정
screen_width = 480      # 가로크기
screen_height = 640     # 세로크기
screen = pygame.display.set_mode((screen_width,screen_height))

# 화면 타이틀 설정
pygame.display.set_caption("Game")  # 게임이름

# FPS
clock = pygame.time.Clock()

# 배경이미지 불러오기
backround = pygame.image.load(r'D:\TIL\python\qt\game\practice\python_src\background.png')

# 캐릭터(스프아리트) 불러오기
character = pygame.image.load(r'D:\TIL\python\qt\game\practice\python_src\character.png')
character_size = character.get_rect().size # 이미지의 크기를 구해옴
character_width = character_size[0]     # 캐릭터의 가로 크기
character_height = character_size[1]    # 캐릭터의 세로 크기
character_x_pos = screen_width / 2 - character_width / 2    # 화면 가로의 절반크기에 해당하는 곳에 위치 (가로)
character_y_pos = screen_height - character_height     # 화면 세로크기 가장 아래에 (세로)

to_x = 0
to_y = 0

# 이동 속도
character_speed = 0.6

# 적 enemy 캐릭터
enemy = pygame.image.load(r'D:\TIL\python\qt\game\practice\python_src\enemy.png')
enemy_size = enemy.get_rect().size # 이미지의 크기를 구해옴
enemy_width = enemy_size[0]     # 캐릭터의 가로 크기
enemy_height = enemy_size[1]    # 캐릭터의 세로 크기
enemy_x_pos = screen_width / 2 - enemy_width / 2    # 화면 가로의 절반크기에 해당하는 곳에 위치 (가로)
enemy_y_pos = screen_height / 2 - enemy_height / 2     # 화면 세로크기 가장 아래에 (세로)


# 폰트 정의
game_font = pygame.font.Font(None, 40) # 폰트 객체 생성 (폰트, 크기)

# 총 시간
total_time = 10

# 시작 시간
start_ticks = pygame.time.get_ticks() # 시작 tick을 받아옴

# 이벤트 루프
running = True # 게임이 진행중인가?
while(running):
    dt = clock.tick(60)

    # print("fps : " + str(clock.get_fps()))

    for event in pygame.event.get():     # 어떤 이벤트가 발생하였는가?
        if event.type == pygame.QUIT:    # 창이 닫히는 이벤트가 발생하였는가?
            running = False     # 게임이 진행중이 아님

        if event.type == pygame.KEYDOWN:    # 키가 눌러졌는지 확인
            if event.key == pygame.K_LEFT : # 캐릭터를 왼쪽으로
                to_x -= character_speed
            elif event.key == pygame.K_RIGHT:
                to_x += character_speed
            elif event.key == pygame.K_UP:
                to_y -= character_speed
            elif event.key == pygame.K_DOWN:
                to_y += character_speed

        if event.type == pygame.KEYUP:  # 방향키를 떼면 멈춤
            if event.key == pygame.K_LEFT or event.key == pygame.K_RIGHT:
                to_x = 0
            elif event.key == pygame.K_UP or event.key == pygame.K_DOWN:
                to_y = 0

    character_x_pos += to_x * dt
    character_y_pos += to_y * dt

    # 가로 경계값 처리
    if character_x_pos > screen_width - character_width:
        character_x_pos = screen_width - character_width
    elif character_x_pos < 0:
        character_x_pos = 0
    
    # 세로 경계값 처리
    if character_y_pos > screen_height - character_height:
        character_y_pos = screen_height - character_height
    elif character_y_pos < 0:
        character_y_pos = 0

    # 충돌 처리를 위한 rect 정보 업데이트
    character_rect = character.get_rect()
    character_rect.left = character_x_pos
    character_rect.top = character_y_pos

    enemy_rect = enemy.get_rect()
    enemy_rect.left = enemy_x_pos
    enemy_rect.top = enemy_y_pos

    # 충돌 체크
    if character_rect.colliderect(enemy_rect):
        print("충돌했어요")
        running = False


    screen.blit(backround, (0, 0))   # 배경 그리기
    screen.blit(character, (character_x_pos,character_y_pos))    # 캐릭터 그리기
    screen.blit(enemy, (enemy_x_pos,enemy_y_pos)) # 적 그리기


    #타이머 집어넣기
    #경과시간 계산
    elapsed_time = (pygame.time.get_ticks() - start_ticks) / 1000
    #경과시간을 1000으로 나눠서 초(s) 단위로 표시

    timer = game_font.render(str(int(total_time - elapsed_time)), True, (255,255,255))
    # 출력할 글자, True, 글자 색상
    screen.blit(timer, (10,10))

    # 만약 시간이 0 이하이면 게임 종료
    if total_time - elapsed_time <=0:
        print("타임아웃")
        running = False

    pygame.display.update()  # 게임 화면을 다시 그리기

# 잠시 대기
pygame.time.delay(1000) # 2초정도 대기
    

# pygame 종료
pygame.quit()