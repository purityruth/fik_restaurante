// app/menu/page.tsx
'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiStar, FiClock, FiChevronRight } from 'react-icons/fi';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  isSignature?: boolean;
  prepTime?: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

const menuItems: MenuItem[] = [
  // Breakfast
  { 
    id: 1, 
    name: 'Avocado Toast', 
    description: 'Artisan sourdough, smashed avocado, poached eggs, microgreens, chili flakes', 
    price: '$16', 
    category: 'breakfast', 
    image: '/images/avocado-toast-plate-with-tomatoes-sauce.webp',
    prepTime: '10 min',
    isVegetarian: true
  },
  { 
    id: 2, 
    name: 'French Toast', 
    description: 'Brioche, maple syrup, seasonal berries, chantilly cream, candied pecans', 
    price: '$14', 
    category: 'breakfast', 
    image: '/images/sandwich-cup-coffee-table.webp', 
    isSignature: true,
    prepTime: '12 min'
  },
  
  // Lunch
  { 
    id: 3, 
    name: 'Caesar Salad', 
    description: 'Crisp romaine, parmesan, garlic croutons, classic dressing, anchovy filets', 
    price: '$18', 
    category: 'lunch', 
    image: '/images/flat-lay-salad-with-chicken-sesame-seeds.webp',
    prepTime: '8 min'
  },
  { 
    id: 4, 
    name: 'Truffle Burger', 
    description: 'Wagyu beef, truffle aioli, brioche bun, truffle fries, caramelized onions', 
    price: '$24', 
    category: 'lunch', 
    image: '/images/side-view-double-cheeseburger-with-grilled-beef-patties-cheese-lettuce-leaf-burger-buns.webp', 
    isSignature: true,
    prepTime: '15 min'
  },
  
  // Dinner
  { 
    id: 5, 
    name: 'Filet Mignon', 
    description: '8oz grass-fed beef, red wine reduction, roasted vegetables, truffle mashed potatoes', 
    price: '$42', 
    category: 'dinner', 
    image: '/images/fried-chicken-mixed-with-vegetables.webp', 
    isSignature: true,
    prepTime: '20 min'
  },
  { 
    id: 6, 
    name: 'Sea Bass', 
    description: 'Pan-seared, lemon butter, seasonal vegetables, herb crust, saffron risotto', 
    price: '$36', 
    category: 'dinner', 
    image: '/images/freshly-cooked-linguini-with-prawn-seafood-generated-by-ai.webp',
    prepTime: '18 min'
  },
  
  // Beverages
  { 
    id: 7, 
    name: 'Craft Cocktails', 
    description: 'Seasonal ingredients, house-made syrups, premium spirits, artisanal garnishes', 
    price: '$14', 
    category: 'beverages', 
    image: '/images/delicious-mojito-rum-cola-blood-orange-vodka-cocktails-served-with-fruit.webp',
    prepTime: '5 min'
  },
  { 
    id: 8, 
    name: 'Wine Selection', 
    description: 'Curated international wines, sommelier recommendations, perfect pairings', 
    price: '$12-$18', 
    category: 'beverages', 
    image: '/images/front-view-two-wine-glasses-yellow-grapes-wood-board-wine-bottle-red-background.webp'
  },
  
  // Cocktails
  { 
    id: 9, 
    name: 'Elevate Spritz', 
    description: 'Prosecco, aperol, blood orange, sparkling water, rosemary sprig', 
    price: '$16', 
    category: 'cocktails', 
    image: '/images/red-drink-martini-glass-with-lemon-zest-garnish-dim-lit-bar-with-flowers.webp', 
    isSignature: true,
    prepTime: '4 min'
  },
  { 
    id: 10, 
    name: 'Smoked Old Fashioned', 
    description: 'Bourbon, demerara, orange bitters, smoked glass, orange twist', 
    price: '$18', 
    category: 'cocktails', 
    image: '/images/glass-glass-orange-cocktail-garnished-with-dried-orange-slice.webp',
    prepTime: '6 min'
  },
];

