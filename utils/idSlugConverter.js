import axios from 'axios';
import backendHost from './backendHost';


const idSlugConverter = async (type,value)=>{
    try{
        if(type === "id"){
            const categories = await axios.get(`${backendHost}/category/abc`);
            console.log("working",categories.status);
        } else{
            console.log(type)
        }
    } catch(err){
        console.log(err);
        return false
    }
};

export default idSlugConverter;