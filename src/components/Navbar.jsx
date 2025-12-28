import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar background logic - always with white background for dark text visibility
  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHome
      ? 'bg-white shadow-md py-2'
      : 'bg-white/90 backdrop-blur-md shadow-sm py-2'
    }`;

  const navLinks = [
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Advanced Analytics', path: '/services/advanced-analytics' },
        { name: 'Custom AI Solutions', path: '/services/custom-ai-solutions' },
        { name: 'AI Strategic Consulting', path: '/services/ai-strategic-consulting' },
        { name: 'Intelligent Automation', path: '/services/intelligent-automation' }
      ]
    },
    {
      name: 'Industries',
      path: '/industries',
      dropdown: [
        { name: 'Media and Entertainment', path: '/industries/media-entertainment' },
        { name: 'Health and Life Insurance', path: '/industries/health-life-insurance' },
        { name: 'Transportation and Logistics', path: '/industries/transportation-logistics' },
        { name: 'E-commerce and Retail', path: '/industries/ecommerce-retail' }
      ]
    },
    {
      name: 'Products',
      path: '/products',
      dropdown: [
        { name: 'SwassAI', path: '/products/swassai' },
        { name: 'LensAI', path: '/products/lensai' },
        { name: 'NvisionAI', path: '/products/nvisionai' }
      ]
    },
    { name: 'Success Stories', path: '/case-studies' },
    { name: 'Insights', path: '/insights' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-heading tracking-tight">
          <span className="text-orange-500">NeuZen</span>
          <span className="text-gray-900">AI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className="flex items-center gap-1 text-sm font-medium transition-colors text-gray-700 hover:text-orange-600"
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-4 h-4" />}
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && activeDropdown === link.name && (
                <div className="absolute top-full left-0 pt-4 opacity-100 visible transition-all duration-200 transform translate-y-0">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[200px] overflow-hidden">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/careers" className="btn btn-primary">
            Careers
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                to={link.path}
                className="block text-gray-800 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="pl-4 flex flex-col gap-2 mt-2 border-l-2 border-orange-100">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="text-sm text-gray-500 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/careers"
            className="btn btn-primary w-full text-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Careers
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
