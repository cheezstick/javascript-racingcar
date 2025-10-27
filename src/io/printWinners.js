export default function printWinners(names) {
  const winnerList = names.join(", ");
  return `최종 우승자 : ${winnerList}`;
}