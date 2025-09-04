import React from 'react'
import Header from './components/Header'
import { Route, Routes } from "react-router-dom"
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import ViewOneProject from './pages/ViewOneProject'
import ViewOneBlog from './pages/ViewOneBlog'
import Dashboard from './pages/Dashboard'
import AddProject from './components/AddProject'
import AddBlog from './components/AddBlog'


const App = () => {
  return (
    <div className='space-y-48'>
      <div>

        <Header />
      </div>

      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/ViewOneProject/:id' element={<ViewOneProject/>}/>
          <Route path='/ViewOneBlog/:id' element={<ViewOneBlog/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/dashboard/AddProject' element={<AddProject/>}/>
          <Route path='/dashboard/AddBlog' element={<AddBlog/>}/>
        </Routes>
      </div>

      <div>
        <Footer />
      </div>

    </div>
  )
}

export default App