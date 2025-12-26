import React from 'react';
import { Brain, Database, Server, Code, BarChart, Shield, Cloud, Cpu, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            icon: <Brain className="w-8 h-8" />,
            title: "AI & Machine Learning",
            description: "Develop custom algorithms that learn from your data to predict outcomes and automate complex decisions.",
            features: ["Custom Neural Networks", "Predictive Analytics", "Computer Vision", "Natural Language Processing"],
            color: "orange"
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "Big Data Analytics",
            description: "Process massive datasets to uncover hidden patterns, market trends, and customer preferences.",
            features: ["Data Mining", "Statistical Analysis", "Business Intelligence", "Data Visualization"],
            color: "blue"
        },
        {
            icon: <Server className="w-8 h-8" />,
            title: "Cloud Infrastructure",
            description: "Scalable cloud architecture design and migration services to support your AI initiatives.",
            features: ["AWS Integration", "Azure Solutions", "Google Cloud", "Hybrid Deployments"],
            color: "green"
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: "Custom AI Development",
            description: "Tailor-made software solutions integrating the latest in generative AI and natural language processing.",
            features: ["Custom Applications", "API Development", "Integration Services", "Maintenance & Support"],
            color: "purple"
        },
        {
            icon: <BarChart className="w-8 h-8" />,
            title: "Business Intelligence",
            description: "Interactive dashboards and real-time reporting to keep stakeholders informed.",
            features: ["Real-time Dashboards", "KPI Tracking", "Performance Analytics", "Custom Reports"],
            color: "indigo"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "AI Security",
            description: "Robust security protocols to protect your models and sensitive training data.",
            features: ["Model Security", "Data Protection", "Compliance", "Risk Assessment"],
            color: "red"
        }
    ];

    const colorClasses = {
        orange: { bg: "bg-orange-50", text: "text-orange-500", hover: "hover:bg-orange-500" },
        blue: { bg: "bg-blue-50", text: "text-blue-500", hover: "hover:bg-blue-500" },
        green: { bg: "bg-green-50", text: "text-green-500", hover: "hover:bg-green-500" },
        purple: { bg: "bg-purple-50", text: "text-purple-500", hover: "hover:bg-purple-500" },
        indigo: { bg: "bg-indigo-50", text: "text-indigo-500", hover: "hover:bg-indigo-500" },
        red: { bg: "bg-red-50", text: "text-red-500", hover: "hover:bg-red-500" }
    };

    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full font-semibold text-sm mb-6">
                        OUR SERVICES
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Comprehensive <span className="text-orange-500">AI Solutions</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        From strategy to implementation, we provide end-to-end AI services that transform your business operations and drive innovation.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/contact" className="btn btn-primary">
                            Get Started Today
                        </Link>
                        <Link to="/case-studies" className="btn bg-white text-gray-800 shadow-lg hover:bg-gray-50">
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const colors = colorClasses[service.color];
                            return (
                                <div key={index} className="group p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300">
                                    <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center ${colors.text} mb-6 group-hover:${colors.hover} group-hover:text-white transition-all duration-300`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className={`flex items-center gap-2 ${colors.text} font-semibold group-hover:gap-3 transition-all`}>
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Process</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We follow a proven methodology to ensure successful AI implementation and maximum ROI.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "Understanding your business needs and challenges" },
                            { step: "02", title: "Strategy", desc: "Developing a comprehensive AI roadmap" },
                            { step: "03", title: "Implementation", desc: "Building and deploying AI solutions" },
                            { step: "04", title: "Optimization", desc: "Continuous monitoring and improvement" }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-orange-500 to-amber-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Let's discuss how our AI solutions can drive innovation and growth for your organization.
                    </p>
                    <Link to="/contact" className="btn bg-white text-orange-600 hover:bg-gray-100">
                        Schedule a Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
