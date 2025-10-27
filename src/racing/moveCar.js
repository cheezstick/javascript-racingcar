import { MIN_GO } from "../constants.js";

export default function moveCar(car, randomNumber) {
  if (randomNumber >= MIN_GO) {
    return { ...car, position: car.position + 1 };
  }
  return { ...car };
}