import React, { useEffect, useState } from 'react';
import '../../assets/css/Card.css';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import View from '../../assets/view.png';
import Cart from '../../assets/cart.png';
import Like from '../../assets/Like';
import Liked from '../../assets/Likded';

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" className='text-dark'>
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

const Card = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = React.useState(10);
    const [likedProducts, setLikedProducts] = useState([]);

    const toggleIcon = (productId) => {
        if (likedProducts.includes(productId)) {
            setLikedProducts(likedProducts.filter(id => id !== productId));
        } else {
            setLikedProducts([...likedProducts, productId]);
        }
    };

    useEffect(() => {
        localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
    }, [likedProducts]);

    useEffect(() => {
        const savedLikedProducts = JSON.parse(localStorage.getItem('likedProducts') || '[]');
        setLikedProducts(savedLikedProducts);
    }, []);


    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const jsonData = await response.json();
                setProducts(jsonData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
    }, [likedProducts]);

    useEffect(() => {
        const savedLikedProducts = JSON.parse(localStorage.getItem('likedProducts') || '[]');
        setLikedProducts(savedLikedProducts);
    }, []);

    return (
        <div className='rowCard'>
            {loading ? (
                <CircularProgressWithLabel value={progress} />
            ) : (
                <div className='card row'>
                    {products.map((product, index) => (
                        <div className="card" key={index}>
                            <img className="ImgProduct" src={product.image_link} alt={product.name} />
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <p className='ProductsName'><strong>{product.name}</strong></p>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <p className='ProductBrand'>{product.brand}</p>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <p className='ProductPrice'>{product.price}$</p>
                            </div>
                            <div className="hover-buttons">
                                <div className='button1'>
                                    <img src={Cart} alt={Cart} />
                                </div>
                                <div className='button2'>
                                    <img src={View} alt={View} />
                                </div>
                                <div className='button2' onClick={() => toggleIcon(product.id)}>
                                    {likedProducts.includes(product.id) ? <Liked /> : <Like />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Card;


