export default class CatPost {
    constructor(id, categories, slug, author, title, content, excerpt) {
        this.id = id;
        this.categories = categories;
        this.slug = slug;
        this.author = author;
        this.title = title;     // oggetto contenente rendered
        this.content = content; // oggetto contenente rendered
        this.excerpt = excerpt; // oggetto contenente rendered
        
    }
}