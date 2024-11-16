'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Layout, Globe2 } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Development",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS"
      ]
    },
    {
      title: "Design",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        "UI Design",
        "UX Design",
        "Wireframing",
        "Prototyping",
        "User Research",
        "Figma",
        "Adobe XD"
      ]
    },
    {
      title: "Web",
      icon: <Globe2 className="w-6 h-6" />,
      skills: [
        "Responsive Design",
        "Cross-browser Compatibility",
        "Performance Optimization",
        "SEO Principles",
        "Web Accessibility",
        "Version Control (Git)"
      ]
    },
    {
      title: "Tools & Methods",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        "Agile/Scrum",
        "JIRA",
        "Git/GitHub",
        "VS Code",
        "npm/yarn",
        "Chrome DevTools"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-t from-transparent to-accent/20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to create seamless, user-centered digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-md text-primary">
                  {category.icon}
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;