import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'About Us', link: '#about', dropdown: ['Mission', 'Vision', 'Team'] },
  { name: 'Membership', link: '#membership', dropdown: ['Benefits', 'Join', 'Renew'] },
  { name: 'Meetings & Events', link: '#events', dropdown: ['Annual Meeting', 'Webinars', 'Calendar'] },
  { name: 'Publications', link: '#publications', dropdown: ['Journals', 'Books', 'Guidelines'] },
  { name: 'Awards & Grants', link: '#awards', dropdown: ['Apply', 'Recipients', 'Donate'] },
  { name: 'Advocacy', link: '#advocacy' },
  { name: 'News', link: '#news' },
  { name: 'Contact', link: '#contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null); // Close dropdowns when mobile menu toggles
  };

  const handleDropdownToggle = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Cambia a 50px según gusto
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      // className="bg-white shadow-md sticky top-0 z-50"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <img className="h-8 w-auto" src="https://www.iadr.org/themes/custom/iadr/logo.svg" alt="Logo" />
            </a>
          </div>
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            {navItems.map((item) => (
              <div key={item.name}
                className="relative flex items-center"
                onMouseEnter={() => item.dropdown && handleDropdownToggle(item.name)}
                onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
              >
                <motion.a
                  href={item.link}
                  // className="text-white hover:text-gray-600 hover:bg-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-300 ${isScrolled
                    ? 'text-gray-800 hover:text-orange-600'
                    : 'text-white hover:text-gray-200'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {item.dropdown && (
                    <motion.span
                      className="ml-1"
                      animate={{ rotate: openDropdown === item.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  )}
                </motion.a>
                {item.dropdown && openDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href={`${item.link}/${subItem.toLowerCase().replace(/\s/g, '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  <motion.a
                    href={item.link}
                    className="text-gray-700 hover:bg-gray-50 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => item.dropdown && handleDropdownToggle(item.name)}
                    whileHover={{ backgroundColor: '#f3f4f6' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                    {item.dropdown && (
                      <motion.span
                        className="ml-1 inline-block"
                        animate={{ rotate: openDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    )}
                  </motion.a>
                  <AnimatePresence>
                    {item.dropdown && openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-6 pr-3 py-1 space-y-1"
                      >
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem}
                            href={`${item.link}/${subItem.toLowerCase().replace(/\s/g, '-')}`}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                          >
                            {subItem}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;