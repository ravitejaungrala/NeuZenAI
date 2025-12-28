import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Users, Heart, Zap, Globe, ArrowRight, Star, Coffee, Laptop, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('All');

    const jobs = [
        { 
            role: "Senior Machine Learning Engineer", 
            location: "San Francisco, CA", 
            type: "Full-time", 
            dept: "Engineering",
            level: "Senior",
            description: "Lead the development of cutting-edge ML models and algorithms for our AI platform.",
            requirements: ["5+ years ML experience", "Python/TensorFlow", "PhD preferred"],
            salary: "$180k - $250k"
        },
        { 
            role: "AI Product Manager", 
            location: "New York, NY", 
            type: "Full-time", 
            dept: "Product",
            level: "Mid-Senior",
            description: "Drive product strategy and roadmap for our AI solutions across multiple industries.",
            requirements: ["3+ years PM experience", "AI/ML background", "Technical degree"],
            salary: "$150k - $200k"
        },
        { 
            role: "Data Scientist", 
            location: "Remote", 
            type: "Full-time", 
            dept: "Data",
            level: "Mid-Level",
            description: "Analyze complex datasets to derive insights and build predictive models.",
            requirements: ["3+ years experience", "Python/R/SQL", "Statistics background"],
            salary: "$120k - $160k"
        },
        { 
            role: "Frontend Developer (React)", 
            location: "Austin, TX", 
            type: "Full-time", 
            dept: "Engineering",
            level: "Mid-Level",
            description: "Build beautiful, responsive user interfaces for our AI dashboard and tools.",
            requirements: ["3+ years React", "TypeScript", "UI/UX skills"],
            salary: "$110k - $140k"
        },
        { 
            role: "AI Research Scientist", 
            location: "London, UK", 
            type: "Full-time", 
            dept: "Research",
            level: "Senior",
            description: "Conduct cutting-edge research in deep learning and neural networks.",
            requirements: ["PhD in CS/ML", "Published papers", "Research experience"],
            salary: "£80k - £120k"
        },
        { 
            role: "DevOps Engineer", 
            location: "Singapore", 
            type: "Full-time", 
            dept: "Engineering",
            level: "Mid-Level",
            description: "Build and maintain scalable infrastructure for AI model deployment.",
            requirements: ["3+ years DevOps", "AWS/GCP", "Kubernetes"],
            salary: "$100k - $130k"
        },
        { 
            role: "Sales Engineer", 
            location: "Remote", 
            type: "Full-time", 
            dept: "Sales",
            level: "Mid-Senior",
            description: "Bridge technical solutions with client needs in enterprise AI sales.",
            requirements: ["Technical background", "Sales experience", "Communication skills"],
            salary: "$130k - $180k + commission"
        },
        { 
            role: "UX Designer", 
            location: "Toronto, CA", 
            type: "Full-time", 
            dept: "Design",
            level: "Mid-Level",
            description: "Design intuitive interfaces for complex AI tools and dashboards.",
            requirements: ["3+ years UX design", "Figma/Sketch", "B2B experience"],
            salary: "$90k - $120k CAD"
        }
    ];

    const departments = ['All', 'Engineering', 'Product', 'Data', 'Research', 'Sales', 'Design'];
    
    const filteredJobs = selectedDepartment === 'All' 
        ? jobs 
        : jobs.filter(job => job.dept === selectedDepartment);

    const benefits = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Health & Wellness",
            description: "Comprehensive health, dental, and vision insurance plus wellness programs",
            color: "red"
        },
        {
            icon: <Laptop className="w-8 h-8" />,
            title: "Remote-First Culture",
            description: "Work from anywhere with flexible hours and home office stipend",
            color: "blue"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Learning & Growth",
            description: "$5,000 annual learning budget and conference attendance",
            color: "yellow"
        },
        {
            icon: <Plane className="w-8 h-8" />,
            title: "Unlimited PTO",
            description: "Take the time you need to recharge and maintain work-life balance",
            color: "green"
        },
        {
            icon: <Coffee className="w-8 h-8" />,
            title: "Amazing Perks",
            description: "Free meals, gym membership, and quarterly team retreats",
            color: "orange"
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Equity Package",
            description: "Competitive equity grants so you share in our success",
            color: "purple"
        }
    ];

    const colorClasses = {
        red: { bg: "bg-red-50", text: "text-red-500" },
        blue: { bg: "bg-blue-50", text: "text-blue-500" },
        yellow: { bg: "bg-yellow-50", text: "text-yellow-500" },
        green: { bg: "bg-green-50", text: "text-green-500" },
        orange: { bg: "bg-orange-50", text: "text-orange-500" },
        purple: { bg: "bg-purple-50", text: "text-purple-500" }
    };

    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full font-semibold text-sm mb-6">
                        JOIN OUR TEAM
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Build the Future of <span className="text-orange-500">AI with Us</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Join a team of passionate innovators working on cutting-edge AI solutions that transform industries and improve lives worldwide.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="#positions" className="btn btn-primary">
                            View Open Positions
                        </Link>
                        <Link to="#culture" className="btn bg-white text-gray-800 shadow-lg hover:bg-gray-50">
                            Learn About Our Culture
                        </Link>
                    </div>
                </div>
            </section>

            {/* Company Stats */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { metric: "160+", label: "Team Members", desc: "Across 4 continents" },
                            { metric: "4.9/5", label: "Glassdoor Rating", desc: "Employee satisfaction" },
                            { metric: "95%", label: "Retention Rate", desc: "People love working here" },
                            { metric: "$200M", label: "Series B Funding", desc: "Backed by top VCs" }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.metric}</div>
                                <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
                                <div className="text-xs text-gray-500">{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section id="culture" className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Why Work at NeuZenAI?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We believe in creating an environment where brilliant minds can do their best work.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => {
                            const colors = colorClasses[benefit.color];
                            return (
                                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                                    <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center ${colors.text} mb-6`}>
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="positions" className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Find your next career opportunity and help us shape the future of artificial intelligence.
                        </p>
                    </div>

                    {/* Department Filter */}
                    <div className="flex flex-wrap gap-2 justify-center mb-12">
                        {departments.map((dept) => (
                            <button
                                key={dept}
                                onClick={() => setSelectedDepartment(dept)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                    selectedDepartment === dept
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                                }`}
                            >
                                {dept} ({dept === 'All' ? jobs.length : jobs.filter(job => job.dept === dept).length})
                            </button>
                        ))}
                    </div>

                    {/* Jobs List */}
                    <div className="max-w-4xl mx-auto space-y-6">
                        {filteredJobs.map((job, index) => (
                            <div key={index} className="bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-xl hover:border-orange-200 transition-all group">
                                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <h3 className="text-2xl font-bold text-gray-900">{job.role}</h3>
                                            <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded text-xs font-semibold">
                                                {job.level}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                            <span className="flex items-center gap-1">
                                                <Briefcase className="w-4 h-4" /> {job.dept}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" /> {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" /> {job.type}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-4">{job.description}</p>
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-gray-800 mb-2">Key Requirements:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {job.requirements.map((req, idx) => (
                                                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
                                                        {req}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="text-lg font-bold text-green-600">{job.salary}</div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Link to="/contact" className="btn btn-primary group-hover:shadow-lg">
                                            Apply Now
                                        </Link>
                                        <button className="btn bg-gray-100 text-gray-700 hover:bg-gray-200">
                                            Save Job
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Hiring Process</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We've designed a transparent, efficient process to help you showcase your skills.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Application", desc: "Submit your resume and cover letter through our portal" },
                            { step: "02", title: "Phone Screen", desc: "30-minute call with our talent team to discuss your background" },
                            { step: "03", title: "Technical Interview", desc: "Deep dive into your technical skills with our engineering team" },
                            { step: "04", title: "Final Round", desc: "Meet the team and discuss culture fit and career goals" }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    {item.step}
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
                        Don't See the Perfect Role?
                    </h2>
                    <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                        We're always looking for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/contact" className="btn bg-white text-purple-600 hover:bg-gray-100">
                            Send Your Resume
                        </Link>
                        <Link to="/about" className="btn border border-white text-white hover:bg-white hover:text-purple-600">
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;