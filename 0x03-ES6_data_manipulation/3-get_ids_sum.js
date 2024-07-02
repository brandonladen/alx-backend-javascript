export default function getStudentIdsSum(arrayObj) {
  const list = arrayObj.map((obj) => obj.id);
  const initial = 0;

  const newList = list.reduce((accumulator, currentValue) => accumulator + currentValue, initial);
  return newList;
}
