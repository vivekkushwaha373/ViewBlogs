import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
          <Header>
                  </Header>
              <div>
                  <Blogs></Blogs>
                  <Pagination></Pagination>
            </div>
    </div>
  )
}

export default Home
