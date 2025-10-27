// 유효성 전용 단위 테스트
import validateCarNames from "../src/validation/validateCarNames.js";
import validateTryCount from "../src/validation/validateTryCount.js";

describe("validation", () => {
  test("자동차 이름은 1개 이상이어야 한다", () => {
    expect(() => validateCarNames([], { maxLength: 5 })).toThrow("[ERROR]");
  });

  test("자동차 이름이 문자열이 아니면 에러", () => {
    expect(() => validateCarNames([123], { maxLength: 5 })).toThrow("[ERROR]");
  });

  test("자동차 이름은 공백 불가", () => {
    expect(() => validateCarNames(["   "], { maxLength: 5 })).toThrow("[ERROR]");
  });

  test("자동차 이름은 5자 이하여야 한다", () => {
    expect(() => validateCarNames(["abcdef"], { maxLength: 5 })).toThrow("[ERROR]");
    expect(() => validateCarNames(["alpha"], { maxLength: 5 })).not.toThrow();
  });

  test("시도 횟수는 정수이면서 1 이상이어야 한다", () => {
    expect(() => validateTryCount(0)).toThrow("[ERROR]");
    expect(() => validateTryCount(1.2)).toThrow("[ERROR]");
    expect(() => validateTryCount("3")).not.toThrow();
  });
});
