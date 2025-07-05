const fsPromises = require("fs/promises");
const { fileURLToPath } = require("url");
const { v4: uuidv4 } = require("uuid");

const getAllDataFromArrayFromFile = async (filePath) => {
    try {
        const txt = await fsPromises.readFile(filePath, "utf-8");
        try {
            const data = JSON.parse(txt);
            if (!Array.isArray(data)) {
                console.warn("Data in file is not an array. Resetting file.");
                await fsPromises.writeFile(filePath, "[]", "utf-8");
                return [];
            }
            return data;
        } catch {
            console.warn("This file is corrupted");
            await fsPromises.writeFile(filePath, "[]", "utf-8");
            return [];
        }
    } catch (err) {
        if (err.code === "ENOENT") {
            console.log("Creating the file...........");
            await fsPromises.writeFile(filePath, "[]", "utf-8");
            return [];
        }
        console.error("Error reading the file", err.message);
        return null;
    }
};

const saveArrayToFile = async (arr, filePath) => {
    try {
        const stringifyArr = JSON.stringify(arr, null, 4);
        await fsPromises.writeFile(filePath, stringifyArr, "utf-8");
    } catch (err) {
        console.log("Error saving the file.........", err.message);
        return null;
    }
};

const saveObjectToArrayInFile = async (obj, filePath) => {
    let arr = await getAllDataFromArrayFromFile(filePath);
    if (!Array.isArray(arr)) {
        console.warn("Warning: data read is not an array. Resetting to empty array.");
        arr = [];
    }
    obj.id = uuidv4();
    arr.push(obj);
    await saveArrayToFile(arr, filePath);
};


const editObjectFromArrayFromFile=async(newObjProperties,elemId,filePath)=>{
    const arr=await getAllDataFromArrayFromFile(filePath);
    const idx=arr.findIndex((elem)=>{
        if(elem.id===elemId){
            return true;
        }else{
            return false;
        }
    })

    if(idx===-1){
        console.log("Invalid id: No object found with the given id!");
        return arr;
    }

    const currentObject=arr[idx];
    const newObject={...currentObject,...newObjProperties};
    arr[idx]=newObject;

    saveArrayToFile(arr,filePath);
}




module.exports = { getAllDataFromArrayFromFile, saveArrayToFile, saveObjectToArrayInFile,editObjectFromArrayFromFile };
