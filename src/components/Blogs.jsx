import React, { useContext } from 'react'
import Spinner from './Spinner';
import { AppContext } from '../context/AppContext';
import BlogDetails from './BlogDetails';

const Blogs = () => {
    const { posts,loading } = useContext(AppContext);
    return (
        <div className="w-11/12 max-w-[35%] mx-auto py-8 flex flex-col gap-y-7 mt-[66px]">
            {loading? (<Spinner></Spinner>) : (
                    posts.length === 0 ?
                        (
                            <div>No Post Found</div>
                        ) :
                        (
                            posts.map((post) => (
                          <BlogDetails key={post.id} post={post}></BlogDetails>
                         ))  
                        )
                )
          }
        </div>
    )
}

export default Blogs
