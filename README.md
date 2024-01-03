<h1 align="center"> E205 특화 프로젝트 - 🥇최우수 수상작🥇 (1등) </h1>

 [🎞 UCC 보러가기](https://youtu.be/v5x5W6YQDZU)  
 [📝 노션 보러가기](https://phrygian-sheet-619.notion.site/SSAFY-PJT_E205-f715c31a3cf5496391f803d81ab34543?pvs=4)

</br>

## 📝 목차

[프로젝트 개요](#item-one)

[역할 분담](#item-two)

[기술 스택](#item-three)

[데이터 베이스 모델링 (ERD)](#item-four)

[서비스 구현 화면](#item-five)
 
</br>

## 프로젝트 개요

- <strong>진행 기간</strong>: 2023.08.21 ~ 2023.10.06

- <strong>목표</strong>
  
  - 개발자의 편의를 제공하는 채팅 서비스를 제공합니다.
  
  - 여러가지 툴을 사용하지 않고 하나의 채팅 서비스로 프로젝트를 원활하게 수행합니다.
  
  - 프로젝트 팀원들의 기여도를 확인하고 프로젝트와 관련된 통계 데이터를 제공합니다.
    
</br>


# 프로젝트 확인하기

## 역할 분담

#### <strong>이상훈</strong> - 팀장, 분산, BE : 분산 처리 / 서버 간 통신 / JIRA 관리

#### <strong>강동윤</strong> - BE : 웹 소켓 통신 / DB 관리 / 회원, 채팅 등

#### <strong>김성인</strong> - BE : 자동 배포 / ERD 설계 / 통계, 채팅방 등

#### <strong>김대웅</strong> - FE : 채팅 socket / 통계 그래프 / UX/UI

#### <strong>최상익</strong> - FE : API 통신 / 렌더링 개선 / UX/UI

#### <strong>이가영</strong> - FE : API 통신 / S3 업로드 / UX/UI

<a id="item-three"></a> 

## 기술 스택

<a id="item-four"></a>

## **⚙** Management Tool

- 이슈관리 : JIRA

- 형상관리 : Gitlab

- 커뮤니케이션 : Notion, Mattermost

- 디자인 : Figma

- UCC : 모바비

## 💻 IDE

- VS Code : 1.18.1

- IntelliJ : 11.0.19

## 📱 Frontend

- React : ^18.2.0

- Vite : ^4.4.5

- react-router-dom : ^6.14.2

- recoil : ^0.7.7

- axios : ^1.4.0

- Node.js : 18.16.1

## 💾 Backend

- Springboot : 2.7.13

- Lombok

- Spring Data JPA

- Spring Data Redis(lecttuce)

- Spring Web

- Springdoc-openapi-ui 1.6.11

- Oauth2

- Swagger 3.0.0

- SSL

- CertBot(CA Certificates)

- SERVER : AWS EC2 Ubuntu 20.04.6 LTS

- DB : MySQL 8.0.33, Redis

- Hadoop : 3.3.5

- Spark : 3.4.1

## 🔃 DevOPS

- Nginx

- Docker

- Jenkins
 
</br>

## 데이터 베이스 모델링 (ERD)

![채팅서비스 ERD.png](README_assets/11b88bd657320fae7546e0ca9f18e58a5874e642.png)
 
</br>

## 프로젝트 구조도

<details>
<summary>FrontEnd</summary>

```
📦src
 ┣ 📂components
 ┃ ┣ 📂analysis
 ┃ ┃ ┣ 📜Analysis.module.css
 ┃ ┃ ┣ 📜Analysis.tsx
 ┃ ┃ ┣ 📜BarChart.tsx
 ┃ ┃ ┣ 📜Cloud.tsx
 ┃ ┃ ┣ 📜Keywords.module.css
 ┃ ┃ ┣ 📜Keywords.tsx<details>
 ┃ ┃ ┣ 📜PiChart.tsx
 ┃ ┃ ┗ 📜RadarChart.tsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜ColorPickerDialog.tsx
 ┃ ┃ ┣ 📜Container.tsx
 ┃ ┃ ┣ 📜LeftSide.module.css
 ┃ ┃ ┣ 📜LeftSide.tsx
 ┃ ┃ ┣ 📜List.tsx
 ┃ ┃ ┣ 📜ProfileImgBox.tsx
 ┃ ┃ ┣ 📜Slick.tsx
 ┃ ┃ ┗ 📜StyledBadge.ts
 ┃ ┣ 📂common2
 ┃ ┃ ┣ 📜IndivChatModal.module.css
 ┃ ┃ ┣ 📜IndivChatModal.tsx
 ┃ ┃ ┣ 📜IndivTask.css
 ┃ ┃ ┣ 📜IndivTask.module.css
 ┃ ┃ ┣ 📜IndivTask.tsx
 ┃ ┃ ┣ 📜TaskModal.module.css
 ┃ ┃ ┣ 📜TaskModal.tsx
 ┃ ┃ ┣ 📜TeamTask.module.css
 ┃ ┃ ┣ 📜TeamTask.tsx
 ┃ ┃ ┣ 📜TeamTaskCreateModal.module.css
 ┃ ┃ ┗ 📜TeamTaskCreateModal.tsx
 ┃ ┣ 📂createproject
 ┃ ┃ ┣ 📜CreateProject.module.css
 ┃ ┃ ┣ 📜CreateProject.tsx
 ┃ ┃ ┣ 📜ItemTypes.tsx
 ┃ ┃ ┣ 📜Nemo.tsx
 ┃ ┃ ┣ 📜SetDate.module.css
 ┃ ┃ ┣ 📜SetDate.tsx
 ┃ ┃ ┣ 📜SetGitRepo.module.css
 ┃ ┃ ┣ 📜SetGitRepo.tsx
 ┃ ┃ ┣ 📜SetMember.module.css
 ┃ ┃ ┣ 📜SetMember.tsx
 ┃ ┃ ┣ 📜SetProjectInfo.module.css
 ┃ ┃ ┣ 📜SetProjectInfo.tsx
 ┃ ┃ ┣ 📜SetProjectName.module.css
 ┃ ┃ ┗ 📜SetProjectName.tsx
 ┃ ┣ 📂error
 ┃ ┃ ┣ 📜Error.css
 ┃ ┃ ┣ 📜Error.module.css
 ┃ ┃ ┣ 📜ErrorBoard.tsx
 ┃ ┃ ┣ 📜ErrorCard.tsx
 ┃ ┃ ┣ 📜ErrorCreate.tsx
 ┃ ┃ ┣ 📜ErrorList.tsx
 ┃ ┃ ┣ 📜ErrorModal.module.css
 ┃ ┃ ┣ 📜ErrortModal.tsx
 ┃ ┃ ┣ 📜MultiSelect.tsx
 ┃ ┃ ┗ 📜Search.tsx
 ┃ ┣ 📂idea
 ┃ ┃ ┣ 📜Idea.module.css
 ┃ ┃ ┣ 📜Idea.tsx
 ┃ ┃ ┣ 📜MindMapEdge.tsx
 ┃ ┃ ┣ 📜MindMapNode.tsx
 ┃ ┃ ┣ 📜Share.module.css
 ┃ ┃ ┗ 📜Share.tsx
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📜landing1.png
 ┃ ┃ ┣ 📜landing2.png
 ┃ ┃ ┣ 📜Login.module.css
 ┃ ┃ ┗ 📜Login.tsx
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📜invite.module.css
 ┃ ┃ ┣ 📜Invite.tsx
 ┃ ┃ ┣ 📜InviteCard.tsx
 ┃ ┃ ┣ 📜Project.module.css
 ┃ ┃ ┣ 📜Project.tsx
 ┃ ┃ ┣ 📜ProjectCard.module.css
 ┃ ┃ ┣ 📜ProjectCard.tsx
 ┃ ┃ ┣ 📜ProjectModal.module.css
 ┃ ┃ ┣ 📜ProjectModal.tsx
 ┃ ┃ ┗ 📜ProjectSlide.tsx
 ┃ ┣ 📂message
 ┃ ┃ ┣ 📜CreateLinkModal.tsx
 ┃ ┃ ┣ 📜GoogleSearch.tsx
 ┃ ┃ ┣ 📜ItemTypes.ts
 ┃ ┃ ┣ 📜LinkOGItem.module.css
 ┃ ┃ ┣ 📜LinkOGItem.tsx
 ┃ ┃ ┣ 📜Message.module.css
 ┃ ┃ ┣ 📜Message.tsx
 ┃ ┃ ┣ 📜MessageBack.tsx
 ┃ ┃ ┣ 📜MessageItem.module.css
 ┃ ┃ ┣ 📜MessageItem.tsx
 ┃ ┃ ┣ 📜MessageLeftBody.module.css
 ┃ ┃ ┣ 📜MessageLeftBody.tsx
 ┃ ┃ ┣ 📜MessageRightBody.module.css
 ┃ ┃ ┣ 📜MessageRightBody.tsx
 ┃ ┃ ┣ 📜RightFileTab.module.css
 ┃ ┃ ┣ 📜RightFileTab.tsx
 ┃ ┃ ┣ 📜RightLinkTab.module.css
 ┃ ┃ ┣ 📜RightLinkTab.tsx
 ┃ ┃ ┣ 📜RightMediaTab.module.css
 ┃ ┃ ┣ 📜RightMediaTab.tsx
 ┃ ┃ ┣ 📜RightSearchTab.module.css
 ┃ ┃ ┗ 📜RightSearchTab.tsx
 ┃ ┣ 📂profile
 ┃ ┃ ┣ 📜ProfileLarge.tsx
 ┃ ┃ ┣ 📜ProfileMedium.tsx
 ┃ ┃ ┗ 📜ProfileSmall.tsx
 ┃ ┣ 📂profileSetting
 ┃ ┃ ┣ 📜CustomProfile.module.css
 ┃ ┃ ┣ 📜CustomProfile.tsx
 ┃ ┃ ┣ 📜CustomProfileInfo.module.css
 ┃ ┃ ┗ 📜CustomProfileInfo.tsx
 ┃ ┗ 📂reactDnd
 ┃ ┃ ┣ 📜Column.module.css
 ┃ ┃ ┣ 📜Column.tsx
 ┃ ┃ ┣ 📜Contants.tsx
 ┃ ┃ ┣ 📜MovableItem.module.css
 ┃ ┃ ┣ 📜MovableItem.tsx
 ┃ ┃ ┣ 📜Tasks.tsx
 ┃ ┃ ┗ 📜Types.tsx
 ┣ 📂pages
 ┃ ┣ 📜AnalysisPage.tsx
 ┃ ┣ 📜CreateProjectPage.module.css
 ┃ ┣ 📜CreateProjectPage.tsx
 ┃ ┣ 📜CustomProfilePage.tsx
 ┃ ┣ 📜IdeaPage.module.css
 ┃ ┣ 📜IdeaPage.tsx
 ┃ ┣ 📜LoginPage.tsx
 ┃ ┣ 📜MainPage.module.css
 ┃ ┣ 📜MainPage.tsx
 ┃ ┣ 📜MessagePage.module.css
 ┃ ┣ 📜MessagePage.tsx
 ┃ ┣ 📜ProfilePage.module.css
 ┃ ┣ 📜ProfilePage.tsx
 ┃ ┣ 📜RedirectPage.tsx
 ┃ ┣ 📜TaskPage.tsx
 ┃ ┗ 📜UserLoginPage.tsx
 ┣ 📂stores
 ┃ ┣ 📜atom.ts
 ┃ ┣ 📜linkState.ts
 ┃ ┗ 📜selecter.ts
 ┣ 📂utils
 ┃ ┣ 📜analysisApi.ts
 ┃ ┣ 📜api.tsx
 ┃ ┣ 📜chatApi.tsx
 ┃ ┣ 📜ChatList.js
 ┃ ┣ 📜errorApi.ts
 ┃ ┣ 📜ideaApi.ts
 ┃ ┣ 📜invitationApi.ts
 ┃ ┣ 📜linkApi.ts
 ┃ ┣ 📜mindmapApi.ts
 ┃ ┣ 📜projectApi.tsx
 ┃ ┣ 📜taskApi.tsx
 ┃ ┣ 📜taskGroupApi.tsx
 ┃ ┣ 📜taskReferenceApi.tsx
 ┃ ┗ 📜userApi.tsx
 ┣ 📜App.css
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜AppRouter.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜logo.svg
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┣ 📜setupProxy.js
 ┣ 📜setupTests.ts
 ┗ 📜store.ts
```

</details>

<details>
<summary>BackEnd</summary>

```
📦src
 ┣ 📂main
 ┃ ┣ 📂java
 ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┗ 📂ssafy
 ┃ ┃ ┃ ┃ ┗ 📂backend
 ┃ ┃ ┃ ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂analyze
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AnalyzeController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜KeywordController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜KeywordsRequest.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MyKeywords.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ProjectStatistic.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜KeywordRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜StatisticRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜KeywordService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜StatisticService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Keyword.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Statistic.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂attachedFile
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜AttachedFileController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜AttachedFileInfo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜AttachedFileRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜AttachedFileService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AttachedFile.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Category.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂chat
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatSchedulerContoller.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜InvitationController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜NoticeController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜NotificationController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatInfo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatInfoResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatPost.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomInfo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomInfoDetailResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomInfoResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomUserInfoResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatWordDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MyInvitationResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜NoticeContent.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜NotificationResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AcceptanceStatus.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Chat.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoom.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Distributed.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Notice.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Notification.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜NotificationType.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Participation.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜DistributedRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EmitterRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EmitterRepositoryImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜NoticeRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜NotificationRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ParticipationRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatScheduler.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜InvitationService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜NoticeService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜NotificationService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂advice
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ExceptionAdvice.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂exception
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ResourceNotFoundException.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BaseEntity.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BasicResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FileUploadResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜GlobalMethod.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂link
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜LinkController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LinkInfo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜LinkInfoResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜LinkRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜LinkService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Link.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mindmap
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MindMapController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MindMapNodeInfo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MindMapRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MindMapService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MindMap.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂post
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PostController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ReplyController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PostInfo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PostInfoDetailResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PostInfoResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ReplyInfo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ReplyInfoResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PostRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PostSkillRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ReplyRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PostService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ReplyService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Post.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PostSkill.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Reply.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂task
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ReferenceController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜TaskController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TaskGroupController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ReferenceChatInfo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ReferenceInfo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ReferenceInfoResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜TaskGroupInfo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜TaskGroupInfoDetailResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜TaskGroupInfoResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜TaskGroupRegister.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜TaskInfo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜TaskInfoDetailResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜TaskInfoResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TaskRegister.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ReferenceRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜TaskGroupRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TaskRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ReferenceService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜TaskGroupService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TaskService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Priority.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Progress.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Reference.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Task.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TaskGroup.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SkillController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChallengeInfoResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MySkillInfo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SearchUser.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SkillInfoResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UserDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UserInfo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserInfoResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂exception
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AuthenticationNotValidException.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserNotFoundException.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChallengeRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MySkillRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SkillRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChallengeService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SkillService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Challenge.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MySkill.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Role.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Skill.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜State.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜User.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂global
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜RedisConfig.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ScheduledConfig.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SecurityConfig.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SwaggerConfig.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜WebConfig.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜WebSocketConfig.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂github
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜repositoryInfo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜GithubApi.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜GithubScheduler.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂jwt
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂filter
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜JwtAuthenticationProcessingFilter.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜JwtService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂util
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PasswordUtil.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂oauth2
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CustomOAuth2UserService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂userinfo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜OAuth2UserInfo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CustomOAuth2User.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜OAuth2Attribute.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜OAuth2LoginFailureHandler.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜OAuth2LoginSuccessHandler.java
 ┃ ┃ ┃ ┃ ┃ ┗ 📜BackendApplication.java
 ┃ ┗ 📂resources
 ┃ ┃ ┣ 📂static
 ┃ ┃ ┃ ┣ 📜app.js
 ┃ ┃ ┃ ┗ 📜index.html
 ┃ ┃ ┗ 📜application.yml
 ┗ 📂test
 ┃ ┗ 📂java
 ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┗ 📂ssafy
 ┃ ┃ ┃ ┃ ┗ 📂backend
 ┃ ┃ ┃ ┃ ┃ ┗ 📜BackendApplicationTests.java
```

</details>
 
</br>

## 서비스 구현 화면

### 1. 로그인 및 커스텀

- 신규 회원 가입 및 커스텀

<img title="" src="README_assets/2596f5d946336ae8b6362883264ce226a390bda2.jpg" alt="메인페이지.jpg" width="634">

<img title="" src="README_assets/6b1e547c2017484749a4735b03b67483dacffa26.jpg" alt="깃헙 로그인.jpg" width="634">

<img title="" src="README_assets/5377c992879b6aa988d8b22c1c827aa675d1e6eb.jpg" alt="프로필 수정.jpg" width="632">

- 기존 회원 로그인

![기존회원로그인.gif](README_assets/772cea7ea8b0bd37bde820efa50951a682a09428.gif)
 
</br>

### 2. 내 정보 확인 및 커스텀

- 분산 처리한 내용 및 도전과제 보여줌

![프로필.gif](README_assets/4f1404897beafa68b2ec33fc80d278aa1e916d8b.gif)

- 커스텀 변경

![프로필변경.gif](README_assets/69b36ea293b870a79ed1c038fede3f0575075cb8.gif)

- 유저 상태 변경

![상태변경.gif](README_assets/405469d9bf8813004458ccb9b32a9257fce521f8.gif)
 
</br>

### 3. 메인 페이지에서 프로젝트 생성

![프로젝트 생성1.gif](README_assets/59eaca9269eadeaf5d800982d8496a6ac599ac54.gif)

![프로젝트생성2.gif](README_assets/31bca21a12d4ee6ac1e50d4557476e4e2e93ba0f.gif)
 
</br>

### 4. 채팅창 기능 소개

- 채팅 입력 ( 채팅, 이모지, 사진, 파일, 동영상)

![채팅1.gif](README_assets/06aaea1ec87d9b887d29ab8c62abce467010e493.gif)

![채팅2.gif](README_assets/fc264fe23d0f10f0764c1bd7fe0efb204d7c8cc1.gif)

- 이미지&동영상 탭, 파일 탭, 링크 탭, 검색 탭

![링크1.gif](README_assets/a52f01213f5a4df3cad0288525cc88f18ca1ff6a.gif)

![링크2.gif](README_assets/30f5fb6506b756c984fa6893e3e39e16f02f59b8.gif)

- 개인 태스크 생성/ 수정

![개인태스크생성,수정.gif](README_assets/97ff415232e00f3d4b83902bae4d86429f2b9df0.gif)

- 개인 태스크 삭제

![개인태스크삭제.gif](README_assets/baaf288d3c3ede8b6e3eac77d0f0dcfec161b383.gif)

- 채팅 > 개인 태스크 등록

![개인태스크 채팅등록.gif](README_assets/0d13ef6f4f0cf5881a28603840ff30493fca8aca.gif)

- 채팅 > 개인 태스크 생성

![채팅개인태스크등록.gif](README_assets/c84de0b3f0c960619869b54b1746240252237688.gif)
 
</br>

### 5. Task

- 공통태스크 등록

![공통태스크등록.gif](README_assets/769a520ff2218ecb621daa5a1c13af0a7c30ac8d.gif)

- 개인 태스크 > 공통 태스크 등록
 
</br>

### 6. Board

- 마인드맵 생성 및 삭제

![마인드맵.gif](README_assets/8fa50f456fcd119e561bc02741bc4ba1bb65a53a.gif)

- 에러 게시판 작성

![에러생성.gif](README_assets/3aa64864eba0814bdf54cbdd6859971cb836a428.gif)

- 에러 댓글 작성

![에러댓글작성.gif](README_assets/1731914566f464b79455707aade1427eff2323ec.gif)

- 에러 댓글 채택 

![에러 댓글 채택.gif](README_assets/45409cc1925ab42578c5a2ba43fbbee3aff09356.gif)

- 에러 게시판 검색

![에러 검색.gif](README_assets/1698f97d848ec3c0a5ddf56f3a5795803dd63e79.gif)
 
</br>

### 7. Analysis

![통계.gif](README_assets/5637685aa436021420ab75b1bb7fc94de3abf38e.gif)

![통계1.gif](README_assets/91428ac7e9d8a5a6327303dda1cf158ff9bf4203.gif)

![통계2.gif](README_assets/9437818465b53ac54d54bdc3ff1f00ed6c505b73.gif)

## 
