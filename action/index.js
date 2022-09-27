const fs = require('fs');

const content = Date.now();

fs.writeFile('./output.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Successfully wrote " + content + " to the output file.");
  }
});

const changed = "true";

fs.writeFile('./changed.txt', changed, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Successfully wrote " + changed + " to the 'changed' file.");
  }
});
