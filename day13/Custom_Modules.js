const usernme="hELLO wORLD";

const getCapitalizedTxt=(txt)=>{
    const words=txt.trim().split(" ");
    const resArr=words.map((elem)=>{
        const firstChar=elem[0]?.toUpperCase();
        const ReamainChar=elem?.slice(1).toLowerCase();
        return `${firstChar}${ReamainChar}`;
    })
    return resArr.join(" ");

}

// console.log(getCapitalizedTxt(usernme));


const getCamelText=(txt)=>{
    const words=txt.trim().split(" ");
    const resArr=words.map((elem,idx)=>{
        if(idx!=0){
            const first=elem[0]?.toUpperCase();
            const remain=elem.slice(1)?.toLowerCase();
            return `${first}${remain}`
        }else{
            return elem?.toLowerCase();
        }
    })
    return resArr.join(" ");
}


function formatParagraph(text) {
    const sentences = text.split(".");
    const capitalizedSentences = sentences.map((sentence) => {
        return getCapitalizedTxt(sentence);
    });
    return capitalizedSentences.join(". ");
}

// console.log(getCamelText("hello eusde uwedhpowu uwehdiu ouuhd"))

module.exports = {
    formatParagraph,
    getCamelText,
    getCapitalizedTxt
};