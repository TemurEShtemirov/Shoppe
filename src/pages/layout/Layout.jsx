import { Link,Outlet } from "react-router-dom";
import React from "react";
export default function Layout() {
    return (
        <>
            <div className="Layout">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link  to="/products" className="nav-link active" aria-current="page" >Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li> */}
                </ul>
            </div>
<Outlet/>
        </>
    )
}
