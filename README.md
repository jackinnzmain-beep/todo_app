# Todo 앱

학습 목적의 초보자용 Todo 웹 앱입니다.  
Cursor AI와 Phase 단위로 협업하며, **추가 → 완료 체크 → 삭제 → 새로고침해도 유지**까지 만듭니다.

## 목표

브라우저에서 열리는 간단한 Todo 앱을 완성한다.

## 범위

### 하는 것

- Todo 추가
- 완료 체크
- Todo 삭제
- LocalStorage로 브라우저 저장

### 하지 않는 것

- 검색·필터, 수정, 우선순위·마감일
- 회원가입·로그인, 알림·공유·동기화
- 캘린더·복잡한 분류
- 선택 기능 Phase

## 기술

| 항목 | 내용 |
|------|------|
| 형태 | 브라우저 웹 앱 |
| 구성 | HTML + CSS + JavaScript (프레임워크 없음) |
| 데이터 저장 | Phase 4에서 LocalStorage |
| 예정 구조 | `index.html`, `css/style.css`, `js/main.js` |

## 진행 방식

1. 한 번에 **하나의 Phase**만 진행한다.
2. 설명 → 사람 승인 → 구현 → 브라우저 확인.
3. 검증 통과 후 **Commit**(이 컴퓨터 세이브) → 필요 시 **Push**(GitHub 백업).
4. 자세한 완료 조건은 [`PLAN.md`](PLAN.md)를 본다.

### Phase 목록

| 단계 | 내용 |
|------|------|
| 준비 | 계획·Rules·UI·Git·GitHub 설정 |
| Phase 1 | Todo 추가 |
| Phase 2 | 완료 체크 |
| Phase 3 | Todo 삭제 |
| Phase 4 | LocalStorage 저장 |
| Phase 5 | 최종 QA |

## 작업 기록 작성 규칙

작업(세이브)마다 아래 칸을 **같은 형식으로** 한 줄 추가한다.

| 칸 | 의미 |
|----|------|
| 날짜 | 저장한 날 |
| 단계 | `준비` 또는 `Phase 1`~`Phase 5`만 사용 |
| 요약 | 무엇을 왜 저장했는지 한 줄 |
| 한 일 | 실제로 한 것 (짧게) |
| 안 한 일 | 일부러 범위 밖인 것 |
| 확인 | 문서 검토 / 브라우저 확인 등 |
| 세이브 | 커밋 해시·Push 여부 |
| 다음 | 바로 다음 한 가지 |

- 문장은 동사로 짧게 쓴다.
- Phase 밖 기능은 “한 일”에 넣지 않는다.
- 브라우저 확인 전이면 확인 칸에 `검증 예정`이라고 쓴다.

## 작업 기록

| 날짜 | 단계 | 요약 | 한 일 | 안 한 일 | 확인 | 세이브 | 다음 |
|------|------|------|-------|----------|------|--------|------|
| 2026-08-21 | 준비 | 계획·Rules·UI를 정하고 GitHub에 첫 세이브함 | `PLAN.md`·`UI.md`·Rules·ignore 작성, Git 초기화, GitHub 연결 | 앱 화면·기능 코드 | 문서 검토 | 커밋 `83f2a32` · Push 완료 | Phase 1 구현 |
| 2026-08-21 | Phase 1 | Todo 추가 기능을 만들고 검증함 | `index.html`·`css/style.css`·`js/main.js` 추가, `PLAN.md` 갱신 | 체크·삭제·LocalStorage | 자동 검사 + 브라우저 확인 통과 | 본 커밋 · Push 완료 | Phase 2 |
| 2026-08-21 | Phase 2 | Todo 완료 체크 기능을 만들고 검증함 | `js/main.js`·`css/style.css`에 체크·완료 스타일, `PLAN.md` 갱신 | 삭제·LocalStorage | 자동 검사 + 브라우저 확인 통과 | 본 커밋 · Push 완료 | Phase 3 |

## 현재 상태

| 항목 | 내용 |
|------|------|
| 현재 단계 | Phase 2 완료 |
| 앱 코드 | 추가·완료 체크까지 동작 |
| 다음 할 일 | Phase 3(Todo 삭제) |

## 관련 문서

| 파일 | 역할 |
|------|------|
| [`PLAN.md`](PLAN.md) | 프로젝트 지도·Phase 완료 조건·진행 기록 |
| [`UI.md`](UI.md) | 화면 방향·색·레이아웃 참고 |
| [`.cursor/rules/todo-app-collaboration.mdc`](.cursor/rules/todo-app-collaboration.mdc) | AI 협업 Rules |
| [`.cursorignore`](.cursorignore) | AI가 읽지 않아도 되는 목록 |
| [`.gitignore`](.gitignore) | Git에 넣지 않을 목록 |

## 저장소

https://github.com/jackinnzmain-beep/todo_app
