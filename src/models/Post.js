export default class Post {
    constructor(id, title, slug, excerpt, content, author) {
        this.id = id;
        this.slug = slug;
        this.author = author;
        this.title = title;     // oggetto contenente rendered
        this.content = content; // oggetto contenente rendered
        this.excerpt = excerpt; // oggetto contenente rendered
        
    }
}