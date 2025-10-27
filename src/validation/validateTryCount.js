export default function validateTryCount(raw) {
  if (raw === null || raw === undefined) {
    throw new Error("[ERROR] 시도 횟수를 입력해야 합니다.");
  }
  const n = Number(raw);
  if (!Number.isInteger(n)) {
    throw new Error("[ERROR] 시도 횟수는 정수여야 합니다.");
  }
  if (n <= 0) {
    throw new Error("[ERROR] 시도 횟수는 1 이상이어야 합니다.");
  }
}