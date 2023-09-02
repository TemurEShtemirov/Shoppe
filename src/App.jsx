import Home from "./pages/Home/Home";
import Layout from "./pages/layout/Layout";
import NoPage from "./pages/NoPage/NoPage";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/PRoducts";

export default function App() {
  return (
    <>
    <div className="App container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
    </div>
    </>
  )
}
