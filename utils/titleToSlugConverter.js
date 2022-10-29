const titleToSlugConverter = (e)=>{
    const lowerCase = e.toLowerCase();
    if(e.includes(" ")){
        return lowerCase.split(" ").join("-");
    } else {
        return lowerCase
    }
};

export default titleToSlugConverter;