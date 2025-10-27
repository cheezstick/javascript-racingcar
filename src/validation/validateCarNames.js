export default function validateCarNames(names, { maxLength }) {
  if (!Array.isArray(names) || names.length === 0) {
    throw new Error("[ERROR] 자동차 이름을 한 개 이상 입력해야 합니다.");
  }

  for (let i = 0; i < names.length; i += 1) {
    const n = names[i];

    if (typeof n !== "string") {
      throw new Error("[ERROR] 자동차 이름이 문자열이 아닙니다.");
    }
    if (n.trim().length === 0) {
      throw new Error("[ERROR] 빈 문자열은 이름으로 사용할 수 없습니다.");
    }
    if (n.length > maxLength) {
      throw new Error(`[ERROR] 자동차 이름은 ${maxLength}자 이하여야 합니다.`);
    }
  }
}