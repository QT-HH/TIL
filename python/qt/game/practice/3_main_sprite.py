import pygame

pygame.init() # 초기화(반드시 필요)

# 화면 크기 설정
screen_width = 480      # 가로크기
screen_height = 640     # 세로크기
screen = pygame.display.set_mode((screen_width,screen_height))

# 화면 타이틀 설정
pygame.display.set_caption("Game")  # 게임이름

# 배경이미지 불러오기
backround = pygame.image.load(r'D:\TIL\python\qt\game\practice\python_src\background.png')

# 캐릭터(스프아리트) 불러오기
character = pygame.image.load(r'D:\TIL\python\qt\game\practice\python_src\character.png')
character_size = character.get_rect().size # 이미지의 크기를 구해옴
character_width = character_size[0]     # 캐릭터의 가로 크기
character_height = character_size[1]    # 캐릭터의 세로 크기
character_x_pos = screen_width / 2 - character_width / 2    # 화면 가로의 절반크기에 해당하는 곳에 위치 (가로)
character_y_pos = screen_height - character_height     # 화면 세로크기 가장 아래에 (세로)

# 이벤트 루프

running = True # 게임이 진행중인가?
while(running):
    for event in pygame.event.get():     # 어떤 이벤트가 발생하였는가?
        if event.type == pygame.QUIT:    # 창이 닫히는 이벤트가 발생하였는가?
            running = False     # 게임이 진행중이 아님
    

    screen.blit(backround, (0, 0))   # 배경 그리기

    screen.blit(character, (character_x_pos,character_y_pos))    # 캐릭터 그리기

    pygame.display.update()  # 게임 화면을 다시 그리기


# pygame 종료
pygame.quit()