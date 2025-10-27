export default function createCarsState(names) {
  return names.map((name) => ({ name, position: 0 }));
}