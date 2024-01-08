// Sum of student Ids from intial value of 0
export default function getStudentIdsSum(studentList) {
  return studentList.reduce((sum, student) => sum + student.id, 0);
}
