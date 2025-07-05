
const waitForSomeTime=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },400)
})


const cFetch=async(url)=>{
    await waitForSomeTime()
   await fetch(url);
}