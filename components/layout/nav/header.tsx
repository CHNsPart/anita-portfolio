'use client';

import React, { useState } from 'react';
import Nav from './nav';
import { Button } from '@/components/ui/button';
import { FiMail, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", title: "Home" },
    { href: "#about", title: "About" },
    { href: "#skills", title: "Skills" },
    { href: "#projects", title: "Projects" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center justify-between mx-auto px-5">
        {/* Logo */}
        <Link 
          href="#home" 
          className="text-lg font-semibold hover:text-primary transition-colors z-50"
          onClick={closeMenu}
        >
          <Image
            alt='logo'
            src='/round.png'
            width={32}
            height={32}
          />
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <Nav items={navItems} />
        </div>

        {/* Desktop Contact Button */}
        <Button
          variant="ghost"
          className="hidden md:flex items-center gap-2 hover:bg-primary/10"
          asChild
        >
          <Link href="#contact">
            <FiMail className="w-4 h-4" />
            <span>Contact</span>
          </Link>
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-foreground z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden h-screen"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <Nav 
                  items={navItems} 
                  className="flex-col space-y-6 text-lg" 
                  isMobile={true}
                  onItemClick={closeMenu}
                />
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 hover:bg-primary/10 mt-4"
                  asChild
                  onClick={closeMenu}
                >
                  <Link href="#contact">
                    <FiMail className="w-4 h-4" />
                    <span>Contact</span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;