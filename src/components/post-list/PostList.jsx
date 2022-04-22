import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPosts } from "../../functions/getPosts";
import PostCard from "../post-card/PostCard";

export default function PostsList() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    if (!hasLoaded) {
        getPosts().then(posts => {
            setPosts(posts);
            setHasLoaded(true);
            console.log(posts);
        });
    }
    
    const postcards = posts.map(post => <PostCard key={post.id} post={post}/>);


    return (

        <section className="container">
            <h1>Le nostre proposte</h1>
            <div className="d-flex d-row flex-wrap">
                { postcards }
            </div>
        </section>
        
    );
}