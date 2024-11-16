'use client';

import React from 'react';
import { cn } from "@/lib/utils";
import NavItem from "./nav-item";

interface NavProps {
  className?: string;
  items: {
    href: string;
    title: string;
  }[];
  isMobile?: boolean;
  onItemClick?: () => void;
}

const Nav: React.FC<NavProps> = ({ className, items, isMobile, onItemClick }) => {
  const [activeSection, setActiveSection] = React.useState<string>('home');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => item.href.replace('#', ''));
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  return (
    <nav
      className={cn(
        "flex items-center",
        isMobile ? "space-y-6" : "space-x-1",
        className
      )}
    >
      {items.map((item, index) => (
        <NavItem 
          key={item.href}
          href={item.href}
          title={item.title}
          index={index}
          isActive={activeSection === item.href.replace('#', '')}
          isMobile={isMobile}
          onClick={onItemClick}
        />
      ))}
    </nav>
  );
};

export default Nav;