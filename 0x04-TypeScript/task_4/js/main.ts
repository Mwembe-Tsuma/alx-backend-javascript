import { cpp, java, react } from './Subjects';

export const cppSubject = cpp;
export const javaSubject = java;
export const reactSubject = react;
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

console.log('Cpp:');
console.log(`- ${cpp.getRequirements()}`);
console.log(`- ${cpp.getAvailableTeacher()}`);

console.log('\nJava:');
console.log(`- ${java.getRequirements()}`);
console.log(`- ${java.getAvailableTeacher()}`);

console.log('\nReact:');
console.log(`- ${react.getRequirements()}`);
console.log(`- ${react.getAvailableTeacher()}`);
