# javascript-racingcar-precourse

## 🚗 자동차 경주 게임
- 여러 대의 자동차가 주어진 횟수만큼 **전진 또는 멈출 수 있는** 자동차 경주 게임을 구현한다.
- `@woowacourse/mission-utils`의 `Random` 및 `Console` API를 사용한다.

---

### 🚀 실행 방법
```
# Node.js 버전 확인 (v22.19.0 이상 필요)
node -v

# 의존성 설치
npm install

#테스트 실행
npm run test

# 프로그램 실행
npm run start
```

---

### 🧩 필수 구현 기능 목록
1️⃣ **사용자 입력**
- 사용자는 각 **자동차의 이름**을 입력한다.
  - 자동차 이름은 :
    - 쉼표(`,`)로 구분하여 입력
    - 각 이름은 **5자 이하**로 제한
- 사용자는 **이동 횟수**를 입력한다.
- **잘못된 입력 값**이 들어올 경우:
  - `[ERROR]`로 시작하는 에러 메시지를 출력하고 프로그램 종료
```
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 횟수는 몇 회인가요?
5
```

2️⃣ **자동차 이동**

- 전진 조건:
  - `0 ~ 9` 사이의 랜덤 숫자 생성
  - 숫자가 **4 이상일 경우 전진**
- 레이스 진행 결과는 **매 시도마다 출력**한다.
```
실행 결과
pobi : -
woni : 
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---
```


3️⃣ **우승자 출력**
- 가장 많이 전진한 자동차를 **우승자로 출력**한다. (공동 우승 가능)
    - 단 우승자 안내 문구
        ```
        최종 우승자 : pobi
        ```
    - 공동 우승자 안내 문구
        ```
        최종 우승자 : pobi, jun
        ```

---

### 👀 실행 예시

```
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 횟수는 몇 회인가요?
5

실행 결과
pobi : -
woni : 
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----

최종 우승자 : pobi, jun
```

---

### 🧰 라이브러리 사용
`@woowacourse/mission-utils`
- `Console.readLineAsync()` : 입력 처리
- `Console.print()` : 출력 처리
- `Random.pickNumberInRange()` : Random 값 추출