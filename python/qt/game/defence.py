import pygame
import time

SCREEN_WIDTH = 400
SCREEN_HEIGHT = 400
one_Cell = 20

RED = 255, 0, 0        # 적색:   적 255, 녹   0, 청   0
GREEN = 0, 255, 0      # 녹색:   적   0, 녹 255, 청   0
BLUE = 0, 0, 255       # 청색:   적   0, 녹   0, 청 255
PURPLE = 127, 0, 127   # 보라색: 적 127, 녹   0, 청 127
BLACK = 0, 0, 0        # 검은색: 적   0, 녹   0, 청   0
GRAY = 127, 127, 127   # 회색:   적 127, 녹 127, 청 127
WHITE = 255, 255, 255  # 하얀색: 적 255, 녹 255, 청 255

pygame.init() #라이브러리 초기화

screen = pygame.display.set_mode((SCREEN_WIDTH,SCREEN_HEIGHT)) #창 띄우기
pygame.display.set_caption('Defence Game') #제목 설정


while True:
    events = pygame.event.get()
    for event in events:
        if event.type ==pygame.QUIT:
            exit()


    draw_background(screen)
    pygame.display.update()



def draw_background(screen):
    background = pygame.Rect((0,0),(SCREEN_WIDTH,SCREEN_HEIGHT)) #배경설정
    pygame.draw.rect(screen,GRAY,background) #배경을 창에 띄우기

def draw_road(screen):
    for i in range(20): #길 그리기
    road = pygame.Rect((20*i,40),(one_Cell,2*one_Cell))
    pygame.draw.rect(screen,WHITE,road)

def draw_interface(screen):
    interface = pygame.Rect((0,360),(400,40))
    pygame.draw.rect(screen,GREEN,interface)

def draw_enemy(screen):
    enemy = pygame.Rect((0,50),(one_Cell,one_Cell))
    pygame.draw.rect(screen,RED,enemy)

class enenmy:
    pass
