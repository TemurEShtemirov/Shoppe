import Home from "./pages/Home/Home";
import Layout from "./pages/layout/Layout";
// import NoPage from "./pages/NoPage/NoPage";
// import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <div className="App">
        {/* <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes> */}
        <Layout/>
        <Home/>
    </div>
    </>
  )
}

{/* <Route path="blogs" element={<Blogs />} />
<Route path="contact" element={<Contact />} /> */}