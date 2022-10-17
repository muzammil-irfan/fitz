import axios from 'axios';
import React, {useState, createContext} from 'react';
import backendHost from '../../../utils/backendHost';
import categoriesData from '../../../utils/categoriesData';

export const CategoriesContext = createContext();

export default function CategoriesState ({children})  {
    const initialValues = [...categoriesData]
    const [categories, setCategories] = useState(initialValues);
    const getCategories = ()=>{
        axios.get(`${backendHost}/category`,{
            headers: {
                "Accept-Language": "en",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        })
        .then(res=>{
            setCategories(res.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <CategoriesContext.Provider value={{categories,getCategories}}>
            {children}
        </CategoriesContext.Provider>
    )
}