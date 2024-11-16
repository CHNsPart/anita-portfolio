// hero.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FlickeringGrid from '@/components/ui/flickering-grid';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center -mt-14">
      {/* Flickering Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <FlickeringGrid
          squareSize={4}
          gridGap={6}
          flickerChance={0.3}
          color="hsl(var(--primary))"
          maxOpacity={0.15}
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <div className='flex justify-center items-center'>
            <Image
              alt='logo'
              src='/logo.png'
              width={80}
              height={80}
            />
          </div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            UI/UX Designer & Frontend Developer
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creating intuitive digital experiences that blend form and function
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center mt-8"
          >
            <motion.a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background/50 backdrop-blur-sm px-6 font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-primary/50 flex justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-primary/50 rounded-full"
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;