'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Map, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              UI/UX and Frontend Developer with a CSE degree from BRAC University 
              and 1+ years of experience in designing and developing responsive, 
              user-focused web applications.
            </p>
            <div className="space-y-4 pt-4">
              <motion.div
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ x: 4 }}
              >
                <Map size={20} /> Peterborough, Ontario
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ x: 4 }}
              >
                <Mail size={20} /> anita.anita2255@gmail.com
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ x: 4 }}
              >
                <Phone size={20} /> +1-(647) 829-4508
              </motion.div>
            </div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <motion.div 
                className="border rounded-lg p-4 hover:bg-accent/50 transition-colors"
                whileHover={{ y: -2 }}
              >
                <h4 className="font-medium">UI/UX Designer and Frontend Developer</h4>
                <p className="text-muted-foreground">OonkoO • Jul 2023 - Current</p>
              </motion.div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Education</h3>
              {[
                {
                  title: "PGD in Wireless Information Networking",
                  school: "Fleming College",
                  period: "SEP 2023 - APR 2025"
                },
                {
                  title: "BSc in CSE",
                  school: "BRAC University",
                  period: "JAN 2018 - JAN 2022",
                  additional: "Research Thesis: Decipherable-Classification-of-Glaucoma-using-Deep-Neural-Network-Leveraging-XAI"
                }
              ].map((edu, index) => (
                <motion.div 
                  key={index}
                  className="border rounded-lg p-4 hover:bg-accent/50 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <h4 className="font-medium">{edu.title}</h4>
                  <p className="text-muted-foreground">{edu.school} • {edu.period}</p>
                  {edu.additional && (
                    <p className="text-sm text-muted-foreground mt-2">{edu.additional}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;