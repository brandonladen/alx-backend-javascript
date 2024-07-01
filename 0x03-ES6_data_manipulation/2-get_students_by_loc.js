export default function getStudentsByLocation(arrayObj, city) {
  const cleanData = arrayObj.filter((obj) => obj.location === city);

  return cleanData;
}
