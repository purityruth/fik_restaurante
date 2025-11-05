// app/about/page.tsx
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A journey of passion, flavor, and culinary excellence
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/fried-chicken-mixed-with-vegetables.webp"
                  alt="Restaurant Interior"
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
              <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
                The Beginning
              </h2>
              <p className="text-lg leading-relaxed text-slate mb-6">
                Founded in 2015 by Chef Marco Russo, Elevate began as a dream to create 
                a dining experience that transcends ordinary meals. What started as a 
                small 30-seat restaurant has grown into a culinary destination known for 
                its innovative approach to traditional flavors.
              </p>
              <p className="text-lg leading-relaxed text-slate">
                Our journey has been guided by a simple philosophy: source the finest 
                ingredients, respect culinary traditions while embracing innovation, 
                and create memorable experiences that linger long after the last bite.
              </p>
            </motion.div>
          </div>

          {/* Mission & Values */}
          <motion.div 
            className="bg-gray-50 rounded-2xl p-12 text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-8">
              Our Mission & Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-burgundy mb-4">Quality</h3>
                <p className="text-slate">
                  We source only the finest ingredients from local farmers and trusted suppliers worldwide.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-burgundy mb-4">Innovation</h3>
                <p className="text-slate">
                  Blending traditional techniques with modern creativity to surprise and delight.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-burgundy mb-4">Sustainability</h3>
                <p className="text-slate">
                  Committed to environmentally responsible practices from kitchen to table.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Chef Bio */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
                Meet Chef Marco
              </h2>
              <p className="text-lg leading-relaxed text-slate mb-6">
                With over 20 years of experience in Michelin-starred kitchens across 
                Europe and Asia, Chef Marco brings a unique fusion of traditional 
                techniques and innovative flavors to every dish.
              </p>
              <p className="text-lg leading-relaxed text-slate mb-6">
                His journey began in his grandmother's kitchen in Tuscany, where he 
                learned the importance of fresh ingredients and time-honored methods. 
                This foundation, combined with formal training at Le Cordon Bleu and 
                experience in Tokyo's finest restaurants, shapes his distinctive 
                culinary voice.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-charcoal font-bold text-xl">M</span>
                </div>
                <div>
                  <p className="font-bold text-charcoal text-lg">Chef Marco Russo</p>
                  <p className="text-gold">Executive Chef & Founder</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}