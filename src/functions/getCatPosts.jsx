import CatPost from "../models/CatPost";
import CategoryPosts from "../components/category-posts/CategoryPosts";


export const getCatPost = async (categoryId) => {

    const resp = await fetch(`http://wordpress.test/wp-json/wp/v2/posts?categories=${categoryId}`);     // interpolare id categoria cliccata
    const catPosts = await resp.json();
    return catPosts.map(catPost => new CatPost(
        catPost.id,
        catPost.categories,
        catPost.slug,
        catPost.author,
        catPost.title.rendered,
        catPost.content,
        catPost.excerpt.rendered
    ));
}