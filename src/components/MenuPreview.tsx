// components/MenuPreview.tsx
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  isSignature?: boolean;
}

const menuCategories: MenuCategory[] = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    items: [
      { id: 1, name: 'Avocado Toast', description: 'Sourdough, smashed avocado, poached eggs', price: '$16' },
      { id: 2, name: 'French Toast', description: 'Brioche, maple syrup, seasonal berries', price: '$14', isSignature: true },
    ]
  },
  {
    id: 'lunch',
    name: 'Lunch',
    items: [
      { id: 3, name: 'Caesar Salad', description: 'Romaine, parmesan, croutons, classic dressing', price: '$18' },
      { id: 4, name: 'Truffle Burger', description: 'Wagyu beef, truffle aioli, brioche bun', price: '$24', isSignature: true },
    ]
  },
  {
    id: 'dinner',
    name: 'Dinner',
    items: [
      { id: 5, name: 'Filet Mignon', description: '8oz grass-fed beef, red wine reduction', price: '$42', isSignature: true },
      { id: 6, name: 'Sea Bass', description: 'Pan-seared, lemon butter, seasonal vegetables', price: '$36' },
    ]
  },
  {
    id: 'beverages',
    name: 'Beverages',
    items: [
      { id: 7, name: 'Craft Cocktails', description: 'Seasonal ingredients, house-made syrups', price: '$14' },
      { id: 8, name: 'Wine Selection', description: 'Curated international wines', price: '$12-$18' },
    ]
  },
  {
    id: 'cocktails',
    name: 'Signature Cocktails',
    items: [
      { id: 9, name: 'Elevate Spritz', description: 'Prosecco, aperol, blood orange', price: '$16', isSignature: true },
      { id: 10, name: 'Smoked Old Fashioned', description: 'Bourbon, demerara, orange bitters', price: '$18' },
    ]
  }
];

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState<string>('breakfast');

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            Menu Preview
          </h2>
          <p className="text-xl text-slate max-w-2xl mx-auto">
            Explore our seasonal offerings across different dining experiences
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-burgundy text-white'
                  : 'bg-gray-100 text-charcoal hover:bg-gold'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {menuCategories
            .find(category => category.id === activeCategory)
            ?.items.map((item) => (
              <div key={item.id} className="flex justify-between items-start py-6 border-b border-gray-200 last:border-b-0">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-serif font-bold text-charcoal">
                      {item.name}
                    </h3>
                    {item.isSignature && (
                      <span className="bg-gold text-charcoal px-2 py-1 rounded-full text-xs font-bold uppercase">
                        Signature
                      </span>
                    )}
                  </div>
                  <p className="text-slate leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="text-burgundy font-bold text-lg ml-4">
                  {item.price}
                </span>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}