import React from "react";
import Banner from "../../assets/images/banner.png";
import { Link, Outlet } from "react-router-dom";
import "../../assets/css/Home.css";
import Card from "../../components/Card/Card";
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
                                <Card />
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                    <hr />
                    <div className="row">
                        <div className="row col-lg-6 col-xl-6 col-xxl-6">
                            <div className="col-lg-4 col-xl-4 col-xxl-4">
                                <a href="">
                                    <p className="contact">CONTACT</p>
                                </a>
                            </div>
                            <div className="col-lg-4 col-xl-4 col-xxl-4">
                                <a href="">
                                    <p className="services">TERMS OF SERVICES</p>
                                </a>
                            </div>
                            <div className="col-lg-4 col-xl-4 col-xxl-4">
                                <a href="">
                                    <p className="shipping">SHIPPING AND RETURNS</p>
                                </a>
                            </div>
                            <div className="col-lg-12 col-xl-12 col-xxl-12">
                                <p className="footerTerms">
                                    <strong className="strongFooter1">© 2021 Shelly</strong>.
                                    Terms of use <strong className="strongFooter2">and</strong>{" "}
                                    privacy policy.
                                </p>
                            </div>
                        </div>
                        <div className="row col-lg-6 col-xl-6 col-xxl-6">
                            <div className="col-lg-12 col-xl-12 colxxl-12">
                                <a href="" className="AFooterPart2">
                                    <p className="FooterPart2">
                                        Give an email, get the newsletter.{" "}
                                        <svg
                                            className="svg"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="9"
                                            viewBox="0 0 25 9"
                                            fill="none"
                                        >
                                            <path
                                                d="M0 4.99124V3.74124C0 3.39606 0.279908 3.11624 0.625193 3.11624H20.0062V0.616238C20.0097 0.366191 20.1619 0.142308 20.3933 0.0470931C20.6246 -0.0481216 20.8904 0.00366328 21.069 0.178738L24.8201 3.92874C25.0599 4.17601 25.0599 4.56897 24.8201 4.81624L21.069 8.56624C20.8887 8.74287 20.6199 8.79382 20.3875 8.69542C20.1551 8.59702 20.0047 8.36856 20.0062 8.11624V5.61624H0.625193C0.279908 5.61624 0 5.33642 0 4.99124Z"
                                                fill="#707070"
                                            />
                                        </svg>
                                    </p>{" "}
                                </a>
                            </div>
                            <div className="line"></div>
                            <div className="col-lg-12 col-xl-12 colxxl-12">
                                <a href="https://github.com/TemurEShtemirov">
                                    <svg
                                        className="svg2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={156}
                                        height={19}
                                        viewBox="0 0 156 19"
                                        fill="none"
                                    >
                                        <path
                                            d="M57.5 3H54.5C53.9477 3 53.5 3.44772 53.5 4V7H57.5C57.6137 6.99748 57.7216 7.05039 57.7892 7.14188C57.8568 7.23336 57.8758 7.35201 57.84 7.46L57.1 9.66C57.0318 9.86192 56.8431 9.99842 56.63 10H53.5V17.5C53.5 17.7761 53.2761 18 53 18H50.5C50.2239 18 50 17.7761 50 17.5V10H48.5C48.2239 10 48 9.77614 48 9.5V7.5C48 7.22386 48.2239 7 48.5 7H50V4C50 1.79086 51.7909 0 54 0H57.5C57.7761 0 58 0.223858 58 0.5V2.5C58 2.77614 57.7761 3 57.5 3Z"
                                            fill="#707070"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M101 1H93C90.2386 1 88 3.23858 88 6V14C88 16.7614 90.2386 19 93 19H101C103.761 19 106 16.7614 106 14V6C106 3.23858 103.761 1 101 1ZM104.25 14C104.245 15.7926 102.793 17.2445 101 17.25H93C91.2074 17.2445 89.7555 15.7926 89.75 14V6C89.7555 4.20735 91.2074 2.75549 93 2.75H101C102.793 2.75549 104.245 4.20735 104.25 6V14ZM101.75 6.25C102.302 6.25 102.75 5.80228 102.75 5.25C102.75 4.69772 102.302 4.25 101.75 4.25C101.198 4.25 100.75 4.69772 100.75 5.25C100.75 5.80228 101.198 6.25 101.75 6.25ZM97 5.50001C94.5147 5.50001 92.5 7.51473 92.5 10C92.5 12.4853 94.5147 14.5 97 14.5C99.4853 14.5 101.5 12.4853 101.5 10C101.503 8.80572 101.029 7.65958 100.185 6.81509C99.3404 5.9706 98.1943 5.49735 97 5.50001ZM94.25 10C94.25 11.5188 95.4812 12.75 97 12.75C98.5188 12.75 99.75 11.5188 99.75 10C99.75 8.48122 98.5188 7.25 97 7.25C95.4812 7.25 94.25 8.48122 94.25 10Z"
                                            fill="#707070"
                                        />
                                        <path
                                            d="M155.971 3.46378C155.455 4.15213 154.831 4.75258 154.124 5.24195C154.124 5.42177 154.124 5.60158 154.124 5.79139C154.129 9.0568 152.825 12.1879 150.503 14.4828C148.181 16.7777 145.036 18.0443 141.772 17.9988C139.885 18.0051 138.023 17.5743 136.33 16.7401C136.239 16.7003 136.18 16.61 136.181 16.5103V16.4005C136.181 16.257 136.297 16.1407 136.44 16.1407C138.295 16.0796 140.083 15.4366 141.552 14.3026C139.874 14.2688 138.363 13.2744 137.668 11.7453C137.633 11.6617 137.644 11.5659 137.697 11.4925C137.75 11.419 137.838 11.3785 137.928 11.3856C138.438 11.4369 138.953 11.3894 139.446 11.2458C137.592 10.8611 136.2 9.32265 136.001 7.43969C135.994 7.34936 136.034 7.26187 136.108 7.20882C136.181 7.15577 136.277 7.14483 136.36 7.17996C136.858 7.39939 137.394 7.51496 137.938 7.51961C136.314 6.45384 135.613 4.42672 136.23 2.58469C136.294 2.4057 136.447 2.27347 136.634 2.2366C136.82 2.19972 137.012 2.26365 137.139 2.40487C139.33 4.73695 142.341 6.12662 145.536 6.28088C145.455 5.95427 145.414 5.61862 145.417 5.28191C145.447 3.51636 146.539 1.94357 148.182 1.29986C149.826 0.656154 151.695 1.06893 152.915 2.34494C153.747 2.18651 154.551 1.90716 155.302 1.51579C155.357 1.48145 155.426 1.48145 155.481 1.51579C155.516 1.57081 155.516 1.64058 155.481 1.6956C155.118 2.52835 154.503 3.2268 153.724 3.69355C154.407 3.6144 155.077 3.45341 155.721 3.21404C155.775 3.17713 155.847 3.17713 155.901 3.21404C155.946 3.23482 155.98 3.27457 155.994 3.32269C156.007 3.37081 155.999 3.42242 155.971 3.46378Z"
                                            fill="#707070"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0 2.11765C0 0.948103 0.948103 0 2.11765 0C2.67928 0 3.21791 0.223109 3.61505 0.620245C4.01219 1.01738 4.23529 1.55601 4.23529 2.11765C4.23529 3.28719 3.28719 4.23529 2.11765 4.23529C0.948103 4.23529 0 3.28719 0 2.11765ZM18.5295 11.0223C18.566 8.72983 17.002 6.72095 14.7707 6.19406C13.2753 5.87207 11.7167 6.2943 10.5883 7.327V6.8823C10.5883 6.58991 10.3513 6.35288 10.0589 6.35288H7.41183C7.11945 6.35288 6.88242 6.58991 6.88242 6.8823V17.4705C6.88242 17.7629 7.11945 17.9999 7.41183 17.9999H10.0589C10.3513 17.9999 10.5883 17.7629 10.5883 17.4705V11.4988C10.5622 10.4354 11.3033 9.50677 12.346 9.29641C12.9668 9.18924 13.6031 9.36408 14.0821 9.77342C14.561 10.1828 14.8328 10.7841 14.8236 11.4141V17.4705C14.8236 17.7629 15.0606 17.9999 15.353 17.9999H18.0001C18.2925 17.9999 18.5295 17.7629 18.5295 17.4705V11.0223ZM4.23528 6.88229V17.4705C4.23528 17.7629 3.99825 17.9999 3.70587 17.9999H1.05881C0.76642 17.9999 0.529395 17.7629 0.529395 17.4705V6.88229C0.529395 6.58991 0.76642 6.35288 1.05881 6.35288H3.70587C3.99825 6.35288 4.23528 6.58991 4.23528 6.88229Z"
                                            fill="#707070"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
                <Outlet />
            </div>
        </>
    );
}
