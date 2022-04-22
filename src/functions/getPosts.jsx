import Post from "../models/Post";


export const getPosts = () => {
    return fetch('http://wordpress.test/wp-json/wp/v2/posts')
        .then(res => res.json())
        .then(posts => posts.map(post => new Post(
            post.id,
            post.title.rendered, // rendered
            post.slug,
            post.excerpt.rendered,   // rendered
            post.content.rendered, // rendered
            post.author
        )));
}