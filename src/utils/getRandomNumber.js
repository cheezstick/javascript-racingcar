import { Random } from "@woowacourse/mission-utils";
import { RANDOM_MIN, RANDOM_MAX } from "../constants.js";

export default function getRandomNumber() {
  return Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX);
}