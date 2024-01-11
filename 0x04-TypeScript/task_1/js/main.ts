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

const teacher3: Teacher = new TeacherClass('John', 'Doe', false, 'London', undefined, { contract: false });

console.log(teacher3);
