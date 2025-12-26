import React from 'react';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
    const caseStudies = [
        {
            category: "Education",
            title: "Revolutionizing Remote Learning",
            company: "EduTech Global",
            description: "How we implemented AI-driven personalization for a leading online education platform, transforming student engagement and learning outcomes.",
            challenge: "Low student engagement and high dropout rates in online courses",
            solution: "AI-powered personalized learning paths and intelligent tutoring system",
            results: [
                { metric: "40%", label: "Increase in Engagement" },
                { metric: "65%", label: "Reduction in Dropouts" },
                { metric: "85%", label: "Student Satisfaction" }
            ],
            gradient: "from-blue-400 to-cyan-500",
            color: "blue",
            timeline: "6 months",
            industry: "EdTech"
        },
        {
            category: "Finance",
            title: "Fraud Detection at Scale",
            company: "SecureBank Corp",
            description: "Deploying a real-time anomaly detection system that prevented millions in fraudulent transactions while maintaining seamless user experience.",
            challenge: "Rising fraud rates and false positives affecting customer experience",
            solution: "Machine learning-based real-time fraud detection with behavioral analysis",
            results: [
                { metric: "$2M+", label: "Fraud Prevented" },
                { metric: "99.8%", label: "Detection Accuracy" },
                { metric: "75%", label: "Reduced False Positives" }
            ],
            gradient: "from-green-400 to-emerald-500",
            color: "green",
            timeline: "4 months",
            industry: "FinTech"
        },
        {
            category: "Healthcare",
            title: "Accelerating Drug Discovery",
            company: "MedInnovate Labs",
            description: "Using AI to identify potential drug compounds and predict their effectiveness, significantly reducing research timelines.",
            challenge: "Traditional drug discovery taking 10+ years with high failure rates",
            solution: "AI-powered molecular analysis and predictive modeling for drug efficacy",
            results: [
                { metric: "60%", label: "Faster Discovery" },
                { metric: "3x", label: "More Candidates" },
                { metric: "$50M", label: "Cost Savings" }
            ],
            gradient: "from-purple-400 to-pink-500",
            color: "purple",
            timeline: "8 months",
            industry: "Pharma"
        },
        {
            category: "Manufacturing",
            title: "Predictive Maintenance Revolution",
            company: "AutoManufacture Inc",
            description: "Implementing IoT sensors and AI analytics to predict equipment failures before they occur, minimizing downtime.",
            challenge: "Unexpected equipment failures causing production delays and costs",
            solution: "IoT-enabled predictive maintenance with machine learning algorithms",
            results: [
                { metric: "80%", label: "Reduced Downtime" },
                { metric: "$5M", label: "Annual Savings" },
                { metric: "95%", label: "Prediction Accuracy" }
            ],
            gradient: "from-orange-400 to-red-500",
            color: "orange",
            timeline: "5 months",
            industry: "Manufacturing"
        },
        {
            category: "Retail",
            title: "Personalized Shopping Experience",
            company: "RetailMax Chain",
            description: "Creating AI-driven recommendation engines and inventory optimization to enhance customer experience and reduce waste.",
            challenge: "Low conversion rates and excess inventory leading to losses",
            solution: "Personalized recommendation system with demand forecasting",
            results: [
                { metric: "35%", label: "Sales Increase" },
                { metric: "50%", label: "Inventory Optimization" },
                { metric: "90%", label: "Customer Satisfaction" }
            ],
            gradient: "from-indigo-400 to-purple-500",
            color: "indigo",
            timeline: "7 months",
            industry: "E-commerce"
        },
        {
            category: "Government",
            title: "Smart City Infrastructure",
            company: "Metro City Council",
            description: "Optimizing traffic flow and resource allocation using AI-powered analytics and real-time data processing.",
            challenge: "Traffic congestion and inefficient resource allocation",
            solution: "AI-powered traffic management and resource optimization system",
            results: [
                { metric: "30%", label: "Traffic Reduction" },
                { metric: "40%", label: "Energy Savings" },
                { metric: "25%", label: "Response Time Improvement" }
            ],
            gradient: "from-teal-400 to-blue-500",
            color: "teal",
            timeline: "12 months",
            industry: "Public Sector"
        }
    ];

    const colorClasses = {
        blue: { text: "text-blue-500", bg: "bg-blue-50" },
        green: { text: "text-green-500", bg: "bg-green-50" },
        purple: { text: "text-purple-500", bg: "bg-purple-50" },
        orange: { text: "text-orange-500", bg: "bg-orange-50" },
        indigo: { text: "text-indigo-500", bg: "bg-indigo-50" },
        teal: { text: "text-teal-500", bg: "bg-teal-50" }
    };

    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-green-50 to-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full font-semibold text-sm mb-6">
                        SUCCESS STORIES
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Real Results from <span className="text-orange-500">Real Clients</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Discover how organizations across industries have transformed their operations and achieved remarkable results with our AI solutions.
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Start Your Success Story
                    </Link>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {caseStudies.map((study, index) => {
                            const colors = colorClasses[study.color];
                            return (
                                <div key={index} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                                    {/* Header Image */}
                                    <div className={`h-48 bg-gradient-to-br ${study.gradient} relative`}>
                                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white bg-opacity-90 text-gray-800 rounded-full text-sm font-semibold">
                                                {study.industry}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-4 right-4 text-white">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                <span className="text-sm">{study.timeline}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`text-sm ${colors.text} font-semibold uppercase tracking-wider`}>
                                                {study.category}
                                            </span>
                                            <div className="flex text-yellow-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-3 h-3 fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                                        <p className="text-gray-500 text-sm mb-4">{study.company}</p>
                                        <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>

                                        {/* Results */}
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            {study.results.map((result, idx) => (
                                                <div key={idx} className={`${colors.bg} rounded-lg p-3 text-center`}>
                                                    <div className={`text-lg font-bold ${colors.text}`}>{result.metric}</div>
                                                    <div className="text-xs text-gray-600">{result.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Challenge & Solution */}
                                        <div className="space-y-4 mb-6">
                                            <div>
                                                <h4 className="font-semibold text-sm text-gray-800 mb-1">Challenge:</h4>
                                                <p className="text-sm text-gray-600">{study.challenge}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-sm text-gray-800 mb-1">Solution:</h4>
                                                <p className="text-sm text-gray-600">{study.solution}</p>
                                            </div>
                                        </div>

                                        <Link to="/contact" className={`flex items-center gap-2 ${colors.text} font-semibold group-hover:gap-3 transition-all`}>
                                            Read Full Case Study <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Impact by the Numbers</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Measurable results across all our client engagements.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: <TrendingUp className="w-8 h-8" />, metric: "500+", label: "Projects Completed", color: "text-blue-500" },
                            { icon: <Users className="w-8 h-8" />, metric: "200+", label: "Happy Clients", color: "text-green-500" },
                            { icon: <DollarSign className="w-8 h-8" />, metric: "$100M+", label: "Value Generated", color: "text-orange-500" },
                            { icon: <Star className="w-8 h-8" />, metric: "98%", label: "Success Rate", color: "text-purple-500" }
                        ].map((item, index) => (
                            <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-sm">
                                <div className={`w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center ${item.color} mx-auto mb-6`}>
                                    {item.icon}
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">{item.metric}</div>
                                <div className="text-gray-600">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-green-500 to-teal-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Write Your Success Story?
                    </h2>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Join the growing list of organizations that have transformed their business with our AI solutions.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/contact" className="btn bg-white text-green-600 hover:bg-gray-100">
                            Get Started Today
                        </Link>
                        <Link to="/services" className="btn border border-white text-white hover:bg-white hover:text-green-600">
                            Explore Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;