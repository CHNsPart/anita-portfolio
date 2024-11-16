'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      name: 'Email',
      icon: <FiMail className="w-6 h-6" />,
      href: 'mailto:anita.anita2255@gmail.com',
      label: 'anita.anita2255@gmail.com'
    },
    {
      name: 'GitHub',
      icon: <FiGithub className="w-6 h-6" />,
      href: 'https://github.com/nomenita',
      label: '@nomenita'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/nomenita',
      label: 'in/nomenita'
    }
  ];

  return (
    <section className="py-24" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Contact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {"Let's collaborate on your next project"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              className="group flex items-center justify-between p-4 rounded-lg border bg-background/50 hover:bg-accent/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <div className="text-primary">{link.icon}</div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium text-muted-foreground">
                    {link.name}
                  </span>
                  <span className="text-foreground">
                    {link.label}
                  </span>
                </div>
              </div>
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ x: 2 }}
              >
                →
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;