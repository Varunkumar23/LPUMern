const {
  getAllDataFromArrayFromFile,
  saveArrayToFile,
  saveObjectToArrayInFile,
  editObjectFromArrayFromFile
} = require("./file-helper.js");

const main = async () => {
  const filePath = "./my-data.json";

  await saveObjectToArrayInFile({ name: "Likhilesh", city: "Delhi" }, filePath);

  const resp = await getAllDataFromArrayFromFile(filePath);
  console.log("All data -->", resp);

  await editObjectFromArrayFromFile({ city: "Hyderabad" }, resp[0].id, filePath);

  const resp2 = await getAllDataFromArrayFromFile(filePath);
  console.log("After edit -->", resp2);
};

main();
