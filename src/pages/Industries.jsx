import { Users, Heart, Building2, Factory, ShoppingCart, Shield, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Industries = () => {
    const industries = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "Media and Entertainment",
            description: "Content recommendation systems, audience analytics, and personalized streaming experiences that engage viewers.",
            features: ["Content AI", "Audience Analytics", "Recommendation Engine", "Content Moderation"],
            stats: { metric: "10M+", label: "Content Views" },
            color: "blue"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Health and Life Insurance",
            description: "Risk assessment, claims processing automation, and predictive health analytics for better coverage decisions.",
            features: ["Risk Assessment", "Claims Automation", "Health Predictions", "Fraud Detection"],
            stats: { metric: "500K+", label: "Policies Processed" },
            color: "red"
        },
        {
            icon: <Factory className="w-8 h-8" />,
            title: "Transportation and Logistics",
            description: "Route optimization, fleet management, and supply chain intelligence for efficient operations.",
            features: ["Route Optimization", "Fleet Management", "Supply Chain AI", "Predictive Maintenance"],
            stats: { metric: "1000+", label: "Fleet Vehicles" },
            color: "green"
        },
        {
            icon: <ShoppingCart className="w-8 h-8" />,
            title: "E-commerce and Retail",
            description: "Personalized shopping experiences, inventory optimization, and customer behavior analysis for increased sales.",
            features: ["Personalization", "Inventory AI", "Customer Analytics", "Price Optimization"],
            stats: { metric: "2M+", label: "Customers Served" },
            color: "orange"
        }
    ];

    const colorClasses = {
        blue: { bg: "bg-blue-50", text: "text-blue-500", gradient: "from-blue-500 to-blue-600" },
        red: { bg: "bg-red-50", text: "text-red-500", gradient: "from-red-500 to-red-600" },
        green: { bg: "bg-green-50", text: "text-green-500", gradient: "from-green-500 to-green-600" },
        orange: { bg: "bg-orange-50", text: "text-orange-500", gradient: "from-orange-500 to-orange-600" },
        purple: { bg: "bg-purple-50", text: "text-purple-500", gradient: "from-purple-500 to-purple-600" },
        indigo: { bg: "bg-indigo-50", text: "text-indigo-500", gradient: "from-indigo-500 to-indigo-600" }
    };

    return (
        <div className="pt-24 bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-semibold text-sm mb-6">
                        INDUSTRIES WE SERVE
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
                        AI Solutions Across <span className="text-orange-500">Every Industry</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-center">
                        From healthcare to education, we deliver industry-specific AI solutions that address unique challenges and drive measurable results.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/contact" className="btn btn-primary">
                            Discuss Your Industry
                        </Link>
                        <Link to="/case-studies" className="btn bg-white text-gray-800 shadow-lg hover:bg-gray-50">
                            View Success Stories
                        </Link>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {industries.map((industry, index) => {
                            const colors = colorClasses[industry.color];
                            return (
                                <div key={index} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                                    <div className={`h-2 bg-gradient-to-r ${colors.gradient}`}></div>
                                    <div className="p-8">
                                        <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center ${colors.text} mb-6`}>
                                            {industry.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                                        <p className="text-gray-600 mb-6">{industry.description}</p>
                                        
                                        <div className="mb-6">
                                            <h4 className="font-semibold mb-3">Key Solutions:</h4>
                                            <ul className="space-y-2">
                                                {industry.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                        <div className={`w-2 h-2 rounded-full ${colors.text.replace('text-', 'bg-')}`}></div>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className={`${colors.bg} rounded-lg p-4 mb-6`}>
                                            <div className={`text-2xl font-bold ${colors.text}`}>{industry.stats.metric}</div>
                                            <div className="text-sm text-gray-600">{industry.stats.label}</div>
                                        </div>

                                        <Link to="/contact" className={`flex items-center gap-2 ${colors.text} font-semibold group-hover:gap-3 transition-all`}>
                                            Learn More <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Success Metrics */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Proven Results Across Industries</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our AI solutions deliver measurable impact across diverse sectors.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { metric: "500+", label: "Projects Delivered", icon: <TrendingUp className="w-6 h-6" /> },
                            { metric: "50+", label: "Industries Served", icon: <Building2 className="w-6 h-6" /> },
                            { metric: "98%", label: "Client Satisfaction", icon: <Heart className="w-6 h-6" /> },
                            { metric: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
                        ].map((item, index) => (
                            <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-sm">
                                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-4">
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
            <section className="py-24 bg-gradient-to-r from-blue-500 to-purple-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Don't See Your Industry?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        We work with businesses across all sectors. Let's discuss how AI can transform your specific industry.
                    </p>
                    <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
                        Start the Conversation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Industries;