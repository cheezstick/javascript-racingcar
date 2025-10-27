import getRandomNumber from "../utils/getRandomNumber.js"
import moveCar from "./moveCar.js";

export default function raceOneRound(cars) {
  return cars.map((car) => {
    const randomNumber = getRandomNumber();
    return moveCar(car, randomNumber);
  });
}