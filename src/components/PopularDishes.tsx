// components/PopularDishes.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiStar } from 'react-icons/fi';

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  isPopular?: boolean;
  category?: string;
}

const dishes: Dish[] = [
  {
    id: 1,
    name: "Truffle Mushroom Risotto",
    description: "Creamy arborio rice with wild mushrooms and black truffle",
    price: "$28",
    image: "/images/buckwheat-porridge-with-mushrooms.webp",
    isPopular: true,
    category: "Main Course"
  },
  {
    id: 2,
    name: "Herb Crusted Salmon",
    description: "Atlantic salmon with fresh herbs and lemon butter sauce",
    price: "$32",
    image: "/images/grilled-salmon-fillet-with-fresh-vegetable-salad-generated-by-ai.webp",
    isPopular: true,
    category: "Seafood"
  },
  {
    id: 3,
    name: "Wagyu Beef Burger",
    description: "Premium wagyu patty with truffle aioli and aged cheddar",
    price: "$26",
    image: "/images/side-view-double-cheeseburger-with-grilled-beef-patties-cheese-lettuce-leaf-burger-buns.webp",
    category: "Main Course"
  },
  {
    id: 4,
    name: "Lobster Linguine",
    description: "Fresh lobster with handmade pasta in garlic white wine sauce",
    price: "$38",
    image: "/images/freshly-cooked-linguini-with-prawn-seafood-generated-by-ai.webp",
    isPopular: true,
    category: "Pasta"
  },
  {
    id: 5,
    name: "Berry Pavlova",
    description: "Crisp meringue with fresh berries and chantilly cream",
    price: "$14",
    image: "/images/delicious-traditional-dessert-assortment.webp",
    category: "Dessert"
  },
  {
    id: 6,
    name: "Burrata Caprese",
    description: "Creamy burrata with heirloom tomatoes and basil pesto",
    price: "$18",
    image: "/images/fried-chicken-mixed-with-vegetables.webp",
    category: "Starter"
  }
];

export default function PopularDishes() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-6"
          >
            <FiStar className="text-gold" />
            <span className="text-gold font-semibold text-sm uppercase tracking-wide">Customer Favorites</span>
            <FiStar className="text-gold" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6">
            Signature Dishes
          </h2>
          <p className="text-xl text-slate max-w-2xl mx-auto leading-relaxed">
            Chef's selection of most-loved creations that define our culinary excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Popular Badge */}
                {dish.isPopular && (
                  <motion.div 
                    className="absolute top-4 left-4 bg-burgundy text-white px-3 py-1 text-sm font-semibold uppercase tracking-wide"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    Popular
                  </motion.div>
                )}
                
                {/* Category Tag */}
                {dish.category && (
                  <div className="absolute top-4 right-4 bg-white/90 text-charcoal px-3 py-1 text-xs font-medium uppercase tracking-wide">
                    {dish.category}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-serif font-bold text-charcoal group-hover:text-burgundy transition-colors duration-300 pr-4">
                    {dish.name}
                  </h3>
                  <span className="text-burgundy font-bold text-xl whitespace-nowrap">
                    {dish.price}
                  </span>
                </div>
                
                <p className="text-slate leading-relaxed mb-4 border-b border-gray-100 pb-4">
                  {dish.description}
                </p>
                
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <button className="text-burgundy font-semibold hover:text-gold transition-colors duration-300 flex items-center gap-2 group/btn">
                    <span>Add to Order</span>
                    <motion.span
                      className="group-hover/btn:translate-x-1 transition-transform duration-300"
                    >
                      →
                    </motion.span>
                  </button>
                  
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-slate mb-6">
            Can't decide? Let our sommelier help you choose
          </p>
          <motion.button
            className="bg-charcoal text-white px-8 py-3 font-semibold hover:bg-burgundy transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Menu
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}