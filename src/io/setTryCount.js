import { Console } from "@woowacourse/mission-utils";

export default async function setTryCount() {
  const question = "시도할 횟수는 몇 회인가요?";
  const tryCount = await Console.readLineAsync(question + "\n");
  return tryCount;
}