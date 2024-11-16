'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Lienzo",
      description: "Lienzo was born out of a simple yet powerful idea to revolutionize how businesses manage their software licenses. In today's digital landscape, where software is the backbone of operations, we recognized the need for a streamlined, efficient approach to license management.",
      category: "UI/UX Design & Development",
      image: "/lienzo.png",
      link: "https://lienzoapp.vercel.app/"
    },
    {
      title: "Who Works When",
      description: "Brief description of the project and your role in it",
      category: "UI/UX Design",
      image: "/www.png",
      link: "https://whoworkswhen.com"
    },
    {
      title: "Omni Attention",
      description: "Brief description of the project and your role in it",
      category: "Web Design",
      image: "/omni.png",
      link: "https://omniattention.com"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work in UI/UX design and frontend development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a 
                href={project.link}
                className="group relative block overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </motion.div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground font-medium">
                        {project.category}
                      </span>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 2 }}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;