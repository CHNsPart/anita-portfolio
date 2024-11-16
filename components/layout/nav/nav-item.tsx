'use client';

import React from 'react';
import { motion } from "framer-motion";

interface NavItemProps {
  href: string;
  title: string;
  index: number;
  isActive: boolean;
  isMobile?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ 
  href, 
  title, 
  index, 
  isActive,
  isMobile,
  onClick 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
      onClick?.();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative ${isMobile ? 'w-full text-center' : ''}`}
    >
      <a
        href={href}
        onClick={handleClick}
        className={`group relative px-4 py-2 text-sm font-medium transition-colors block
          ${isActive ? 'text-primary' : 'text-foreground hover:text-primary'}
          ${isMobile ? 'text-xl py-3' : ''}
        `}
      >
        {title}
        <span 
          className={`absolute inset-x-4 -bottom-px h-px bg-primary transition-transform duration-300 ${
            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`} 
        />
      </a>
    </motion.div>
  );
};

export default NavItem;