//f.s Read file

// const fs = require('fs');
// const { performance } = require('perf_hooks');

// const startTimeReadFile = performance.now();

// fs.readFile('text.txt', 'utf8', (err, data) => {
//   if (err) throw err;

//   const endTimeReadFile = performance.now();
//   console.log(`fs.readFile processing time: ${endTimeReadFile - startTimeReadFile} milliseconds`);
// });


//


const fs = require('fs');
const { performance } = require('perf_hooks');

const startTimeStream = performance.now();

const readableStream = fs.createReadStream('text.txt', { encoding: 'utf8' });

// Track the data processing
let dataSize = 0;

readableStream.on('data', (chunk) => {
  // Process each chunk of data (for this example, we just count the size)
  dataSize += chunk.length;
});

readableStream.on('end', () => {
  const endTimeStream = performance.now();
  console.log(`Stream processing time: ${endTimeStream - startTimeStream} milliseconds`);
  console.log(`Total data size: ${dataSize} bytes`);
});

readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});
