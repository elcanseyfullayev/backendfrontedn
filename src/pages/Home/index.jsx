import React, { useEffect, useState } from 'react'
import './home.scss'
import '../../assets/_reset.scss'
import { Link } from 'react-router-dom';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4200/')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);
    return (
        <>
            <section id='home'>
                <nav>
                    <h1><img src="https://1000logos.net/wp-content/uploads/2023/05/Straw-Hat-Logo.png" alt="" />Home</h1>
                    <Link to={"/add"}><h4>Add</h4></Link>
                </nav>
                <div className="products">
                    <div>
                        {products.map((product) => (
                            <div className='product' key={product._id}>
                                <img src={product.photo} alt="" />
                                <p>Name:{product.name}</p>
                                <p className="price">Price:${product.price}</p>
                                <p>Category:{product.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home