// app/menu/page.tsx
'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  isSignature?: boolean;
}

const menuItems: MenuItem[] = [
  // Breakfast
  { id: 1, name: 'Avocado Toast', description: 'Sourdough, smashed avocado, poached eggs, microgreens', price: '$16', category: 'breakfast', image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 2, name: 'French Toast', description: 'Brioche, maple syrup, seasonal berries, chantilly cream', price: '$14', category: 'breakfast', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', isSignature: true },
  
  // Lunch
  { id: 3, name: 'Caesar Salad', description: 'Romaine, parmesan, croutons, classic dressing', price: '$18', category: 'lunch', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 4, name: 'Truffle Burger', description: 'Wagyu beef, truffle aioli, brioche bun, truffle fries', price: '$24', category: 'lunch', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', isSignature: true },
  
  // Dinner
  { id: 5, name: 'Filet Mignon', description: '8oz grass-fed beef, red wine reduction, roasted vegetables', price: '$42', category: 'dinner', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', isSignature: true },
  { id: 6, name: 'Sea Bass', description: 'Pan-seared, lemon butter, seasonal vegetables, herb crust', price: '$36', category: 'dinner', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  
  // Beverages
  { id: 7, name: 'Craft Cocktails', description: 'Seasonal ingredients, house-made syrups, premium spirits', price: '$14', category: 'beverages', image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 8, name: 'Wine Selection', description: 'Curated international wines, sommelier recommendations', price: '$12-$18', category: 'beverages', image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  
  // Cocktails
  { id: 9, name: 'Elevate Spritz', description: 'Prosecco, aperol, blood orange, sparkling water', price: '$16', category: 'cocktails', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', isSignature: true },
  { id: 10, name: 'Smoked Old Fashioned', description: 'Bourbon, demerara, orange bitters, smoked glass', price: '$18', category: 'cocktails', image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
];

const categories = ['all', 'breakfast', 'lunch', 'dinner', 'beverages', 'cocktails'];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

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
            Our Menu
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our seasonal creations crafted with passion and the finest ingredients
          </motion.p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold capitalize transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-burgundy text-white'
                    : 'bg-gray-100 text-charcoal hover:bg-gold'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  {item.isSignature && (
                    <div className="absolute top-4 right-4 bg-gold text-charcoal px-3 py-1 rounded-full text-sm font-bold uppercase">
                      Signature
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif font-bold text-charcoal">
                      {item.name}
                    </h3>
                    <span className="text-burgundy font-bold text-lg">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-slate leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="inline-block bg-gray-100 text-slate px-3 py-1 rounded-full text-sm capitalize">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}