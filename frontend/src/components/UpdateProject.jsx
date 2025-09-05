import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProject = () => {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [maindescription, setmaindescription] = useState("");



    const navigate = useNavigate()

    const params = useParams()
    const handleReadOneData = () => {
        axios.get(`http://localhost:4444/readOne/Project/${params.id}`).then((res) => {
            setImage(res.data[0].image),
            setTitle(res.data[0].title),
            setDescription(res.data[0].description),
            setmaindescription(res.data[0].maindescription)
        })
    }

    useEffect(() => {
        handleReadOneData()
    },[])

    const handleUpdateData = () => {
        const formData = new FormData();

        formData.append("img", image)
        formData.append("title", title)
        formData.append("description", description)
        formData.append("maindescription", maindescription)


        axios.put(`http://localhost:4444/update/Project/${params.id}`, formData).then(() => {
            alert("You Updated ");
            navigate("/dashboard/deleteProject")
            handleReadOneData()
        })
    }



    return (
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={(e) => e.preventDefault()} className='bg-gray-900 w-[35%] h-96 rounded-2xl p-10 pl-20'>
                <input
                    onChange={(e) => setImage(e.target.files[0])}
                    className='outline-none text-3xl text-white' type="file" required /> <br /> <br />
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='outline-none w-80 h-10 rounded-lg pl-3 text-2xl' type="text" placeholder='Enter Your Title' required /> <br /> <br />

                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='outline-none w-80 h-10 rounded-lg pl-3 text-2xl' type="text" placeholder='Enter Your description' required /> <br /> <br />
                <input
                    value={maindescription}
                    onChange={(e) => setmaindescription(e.target.value)}
                    className='outline-none w-80 h-10 rounded-lg pl-3 text-2xl' type="text" placeholder='Enter Your maindescription' required /> <br /> <br />
                <button
                    onClick={handleUpdateData}
                    type='submit' className='bg-white w-80 py-2 rounded-lg text-gray-900  text-3xl'>Update Project</button>
            </form>
        </div>
    )
}

export default UpdateProject