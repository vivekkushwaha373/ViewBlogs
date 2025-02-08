import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import {newBaseUrl } from '../baseUrl';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';


const BlogPage = () => {
    // const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRelatedBlogs] = useState([])
    const location = useLocation();
    const navigation = useNavigate();
    const { setLoading, loading } = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);
    const fectchRelatedBlogs=useCallback(async () => {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch (error) {
            console.log("Error aagya in  blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }) 

    useEffect(() => {
        if (blogId) {
            fectchRelatedBlogs();
        }
    }, [location.pathname,blogId,fectchRelatedBlogs]) 
    
  return (
    <div>
          <Header></Header>
          <div>
              <button
              onClick={()=>navigation(-1)}
              >
                  Back
              </button>
          </div>
          {
              loading ? (<div><p>Loading</p></div>) :
                  blog ? (
                      <div>
                          <BlogDetails posts={blog} />
                          <h2>Related Blogs</h2>
                          {
                              relatedblogs.map((post) => {
                                 return <div>
                                    <BlogDetails post={post}></BlogDetails>
                                </div>
                            })   
                          }
                      </div>
                  ) :
                      (
                          <div>
                              <p>No Blog Found</p>
                      </div>
                  )  
          }
    </div>
  )
}

export default BlogPage
