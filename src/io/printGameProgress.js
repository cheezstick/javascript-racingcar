export default function printGameProgress(car) {
  const bar = "-".repeat(car.position);
  return `${car.name} : ${bar}`;
}