const categories = [
  { id: 'all', name: 'All Menu', icon: '✦' },
  { id: 'breakfast', name: 'Breakfast', icon: '☕' },
  { id: 'lunch', name: 'Lunch', icon: '🥗' },
  { id: 'dinner', name: 'Dinner', icon: '🍽️' },
  { id: 'beverages', name: 'Beverages', icon: '🍷' },
  { id: 'cocktails', name: 'Cocktails', icon: '🍸' }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const categoryCounts = categories.map(cat => ({
    ...cat,
    count: cat.id === 'all' ? menuItems.length : menuItems.filter(item => item.category === cat.id).length
  }));

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section 
            className="pt-32 pb-20 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/grilled-salmon-fillet-with-fresh-vegetable-salad-generated-by-ai.webp')" }}
            >
            <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full mb-6"
                >
                <FiStar className="text-gold" />
                <span className="text-gold font-semibold text-sm uppercase tracking-wide">Seasonal Menu</span>
                <FiStar className="text-gold" />
                </motion.div>

                <motion.h1 
                className="text-5xl md:text-7xl font-serif font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                >
                Culinary Collection
                </motion.h1>

                <motion.p 
                className="text-xl md:text-2xl text-gold/90 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                >
                Discover our seasonal creations crafted with passion and the finest ingredients
                </motion.p>

            </div>
        </section>


      {/* Menu Content */}
      <section className="section-padding">
        <div className="container mx-auto">
          {/* Category Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categoryCounts.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-6 py-4 font-semibold capitalize transition-all duration-300 border-2 flex items-center gap-3 ${
                  activeCategory === category.id
                    ? 'bg-burgundy text-white border-burgundy shadow-lg'
                    : 'bg-white text-charcoal border-gray-200 hover:border-burgundy hover:bg-burgundy/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  activeCategory === category.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-100 text-charcoal'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Items Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            layout
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  layout: { duration: 0.3 }
                }}
                className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-burgundy/20"
                whileHover={{ y: -5 }}
              >
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {item.isSignature && (
                      <motion.div 
                        className="bg-gold text-charcoal px-3 py-1 text-sm font-bold uppercase tracking-wide shadow-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      >
                        Signature
                      </motion.div>
                    )}
                    {item.isVegetarian && (
                      <div className="bg-green-500 text-white px-2 py-1 text-xs font-semibold uppercase">
                        Vegetarian
                      </div>
                    )}
                  </div>

                  {/* Prep Time */}
                  {item.prepTime && (
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 text-sm font-medium flex items-center gap-2">
                      <FiClock size={14} />
                      {item.prepTime}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-serif font-bold text-charcoal group-hover:text-burgundy transition-colors duration-300 pr-4 flex-1">
                      {item.name}
                    </h3>
                    <span className="text-burgundy font-bold text-xl whitespace-nowrap bg-burgundy/10 px-3 py-1">
                      {item.price}
                    </span>
                  </div>
                  
                  <p className="text-slate leading-relaxed mb-4 border-b border-gray-100 pb-4 min-h-[60px]">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-gray-100 text-slate px-3 py-1 text-sm capitalize font-medium">
                      {item.category}
                    </span>
                    
                    <motion.button 
                      className="text-burgundy font-semibold hover:text-gold transition-colors duration-300 flex items-center gap-2 group/btn"
                      whileHover={{ x: 5 }}
                    >
                      <span>Add to Order</span>
                      <motion.span
                        className="group-hover/btn:translate-x-1 transition-transform duration-300"
                      >
                        <FiChevronRight />
                      </motion.span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                No items found
              </h3>
              <p className="text-slate">
                We're updating our menu for this category. Please check back soon!
              </p>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-16 pt-12 border-t border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
              Need help choosing?
            </h3>
            <p className="text-slate mb-6 max-w-2xl mx-auto">
              Our sommelier and culinary team are here to guide you through perfect pairings and seasonal recommendations.
            </p>
            <motion.button
              className="bg-charcoal text-white px-8 py-4 font-semibold hover:bg-burgundy transition-all duration-300 flex items-center gap-3 mx-auto group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Consult Our Sommelier</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <FiChevronRight />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}