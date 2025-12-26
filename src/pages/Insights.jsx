import React from 'react';
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Lightbulb, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Insights = () => {
    const featuredArticle = {
        category: "AI Strategy",
        title: "The Enterprise AI Revolution: What Leaders Need to Know in 2025",
        excerpt: "As artificial intelligence becomes mainstream, enterprise leaders must navigate new challenges and opportunities. This comprehensive guide explores the strategic considerations, implementation frameworks, and success metrics that define AI transformation in the modern enterprise.",
        date: "Dec 20, 2024",
        author: "Dr. Sarah Chen",
        readTime: "12 min read",
        image: "from-blue-500 to-purple-600",
        tags: ["Strategy", "Enterprise", "Leadership"]
    };

    const articles = [
        {
            category: "Machine Learning",
            title: "Optimizing Supply Chains with Predictive Analytics",
            excerpt: "How reinforcement learning and predictive models are reducing waste and improving delivery times by up to 30% across global supply chains.",
            date: "Dec 15, 2024",
            author: "James Wilson",
            readTime: "8 min read",
            color: "blue",
            tags: ["ML", "Supply Chain", "Optimization"]
        },
        {
            category: "Ethics & AI",
            title: "Building Responsible AI: A Framework for Ethical Implementation",
            excerpt: "Why transparency, fairness, and accountability in AI algorithms are becoming the new gold standard for technology companies worldwide.",
            date: "Dec 10, 2024",
            author: "Elena Rodriguez",
            readTime: "10 min read",
            color: "green",
            tags: ["Ethics", "Governance", "Compliance"]
        },
        {
            category: "Industry Trends",
            title: "The Rise of Multimodal AI in Healthcare",
            excerpt: "Exploring how AI systems that process text, images, and sensor data simultaneously are revolutionizing medical diagnosis and treatment.",
            date: "Dec 5, 2024",
            author: "Dr. Michael Park",
            readTime: "6 min read",
            color: "red",
            tags: ["Healthcare", "Multimodal", "Innovation"]
        },
        {
            category: "Data Science",
            title: "Real-Time Analytics: Processing Billions of Events",
            excerpt: "Technical deep-dive into building scalable real-time analytics systems that can handle massive data streams with sub-second latency.",
            date: "Nov 28, 2024",
            author: "Alex Thompson",
            readTime: "15 min read",
            color: "purple",
            tags: ["Analytics", "Real-time", "Architecture"]
        },
        {
            category: "Automation",
            title: "Intelligent Process Automation: Beyond RPA",
            excerpt: "How cognitive automation is evolving beyond simple rule-based systems to handle complex, unstructured business processes.",
            date: "Nov 22, 2024",
            author: "Lisa Chang",
            readTime: "7 min read",
            color: "orange",
            tags: ["Automation", "RPA", "Process"]
        },
        {
            category: "Future Tech",
            title: "Quantum-Enhanced Machine Learning: The Next Frontier",
            excerpt: "Investigating the potential of quantum computing to accelerate machine learning algorithms and solve previously intractable problems.",
            date: "Nov 18, 2024",
            author: "Dr. Robert Kim",
            readTime: "12 min read",
            color: "indigo",
            tags: ["Quantum", "Future", "Research"]
        }
    ];

    const categories = [
        { name: "All", count: 25, active: true },
        { name: "AI Strategy", count: 8 },
        { name: "Machine Learning", count: 12 },
        { name: "Industry Trends", count: 6 },
        { name: "Case Studies", count: 9 },
        { name: "Technical", count: 7 }
    ];

    const colorClasses = {
        blue: { bg: "bg-blue-50", text: "text-blue-500", border: "border-blue-200" },
        green: { bg: "bg-green-50", text: "text-green-500", border: "border-green-200" },
        red: { bg: "bg-red-50", text: "text-red-500", border: "border-red-200" },
        purple: { bg: "bg-purple-50", text: "text-purple-500", border: "border-purple-200" },
        orange: { bg: "bg-orange-50", text: "text-orange-500", border: "border-orange-200" },
        indigo: { bg: "bg-indigo-50", text: "text-indigo-500", border: "border-indigo-200" }
    };

    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full font-semibold text-sm mb-6">
                        INSIGHTS & RESEARCH
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        AI Insights & <span className="text-orange-500">Industry Trends</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Stay ahead of the curve with expert analysis, research findings, and practical insights from the world of artificial intelligence.
                    </p>
                    <Link to="#newsletter" className="btn btn-primary">
                        Subscribe to Updates
                    </Link>
                </div>
            </section>

            {/* Featured Article */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <div className={`h-64 md:h-full bg-gradient-to-br ${featuredArticle.image} flex items-center justify-center`}>
                                    <div className="text-center text-white">
                                        <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-80" />
                                        <div className="text-sm font-semibold">Featured Article</div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                                        {featuredArticle.category}
                                    </span>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {featuredArticle.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {featuredArticle.readTime}
                                        </span>
                                    </div>
                                </div>
                                <h2 className="text-3xl font-bold mb-4">{featuredArticle.title}</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {featuredArticle.tags.map((tag, index) => (
                                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                            <User className="w-5 h-5 text-gray-500" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">{featuredArticle.author}</div>
                                            <div className="text-sm text-gray-500">Senior AI Researcher</div>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="btn btn-primary">
                                        Read Article
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                    category.active
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                                }`}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => {
                            const colors = colorClasses[article.color];
                            return (
                                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                                    <div className={`h-48 bg-gradient-to-br ${colors.bg} flex items-center justify-center relative`}>
                                        <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center ${colors.text}`}>
                                            <Lightbulb className="w-8 h-8" />
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-2 py-1 ${colors.bg} ${colors.text} rounded text-xs font-semibold`}>
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {article.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {article.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {article.tags.map((tag, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                                                    <User className="w-3 h-3 text-gray-500" />
                                                </div>
                                                <span className="text-sm font-medium text-gray-700">{article.author}</span>
                                            </div>
                                            <Link to="/contact" className={`${colors.text} hover:opacity-80 transition-opacity`}>
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Research Impact</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Contributing to the global AI knowledge base through research and insights.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: <BookOpen className="w-6 h-6" />, metric: "150+", label: "Articles Published" },
                            { icon: <TrendingUp className="w-6 h-6" />, metric: "50K+", label: "Monthly Readers" },
                            { icon: <User className="w-6 h-6" />, metric: "25+", label: "Expert Contributors" },
                            { icon: <Tag className="w-6 h-6" />, metric: "12", label: "Research Areas" }
                        ].map((item, index) => (
                            <div key={index} className="text-center bg-white p-6 rounded-2xl shadow-sm">
                                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-4">
                                    {item.icon}
                                </div>
                                <div className="text-2xl font-bold text-gray-900 mb-1">{item.metric}</div>
                                <div className="text-gray-600 text-sm">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section id="newsletter" className="py-16">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-4">Stay Informed with AI Insights</h2>
                            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
                                Get the latest AI research, industry trends, and expert analysis delivered to your inbox. Join 10,000+ professionals staying ahead of the curve.
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email address" 
                                    className="flex-1 px-6 py-4 rounded-full bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-indigo-200 focus:outline-none focus:bg-opacity-30 backdrop-blur-sm"
                                />
                                <button className="btn bg-white text-indigo-600 hover:bg-gray-100 whitespace-nowrap px-8">
                                    Subscribe Now
                                </button>
                            </div>
                            <p className="text-indigo-200 text-sm mt-4">
                                No spam, unsubscribe anytime. Read our privacy policy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Insights;