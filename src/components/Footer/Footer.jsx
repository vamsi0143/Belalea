import {
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaPinterestP,
} from "react-icons/fa";

import logo from "../../assets/images/logo.jpeg";

export default function Footer() {
    return (
        <footer className="bg-white pt-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-3 gap-14">

                    {/* Left */}

                    <div className="lg:text-right border-r border-gray-200 pr-10">

                        <h2 className="text-3xl font-bold text-[#274C5B] mb-8">

                            Contact Us

                        </h2>

                        <div className="space-y-8 text-[#525C60]">

                            <div>

                                <h3 className="font-bold">

                                    Email

                                </h3>

                                <p>

                                    needhelp@organia.com

                                </p>

                            </div>

                            <div>

                                <h3 className="font-bold">

                                    Phone

                                </h3>

                                <p>

                                    666 888 888

                                </p>

                            </div>

                            <div>

                                <h3 className="font-bold">

                                    Address

                                </h3>

                                <p>

                                    88 Road, Brooklyn Street,
                                    <br />
                                    USA

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Center */}

                    <div className="text-center px-8">

                        <img
                            src={logo}
                            alt="logo"
                            className="mx-auto w-44"
                        />

                        <p className="text-[#525C60] mt-8 leading-8">

                            Simply dummy text of the printing and
                            typesetting industry.
                            Lorem Ipsum simply dummy text of the
                            printing industry.

                        </p>

                        {/* Social Icons */}

                        <div className="flex justify-center gap-5 mt-10">

                            <div className="w-14 h-14 rounded-full bg-[#EFF6F1] flex justify-center items-center hover:bg-[#7EB693] hover:text-white duration-300 cursor-pointer">

                                <FaInstagram />

                            </div>

                            <div className="w-14 h-14 rounded-full bg-[#EFF6F1] flex justify-center items-center hover:bg-[#7EB693] hover:text-white duration-300 cursor-pointer">

                                <FaFacebookF />

                            </div>

                            <div className="w-14 h-14 rounded-full bg-[#EFF6F1] flex justify-center items-center hover:bg-[#7EB693] hover:text-white duration-300 cursor-pointer">

                                <FaTwitter />

                            </div>

                            <div className="w-14 h-14 rounded-full bg-[#EFF6F1] flex justify-center items-center hover:bg-[#7EB693] hover:text-white duration-300 cursor-pointer">

                                <FaPinterestP />

                            </div>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="border-l border-gray-200 pl-10">

                        <h2 className="text-3xl font-bold text-[#274C5B] mb-8">

                            Utility Pages

                        </h2>

                        <ul className="space-y-5 text-[#525C60]">

                            <li className="hover:text-[#7EB693] cursor-pointer">

                                Style Guide

                            </li>

                            <li className="hover:text-[#7EB693] cursor-pointer">

                                404 Not Found

                            </li>

                            <li className="hover:text-[#7EB693] cursor-pointer">

                                Password Protected

                            </li>

                            <li className="hover:text-[#7EB693] cursor-pointer">

                                Licences

                            </li>

                            <li className="hover:text-[#7EB693] cursor-pointer">

                                Changelog

                            </li>

                        </ul>

                    </div>

                </div><br /><br /><br />

            </div>

            {/* Bottom */}

            {/* <div className="border-t mt-20">

                <div className="max-w-7xl mx-auto py-8 text-center text-[#525C60]">

                    Copyright ©
                    <span className="font-bold text-[#274C5B]">
                        {" "}
                        Organick
                    </span>
                    . Designed by
                    <span className="font-bold text-[#274C5B]">
                        {" "}
                        VictorFlow
                    </span>
                    . Powered by
                    <span className="font-bold text-[#274C5B]">
                        {" "}
                        Webflow
                    </span>

                </div>

            </div> */}

        </footer>
    );
}