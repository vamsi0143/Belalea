import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/AboutPage";
import Shop from "../pages/Shop";
import ShopSingle from "../pages/ShopSingle";
import Blog from "../pages/Blog";
import BlogSingle from "../pages/BlogSingle";
import Contact from "../pages/Contact";
import NotFound from "../pages/notFound";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop-single" element={<ShopSingle />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-single/:id" element={<BlogSingle />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
