import React from 'react';
import { Zap, Activity, Share2, CheckCircle, ArrowRight, Star, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
    const products = [
        {
            name: "NeuZen Analytics",
            tagline: "Predictive Data Intelligence",
            description: "Transform your data into actionable insights with advanced predictive analytics, real-time dashboards, and AI-powered forecasting.",
            icon: <Activity className="w-32 h-32" />,
            gradient: "from-blue-400 to-cyan-500",
            color: "blue",
            features: [
                "Real-time Data Processing",
                "Predictive Modeling",
                "Interactive Dashboards",
                "Custom KPI Tracking",
                "Automated Reporting",
                "API Integration"
            ],
            stats: { accuracy: "98%", processing: "10M+", clients: "500+" },
            pricing: "Starting at $299/month"
        },
        {
            name: "NeuZen Automate",
            tagline: "Intelligent Process Automation",
            description: "Streamline workflows and eliminate repetitive tasks with AI-powered automation that learns and adapts to your business processes.",
            icon: <Zap className="w-32 h-32" />,
            gradient: "from-orange-400 to-pink-500",
            color: "orange",
            features: [
                "Zero-code Automation",
                "Smart Process Discovery",
                "Real-time Optimization",
                "Multi-system Integration",
                "Exception Handling",
                "Performance Analytics"
            ],
            stats: { efficiency: "75%", tasks: "1M+", savings: "$2M+" },
            pricing: "Starting at $199/month"
        },
        {
            name: "NeuZen Connect",
            tagline: "Unified Knowledge Platform",
            description: "Break down data silos with our intelligent knowledge graph that connects all your organizational data for seamless discovery and insights.",
            icon: <Share2 className="w-32 h-32" />,
            gradient: "from-purple-400 to-indigo-500",
            color: "purple",
            features: [
                "Semantic Data Layer",
                "Natural Language Search",
                "Cross-platform Integration",
                "Knowledge Discovery",
                "Collaborative Workspaces",
                "Security & Compliance"
            ],
            stats: { connections: "10K+", queries: "1M+", uptime: "99.9%" },
            pricing: "Starting at $399/month"
        }
    ];

    const colorClasses = {
        blue: { text: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200" },
        orange: { text: "text-orange-500", bg: "bg-orange-50", border: "border-orange-200" },
        purple: { text: "text-purple-500", bg: "bg-purple-50", border: "border-purple-200" }
    };

    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full font-semibold text-sm mb-6">
                        OUR PRODUCTS
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Ready-to-Deploy <span className="text-orange-500">AI Platforms</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Accelerate your AI adoption with our suite of enterprise-ready platforms designed to solve real business challenges.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/contact" className="btn btn-primary">
                            Request Demo
                        </Link>
                        <Link to="/case-studies" className="btn bg-white text-gray-800 shadow-lg hover:bg-gray-50">
                            View Success Stories
                        </Link>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="space-y-32">
                        {products.map((product, index) => {
                            const colors = colorClasses[product.color];
                            const isReverse = index % 2 === 1;
                            
                            return (
                                <div key={index} className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
                                    {/* Product Visual */}
                                    <div className="md:w-1/2">
                                        <div className={`w-full h-96 bg-gradient-to-tr ${product.gradient} rounded-3xl flex items-center justify-center shadow-2xl transform ${isReverse ? '-rotate-2' : 'rotate-2'} hover:rotate-0 transition-all duration-500`}>
                                            <div className="text-white">
                                                {product.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="md:w-1/2">
                                        <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
                                        <p className={`text-xl ${colors.text} mb-6 font-semibold`}>{product.tagline}</p>
                                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">{product.description}</p>
                                        
                                        {/* Features */}
                                        <div className="mb-8">
                                            <h4 className="font-semibold mb-4">Key Features:</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {product.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                                        <span className="text-sm text-gray-600">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className={`${colors.bg} ${colors.border} border rounded-xl p-6 mb-8`}>
                                            <div className="grid grid-cols-3 gap-4 text-center">
                                                {Object.entries(product.stats).map(([key, value], idx) => (
                                                    <div key={idx}>
                                                        <div className={`text-2xl font-bold ${colors.text}`}>{value}</div>
                                                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Pricing & CTA */}
                                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                                            <div>
                                                <div className="text-2xl font-bold text-gray-900">{product.pricing}</div>
                                                <div className="text-sm text-gray-500">Per organization</div>
                                            </div>
                                            <div className="flex gap-3">
                                                <Link to="/contact" className="btn btn-primary">
                                                    Get Started
                                                </Link>
                                                <Link to="/contact" className="btn bg-white text-gray-800 border border-gray-200 hover:bg-gray-50">
                                                    Schedule Demo
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features Comparison */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Why Choose NeuZen Products?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Built for enterprise scale with security, reliability, and performance at the core.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: <Shield className="w-8 h-8" />, title: "Enterprise Security", desc: "SOC 2 compliant with end-to-end encryption" },
                            { icon: <TrendingUp className="w-8 h-8" />, title: "Scalable Architecture", desc: "Handles millions of operations per second" },
                            { icon: <Users className="w-8 h-8" />, title: "24/7 Support", desc: "Dedicated success team and technical support" },
                            { icon: <Star className="w-8 h-8" />, title: "Proven Results", desc: "Trusted by 500+ organizations worldwide" }
                        ].map((item, index) => (
                            <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-sm">
                                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-purple-500 to-indigo-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                        Join hundreds of organizations already using NeuZen products to drive innovation and growth.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/contact" className="btn bg-white text-purple-600 hover:bg-gray-100">
                            Start Free Trial
                        </Link>
                        <Link to="/contact" className="btn border border-white text-white hover:bg-white hover:text-purple-600">
                            Schedule Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;