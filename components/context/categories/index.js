import React, {useState, createContext} from 'react';

export const CategoriesContext = createContext();

export default function CategoriesState ({children})  {
    const initialValues = [
        {
            "id": 68,
            "parent_id": null,
            "title": "PTs",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur elit.",
            "img": "fitz-images.01hive.com/pt.png",
            "attributes": null
        },
        {
            "id": 82,
            "parent_id": null,
            "title": "Courts",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur elit.",
            "img": "fitz-images.01hive.com/socer.png",
            "attributes": null
        },
        {
            "id": 102,
            "parent_id": null,
            "title": "Gyms",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur elit.",
            "img": "fitz-images.01hive.com/wight.png",
            "attributes": null
        },
        {
            "id": 114,
            "parent_id": null,
            "title": "Kids",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur elit.",
            "img": "fitz-images.01hive.com/kid.png",
            "attributes": null
        },
        {
            "id": 120,
            "parent_id": null,
            "title": "Nutritionists",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur elit.",
            "img": "fitz-images.01hive.com/yoga.png",
            "attributes": null
        },
        {
            "id": 124,
            "parent_id": null,
            "title": "Supplements Providers",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur elit.",
            "img": "fitz-images.01hive.com/shaker.png",
            "attributes": null
        },
        {
            "id": 128,
            "parent_id": null,
            "title": "Healthy Food",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur elit.",
            "img": "fitz-images.01hive.com/health-food.png",
            "attributes": null
        },
        {
            "id": 130,
            "parent_id": null,
            "title": "Physio therapists",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur elit.",
            "img": "fitz-images.01hive.com/doctor.png",
            "attributes": null
        }
    ];
    const [categories, setCategories] = useState(initialValues);
    
    return (
        <CategoriesContext.Provider value={{categories}}>
            {children}
        </CategoriesContext.Provider>
    )
}