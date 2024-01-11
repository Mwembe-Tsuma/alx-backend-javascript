// main.ts

interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

class TeacherClass implements Teacher {
  constructor(
    public firstName: string,
    public lastName: string,
    public fullTimeEmployee: boolean,
    public location: string,
    public yearsOfExperience?: number,
    additionalAttributes: Record<string, any> = {}
  ) {
    // Add additional attributes to the object
    Object.assign(this, additionalAttributes);
  }
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

const teacher3: Teacher = new TeacherClass('John', 'Doe', false, 'London', undefined, { contract: false });

console.log(director1);
console.log(teacher3);
