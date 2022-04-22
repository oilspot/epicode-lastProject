import { useState } from "react";
import { getCategory } from "../../functions/getCategories"; 
import CategoryRows from "../category-rows/CategoryRows";

export default function CategoryList() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [categories, setCategory] = useState([]);

        if (!hasLoaded) {
        getCategory().then(categories => {
            setCategory(categories);
            setHasLoaded(true);
            console.log(categories);
        });
    }

    
    const catRows = categories.map(categories => <CategoryRows key={categories.id} category={categories}/>);


    return (

        <>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            { catRows }
        </ul>
        </>
        
    );
}