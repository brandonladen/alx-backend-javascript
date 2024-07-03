interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student_1: Student = {firstName: "John", lastName: "Doe", age: 15, location: "Columbia"}; 
let student_2: Student = {firstName: "Jane", lastName: "Maria", age: 20, location: "Romania"};

let studentList: Student[] = [student_1, student_2];
