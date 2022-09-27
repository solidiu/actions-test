const fs = require('fs');

const content = Date.now();

fs.writeFile('./output.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Successfully wrote " + content + " to the file.");
  }
});

fs.writeFile('./same.txt', "1", err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Successfully wrote " + content + " to the file.");
  }
});
