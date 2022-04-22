import React, { useEffect } from "react";
//import { getPages } from "../../functions/getPages";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Page() {

    const [pages, setPages] = useState([]);

    const { slug } = useParams();
    //console.log(slug, 'slug');
    
    /* ERRORE HOOKS:

    const getPages = () => {
        return fetch(`http://wordpress.test/wp-json/wp/v2/pages/?slug=${slug}`)
        .then(resp => resp.json())
        .then(pages => pages.map(page => new Page(
          page.id, 
          page.title.rendered, 
          page.content.rendered,
          page.slug
        )))
      }
      
          useEffect(() => {
        getPages().then(pages => {
          setPages(pages);
      })}, [slug]);
    */


    const getPages = async () => {
      const response = await fetch(`http://wordpress.test/wp-json/wp/v2/pages/?slug=${slug}`);
      const page = await response.json();
      setPages(page);
    };

    useEffect(() => {
      getPages();
    }, [slug]);


    return (

       <section>

        {pages.map((page) => (
        <div className="container" key={page.id}>
          <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </div>
      ))}
            
        </section>

    );
}