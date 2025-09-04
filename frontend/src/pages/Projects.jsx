import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';


const Projects = () => {

  const [data, setData] = useState([]);

  const handleReadData = () => {
    axios.get("http://localhost:4444/read/Project").then((res) => {
      setData(res.data);
    });
  }

  useEffect(() => {
    handleReadData();
  }, [])

  return (
    <div className="flex flex-wrap gap-20 justify-center items-center px-20">
      {
        data.map((item, index) => {
          return (
            <div key={index} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden w-full max-w-sm">
              {/* Image */}
              <img
                src={`http://localhost:4444/allImages/${item.image}`}
                alt="Blog Title"
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-5">

                <h3 className="text-xl font-semibold mt-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  {item.description}
                </p>
                <Link to={`/ViewOneProject/${item._id}`}>
                  <button className="mt-4 inline-flex items-center text-blue-600 font-medium hover:underline">
                    Read More <span className="ml-1">→</span>
                  </button>
                </Link>
              </div>
            </div>
          )
        })
      }

    </div>
  );
};


export default Projects