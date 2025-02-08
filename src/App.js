import React, { useContext, useEffect } from "react"
import { AppContext } from "./context/AppContext"
import './App.css'
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom"
import Home from "./Pages/Home"
import CategoryPage from "./Pages/CategoryPage"
import TagPage from "./Pages/TagPage"
import BlogPage from "./Pages/BlogPage"

export default function App() {

  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag);
    }
    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
    }
    else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search,fetchBlogPosts,searchParams]);
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/blog/:blogId" element={<BlogPage></BlogPage>}></Route>
      <Route path="/tags/:tag" element={<TagPage></TagPage>}></Route>
      <Route path="/categories/:category" element={<CategoryPage></CategoryPage>}></Route>
    </Routes>
  )
}