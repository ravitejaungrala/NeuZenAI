import { ArrowRight, Brain, Database, Shield, Cloud, Zap, Code, BarChart, Users, Star, CheckCircle, Heart, Building2, Factory, ShoppingCart, Sparkles, TrendingUp, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

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
            {/* Hero Section */}
            <section className="home-hero">
                <div className="home-hero-content fade-in">
                    <h1 className="home-hero-title">
                        Next-Generation <br />
                        <span style={{ color: '#f97316' }}>AI Solutions</span>
                    </h1>
                    <p className="home-hero-subtitle">
                        Empowering businesses with cutting-edge AI product development and intelligent services that drive innovation and accelerate growth.
                    </p>
                    <Link to="/services" className="home-hero-cta">
                        START YOUR AI JOURNEY
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="homepage-story-section">
                <div className="homepage-main-container">
                    <div className="homepage-story-content fade-in">
                        <div className="homepage-story-text">
                            <div className="homepage-badge-green">
                                <Sparkles className="w-4 h-4" />
                                OUR STORY
                            </div>
                            <h2 className="homepage-story-title">Pioneering the Future of AI Innovation</h2>
                            <p className="homepage-story-description">
                                Founded by visionary technologists and AI researchers, NeuZenAI emerged from a simple yet powerful belief: 
                                artificial intelligence should amplify human potential, not replace it.
                            </p>
                            <p className="homepage-story-description">
                                Today, with offices spanning from Silicon Valley to Hyderabad's T-Hub, we've grown into a trusted partner 
                                for Fortune 500 companies and innovative startups alike.
                            </p>
                            
                            <div className="homepage-story-highlights">
                                <div className="homepage-highlight-item">
                                    <div className="homepage-highlight-icon">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <div className="homepage-highlight-content">
                                        <h4 className="homepage-highlight-title">Industry Recognition</h4>
                                        <p className="homepage-highlight-desc">Award-winning AI solutions recognized globally</p>
                                    </div>
                                </div>
                                <div className="homepage-highlight-item">
                                    <div className="homepage-highlight-icon">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <div className="homepage-highlight-content">
                                        <h4 className="homepage-highlight-title">Global Impact</h4>
                                        <p className="homepage-highlight-desc">Serving clients across 25+ countries</p>
                                    </div>
                                </div>
                            </div>
                            
                            <Link to="/about" className="homepage-story-cta">
                                Learn More About Us
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                        
                        {/* Right Side - Story Image */}
                        <div className="homepage-story-image">
                            <img 
                                src="/story.png" 
                                alt="NeuZenAI Story - AI Innovation Journey" 
                                className="homepage-story-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section - Enhanced */}
            <section className="homepage-services-section">
                <div className="homepage-main-container">
                    <div className="homepage-section-header fade-in">
                        <div className="homepage-badge-green">
                            <Sparkles className="w-4 h-4" />
                            OUR EXPERTISE
                        </div>
                        <h2 className="homepage-main-title">What We Do</h2>
                        <p className="homepage-main-description">
                            We deliver cutting-edge AI solutions that transform businesses and drive innovation across industries with measurable results.
                        </p>
                    </div>

                    {/* Enhanced Service Cards Grid */}
                    <div className="homepage-services-grid fade-in">
                        {[
                            { 
                                icon: <BarChart className="w-8 h-8" />, 
                                title: "Advanced Analytics", 
                                desc: "Transform raw data into actionable insights with sophisticated statistical models and predictive analytics solutions that drive business growth.",
                                features: ["Predictive Modeling", "Statistical Analysis", "Data Visualization", "Business Intelligence"],
                                color: "blue",
                                gradient: "from-blue-500 to-blue-600"
                            },
                            { 
                                icon: <Brain className="w-8 h-8" />, 
                                title: "Custom AI Solutions", 
                                desc: "Tailored artificial intelligence systems designed specifically for your business needs and industry requirements with proven ROI.",
                                features: ["Custom ML Models", "Neural Networks", "Computer Vision", "NLP Solutions"],
                                color: "purple",
                                gradient: "from-purple-500 to-purple-600"
                            },
                            { 
                                icon: <Users className="w-8 h-8" />, 
                                title: "AI Strategic Consulting", 
                                desc: "Expert guidance on AI adoption, implementation strategies, and digital transformation roadmaps for sustainable competitive advantage.",
                                features: ["Strategy Development", "AI Roadmapping", "Technology Assessment", "Change Management"],
                                color: "green",
                                gradient: "from-green-500 to-green-600"
                            },
                            { 
                                icon: <Zap className="w-8 h-8" />, 
                                title: "Intelligent Automation", 
                                desc: "Streamline operations with smart automation solutions that learn and adapt to optimize business processes and reduce costs.",
                                features: ["Process Automation", "RPA Implementation", "Workflow Optimization", "Smart Scheduling"],
                                color: "orange",
                                gradient: "from-orange-500 to-orange-600"
                            }
                        ].map((service, index) => (
                            <div key={index} className="homepage-service-card fade-in-stagger">
                                {/* Background Gradient */}
                                <div className={`homepage-service-bg bg-gradient-to-br ${service.gradient}`}></div>
                                
                                {/* Service Icon */}
                                <div className={`homepage-service-icon bg-${service.color}-50 text-${service.color}-500`}>
                                    {service.icon}
                                </div>
                                
                                {/* Service Content */}
                                <div className="homepage-service-content">
                                    <h3 className="homepage-service-title">{service.title}</h3>
                                    <p className="homepage-service-desc">{service.desc}</p>
                                    
                                    {/* Service Features */}
                                    <ul className="homepage-service-features">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="homepage-service-feature">
                                                <div className={`homepage-feature-dot bg-${service.color}-400`}></div>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    {/* Service CTA */}
                                    <Link to="/services" className={`homepage-service-cta text-${service.color}-600 hover:text-${service.color}-700`}>
                                        Learn More 
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack Section */}
            <section className="home-section home-section-gray">
                <div className="home-container">
                    <div className="home-section-header fade-in">
                        <div className="home-section-badge">
                            CUTTING-EDGE TECHNOLOGY
                        </div>
                        <h2 className="home-section-title">Our Technology Stack</h2>
                        <p className="home-section-description">
                            We leverage the most advanced technologies and frameworks to deliver robust, scalable AI solutions.
                        </p>
                    </div>

                    {/* Technology Categories */}
                    <div className="home-tech-categories fade-in">
                        {[
                            {
                                category: "Machine Learning",
                                icon: <Brain className="w-8 h-8" />,
                                techs: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"],
                                color: "blue"
                            },
                            {
                                category: "Cloud & DevOps",
                                icon: <Cloud className="w-8 h-8" />,
                                techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
                                color: "green"
                            },
                            {
                                category: "Programming",
                                icon: <Code className="w-8 h-8" />,
                                techs: ["Python", "JavaScript", "Java", "R", "Scala"],
                                color: "purple"
                            },
                            {
                                category: "Data & Analytics",
                                icon: <Database className="w-8 h-8" />,
                                techs: ["Apache Spark", "Elasticsearch", "PostgreSQL", "MongoDB", "Tableau"],
                                color: "orange"
                            }
                        ].map((category, index) => (
                            <div key={index} className="home-tech-category">
                                <div className={`home-tech-icon bg-${category.color}-50 text-${category.color}-500`}>
                                    {category.icon}
                                </div>
                                
                                <h3 className="home-tech-category-title">{category.category}</h3>
                                
                                <div className="home-tech-tags">
                                    {category.techs.map((tech, techIndex) => (
                                        <div key={techIndex} className={`home-tech-tag bg-${category.color}-50 text-${category.color}-600`}>
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Scrolling Technology Showcase */}
                    <div className="home-services-scroll">
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

            {/* Industries We Serve Section - Enhanced */}
            <section className="homepage-industries-section">
                <div className="homepage-main-container">
                    <div className="homepage-section-header fade-in">
                        <div className="homepage-badge-orange animate-bounce">
                            <Globe className="w-4 h-4" />
                            DIVERSE EXPERTISE
                        </div>
                        <h2 className="homepage-main-title">Industries We Serve</h2>
                        <p className="homepage-main-description">
                            Transforming businesses across diverse sectors with tailored AI solutions that drive innovation, accelerate growth, and deliver measurable ROI.
                        </p>
                    </div>

                    {/* Enhanced Industries Grid */}
                    <div className="homepage-industries-grid fade-in">
                        {[
                            { 
                                icon: <Users className="w-10 h-10" />, 
                                name: "Media & Entertainment", 
                                desc: "Content recommendation systems, audience analytics, and personalized streaming experiences that engage millions of viewers worldwide.", 
                                stats: "10M+ Content Views",
                                features: ["Content AI", "Audience Analytics", "Recommendation Engine", "Content Moderation"],
                                bgPattern: "🎬",
                                color: "blue",
                                gradient: "from-blue-500 to-indigo-600",
                                achievements: ["40% Engagement Boost", "Real-time Analytics", "Global Scale"]
                            },
                            { 
                                icon: <Heart className="w-10 h-10" />, 
                                name: "Healthcare & Insurance", 
                                desc: "Risk assessment, claims processing automation, and predictive health analytics for better coverage decisions and patient outcomes.", 
                                stats: "500K+ Policies Processed",
                                features: ["Risk Assessment", "Claims Automation", "Health Predictions", "Fraud Detection"],
                                bgPattern: "🏥",
                                color: "red",
                                gradient: "from-red-500 to-pink-600",
                                achievements: ["99.2% Accuracy", "60% Faster Processing", "HIPAA Compliant"]
                            },
                            { 
                                icon: <Factory className="w-10 h-10" />, 
                                name: "Transportation & Logistics", 
                                desc: "Route optimization, fleet management, and supply chain intelligence for efficient operations and cost reduction.", 
                                stats: "1000+ Fleet Vehicles",
                                features: ["Route Optimization", "Fleet Management", "Supply Chain AI", "Predictive Maintenance"],
                                bgPattern: "🚛",
                                color: "green",
                                gradient: "from-green-500 to-emerald-600",
                                achievements: ["30% Cost Savings", "Real-time Tracking", "Carbon Footprint Reduction"]
                            },
                            { 
                                icon: <ShoppingCart className="w-10 h-10" />, 
                                name: "E-commerce & Retail", 
                                desc: "Personalized shopping experiences, inventory optimization, and customer behavior analysis for increased sales and loyalty.", 
                                stats: "2M+ Customers Served",
                                features: ["Personalization", "Inventory AI", "Customer Analytics", "Price Optimization"],
                                bgPattern: "🛒",
                                color: "purple",
                                gradient: "from-purple-500 to-violet-600",
                                achievements: ["45% Revenue Growth", "Dynamic Pricing", "Omnichannel Experience"]
                            },
                            { 
                                icon: <Building2 className="w-10 h-10" />, 
                                name: "Financial Services", 
                                desc: "Advanced fraud detection, algorithmic trading, credit scoring, and regulatory compliance solutions for modern banking.", 
                                stats: "1B+ Transactions Analyzed",
                                features: ["Fraud Detection", "Credit Scoring", "Algorithmic Trading", "Compliance AI"],
                                bgPattern: "🏦",
                                color: "yellow",
                                gradient: "from-yellow-500 to-orange-600",
                                achievements: ["99.8% Fraud Detection", "Regulatory Compliance", "Risk Mitigation"]
                            },
                            { 
                                icon: <Zap className="w-10 h-10" />, 
                                name: "Energy & Utilities", 
                                desc: "Smart grid optimization, predictive maintenance, energy consumption forecasting, and renewable energy management.", 
                                stats: "500+ Smart Grids",
                                features: ["Grid Optimization", "Energy Forecasting", "Predictive Maintenance", "Renewable Integration"],
                                bgPattern: "⚡",
                                color: "teal",
                                gradient: "from-teal-500 to-cyan-600",
                                achievements: ["25% Energy Savings", "Grid Stability", "Sustainability Goals"]
                            }
                        ].map((industry, index) => (
                            <div key={index} className="homepage-industry-card fade-in-stagger">
                                {/* Background Pattern */}
                                <div className="homepage-industry-pattern">
                                    {industry.bgPattern}
                                </div>
                                
                                {/* Gradient Background */}
                                <div className={`homepage-industry-bg bg-gradient-to-br ${industry.gradient}`}></div>
                                
                                {/* Industry Header */}
                                <div className="homepage-industry-header">
                                    <div className={`homepage-industry-icon bg-${industry.color}-50 text-${industry.color}-600`}>
                                        {industry.icon}
                                    </div>
                                    <div className="homepage-industry-badge">
                                        <TrendingUp className="w-3 h-3" />
                                        <span>{industry.stats}</span>
                                    </div>
                                </div>
                                
                                {/* Industry Content */}
                                <div className="homepage-industry-content">
                                    <h3 className="homepage-industry-title">{industry.name}</h3>
                                    <p className="homepage-industry-desc">{industry.desc}</p>
                                    
                                    {/* Key Features */}
                                    <div className="homepage-industry-features">
                                        <h4 className="homepage-features-title">Key Solutions:</h4>
                                        <ul className="homepage-features-list">
                                            {industry.features.map((feature, idx) => (
                                                <li key={idx} className="homepage-feature-item">
                                                    <div className={`homepage-feature-bullet bg-${industry.color}-400`}></div>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    {/* Achievements */}
                                    <div className="homepage-industry-achievements">
                                        <h4 className="homepage-achievements-title">
                                            <Award className="w-4 h-4" />
                                            Achievements:
                                        </h4>
                                        <div className="homepage-achievements-list">
                                            {industry.achievements.map((achievement, idx) => (
                                                <span key={idx} className={`homepage-achievement-tag bg-${industry.color}-100 text-${industry.color}-700`}>
                                                    {achievement}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Industry CTA */}
                                    <Link to="/industries" className={`homepage-industry-cta text-${industry.color}-600 hover:text-${industry.color}-700`}>
                                        Explore Solutions
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Industries CTA */}
                    <div className="homepage-industries-cta fade-in">
                        <div className="homepage-cta-content">
                            <h3 className="homepage-cta-title">Ready to Transform Your Industry?</h3>
                            <p className="homepage-cta-subtitle">Join leading companies already leveraging our AI solutions for competitive advantage.</p>
                            <Link to="/industries" className="homepage-cta-button">
                                <span>Explore All Industries</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Preview */}
            <section className="home-section home-section-gray">
                <div className="home-container">
                    <div className="home-section-header fade-in">
                        <div className="home-section-badge">
                            PROVEN RESULTS
                        </div>
                        <h2 className="home-section-title">Success Stories</h2>
                        <p className="home-section-description">
                            Real results from real clients who transformed their business with our AI solutions.
                        </p>
                    </div>

                    {/* Horizontal Scrolling Success Stories */}
                    <div className="home-services-scroll">
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
                                        <div key={index} className="home-success-card">
                                            <div className="home-success-header">
                                                <div className="home-success-emoji">{study.icon}</div>
                                                <div>
                                                    <div className={`home-success-indicator ${colorConfig.text.replace('text-', 'bg-')}`}></div>
                                                    <span className="home-success-industry">{study.industry}</span>
                                                </div>
                                            </div>
                                            
                                            <h3 className="home-success-title">{study.title}</h3>
                                            <p className="home-success-description">{study.result}</p>
                                            <p className="home-success-details">{study.details}</p>
                                            
                                            <div className="home-success-footer">
                                                <div>
                                                    <div className={`home-success-metric ${colorConfig.text}`}>
                                                        {study.metric}
                                                    </div>
                                                    <div className="home-success-company">{study.company}</div>
                                                </div>
                                                <ArrowRight className="home-success-arrow" />
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
                                            <div key={`duplicate-${index}`} className="home-success-card">
                                                <div className="home-success-header">
                                                    <div className="home-success-emoji">{study.icon}</div>
                                                    <div>
                                                        <div className={`home-success-indicator ${colorConfig.text.replace('text-', 'bg-')}`}></div>
                                                        <span className="home-success-industry">{study.industry}</span>
                                                    </div>
                                                </div>
                                                
                                                <h3 className="home-success-title">{study.title}</h3>
                                                <p className="home-success-description">{study.result}</p>
                                                <p className="home-success-details">{study.details}</p>
                                                
                                                <div className="home-success-footer">
                                                    <div>
                                                        <div className={`home-success-metric ${colorConfig.text}`}>
                                                            {study.metric}
                                                        </div>
                                                        <div className="home-success-company">{study.company}</div>
                                                    </div>
                                                    <ArrowRight className="home-success-arrow" />
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-16 fade-in">
                        <Link to="/case-studies" className="home-hero-cta">
                            View All Success Stories
                        </Link>
                    </div>
                </div>
            </section>

            {/* Projects Done & Stats */}
            <section className="home-section home-stats-section">
                <div className="home-container">
                    <div className="home-section-header fade-in">
                        <h2 className="home-section-title" style={{ color: 'white' }}>Our Impact in Numbers</h2>
                        <p className="home-section-description" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                            Delivering measurable results across hundreds of projects worldwide.
                        </p>
                    </div>

                    <div className="home-stats-grid fade-in">
                        {[
                            { metric: "500+", label: "Projects Completed", icon: <CheckCircle className="w-8 h-8" /> },
                            { metric: "200+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
                            { metric: "50+", label: "Industries Served", icon: <Building2 className="w-8 h-8" /> },
                            { metric: "98%", label: "Success Rate", icon: <Star className="w-8 h-8" /> }
                        ].map((stat, index) => (
                            <div key={index} className="home-stat-item">
                                <div className="home-stat-icon">
                                    {stat.icon}
                                </div>
                                <div className="home-stat-number">{stat.metric}</div>
                                <div className="home-stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="home-section">
                <div className="home-container">
                    <div className="home-section-header fade-in">
                        <h2 className="home-section-title">Our Values</h2>
                        <p className="home-section-description">
                            The principles that guide everything we do, from innovation to client relationships.
                        </p>
                    </div>

                    <div className="home-values-grid fade-in">
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
                                <div key={index} className="home-value-item">
                                    <div className={`home-value-icon ${colorConfig.bg} ${colorConfig.text}`}>
                                        {value.icon}
                                    </div>
                                    <h3 className="home-value-title">{value.title}</h3>
                                    <p className="home-value-description">{value.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Trusted Clients Section */}
            <section className="home-section home-section-gray">
                <div className="home-container">
                    <div className="text-center mb-12 fade-in">
                        <p className="text-gray-500 text-sm uppercase tracking-wider mb-8">Trusted by Leading Organizations</p>
                        <div className="home-clients-scroll">
                            <div className="scroll-fade-left scroll-fade-right">
                                <div className="flex animate-scroll">
                                    {/* First set of logos */}
                                    {clients.map((client, index) => (
                                        <div key={index} className="home-client-logo">
                                            <div className="home-client-card">
                                                <div className="home-client-content">
                                                    <div className="home-client-logo-text">
                                                        {client.logo}
                                                    </div>
                                                    <div className="home-client-name">
                                                        {client.name.split(' ')[0]}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Duplicate set for seamless loop */}
                                    {clients.map((client, index) => (
                                        <div key={`duplicate-${index}`} className="home-client-logo">
                                            <div className="home-client-card">
                                                <div className="home-client-content">
                                                    <div className="home-client-logo-text">
                                                        {client.logo}
                                                    </div>
                                                    <div className="home-client-name">
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
                </div>
            </section>

            {/* CTA Section */}
            <section className="home-cta-section">
                <div className="home-container text-center fade-in">
                    <h2 className="home-cta-title">
                        Ready to Transform Your Business with AI?
                    </h2>
                    <p className="home-cta-description">
                        Join hundreds of organizations already using our AI solutions to drive innovation and growth.
                    </p>
                    <div className="home-cta-buttons">
                        <Link to="/contact" className="home-cta-primary">
                            Get Started Today
                        </Link>
                        <Link to="/services" className="home-cta-secondary">
                            Explore Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;