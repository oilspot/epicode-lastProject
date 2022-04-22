import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CategoryPosts from './components/category-posts/CategoryPosts';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NotFound from './components/not-found/NotFound';
import Page from './components/page/Page';
import PostsList from './components/post-list/PostList';



function App() { 

  return (
    <>
    
    <Header />

      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/categories/:categoryId/posts" element={<CategoryPosts />} />

        <Route path="/:slug" element={<Page />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

    <Footer />
    
    </>
  );
}

export default App;
