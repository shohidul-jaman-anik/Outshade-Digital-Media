import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoadApi.css'


const LoadApi = () => {
    const [data1, setData1] = useState([])
    const [data, setData] = useState([])
    const navigate = useNavigate()

    const filterItem = (selectCtg) => {
        const updateItems = data1.filter(d => {
            return d.category === selectCtg

        })
        setData(updateItems)
    }

    useEffect(() => {
        const url = `http://localhost:5000/api`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log( data)
                setData1(data)

            })
    }, [data])


    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `http://localhost:5000/api/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    const remaining = data.filter(d => d._id !== id)
                    setData(remaining)
                })
        }
    }

    const handleEdit = id => {
        navigate(`/updateUser/${id}`)
    }



    return (
        <div>
            <h3>Total api : {data.length}</h3>


            <button className='filterBtn' onClick={() =>setData(data)}>ALL Prducts</button>

            <button className='filterBtn' onClick={() => filterItem("Laptop")}>Laptop</button>

            <button className='filterBtn' onClick={() => filterItem("Phone")}>Phone</button>

            <button className='filterBtn' onClick={() => filterItem("Speaker")}>Speaker</button>

            <button className='filterBtn' onClick={() => filterItem("Camera")}>Camera</button>

            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name (sort)</th>
                            <th>Phone</th>
                            <th>Supplier Email</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((d, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <th>{d.name}</th>
                                <th>{d.phone}</th>
                                <td>{d.email}</td>
                                <td>${d.price}</td>
                                <th onClick={() => handleEdit(d._id)}>✍Update</th>
                                <td onClick={() => handleDelete(d._id)}> ❌ </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LoadApi;