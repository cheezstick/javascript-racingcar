import { Console } from "@woowacourse/mission-utils";
import { NAME_MAX_LEN } from "./constants.js";
import setCarNames from "./io/setCarNames.js";
import setTryCount from "./io/setTryCount.js";
import printWinners from "./io/printWinners.js";
import splitString from "./utils/splitString.js";
import validateCarNames from "./validation/validateCarNames.js";
import validateTryCount from "./validation/validateTryCount.js";
import createCarsState from "./racing/createCarsState.js";
import getWinners from "./racing/getWinners.js";
import printCurrentState from "./io/printCurrentState.js";

class App {
  async run() {
    try {
      const namesInput = await setCarNames();
      const carNames = splitString(namesInput);
      validateCarNames(carNames, { maxLength : NAME_MAX_LEN });

      const tryCountInput = await setTryCount();
      validateTryCount(tryCountInput);
      const tryCount = Number(tryCountInput);

      let carsState = createCarsState(carNames);

      Console.print("실행 결과");
      carsState = printCurrentState(tryCount, carsState);

      const winners = getWinners(carsState);
      Console.print(printWinners(winners));
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      if (typeof msg === "string" && msg.startsWith("[ERROR]")) {
        Console.print(msg);
        throw err;
      }
      Console.print("[ERROR] 알 수 없는 오류가 발생했습니다.");
      throw err;
    }
  }
}

export default App;