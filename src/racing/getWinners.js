export default function getWinners(cars) {
  if (!Array.isArray(cars) || cars.length === 0) return [];
  const max = Math.max(...cars.map((c) => c.position));
  return cars.filter((c) => c.position === max).map((c) => c.name);
}