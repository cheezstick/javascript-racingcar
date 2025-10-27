import { Console } from "@woowacourse/mission-utils";
import printGameProgress from "../io/printGameProgress.js";
import raceOneRound from "../racing/raceOneRound.js";

export default function printCurrentState(tryCount, carsState) {
  let currentState = carsState;
  
  for (let i = 0; i < tryCount; i++) {
    currentState = raceOneRound(currentState);

    currentState.forEach((carState) => {
      Console.print(printGameProgress(carState));
    });
  }

  return currentState;
}