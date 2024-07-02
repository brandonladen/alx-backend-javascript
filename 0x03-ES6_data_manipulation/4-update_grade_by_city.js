export default function updateStudentGradeByCity(arrayObj, city, newGrades) {
  const cleanData = arrayObj.filter((obj) => obj.location === city);
  if (!Array.isArray(newGrades)) {
    return cleanData.map((obj) => ({ ...obj, grade: 'N/A' }));
  }
  return cleanData.map((obj) => {
    const grade = newGrades.find((g) => g.studentId === obj.id);
    return {
      ...obj, grade: grade ? grade.grade : 'N/A',
    };
  });
}
