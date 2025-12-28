import React from 'react';
import { Target, Users, Globe, Award, Brain, Heart, Shield, Zap, ArrowRight, MapPin, Mail, Phone, Building, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    const values = [
        {
            icon: <Brain className="w-8 h-8" />,
            title: "Innovation First",
            description: "We constantly push the boundaries of what's possible with AI, investing heavily in research and development to deliver cutting-edge solutions that transform businesses.",
            color: "orange"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Human-Centered AI",
            description: "Technology should enhance human capabilities, not replace them. We design AI that empowers people and creates meaningful value for organizations and society.",
            color: "green"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Ethical & Responsible",
            description: "We're committed to developing AI that is transparent, fair, and accountable. Our solutions prioritize privacy, security, and ethical considerations.",
            color: "blue"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Excellence in Delivery",
            description: "We maintain the highest standards in everything we do, from code quality to client service, ensuring exceptional results and long-term partnerships.",
            color: "purple"
        }
    ];

    const offices = [
        {
            city: "United States",
            location: "Silicon Valley, California",
            address: "123 Innovation Drive, Palo Alto, CA 94301",
            type: "Global Headquarters",
            established: "2020",
            team: "85+ Engineers & Data Scientists",
            focus: "AI Research, Product Development, Global Operations",
            contact: {
                email: "us@neuzenai.com",
                phone: "+1 (555) 123-4567"
            }
        },
        {
            city: "Hyderabad",
            location: "T-Hub, HITEC City",
            address: "T-Hub, Raidurg, Hyderabad, Telangana 500081, India",
            type: "Innovation Hub",
            established: "2021",
            team: "60+ AI Specialists & Engineers",
            focus: "AI Development, Client Solutions, Regional Operations",
            contact: {
                email: "india@neuzenai.com",
                phone: "+91 40 1234 5678"
            }
        }
    ];

    return (
        <div className="about-page pt-24">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container mx-auto px-6 text-center">
                    <div className="about-hero-content fade-in">
                        <div className="about-badge">
                            ABOUT NEUZENAI
                        </div>
                        <h1 className="about-title">
                            Building the Future of <span className="about-title-highlight">Artificial Intelligence</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                            We are a team of visionaries, engineers, and data scientists dedicated to democratizing AI for businesses worldwide, 
                            making advanced technology accessible, ethical, and impactful across every industry.
                        </p>
                        <Link to="/careers" className="btn btn-primary px-8 py-4 text-lg">
                            Join Our Team
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="stats-section py-20">
                <div className="container mx-auto px-6">
                    <div className="stats-grid">
                        {[
                            { label: "Founded", value: "2020", desc: "Years of Innovation" },
                            { label: "Global Team", value: "145+", desc: "AI Experts" },
                            { label: "Global Offices", value: "2", desc: "Continents" },
                            { label: "AI Solutions", value: "500+", desc: "Deployed Successfully" }
                        ].map((stat, index) => (
                            <div key={index} className="stat-item slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                                <div className="stat-desc">{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Story */}
            <section className="mission-section">
                <div className="container mx-auto px-6">
                    <div className="mission-content">
                        <div className="mission-text">
                            <h2>Our Mission</h2>
                            <p className="mission-description">
                                To bridge the gap between complex AI technology and practical business applications. We believe that AI should be 
                                accessible, ethical, and transformative for every organization, regardless of size or industry.
                            </p>
                            <div className="mission-points">
                                <div className="mission-point">
                                    <div className="mission-icon orange">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <div className="mission-point-content">
                                        <h3>Innovation at Scale</h3>
                                        <p>Constantly pushing the boundaries of what's possible with neural networks, machine learning, and emerging AI technologies.</p>
                                    </div>
                                </div>
                                <div className="mission-point">
                                    <div className="mission-icon green">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div className="mission-point-content">
                                        <h3>Partnership Focused</h3>
                                        <p>Your success is our success. We build long-term partnerships, providing ongoing support and continuous innovation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mission-visual">
                            <div className="mission-visual-content">
                                <div className="mission-visual-icon">
                                    <Brain className="w-12 h-12 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">AI for Everyone</h3>
                                <p className="text-gray-600 text-lg">Making advanced AI accessible to all businesses, from startups to enterprises</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="values-section">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 text-black">Our Core Values</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            The principles that guide everything we do, from product development to client relationships, 
                            ensuring we deliver exceptional value while maintaining the highest ethical standards.
                        </p>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className={`value-card ${value.color} fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="value-icon">
                                    {value.icon}
                                </div>
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Offices */}
            <section className="offices-section">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 text-black">Our Global Presence</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            With strategic offices in the United States and India, we combine global expertise with local insights 
                            to deliver world-class AI solutions across diverse markets and time zones.
                        </p>
                    </div>
                    <div className="offices-grid">
                        {offices.map((office, index) => (
                            <div key={index} className="office-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="office-header">
                                    <div className="office-icon">
                                        <Building className="w-8 h-8" />
                                    </div>
                                    <div className="office-info">
                                        <h3>{office.city}</h3>
                                        <div className="office-type">{office.type}</div>
                                    </div>
                                </div>
                                
                                <div className="office-details">
                                    <div className="office-detail">
                                        <MapPin className="w-5 h-5 office-detail-icon" />
                                        <div>
                                            <div className="font-semibold text-black">{office.location}</div>
                                            <div className="text-sm text-gray-600">{office.address}</div>
                                        </div>
                                    </div>
                                    
                                    <div className="office-detail">
                                        <Calendar className="w-5 h-5 office-detail-icon" />
                                        <div>
                                            <div className="font-semibold text-black">Established {office.established}</div>
                                            <div className="text-sm text-gray-600">{office.team}</div>
                                        </div>
                                    </div>
                                    
                                    <div className="office-detail">
                                        <CheckCircle className="w-5 h-5 office-detail-icon" />
                                        <div>
                                            <div className="font-semibold text-black">Focus Areas</div>
                                            <div className="text-sm text-gray-600">{office.focus}</div>
                                        </div>
                                    </div>
                                    
                                    <div className="office-detail">
                                        <Mail className="w-5 h-5 office-detail-icon" />
                                        <div>
                                            <div className="font-semibold text-black">Contact</div>
                                            <div className="text-sm text-gray-600">
                                                <div>{office.contact.email}</div>
                                                <div>{office.contact.phone}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container mx-auto px-6 text-center">
                    <div className="cta-content">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Shape the Future of AI?
                        </h2>
                        <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Join our team of innovators or partner with us to transform your business with cutting-edge AI solutions. 
                            Together, we can build the future of artificial intelligence.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link to="/careers" className="btn bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                                View Open Positions
                            </Link>
                            <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold">
                                Partner With Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;