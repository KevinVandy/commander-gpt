const fs = require("fs");

const writeDataFile = (filename, data) => {
  fs.writeFileSync(filename, data);
};

module.exports = { writeDataFile };
