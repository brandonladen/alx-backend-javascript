export default function getListStudentIds(arrayObjs) {
  if (!Array.isArray(arrayObjs)) {
    return [];
  }
  const arrayIds = arrayObjs.map((obj) => obj.id);

  return arrayIds;
}
