import { useEffect, useState } from 'react';
import '../../assets/css/Card.css';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import View from '../../assets/images/view.png';
import Cart from '../../assets/images/cart.png';
import Like from '../../assets/images/Like';
import Liked from '../../assets/images/Likded'; // Corrected import path
import ReactModal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CSSTransition } from 'react-transition-group';

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }} className="BoxRow">
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
    const [progress, setProgress] = useState(10);
    const [likedProducts, setLikedProducts] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const toggleIcon = (productId) => {
        if (likedProducts.includes(productId)) {
            setLikedProducts(likedProducts.filter(id => id !== productId));
            toast.info("You removed Like", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            setLikedProducts([...likedProducts, productId]);
            toast.success("You Liked this Product", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedProduct(null);
    };

    useEffect(() => {
        localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
    }, [likedProducts]);

    useEffect(() => {
        const savedLikedProducts = JSON.parse(localStorage.getItem('likedProducts') || '[]');
        setLikedProducts(savedLikedProducts);
    }, []);

    useEffect(() => {
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

    return (
        <div className='row rowCard'>
            {loading ? (
                <CircularProgressWithLabel value={progress} className="Box" />
            ) : (
                <div className='row card'>
                    {products.map((product, index) => (
                        <div className="card col-lg-4 col-xl-4 col-xxl-4" key={index}>
                            <img
                                className="ImgProduct"
                                src={product.image_link}
                                alt={product.name}
                            />
                            <div className="product-info">
                                <p className='ProductsName'><strong>{product.name}</strong></p>
                                <p className='ProductBrand'>{product.brand}</p>
                                <p className='ProductPrice'>{product.price}$</p>
                                <div className="hover-buttons">
                                    <img className='btn1' src={Cart} alt={Cart} />
                                    <img className='btn2' src={View} alt={View} onClick={openModal} />
                                    <button className='button22' onClick={() => toggleIcon(product.id)}>
                                        {likedProducts.includes(product.id) ? <Liked /> : <Like />}
                                    </button>
                                    <button onClick={() => openModal(product)} className='BtnInfo'>ℹ️nfo</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <CSSTransition
                in={modalIsOpen}
                timeout={300}
                classNames="slide-down"
                unmountOnExit
            >
                <ReactModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Product Information Modal"
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    {selectedProduct && (
                        <div className="product_info_modal">
                            <div className="col-lg-6 col-xl-6 col-xxl-4" style={{
                                marginBottom: '-300px'
                            }}>
                                <img className="product_image" width="440px" src={selectedProduct.image_link} alt={selectedProduct.name} />
                            </div>
                            <div className="col-lg-6 col-xl-6 col-xxl-4 product_info" style={{
                                marginTop: '-10px'
                            }}>
                                <h2 className='nameInfo'>{selectedProduct.name}</h2>
                                <p className='priceInfo'>Price: ${selectedProduct.price}</p>
                                <p className='desc'>Description: {selectedProduct.description}</p>
                            </div>
                            <div className="recomendedRow">
                                <p className='recRow mt-5'>Recommended</p>
                                {products.slice(0, 3).map((product, index) => (
                                    <div className="row recomended" key={index}>
                                        <div className="cardRecommended col-lg-4 col-xl-4 col-xxl-4">
                                            <img className='recImg' src={product.image_link} alt={product.image_link} />
                                            <div className="title">
                                                <p className='recName'><strong>{product.name}</strong></p>
                                                <p className='recBrand'>{product.brand}</p>
                                                <p className='recPrice'>{product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="close_button" onClick={closeModal}><span className='span_modal'>❌</span></button>
                        </div>
                    )}
                </ReactModal>
            </CSSTransition>
            <ToastContainer />
        </div>
    );
};

export default Card;


