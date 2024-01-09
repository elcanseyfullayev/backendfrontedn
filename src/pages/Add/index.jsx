import React, { useState } from 'react'

function Add() {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [photo, setPhoto] = useState("")
    function handleSubmit(e) {
        e.preventDefault();
        console.log({ name, price, category, photo });
        fetch("http://localhost:4200", {
            Method: 'POST',
            Headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, price, category, photo })
        })
    }
    function handleChange(e, updaterFunction) {
        updaterFunction(e.target.value);
    }

    return (
        <>Add
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input value={name} onChange={(e) => handleChange(e, setName)} type="text" />
                <label htmlFor="">Price</label>
                <input value={price} onChange={(e) => handleChange(e, setPrice)} type="text" />
                <label htmlFor="">Category</label>
                <input value={category} onChange={(e) => handleChange(e, setCategory)} type="text" />
                <label htmlFor="">Photo</label>
                <input value={photo} onChange={(e) => handleChange(e, setPhoto)} type="text" />
                <button>Submit</button>
            </form>

        </>
    )
}

export default Add
