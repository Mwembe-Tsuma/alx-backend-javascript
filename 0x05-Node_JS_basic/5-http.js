// File: 5-http.js

const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Set common headers for plain text response
  res.setHeader('Content-Type', 'text/plain');

  // Handle different URL paths
  if (parsedUrl.pathname === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!\n');
  } else if (parsedUrl.pathname === '/students') {
    const databasePath = parsedUrl.query.db || 'database.csv';

    res.write('This is the list of our students\n');

    countStudents(databasePath)
      .then(() => {
        res.statusCode = 200;
        res.end();
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(`Internal Server Error: ${error.message}\n`);
      });
  } else {
    // Handle unknown paths
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

const PORT = 1245;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
