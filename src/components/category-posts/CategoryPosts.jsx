import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCatPost } from "../../functions/getCatPosts";
import { CategoryPostCard } from "../category-post-card/CategoryPostCard";


export default function CategoryPosts() {
    const { categoryId } = useParams();

    //const [hasLoaded, setHasLoaded] = useState(false);
    const [catPosts, setCatPost] = useState([]);

    useEffect(() => {
        getCatPost(categoryId).then(catPosts => {
            setCatPost(catPosts);
            console.log(catPosts);
        });   
    }, [categoryId]);
    
    const categoryPosts = catPosts.map(catPost => <CategoryPostCard key={catPost.id} catPost={catPost}/>);

    return (

        <section className="container">
            <h1>Selezione accurata</h1>
            <div className="d-flex d-row flex-wrap">
                { categoryPosts }
            </div>
        </section>
        
    );
}