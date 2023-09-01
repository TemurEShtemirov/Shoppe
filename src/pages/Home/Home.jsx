import React, { useEffect, useState } from 'react';
import '../../assets/css/Home.css';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
};


const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = React.useState(10);

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
                const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json'); // Corrected API URL

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

    return (
        <div className='row rowCard'>
            {loading ? (
                <CircularProgressWithLabel value={progress} />

            ) : (
                <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 card'>
                    {products.map((product, index) => (
                        <div className="card" key={index}>
                            <img className="ImgProduct" src={product.image_link} alt={product.name} /> {/* Use product.image_link for image */}
                            <p className='ProductsName'><strong>{product.name}</strong></p>
                            <p className='ProductBrand'>{product.brand}</p>
                            <p className='ProductPrice'>{product.price}$</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
