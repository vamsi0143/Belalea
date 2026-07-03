import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { useParams } from "react-router-dom";

import Newsletter from "../components/Newsletter/Newsletter";


import blogData from "../data/blogData";

export default function BlogSingle() {
    const { id } = useParams();

    const blog = blogData.find(
        (item) => item.id === Number(id)
    );

    if (!blog) {
        return <h1>Blog Not Found</h1>;
    }
    return (

        <>
            <Navbar />
            <section className="py-24 bg-white">
                <div className="max-w-[800px] mx-auto px-6">

                    {/* Image */}
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-[450px] object-cover"
                    />

                    {/* Title */}
                    <h1 className="mt-10 text-5xl font-bold text-[#274C5B] text-center">
                        {blog.title}
                    </h1>

                    {/* Author */}
                    <p className="mt-4 text-center text-[#7EB693] font-semibold">
                        By {blog.author}
                    </p>

                    {/* Content */}
                    <div className="mt-10 text-[#525C60] leading-9 text-lg text-center">
                        <p>
                            {blog.description}
                        </p>

                        <p className="mt-8">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s.
                        </p>

                        <p className="mt-8">
                            It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>

                </div>
            </section>

            {/* <div className="py-40 text-center">
                <h1 className="text-6xl font-bold text-[#274C5B]">
                    Blog Single
                     className="w-[700px] h-[450px] object-cover  mx-auto"
                </h1>
            </div> */}
            <Newsletter />

            <Footer />
        </>
    );
}