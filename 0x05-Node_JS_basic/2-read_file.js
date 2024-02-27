// File: 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n');

    const fieldCounts = {};

    // Iterate through each line
    lines.forEach((line) => {
      // Skip empty lines
      if (line.trim() !== '') {
        // Split the line into fields
        const [firstname, lastname, age, field] = line.split(',');

        if (!fieldCounts[field]) {
          fieldCounts[field] = {
            count: 0,
            names: [],
          };
        }

        // Increment the count for the field
        fieldCounts[field].count++;

        // Add the firstname to the list for the field
        fieldCounts[field].names.push(firstname);
      }
    });

    console.log(`Number of students: ${lines.length - 1}`);

    for (const field in fieldCounts) {
      if (fieldCounts.hasOwnProperty(field)) {
        console.log(`Number of students in ${field}: ${fieldCounts[field].count}. List: ${fieldCounts[field].names.join(', ')}`);
      }
    }
  } catch (error) {
    console.error(`Cannot load the database: ${error.message}`);
  }
}

module.exports = countStudents;
