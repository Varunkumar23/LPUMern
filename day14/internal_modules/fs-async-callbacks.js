const fs = require("node:fs");

console.log("start");
fs.readFile("./temp.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file", err.message);
  } else {
    console.log(data);
  }
});

console.log("Mid");

fs.readFile("./student.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file", err.message);
  } else {
    console.log(data);
  }
});

console.log("End");
