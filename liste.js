Users.find({

}, (err, products) => {
  if (err) throw err;
  let concatenate = "";
  async.forEachOf(products,  (value, key, callback) => {
      concatenate += value; // ???
      callback();
  }, (err) => {
      if (err) throw err;
      fs.writefile('./movies/', concatenate, (err) => {
          if (err) throw err;
      });
  });
});