// components/Header.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiClock } from 'react-icons/fi';
  import type { Variants, TargetResolver } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Reservations', href: '/reservations' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };


    const navItemVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => {
        return {
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.4,
            ease: "easeOut"
        }
        };
    }
    };


  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white/90 backdrop-blur-sm shadow-sm py-4'
    }`}>
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-burgundy to-gold flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">E</span>
              </div>
              <span className="text-2xl font-serif font-bold text-burgundy group-hover:text-gold transition-colors duration-300">
                Elevate
              </span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-6 py-3 font-medium transition-all duration-300 group ${
                      isActive 
                        ? 'text-burgundy' 
                        : 'text-charcoal hover:text-burgundy'
                    }`}
                  >
                    <span className="relative z-10">
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-burgundy/10 border-b-2 border-burgundy"
                        layoutId="activeNav"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300 ${
                      isActive ? 'w-full' : ''
                    }`} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm text-charcoal bg-gold/20 px-4 py-2 rounded-full"
            >
              <FiClock className="text-gold" />
              <span>Open Today</span>
            </motion.div>
            
            <motion.a
              href="tel:+15551234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-burgundy text-white px-6 py-3 font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300 flex items-center gap-2 group"
            >
              <FiPhone className="group-hover:scale-110 transition-transform duration-300" />
              <span>Reserve</span>
            </motion.a>
          </div>

          {/* Mobile Navigation Button */}
          <motion.button
            className="lg:hidden text-charcoal p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="flex flex-col space-y-1 py-4">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      custom={index}
                      variants={navItemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between px-6 py-4 font-medium transition-all duration-300 group ${
                          isActive
                            ? 'bg-burgundy/10 text-burgundy border-r-4 border-burgundy'
                            : 'text-charcoal hover:bg-gray-50 hover:text-burgundy'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isActive ? 'bg-burgundy' : 'bg-gray-300 group-hover:bg-burgundy'
                          }`} />
                          {item.name}
                        </span>
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-1 h-1 bg-gold rounded-full" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Mobile CTA */}
                <motion.div
                  custom={navItems.length}
                  variants={navItemVariants}
                  initial="closed"
                  animate="open"
                  className="px-6 py-4 border-t border-gray-100"
                >
                  <motion.a
                    href="tel:+15551234567"
                    className="w-full bg-burgundy text-white px-6 py-4 font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300 flex items-center justify-center gap-3 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiPhone className="group-hover:scale-110 transition-transform duration-300" />
                    <span>Call to Reserve</span>
                  </motion.a>
                  
                  <div className="flex items-center justify-center gap-4 mt-4 text-sm text-slate">
                    <div className="flex items-center gap-2">
                      <FiClock className="text-gold" />
                      <span>5 PM - 10 PM</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}