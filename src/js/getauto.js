const fs = require("fs");
const path = require("path");

fs.readdir(path.join(__dirname, "..", "assets", "auto"), (err, f) => {
  if (!err) {
    const imgs = f.map((_) => {
      return _;
    });
    fs.writeFile("Auto.json", JSON.stringify({ imgs }), "utf8", (e) => {
      if (!e) console.log("succed");
    });
  }
  return;
});
