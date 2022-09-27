const fs = require('fs');

const content = Date.now();

fs.writeFile('./output.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Successfully wrote " + content + " to the output file.");
  }
});

const same = "1";

fs.writeFile('./same.txt', same, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Successfully wrote " + same + " to the 'same' file.");
  }
});
