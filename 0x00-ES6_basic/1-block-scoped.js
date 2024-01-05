export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;  // Use let instead of var
    const task2 = false;  // Use const instead of var
  }

  return [task, task2];
}
