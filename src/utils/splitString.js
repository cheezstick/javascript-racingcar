export default function splitString(input) {
  if (typeof input !== "string") return [];
  return input
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}