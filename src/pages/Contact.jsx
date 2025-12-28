import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, Building, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                message: ''
            });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            details: "hello@neuzenai.com",
            description: "Send us an email anytime"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            details: "+1 (555) 123-4567",
            description: "Mon-Fri from 8am to 5pm"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Us",
            details: "123 AI Innovation Drive, Tech City, TC 12345",
            description: "Come say hello at our office"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Working Hours",
            details: "Monday - Friday: 8:00 AM - 6:00 PM",
            description: "Weekend support available"
        }
    ];

    const services = [
        "Advanced Analytics & BI",
        "Custom AI & ML Solutions", 
        "AI Strategy & Consulting",
        "Process Automation",
        "Other"
    ];

    return (
        <div className="contact-page pt-24">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container mx-auto px-6 text-center">
                    <div className="contact-hero-content fade-in">
                        <div className="contact-badge">
                            GET IN TOUCH
                        </div>
                        <h1 className="contact-title">
                            Let's Build the Future with <span className="contact-title-highlight">AI Together</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                            Ready to transform your business with cutting-edge AI solutions? 
                            Our team of experts is here to help you navigate your AI journey and unlock unprecedented growth opportunities.
                        </p>
                        
                        {/* Quick Stats */}
                        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-500 mb-2">24h</div>
                                <div className="text-gray-600">Response Time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-500 mb-2">500+</div>
                                <div className="text-gray-600">Projects Delivered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
                                <div className="text-gray-600">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div className="contact-form-container fade-in">
                            <h2 className="text-3xl font-bold mb-6 text-black">Send Us a Message</h2>
                            <p className="text-gray-600 mb-8 text-lg">
                                Fill out the form below and we'll get back to you within 24 hours with a personalized response.
                            </p>

                            {isSubmitted ? (
                                <div className="success-message">
                                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                                    <p className="text-gray-600">Thank you for reaching out. We'll be in touch soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name" className="form-label">
                                                <User className="w-4 h-4" />
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="form-input"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">
                                                <Mail className="w-4 h-4" />
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="form-input"
                                                placeholder="your.email@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="company" className="form-label">
                                                <Building className="w-4 h-4" />
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="form-input"
                                                placeholder="Your company name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone" className="form-label">
                                                <Phone className="w-4 h-4" />
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="form-input"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="service" className="form-label">
                                            Service Interest
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="form-select"
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label">
                                            <MessageSquare className="w-4 h-4" />
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="form-textarea"
                                            placeholder="Tell us about your project and how we can help..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="submit-button">
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Information */}
                        <div className="contact-info-container fade-in">
                            <div className="text-center">
                                <h2 className="text-5xl font-bold mb-6">Get in Touch</h2>
                                <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                                    We're here to help you succeed. Reach out through any of these channels and let's start building something amazing together.
                                </p>
                            </div>

                            <div className="contact-info-grid">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="contact-info-card fade-in-stagger">
                                        <div className="contact-info-icon">
                                            {info.icon}
                                        </div>
                                        <div className="contact-info-content">
                                            <h3 className="contact-info-title">{info.title}</h3>
                                            <p className="contact-info-details">{info.details}</p>
                                            <p className="contact-info-description">{info.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Response Promise */}
                            <div className="response-promise fade-in">
                                <div className="response-promise-icon">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-2">Quick Response Guarantee</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We respond to all inquiries within 24 hours. For urgent matters, 
                                        call us directly for immediate assistance. Our team is committed to providing 
                                        exceptional support throughout your AI transformation journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-24">
                <div className="container mx-auto px-6 text-center">
                    <div className="cta-content">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Start Your AI Journey?
                        </h2>
                        <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Join hundreds of companies that have transformed their operations with our AI solutions. 
                            Let's discuss how we can help you achieve your goals.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <a href="tel:+15551234567" className="btn bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                                Call Now: +1 (555) 123-4567
                            </a>
                            <a href="mailto:hello@neuzenai.com" className="btn border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold">
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;