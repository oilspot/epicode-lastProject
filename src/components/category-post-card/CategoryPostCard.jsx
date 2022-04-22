import React from "react";

export function CategoryPostCard(props) {
    return (
        <div className="card m-3" style={{width: "18rem"}}>
            {/*immagine*/}
            <div className="card-body">
                <h5 className="card-title">{ props.catPost.title }</h5>
                <p className="card-text" dangerouslySetInnerHTML={{ __html: props.catPost.excerpt.slice(0, 305) }}></p>  
            </div>
            <div className="card-footer">
                <a className="btn btn-success">Leggi il post</a>
            </div>  
        </div>
    );
}

