import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="text-3xl font-bold font-heading mb-6 block">
                            <span className="text-orange-500">NeuZen</span>AI
                        </Link>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Empowering businesses with next-generation AI solutions that transform operations and drive innovation across industries.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />About Us</Link></li>
                            <li><Link to="/careers" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />Careers</Link></li>
                            <li><Link to="/insights" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />Insights</Link></li>
                            <li><Link to="/case-studies" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />Case Studies</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />AI Solutions</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />Data Science</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />Machine Learning</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />Cloud Integration</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-300">
                                <Mail className="w-5 h-5 text-orange-500" />
                                <span>hello@neuzenai.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Phone className="w-5 h-5 text-orange-500" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                                <span>123 Innovation Drive<br />San Francisco, CA 94105</span>
                            </li>
                        </ul>
                        
                        {/* Newsletter */}
                        <div className="mt-8">
                            <h5 className="font-semibold text-white mb-3">Stay Updated</h5>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                                />
                                <button className="btn btn-primary px-4 py-2">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} NeuZenAI. All rights reserved.
                    </div>
                    <div className="flex gap-6 text-sm">
                        <Link to="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</Link>
                        <Link to="/cookies" className="text-gray-400 hover:text-orange-500 transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
