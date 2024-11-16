'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiChevronUp } from 'react-icons/fi';
import Image from 'next/image';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/nomenita",
      icon: <FiGithub className="w-5 h-5" />,
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/nomenita",
      icon: <FiLinkedin className="w-5 h-5" />,
      label: "LinkedIn"
    },
    {
      href: "mailto:anita.anita2255@gmail.com",
      icon: <FiMail className="w-5 h-5" />,
      label: "Email"
    }
  ];

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
          <Link 
            href="#home" 
            className="text-lg font-semibold hover:text-primary transition-colors z-50"
          >
            <Image
              alt='logo'
              src='/round.png'
              width={50}
              height={50}
            />
          </Link>
            <h3 className="text-lg font-semibold">Anita Islam</h3>
            <p className="text-sm text-muted-foreground">
              UI/UX Designer & Frontend Developer crafting intuitive digital experiences.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ y: -2 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Anita Islam. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            whileHover={{ y: -2 }}
            aria-label="Scroll to top"
          >
            <FiChevronUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;