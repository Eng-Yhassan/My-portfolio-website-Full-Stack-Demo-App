import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='flex flex-col gap-10 justify-center items-center space-x-10'>
            <div className='space-x-10 ml-8'>
                <Link to="/dashboard/AddProject">
                    <button className='bg-gray-900 px-14 py-2 text-white text-2xl rounded-[8px]'>Add Project</button>
                </Link>
                <Link to="/dashboard/AddBlog">
                    <button className='bg-gray-900 px-14 py-2 text-white text-2xl rounded-[8px]'>Add Blog</button>
                </Link>
            </div>
            <div className='space-x-10 '>
                <Link to="/dashboard/deleteProject">
                    <button className='bg-gray-900 px-14 py-2 text-white text-2xl rounded-[8px]'>Edit  Project</button>
                </Link>
                <Link to="/dashboard/deleteBlog">
                    <button className='bg-gray-900 px-14 py-2 text-white text-2xl rounded-[8px]'>Edit Blog</button>
                </Link>
            </div>

        </div>
    )
}

export default Dashboard