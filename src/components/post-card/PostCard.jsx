import React from "react";
import { getPosts } from "../../functions/getPosts";

export default function PostCard(props) {
    return (
        <div className="card m-3" style={{width: "18rem"}}>
            {/*immagine*/}
            <div className="card-body">
                <h5 className="card-title">{ props.post.title }</h5>
                <p className="card-text" dangerouslySetInnerHTML={{ __html: props.post.excerpt.slice(0, 305) }}></p>
            </div>
            <div className="card-footer">
                <a className="btn btn-primary">Leggi il post</a>
            </div>  
        </div>
    );
}

