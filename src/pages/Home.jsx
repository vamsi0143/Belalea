import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Products from "../components/Products/Products";
import Testimonial from "../components/Testimonial/Testimonial";
import Offer from "../components/Offer/Offer";
import Eco from "../components/Eco/Eco";
import Categories from "../components/Categories/Categories";
// import BlogCard from "../components/News/BlogCard";
import News from "../components/News/News";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Navbar />

            <main className="overflow-hidden">
                <Hero />
                <Banner />
                <About />
                <Products />
                <Testimonial />
                <Offer />
                <Eco />
                <Categories />
                {/* <BlogCard /> */}

                <News />
                <Newsletter />
                <Footer />
            </main>
        </>
    );
}