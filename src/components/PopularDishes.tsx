// components/PopularDishes.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const dishes: Dish[] = [
  {
    id: 1,
    name: "Truffle Mushroom Risotto",
    description: "Creamy arborio rice with wild mushrooms and black truffle",
    price: "$28",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    name: "Herb Crusted Salmon",
    description: "Atlantic salmon with fresh herbs and lemon butter sauce",
    price: "$32",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    name: "Wagyu Beef Burger",
    description: "Premium wagyu patty with truffle aioli and aged cheddar",
    price: "$26",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    name: "Lobster Linguine",
    description: "Fresh lobster with handmade pasta in garlic white wine sauce",
    price: "$38",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    name: "Berry Pavlova",
    description: "Crisp meringue with fresh berries and chantilly cream",
    price: "$14",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    name: "Burrata Caprese",
    description: "Creamy burrata with heirloom tomatoes and basil pesto",
    price: "$18",
    image: "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

export default function PopularDishes() {
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
            Popular Dishes
          </h2>
          <p className="text-xl text-slate max-w-2xl mx-auto">
            Discover our most beloved creations, crafted with passion and the finest ingredients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif font-bold text-charcoal">
                    {dish.name}
                  </h3>
                  <span className="text-burgundy font-bold text-lg">
                    {dish.price}
                  </span>
                </div>
                <p className="text-slate leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}