var fs = require('fs');

fs.writeFile('./movies/films.txt',  data, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });