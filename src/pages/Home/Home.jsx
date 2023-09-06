import React from "react";
import Banner from "../../assets/images/banner.png";
import { Link, Outlet } from "react-router-dom";
import "../../assets/css/Home.css";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
export default function Home() {
    return (
        <>
            <div className="">
                <main>
                    <section className="section1">
                        <div
                            id="carouselExampleSlidesOnly"
                            className="carousel slide row"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src={Banner}
                                        className="d-block w-100 ImgCarousel col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6   "
                                        alt={Banner}
                                    />
                                    <div
                                        className="carousel-caption d-none d-md-block col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 Subtitle"
                                        style={{
                                            marginTop: "-400px",
                                        }}
                                    >
                                        <p className="title">Gold big hoops</p>
                                        <p className="price">$ 68,00</p>
                                        <a href="" className="btnCarousel">
                                            VIEW PRODUCT
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src={Banner}
                                        width="1248px"
                                        height="646px"
                                        className="d-block w-100 ImgCarousel col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 "
                                        alt={Banner}
                                    />
                                    <div
                                        className="carousel-caption d-none d-md-block col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 Subtitle mb-"
                                        style={{
                                            marginTop: "-400px",
                                        }}
                                    >
                                        <p className="title">Gold big hoops</p>
                                        <p className="price">$ 68,00</p>
                                        <a href="" className="btnCarousel">
                                            VIEW PRODUCT
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src={Banner}
                                        className="d-block w-100 ImgCarousel col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6   "
                                        alt={Banner}
                                    />
                                    <div
                                        className="carousel-caption d-none d-md-block col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 Subtitle"
                                        style={{
                                            marginTop: "-400px",
                                        }}
                                    >
                                        <p className="title">Gold big hoops</p>
                                        <p className="price">$ 68,00</p>
                                        <Link to="/products" className="btnCarousel">
                                            VIEW PRODUCT
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section2">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <p className="TypeShop">Shop The Latest</p>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 viewAllDiv">
                                <Link to="/products" className="viewAll">
                                    View All
                                </Link>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                <Card  />
                            </div>
                        </div>
                    </section>
                </main>
                <Footer/>
                <Outlet />
            </div>
        </>
    );
}
