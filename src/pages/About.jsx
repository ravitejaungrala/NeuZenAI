import React from 'react';
import { Target, Users, Globe, Award, Brain, Heart, Shield, Zap, ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    const team = [
        {
            name: "Dr. Sarah Chen",
            role: "CEO & Co-Founder",
            bio: "Former Google AI researcher with 15+ years in machine learning and neural networks.",
            expertise: ["AI Strategy", "Deep Learning", "Leadership"],
            image: "from-blue-400 to-purple-500"
        },
        {
            name: "James Wilson",
            role: "CTO & Co-Founder",
            bio: "Ex-Microsoft engineer specializing in scalable AI infrastructure and cloud computing.",
            expertise: ["Cloud Architecture", "MLOps", "Scalability"],
            image: "from-green-400 to-teal-500"
        },
        {
            name: "Elena Rodriguez",
            role: "Head of AI Ethics",
            bio: "PhD in Computer Ethics, ensuring responsible AI development and deployment.",
            expertise: ["AI Ethics", "Governance", "Compliance"],
            image: "from-purple-400 to-pink-500"
        },
        {
            name: "Dr. Michael Park",
            role: "Chief Data Scientist",
            bio: "Leading data scientist with expertise in healthcare AI and predictive analytics.",
            expertise: ["Healthcare AI", "Predictive Models", "Research"],
            image: "from-orange-400 to-red-500"
        }
    ];

    const values = [
        {
            icon: <Brain className="w-8 h-8" />,
            title: "Innovation First",
            description: "We constantly push the boundaries of what's possible with AI, investing 30% of our resources in R&D.",
            color: "blue"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Human-Centered",
            description: "Technology should enhance human capabilities, not replace them. We design AI that empowers people.",
            color: "red"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Ethical AI",
            description: "We're committed to developing AI that is transparent, fair, and accountable to society.",
            color: "green"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Excellence",
            description: "We maintain the highest standards in everything we do, from code quality to client service.",
            color: "orange"
        }
    ];

    const offices = [
        {
            city: "San Francisco",
            country: "USA",
            address: "123 Innovation Drive, SF, CA 94105",
            employees: "85",
            type: "Headquarters"
        },
        {
            city: "London",
            country: "UK",
            address: "45 Tech Square, London, EC2A 4DP",
            employees: "32",
            type: "European Hub"
        },
        {
            city: "Singapore",
            country: "Singapore",
            address: "88 Marina Bay, Singapore 018956",
            employees: "28",
            type: "Asia Pacific"
        },
        {
            city: "Toronto",
            country: "Canada",
            address: "200 King Street, Toronto, ON M5H 3T4",
            employees: "15",
            type: "R&D Center"
        }
    ];

    const colorClasses = {
        blue: { bg: "bg-blue-50", text: "text-blue-500" },
        red: { bg: "bg-red-50", text: "text-red-500" },
        green: { bg: "bg-green-50", text: "text-green-500" },
        orange: { bg: "bg-orange-50", text: "text-orange-500" }
    };

    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-full font-semibold text-sm mb-6">
                        ABOUT NEUZENAI
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Building the Future of <span className="text-orange-500">Artificial Intelligence</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        We are a team of visionaries, engineers, and data scientists dedicated to democratizing AI for businesses worldwide, making advanced technology accessible and impactful.
                    </p>
                    <Link to="/careers" className="btn btn-primary">
                        Join Our Team
                    </Link>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-100 py-12">
                        {[
                            { label: "Founded", value: "2020", desc: "Years of Innovation" },
                            { label: "Team Members", value: "160+", desc: "Global Experts" },
                            { label: "Global Offices", value: "4", desc: "Continents Covered" },
                            { label: "Patents Filed", value: "28", desc: "AI Innovations" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">{stat.label}</div>
                                <div className="text-xs text-gray-400">{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Story */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                To bridge the gap between complex AI technology and practical business applications. We believe that AI should be accessible, ethical, and transformative for every organization, regardless of size or industry.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Target className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Innovation at Scale</h3>
                                        <p className="text-gray-600">Constantly pushing the boundaries of what's possible with neural networks and machine learning.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Users className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Partnership Focused</h3>
                                        <p className="text-gray-600">Your success is our success. We build long-term partnerships, not just deliver software.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                                        <Brain className="w-12 h-12 text-orange-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">AI for Everyone</h3>
                                    <p className="text-gray-600">Making advanced AI accessible to all businesses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do, from product development to client relationships.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const colors = colorClasses[value.color];
                            return (
                                <div key={index} className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
                                    <div className={`w-16 h-16 ${colors.bg} rounded-full mx-auto mb-6 flex items-center justify-center ${colors.text}`}>
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Meet the visionaries and experts leading NeuZenAI's mission to democratize artificial intelligence.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className={`h-48 bg-gradient-to-br ${member.image} flex items-center justify-center`}>
                                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <Users className="w-10 h-10 text-white" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-orange-500 font-semibold mb-3">{member.role}</p>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                                    <div className="flex flex-wrap gap-1">
                                        {member.expertise.map((skill, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Global Presence</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            With offices across four continents, we're positioned to serve clients worldwide and tap into diverse talent pools.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {offices.map((office, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{office.city}</h3>
                                        <p className="text-sm text-gray-500">{office.country}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-3">{office.address}</p>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-orange-500 font-semibold">{office.type}</span>
                                    <span className="text-gray-500">{office.employees} employees</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Shape the Future of AI?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join our team of innovators or partner with us to transform your business with cutting-edge AI solutions.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/careers" className="btn btn-primary">
                            View Open Positions
                        </Link>
                        <Link to="/contact" className="btn border border-white text-white hover:bg-white hover:text-gray-900">
                            Partner With Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;