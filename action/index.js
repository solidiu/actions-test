const fs = require('fs');

const content = Date.now();

fs.writeFile('./api_cache.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Successfully wrote " + content + " to the cache file.");
  }
});
