const fsPromises = require("node:fs/promises");

//this is without error handling

// const main = async () => {
//   console.log("-------------start----------------");
//   const response1 = await fsPromises.readFile("./temp.txt", "utf-8");

//   console.log(response1);

//   console.log("-------------Mid---------------------");

//   const response2 = await fsPromises.readFile("./student.txt", "utf-8");
//   console.log(response2);

//   console.log("------------------End!-------------------");
// };

// main();


//this is the code with Error handling if any file or line crashes it wont stop the execution
const main = async () => {
  console.log("-------------start----------------");

  try {
    const response1 = await fsPromises.readFile("./temp.txt", "utf-8");
    console.log(response1);
  } catch (err) {
    console.log("Cannot read the file", err.message);
  }


  console.log("-------------Mid---------------------");

  try {
    const response2 = await fsPromises.readFile("./student.txt", "utf-8");
    console.log(response2);
  } catch (err) {
    console.log("Cannot read the file", err.message);
  }

  console.log("------------------End!-------------------");
};

main();
