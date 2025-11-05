// components/ChefStory.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ChefStory() {
  return (
    <section className="section-padding bg-charcoal text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/fried-chicken-mixed-with-vegetables.webp"
                alt="Chef Marco"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Founded by Chef Marco Russo, Elevate represents a lifelong journey through 
              the world's most vibrant culinary landscapes. With over 20 years of experience 
              in Michelin-starred kitchens across Europe and Asia, Chef Marco brings a unique 
              fusion of traditional techniques and innovative flavors.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Our philosophy is simple: source the finest local ingredients, respect 
              traditional methods, and push creative boundaries to deliver an unforgettable 
              dining experience that truly elevates the senses.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <span className="text-charcoal font-bold text-lg">M</span>
              </div>
              <div>
                <p className="font-semibold">Chef Marco Russo</p>
                <p className="text-gold">Executive Chef & Founder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}