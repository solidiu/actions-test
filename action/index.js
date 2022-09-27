const fs = require('fs');

const content = {date: Date.now()};

fs.writeFile('./api_cache.json', JSON.stringify(content), err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Successfully wrote " + content + " to the cache file.");
  }
});
