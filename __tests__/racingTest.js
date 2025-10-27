// 레이싱 로직 단위 테스트 코드
import moveCar from "../src/racing/moveCar.js";
import getWinners from "../src/racing/getWinners.js";
import raceOneRound from "../src/racing/raceOneRound.js";

jest.mock("../src/utils/getRandomNumber.js", () => ({
  __esModule: true,
  default: jest.fn(),
}));
import getRandomNumber from "../src/utils/getRandomNumber.js";

describe("racing core", () => {
  test("moveCars: 난수가 4 이상이면 전진, 아니면 정지", () => {
    const base = { name: "car", position: 0 };
    expect(moveCar(base, 3).position).toBe(0);
    expect(moveCar(base, 4).position).toBe(1);
  });

  test("getWinners: 공동 우승 처리", () => {
    const cars = [
      { name: "a", position: 2 },
      { name: "b", position: 5 },
      { name: "c", position: 5 },
    ];
    expect(getWinners(cars)).toEqual(["b", "c"]);
  });

  test("raceOneRound: getRandomNumber 결과에 따라 각 차량 이동", () => {
    const cars = [
      { name: "a", position: 0 },
      { name: "b", position: 0 },
      { name: "c", position: 0 },
    ];

    getRandomNumber
      .mockImplementationOnce(() => 3)
      .mockImplementationOnce(() => 4)
      .mockImplementationOnce(() => 9);

    const next = raceOneRound(cars);
    expect(next).toEqual([
      { name: "a", position: 0 },
      { name: "b", position: 1 },
      { name: "c", position: 1 },
    ]);
  });
});
