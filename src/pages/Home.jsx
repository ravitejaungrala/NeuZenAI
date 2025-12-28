import { ArrowRight, Brain, Database, Shield, Cloud, Zap, Code, BarChart, Users, Star, CheckCircle, Heart, Building2, Factory, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const clients = [
        { name: "TechCorp", logo: "TC" },
        { name: "InnovateLabs", logo: "IL" },
        { name: "DataFlow Inc", logo: "DF" },
        { name: "SmartSystems", logo: "SS" },
        { name: "FutureTech", logo: "FT" },
        { name: "CloudVision", logo: "CV" },
        { name: "AI Dynamics", logo: "AD" },
        { name: "NextGen Solutions", logo: "NG" },
        { name: "Digital Minds", logo: "DM" },
        { name: "Quantum Labs", logo: "QL" },
        { name: "Neural Networks Inc", logo: "NN" },
        { name: "Cyber Intelligence", logo: "CI" },
        { name: "Data Insights Co", logo: "DI" },
        { name: "Machine Learning Pro", logo: "ML" },
        { name: "Analytics Plus", logo: "AP" },
        { name: "Smart Analytics", logo: "SA" }
    ];

    const technologies = [
        { name: "TensorFlow", icon: <Brain className="w-5 h-5" />, category: "ML" },
        { name: "PyTorch", icon: <Brain className="w-5 h-5" />, category: "ML" },
        { name: "Scikit-learn", icon: <BarChart className="w-5 h-5" />, category: "ML" },
        { name: "Keras", icon: <Brain className="w-5 h-5" />, category: "ML" },
        { name: "XGBoost", icon: <BarChart className="w-5 h-5" />, category: "ML" },
        { name: "OpenCV", icon: <Brain className="w-5 h-5" />, category: "ML" },
        { name: "AWS", icon: <Cloud className="w-5 h-5" />, category: "Cloud" },
        { name: "Google Cloud", icon: <Cloud className="w-5 h-5" />, category: "Cloud" },
        { name: "Microsoft Azure", icon: <Cloud className="w-5 h-5" />, category: "Cloud" },
        { name: "Docker", icon: <Shield className="w-5 h-5" />, category: "DevOps" },
        { name: "Kubernetes", icon: <Shield className="w-5 h-5" />, category: "DevOps" },
        { name: "Terraform", icon: <Shield className="w-5 h-5" />, category: "DevOps" },
        { name: "Python", icon: <Code className="w-5 h-5" />, category: "Programming" },
        { name: "R", icon: <Code className="w-5 h-5" />, category: "Programming" },
        { name: "JavaScript", icon: <Code className="w-5 h-5" />, category: "Programming" },
        { name: "Java", icon: <Code className="w-5 h-5" />, category: "Programming" },
        { name: "Scala", icon: <Code className="w-5 h-5" />, category: "Programming" },
        { name: "Go", icon: <Code className="w-5 h-5" />, category: "Programming" },
        { name: "Apache Spark", icon: <Database className="w-5 h-5" />, category: "Data" },
        { name: "Hadoop", icon: <Database className="w-5 h-5" />, category: "Data" },
        { name: "Elasticsearch", icon: <Database className="w-5 h-5" />, category: "Data" },
        { name: "Tableau", icon: <BarChart className="w-5 h-5" />, category: "Analytics" },
        { name: "Power BI", icon: <BarChart className="w-5 h-5" />, category: "Analytics" },
        { name: "Databricks", icon: <Database className="w-5 h-5" />, category: "Data" },
        { name: "PostgreSQL", icon: <Database className="w-5 h-5" />, category: "Database" },
        { name: "MongoDB", icon: <Database className="w-5 h-5" />, category: "Database" },
        { name: "Redis", icon: <Database className="w-5 h-5" />, category: "Database" },
        { name: "Cassandra", icon: <Database className="w-5 h-5" />, category: "Database" },
        { name: "Neo4j", icon: <Database className="w-5 h-5" />, category: "Database" },
        { name: "ClickHouse", icon: <Database className="w-5 h-5" />, category: "Database" },
        { name: "Jenkins", icon: <Shield className="w-5 h-5" />, category: "DevOps" },
        { name: "GitLab CI", icon: <Shield className="w-5 h-5" />, category: "DevOps" },
        { name: "Vault", icon: <Shield className="w-5 h-5" />, category: "Security" },
        { name: "Prometheus", icon: <BarChart className="w-5 h-5" />, category: "Monitoring" },
        { name: "Grafana", icon: <BarChart className="w-5 h-5" />, category: "Monitoring" },
        { name: "Ansible", icon: <Shield className="w-5 h-5" />, category: "DevOps" }
    ];

    const colorClasses = {
        blue: { bg: "bg-blue-50", text: "text-blue-500", border: "border-blue-200", gradient: "from-blue-400 to-blue-600", shadow: "shadow-blue-200" },
        green: { bg: "bg-green-50", text: "text-green-500", border: "border-green-200", gradient: "from-green-400 to-green-600", shadow: "shadow-green-200" },
        purple: { bg: "bg-purple-50", text: "text-purple-500", border: "border-purple-200", gradient: "from-purple-400 to-purple-600", shadow: "shadow-purple-200" },
        orange: { bg: "bg-orange-50", text: "text-orange-500", border: "border-orange-200", gradient: "from-orange-400 to-orange-600", shadow: "shadow-orange-200" },
        red: { bg: "bg-red-50", text: "text-red-500", border: "border-red-200", gradient: "from-red-400 to-red-600", shadow: "shadow-red-200" },
        indigo: { bg: "bg-indigo-50", text: "text-indigo-500", border: "border-indigo-200", gradient: "from-indigo-400 to-indigo-600", shadow: "shadow-indigo-200" }
    };

    return (
        <>
            {/* Hero Section - Centered Layout with Background Image and Gap */}
            <section 
                className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
                style={{
                    backgroundImage: 'url(/main.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Dark overlay for better text readability and navbar visibility */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6 text-white drop-shadow-lg">
                        Next-Generation <br />
                        <span className="text-orange-500">AI Solutions</span>
                    </h1>
                    <p className="text-xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg font-semibold">
                        Empowering businesses with cutting-edge AI product development and intelligent services that drive innovation and accelerate growth.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/services" className="btn btn-primary shadow-lg">
                            START YOUR AI JOURNEY
                        </Link>
                    </div>
                </div>
            </section>

            {/* What We Do Section - Horizontal Scrolling */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full font-semibold text-sm mb-6">
                            OUR EXPERTISE
                        </div>
                        <h2 className="text-4xl font-bold mb-4 text-orange-500">What We Do</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We deliver cutting-edge AI solutions that transform businesses and drive innovation across industries.</p>
                    </div>

                    {/* Horizontal Scrolling Layout */}
                    <div className="relative overflow-hidden">
                        <div className="scroll-fade-left scroll-fade-right">
                            <div className="flex animate-scroll">
                                {/* First set */}
                                {[
                                    { 
                                        icon: <BarChart className="w-12 h-12" />, 
                                        title: "Advanced Analytics", 
                                        desc: "Transform raw data into actionable insights with sophisticated statistical models and predictive analytics solutions.",
                                        features: ["Predictive Modeling", "Statistical Analysis", "Data Visualization", "Business Intelligence"]
                                    },
                                    { 
                                        icon: <Brain className="w-12 h-12" />, 
                                        title: "Custom AI Solutions", 
                                        desc: "Tailored artificial intelligence systems designed specifically for your business needs and industry requirements.",
                                        features: ["Custom ML Models", "Neural Networks", "Computer Vision", "NLP Solutions"]
                                    },
                                    { 
                                        icon: <Users className="w-12 h-12" />, 
                                        title: "AI Strategic Consulting", 
                                        desc: "Expert guidance on AI adoption, implementation strategies, and digital transformation roadmaps for your organization.",
                                        features: ["Strategy Development", "AI Roadmapping", "Technology Assessment", "Change Management"]
                                    },
                                    { 
                                        icon: <Zap className="w-12 h-12" />, 
                                        title: "Intelligent Automation", 
                                        desc: "Streamline operations with smart automation solutions that learn and adapt to optimize business processes.",
                                        features: ["Process Automation", "RPA Implementation", "Workflow Optimization", "Smart Scheduling"]
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex-shrink-0 mx-4 w-80">
                                        <div className="relative p-6 bg-white border-2 border-gray-200 hover:shadow-xl transition-all duration-500 hover:border-orange-300 hover:-translate-y-2 rounded-2xl h-full group">
                                            {/* Icon */}
                                            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-600 mb-4 group-hover:scale-105 transition-all duration-300 group-hover:bg-orange-50 group-hover:text-orange-500">
                                                {item.icon}
                                            </div>
                                            
                                            <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">{item.title}</h3>
                                            <p className="text-gray-600 mb-4 leading-relaxed text-sm group-hover:text-gray-700">{item.desc}</p>
                                            
                                            {/* Features */}
                                            <ul className="space-y-2 mb-4">
                                                {item.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-orange-400 transition-colors duration-300"></div>
                                                        <span className="font-medium">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            
                                            {/* CTA Button */}
                                            <Link to="/services" className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:gap-4 transition-all duration-300 hover:underline text-sm group-hover:text-orange-600">
                                                Learn More 
                                                <ArrowRight className="w-4 h-4 hover:translate-x-1 transition-transform duration-300" />
                                            </Link>
                                        </div>
                                    </div>
                                )).concat(
                                    // Duplicate set for seamless loop
                                    [
                                        { 
                                            icon: <BarChart className="w-12 h-12" />, 
                                            title: "Advanced Analytics", 
                                            desc: "Transform raw data into actionable insights with sophisticated statistical models and predictive analytics solutions.",
                                            features: ["Predictive Modeling", "Statistical Analysis", "Data Visualization", "Business Intelligence"]
                                        },
                                        { 
                                            icon: <Brain className="w-12 h-12" />, 
                                            title: "Custom AI Solutions", 
                                            desc: "Tailored artificial intelligence systems designed specifically for your business needs and industry requirements.",
                                            features: ["Custom ML Models", "Neural Networks", "Computer Vision", "NLP Solutions"]
                                        },
                                        { 
                                            icon: <Users className="w-12 h-12" />, 
                                            title: "AI Strategic Consulting", 
                                            desc: "Expert guidance on AI adoption, implementation strategies, and digital transformation roadmaps for your organization.",
                                            features: ["Strategy Development", "AI Roadmapping", "Technology Assessment", "Change Management"]
                                        },
                                        { 
                                            icon: <Zap className="w-12 h-12" />, 
                                            title: "Intelligent Automation", 
                                            desc: "Streamline operations with smart automation solutions that learn and adapt to optimize business processes.",
                                            features: ["Process Automation", "RPA Implementation", "Workflow Optimization", "Smart Scheduling"]
                                        }
                                    ].map((item, index) => (
                                        <div key={`duplicate-${index}`} className="flex-shrink-0 mx-4 w-80">
                                            <div className="relative p-6 bg-white border-2 border-gray-200 hover:shadow-xl transition-all duration-500 hover:border-orange-300 hover:-translate-y-2 rounded-2xl h-full group">
                                                {/* Icon */}
                                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-600 mb-4 group-hover:scale-105 transition-all duration-300 group-hover:bg-orange-50 group-hover:text-orange-500">
                                                    {item.icon}
                                                </div>
                                                
                                                <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">{item.title}</h3>
                                                <p className="text-gray-600 mb-4 leading-relaxed text-sm group-hover:text-gray-700">{item.desc}</p>
                                                
                                                {/* Features */}
                                                <ul className="space-y-2 mb-4">
                                                    {item.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-orange-400 transition-colors duration-300"></div>
                                                            <span className="font-medium">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                
                                                {/* CTA Button */}
                                                <Link to="/services" className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:gap-4 transition-all duration-300 hover:underline text-sm group-hover:text-orange-600">
                                                    Learn More 
                                                    <ArrowRight className="w-4 h-4 hover:translate-x-1 transition-transform duration-300" />
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Stack Section - Enhanced */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full font-semibold text-sm mb-6">
                            CUTTING-EDGE TECHNOLOGY
                        </div>
                        <h2 className="text-4xl font-bold mb-4 text-orange-500">Our Technology Stack</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We leverage the most advanced technologies and frameworks to deliver robust, scalable AI solutions.
                        </p>
                    </div>

                    {/* Technology Categories with Icons and Animations */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            {
                                category: "Machine Learning",
                                icon: <Brain className="w-8 h-8" />,
                                techs: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"],
                                color: "blue",
                                gradient: "from-blue-500 to-blue-600"
                            },
                            {
                                category: "Cloud & DevOps",
                                icon: <Cloud className="w-8 h-8" />,
                                techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
                                color: "green",
                                gradient: "from-green-500 to-green-600"
                            },
                            {
                                category: "Programming",
                                icon: <Code className="w-8 h-8" />,
                                techs: ["Python", "JavaScript", "Java", "R", "Scala"],
                                color: "purple",
                                gradient: "from-purple-500 to-purple-600"
                            },
                            {
                                category: "Data & Analytics",
                                icon: <Database className="w-8 h-8" />,
                                techs: ["Apache Spark", "Elasticsearch", "PostgreSQL", "MongoDB", "Tableau"],
                                color: "orange",
                                gradient: "from-orange-500 to-orange-600"
                            }
                        ].map((category, index) => (
                            <div key={index} className="group relative">
                                {/* Background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                                
                                {/* Main card */}
                                <div className="relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 bg-${category.color}-50 text-${category.color}-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        {category.icon}
                                    </div>
                                    
                                    {/* Category title */}
                                    <h3 className="text-lg font-bold mb-4 text-gray-900">{category.category}</h3>
                                    
                                    {/* Technology tags */}
                                    <div className="space-y-2">
                                        {category.techs.map((tech, techIndex) => (
                                            <div key={techIndex} className={`inline-block px-3 py-1 bg-${category.color}-50 text-${category.color}-600 rounded-full text-xs font-medium mr-2 mb-2 hover:bg-${category.color}-100 transition-colors duration-200`}>
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Scrolling Technology Showcase */}
                    <div className="relative overflow-hidden">
                        <div className="scroll-fade-left scroll-fade-right">
                            <div className="flex animate-scroll">
                                {/* First set */}
                                {technologies.map((tech, index) => (
                                    <div key={index} className="flex-shrink-0 mx-4">
                                        <div className="group flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 whitespace-nowrap">
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                                tech.category === 'ML' ? 'bg-blue-50 text-blue-500' :
                                                tech.category === 'Cloud' ? 'bg-green-50 text-green-500' :
                                                tech.category === 'Programming' ? 'bg-purple-50 text-purple-500' :
                                                tech.category === 'Data' ? 'bg-orange-50 text-orange-500' :
                                                tech.category === 'Analytics' ? 'bg-indigo-50 text-indigo-500' :
                                                tech.category === 'DevOps' ? 'bg-red-50 text-red-500' :
                                                tech.category === 'Database' ? 'bg-teal-50 text-teal-500' :
                                                tech.category === 'Security' ? 'bg-yellow-50 text-yellow-500' :
                                                'bg-gray-50 text-gray-500'
                                            } group-hover:scale-110 transition-transform duration-300`}>
                                                {tech.icon}
                                            </div>
                                            <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                                                {tech.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                {/* Duplicate set for seamless loop */}
                                {technologies.map((tech, index) => (
                                    <div key={`duplicate-${index}`} className="flex-shrink-0 mx-4">
                                        <div className="group flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 whitespace-nowrap">
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                                tech.category === 'ML' ? 'bg-blue-50 text-blue-500' :
                                                tech.category === 'Cloud' ? 'bg-green-50 text-green-500' :
                                                tech.category === 'Programming' ? 'bg-purple-50 text-purple-500' :
                                                tech.category === 'Data' ? 'bg-orange-50 text-orange-500' :
                                                tech.category === 'Analytics' ? 'bg-indigo-50 text-indigo-500' :
                                                tech.category === 'DevOps' ? 'bg-red-50 text-red-500' :
                                                tech.category === 'Database' ? 'bg-teal-50 text-teal-500' :
                                                tech.category === 'Security' ? 'bg-yellow-50 text-yellow-500' :
                                                'bg-gray-50 text-gray-500'
                                            } group-hover:scale-110 transition-transform duration-300`}>
                                                {tech.icon}
                                            </div>
                                            <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                                                {tech.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve - Enhanced Horizontal Scrolling */}
            <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
                {/* Enhanced Animated Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-orange-100 to-transparent rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-blue-100 to-transparent rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-100 to-purple-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block px-6 py-3 bg-green-500 text-white rounded-full font-semibold text-sm mb-6 shadow-lg animate-bounce">
                            🌍 DIVERSE EXPERTISE
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500 drop-shadow-lg">Industries We Serve</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                            Transforming businesses across diverse sectors with tailored AI solutions that drive innovation and accelerate growth.
                        </p>
                    </div>

                    {/* Enhanced Horizontal Scrolling Industries */}
                    <div className="relative overflow-hidden mb-16">
                        <div className="scroll-fade-left scroll-fade-right">
                            <div className="flex animate-scroll-reverse">
                                {/* First set */}
                                {[
                                    { 
                                        icon: <Users className="w-12 h-12" />, 
                                        name: "Media and Entertainment", 
                                        desc: "Content recommendation systems, audience analytics, and personalized streaming experiences that engage viewers", 
                                        stats: "10M+ Content Views",
                                        features: ["Content AI", "Audience Analytics", "Recommendation Engine", "Content Moderation"],
                                        bgPattern: "🎬",
                                        color: "blue"
                                    },
                                    { 
                                        icon: <Heart className="w-12 h-12" />, 
                                        name: "Health and Life Insurance", 
                                        desc: "Risk assessment, claims processing automation, and predictive health analytics for better coverage decisions", 
                                        stats: "500K+ Policies Processed",
                                        features: ["Risk Assessment", "Claims Automation", "Health Predictions", "Fraud Detection"],
                                        bgPattern: "🏥",
                                        color: "red"
                                    },
                                    { 
                                        icon: <Factory className="w-12 h-12" />, 
                                        name: "Transportation and Logistics", 
                                        desc: "Route optimization, fleet management, and supply chain intelligence for efficient operations", 
                                        stats: "1000+ Fleet Vehicles",
                                        features: ["Route Optimization", "Fleet Management", "Supply Chain AI", "Predictive Maintenance"],
                                        bgPattern: "🚛",
                                        color: "green"
                                    },
                                    { 
                                        icon: <ShoppingCart className="w-12 h-12" />, 
                                        name: "E-commerce and Retail", 
                                        desc: "Personalized shopping experiences, inventory optimization, and customer behavior analysis for increased sales", 
                                        stats: "2M+ Customers Served",
                                        features: ["Personalization", "Inventory AI", "Customer Analytics", "Price Optimization"],
                                        bgPattern: "🛒",
                                        color: "orange"
                                    }
                                ].map((industry, index) => {
                                    const colorConfig = colorClasses[industry.color] || colorClasses.blue;
                                    
                                    return (
                                        <div key={index} className="flex-shrink-0 mx-4 w-80">
                                            <div className="group relative overflow-hidden transform transition-all duration-500 hover:scale-105">
                                                {/* Enhanced Background Pattern */}
                                                <div className="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-30 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                                                    {industry.bgPattern}
                                                </div>
                                                
                                                {/* Enhanced Card with Gradient Border */}
                                                <div className="relative p-6 border-2 border-gray-200 rounded-2xl bg-white hover:shadow-2xl transition-all duration-500 hover:border-orange-300 hover:-translate-y-3 h-full group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50">
                                                    {/* Enhanced Icon with Glow Effect */}
                                                    <div className={`w-14 h-14 ${colorConfig.bg} rounded-xl flex items-center justify-center ${colorConfig.text} mb-4 group-hover:scale-110 transition-all duration-300 relative z-10 group-hover:shadow-lg`}>
                                                        {industry.icon}
                                                    </div>
                                                    
                                                    {/* Content */}
                                                    <h3 className="text-lg font-bold mb-3 text-gray-900 relative z-10 group-hover:text-orange-600 transition-colors duration-300">{industry.name}</h3>
                                                    <p className="text-gray-600 mb-3 leading-relaxed text-sm relative z-10 group-hover:text-gray-700">{industry.desc}</p>
                                                    
                                                    {/* Enhanced Stats Badge */}
                                                    <div className="inline-flex items-center px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-semibold mb-3 relative z-10 group-hover:bg-orange-50 group-hover:text-orange-600 transition-all duration-300">
                                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-orange-400"></div>
                                                        {industry.stats}
                                                    </div>
                                                    
                                                    {/* Enhanced Features List */}
                                                    <ul className="space-y-1 mb-3 relative z-10">
                                                        {industry.features.map((feature, idx) => (
                                                            <li key={idx} className="flex items-center gap-2 text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                                                <div className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-orange-400 transition-colors duration-300"></div>
                                                                <span className="font-medium">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    
                                                    {/* Enhanced CTA with Hover Effect */}
                                                    <Link to="/industries" className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:gap-4 transition-all duration-300 hover:underline text-sm relative z-10 group-hover:text-orange-600">
                                                        Explore Solutions
                                                        <ArrowRight className="w-3 h-3 hover:translate-x-1 transition-transform duration-300" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }).concat(
                                    // Duplicate set for seamless loop
                                    [
                                        { 
                                            icon: <Users className="w-12 h-12" />, 
                                            name: "Media and Entertainment", 
                                            desc: "Content recommendation systems, audience analytics, and personalized streaming experiences that engage viewers", 
                                            stats: "10M+ Content Views",
                                            features: ["Content AI", "Audience Analytics", "Recommendation Engine", "Content Moderation"],
                                            bgPattern: "🎬",
                                            color: "blue"
                                        },
                                        { 
                                            icon: <Heart className="w-12 h-12" />, 
                                            name: "Health and Life Insurance", 
                                            desc: "Risk assessment, claims processing automation, and predictive health analytics for better coverage decisions", 
                                            stats: "500K+ Policies Processed",
                                            features: ["Risk Assessment", "Claims Automation", "Health Predictions", "Fraud Detection"],
                                            bgPattern: "🏥",
                                            color: "red"
                                        },
                                        { 
                                            icon: <Factory className="w-12 h-12" />, 
                                            name: "Transportation and Logistics", 
                                            desc: "Route optimization, fleet management, and supply chain intelligence for efficient operations", 
                                            stats: "1000+ Fleet Vehicles",
                                            features: ["Route Optimization", "Fleet Management", "Supply Chain AI", "Predictive Maintenance"],
                                            bgPattern: "🚛",
                                            color: "green"
                                        },
                                        { 
                                            icon: <ShoppingCart className="w-12 h-12" />, 
                                            name: "E-commerce and Retail", 
                                            desc: "Personalized shopping experiences, inventory optimization, and customer behavior analysis for increased sales", 
                                            stats: "2M+ Customers Served",
                                            features: ["Personalization", "Inventory AI", "Customer Analytics", "Price Optimization"],
                                            bgPattern: "🛒",
                                            color: "orange"
                                        }
                                    ].map((industry, index) => {
                                        const colorConfig = colorClasses[industry.color] || colorClasses.blue;
                                        
                                        return (
                                            <div key={`duplicate-${index}`} className="flex-shrink-0 mx-4 w-80">
                                                <div className="group relative overflow-hidden transform transition-all duration-500 hover:scale-105">
                                                    {/* Enhanced Background Pattern */}
                                                    <div className="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-30 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                                                        {industry.bgPattern}
                                                    </div>
                                                    
                                                    {/* Enhanced Card with Gradient Border */}
                                                    <div className="relative p-6 border-2 border-gray-200 rounded-2xl bg-white hover:shadow-2xl transition-all duration-500 hover:border-orange-300 hover:-translate-y-3 h-full group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50">
                                                        {/* Enhanced Icon with Glow Effect */}
                                                        <div className={`w-14 h-14 ${colorConfig.bg} rounded-xl flex items-center justify-center ${colorConfig.text} mb-4 group-hover:scale-110 transition-all duration-300 relative z-10 group-hover:shadow-lg`}>
                                                            {industry.icon}
                                                        </div>
                                                        
                                                        {/* Content */}
                                                        <h3 className="text-lg font-bold mb-3 text-gray-900 relative z-10 group-hover:text-orange-600 transition-colors duration-300">{industry.name}</h3>
                                                        <p className="text-gray-600 mb-3 leading-relaxed text-sm relative z-10 group-hover:text-gray-700">{industry.desc}</p>
                                                        
                                                        {/* Enhanced Stats Badge */}
                                                        <div className="inline-flex items-center px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-semibold mb-3 relative z-10 group-hover:bg-orange-50 group-hover:text-orange-600 transition-all duration-300">
                                                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-orange-400"></div>
                                                            {industry.stats}
                                                        </div>
                                                        
                                                        {/* Enhanced Features List */}
                                                        <ul className="space-y-1 mb-3 relative z-10">
                                                            {industry.features.map((feature, idx) => (
                                                                <li key={idx} className="flex items-center gap-2 text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                                                    <div className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-orange-400 transition-colors duration-300"></div>
                                                                    <span className="font-medium">{feature}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        
                                                        {/* Enhanced CTA with Hover Effect */}
                                                        <Link to="/industries" className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:gap-4 transition-all duration-300 hover:underline text-sm relative z-10 group-hover:text-orange-600">
                                                            Explore Solutions
                                                            <ArrowRight className="w-3 h-3 hover:translate-x-1 transition-transform duration-300" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center">
                        <Link to="/industries" className="inline-flex items-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                            <span>Explore All Industries</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            

            {/* Success Stories Preview - Enhanced Scrolling */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full font-semibold text-sm mb-6">
                            PROVEN RESULTS
                        </div>
                        <h2 className="text-4xl font-bold mb-4 text-orange-500">Success Stories</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Real results from real clients who transformed their business with our AI solutions.
                        </p>
                    </div>

                    {/* Horizontal Scrolling Success Stories */}
                    <div className="relative overflow-hidden">
                        <div className="scroll-fade-left scroll-fade-right">
                            <div className="flex animate-scroll-reverse">
                                {/* First set */}
                                {[
                                    {
                                        title: "80% Faster Customer Service",
                                        company: "TechCorp",
                                        industry: "Technology",
                                        result: "Reduced response time from 24 hours to 4.8 hours with AI chatbot implementation",
                                        metric: "80%",
                                        color: "blue",
                                        icon: "⚡",
                                        details: "Implemented intelligent chatbot system with NLP capabilities"
                                    },
                                    {
                                        title: "30% Cost Reduction",
                                        company: "ManufacturePro",
                                        industry: "Manufacturing",
                                        result: "Predictive maintenance reduced equipment downtime significantly",
                                        metric: "30%",
                                        color: "green",
                                        icon: "🏭",
                                        details: "AI-powered predictive maintenance system deployment"
                                    },
                                    {
                                        title: "99.8% Fraud Detection",
                                        company: "SecureBank",
                                        industry: "Finance",
                                        result: "AI-powered fraud detection system with minimal false positives",
                                        metric: "99.8%",
                                        color: "orange",
                                        icon: "🛡️",
                                        details: "Advanced machine learning fraud detection algorithms"
                                    },
                                    {
                                        title: "45% Revenue Increase",
                                        company: "RetailMax",
                                        industry: "Retail",
                                        result: "Personalized recommendation engine boosted sales significantly",
                                        metric: "45%",
                                        color: "purple",
                                        icon: "📈",
                                        details: "AI-driven personalization and recommendation system"
                                    },
                                    {
                                        title: "60% Faster Diagnosis",
                                        company: "HealthCare Plus",
                                        industry: "Healthcare",
                                        result: "AI-assisted medical imaging reduced diagnosis time dramatically",
                                        metric: "60%",
                                        color: "red",
                                        icon: "🏥",
                                        details: "Computer vision for medical image analysis"
                                    },
                                    {
                                        title: "90% Accuracy Improvement",
                                        company: "EduTech Solutions",
                                        industry: "Education",
                                        result: "Adaptive learning platform improved student performance",
                                        metric: "90%",
                                        color: "indigo",
                                        icon: "🎓",
                                        details: "Personalized AI tutoring and assessment system"
                                    }
                                ].map((study, index) => {
                                    const colorConfig = colorClasses[study.color] || colorClasses.blue;
                                    
                                    return (
                                        <div key={index} className="flex-shrink-0 mx-4 w-80">
                                            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:-translate-y-2 h-full hover:border-orange-300">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="text-2xl">{study.icon}</div>
                                                    <div>
                                                        <div className={`w-2 h-2 rounded-full ${colorConfig.text.replace('text-', 'bg-')} mb-1`}></div>
                                                        <span className="text-xs text-gray-500 uppercase tracking-wider">{study.industry}</span>
                                                    </div>
                                                </div>
                                                
                                                <h3 className="text-lg font-bold mb-3 group-hover:text-orange-600 transition-colors">{study.title}</h3>
                                                <p className="text-gray-600 mb-3 leading-relaxed text-sm">{study.result}</p>
                                                <p className="text-xs text-gray-500 mb-4 italic">{study.details}</p>
                                                
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <div className={`text-3xl font-bold ${colorConfig.text} group-hover:scale-110 transition-transform duration-300`}>
                                                            {study.metric}
                                                        </div>
                                                        <div className="text-xs text-gray-500 font-medium">{study.company}</div>
                                                    </div>
                                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }).concat(
                                    // Duplicate set for seamless loop
                                    [
                                        {
                                            title: "80% Faster Customer Service",
                                            company: "TechCorp",
                                            industry: "Technology",
                                            result: "Reduced response time from 24 hours to 4.8 hours with AI chatbot implementation",
                                            metric: "80%",
                                            color: "blue",
                                            icon: "⚡",
                                            details: "Implemented intelligent chatbot system with NLP capabilities"
                                        },
                                        {
                                            title: "30% Cost Reduction",
                                            company: "ManufacturePro",
                                            industry: "Manufacturing",
                                            result: "Predictive maintenance reduced equipment downtime significantly",
                                            metric: "30%",
                                            color: "green",
                                            icon: "🏭",
                                            details: "AI-powered predictive maintenance system deployment"
                                        },
                                        {
                                            title: "99.8% Fraud Detection",
                                            company: "SecureBank",
                                            industry: "Finance",
                                            result: "AI-powered fraud detection system with minimal false positives",
                                            metric: "99.8%",
                                            color: "orange",
                                            icon: "🛡️",
                                            details: "Advanced machine learning fraud detection algorithms"
                                        },
                                        {
                                            title: "45% Revenue Increase",
                                            company: "RetailMax",
                                            industry: "Retail",
                                            result: "Personalized recommendation engine boosted sales significantly",
                                            metric: "45%",
                                            color: "purple",
                                            icon: "📈",
                                            details: "AI-driven personalization and recommendation system"
                                        },
                                        {
                                            title: "60% Faster Diagnosis",
                                            company: "HealthCare Plus",
                                            industry: "Healthcare",
                                            result: "AI-assisted medical imaging reduced diagnosis time dramatically",
                                            metric: "60%",
                                            color: "red",
                                            icon: "🏥",
                                            details: "Computer vision for medical image analysis"
                                        },
                                        {
                                            title: "90% Accuracy Improvement",
                                            company: "EduTech Solutions",
                                            industry: "Education",
                                            result: "Adaptive learning platform improved student performance",
                                            metric: "90%",
                                            color: "indigo",
                                            icon: "🎓",
                                            details: "Personalized AI tutoring and assessment system"
                                        }
                                    ].map((study, index) => {
                                        const colorConfig = colorClasses[study.color] || colorClasses.blue;
                                        
                                        return (
                                            <div key={`duplicate-${index}`} className="flex-shrink-0 mx-4 w-80">
                                                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:-translate-y-2 h-full hover:border-orange-300">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div className="text-2xl">{study.icon}</div>
                                                        <div>
                                                            <div className={`w-2 h-2 rounded-full ${colorConfig.text.replace('text-', 'bg-')} mb-1`}></div>
                                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{study.industry}</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <h3 className="text-lg font-bold mb-3 group-hover:text-orange-600 transition-colors">{study.title}</h3>
                                                    <p className="text-gray-600 mb-3 leading-relaxed text-sm">{study.result}</p>
                                                    <p className="text-xs text-gray-500 mb-4 italic">{study.details}</p>
                                                    
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <div className={`text-3xl font-bold ${colorConfig.text} group-hover:scale-110 transition-transform duration-300`}>
                                                                {study.metric}
                                                            </div>
                                                            <div className="text-xs text-gray-500 font-medium">{study.company}</div>
                                                        </div>
                                                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <Link to="/case-studies" className="btn btn-primary">
                            View All Success Stories
                        </Link>
                    </div>
                </div>
            </section>

            {/* Projects Done & Stats */}
            <section className="py-24 bg-gradient-to-r from-orange-500 to-amber-600">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
                        <p className="text-orange-100 max-w-2xl mx-auto">
                            Delivering measurable results across hundreds of projects worldwide.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { metric: "500+", label: "Projects Completed", icon: <CheckCircle className="w-8 h-8" /> },
                            { metric: "200+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
                            { metric: "50+", label: "Industries Served", icon: <Building2 className="w-8 h-8" /> },
                            { metric: "98%", label: "Success Rate", icon: <Star className="w-8 h-8" /> }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                                <div className="text-orange-100">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-orange-500">Our Values</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do, from innovation to client relationships.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Brain className="w-8 h-8" />,
                                title: "Innovation First",
                                desc: "We constantly push the boundaries of what's possible with AI technology.",
                                color: "blue"
                            },
                            {
                                icon: <Heart className="w-8 h-8" />,
                                title: "Human-Centered",
                                desc: "Technology should enhance human capabilities, not replace them.",
                                color: "red"
                            },
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: "Ethical AI",
                                desc: "We're committed to developing AI that is transparent, fair, and accountable.",
                                color: "green"
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "Excellence",
                                desc: "We maintain the highest standards in everything we do.",
                                color: "orange"
                            }
                        ].map((value, index) => {
                            const colorConfig = colorClasses[value.color] || colorClasses.blue;
                            return (
                                <div key={index} className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                                    <div className={`w-16 h-16 ${colorConfig.bg} rounded-full flex items-center justify-center ${colorConfig.text} mx-auto mb-6`}>
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                                    <p className="text-gray-600">{value.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Trusted Clients Section - At bottom */}
            <section className="py-16 bg-gray-50 border-t border-gray-100 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="text-gray-500 text-sm uppercase tracking-wider mb-8">Trusted by Leading Organizations</p>
                        <div className="relative scroll-fade-left scroll-fade-right">
                            <div className="flex animate-scroll">
                                {/* First set of logos */}
                                {clients.map((client, index) => (
                                    <div key={index} className="flex-shrink-0 mx-8">
                                        <div className="w-28 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:border-orange-300 hover:shadow-md transition-all duration-300 cursor-pointer group">
                                            <div className="text-center">
                                                <div className="text-xl font-bold text-gray-400 group-hover:text-orange-500 transition-colors">
                                                    {client.logo}
                                                </div>
                                                <div className="text-xs text-gray-300 group-hover:text-orange-400 transition-colors mt-1">
                                                    {client.name.split(' ')[0]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* Duplicate set for seamless loop */}
                                {clients.map((client, index) => (
                                    <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8">
                                        <div className="w-28 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:border-orange-300 hover:shadow-md transition-all duration-300 cursor-pointer group">
                                            <div className="text-center">
                                                <div className="text-xl font-bold text-gray-400 group-hover:text-orange-500 transition-colors">
                                                    {client.logo}
                                                </div>
                                                <div className="text-xs text-gray-300 group-hover:text-orange-400 transition-colors mt-1">
                                                    {client.name.split(' ')[0]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white border-t border-gray-200">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-orange-500 mb-6">
                        Ready to Transform Your Business with AI?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join hundreds of organizations already using our AI solutions to drive innovation and growth.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/contact" className="btn btn-primary">
                            Get Started Today
                        </Link>
                        <Link to="/services" className="btn border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                            Explore Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;