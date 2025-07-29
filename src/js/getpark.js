const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, '..', 'assets', 'park'), (err, f) => {
  if (!err) {
    const imgs = f.map((_) => {
      return _;
    });
    fs.writeFile('Park.json', JSON.stringify({ imgs }), 'utf8', (e) => {
      if (!e) console.log('succed');
    });
  }
  return;
});
