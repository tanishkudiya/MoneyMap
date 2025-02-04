import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { Github } from "lucide-react";

const Footer = () => {
    return (
        <div>
            {/* footer */}
            <footer className="bg-blue-50 py-12">
                <div className="container text-gray-900 mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        {/* Brand & Description */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">MoneyMap</h2>
                            <p className="mt-2 text-gray-600">
                                Your personal finance assistant to track, plan, and grow your wealth.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/dashboard" className="hover:text-gray-600 transition">Dashboard</a>
                                </li>
                                <li>
                                    <a href="/transaction/create" className="hover:text-gray-600 transition">Add Transactions</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-600 transition">Reports</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-600 transition">Support</a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
                            <div className="flex justify-center md:justify-start mt-4 space-x-4">
                                <a href="https://github.com/tanishkudiya" className="hover:text-gray-600 transition">
                                    <Github size={24} />
                                </a>
                                <a href="https://x.com/UdiyaTanis43966" className="hover:text-gray-600 transition">
                                    <Twitter size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/tanishk-udiya-366b6b25a/" className="hover:text-gray-600 transition">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 text-center border-t border-gray-700 pt-4">
                        <p className="text-sm text-gray-500">
                            &copy; 2025 MoneyMap By Tanishk Udiya. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;