import { Console } from "@woowacourse/mission-utils";

export default async function setCarNames() {
  const question = "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)";
  const carNames = await Console.readLineAsync(question + "\n");
  return carNames;
}