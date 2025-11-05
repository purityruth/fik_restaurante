// app/gallery/page.tsx
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiStar } from 'react-icons/fi';

const galleryImages = [
  {
    id: 1,
    src: '/images/french-restaurant-scene-with-menu-board.webp',
    alt: 'Restaurant Interior',
    category: 'interior'
  },
  {
    id: 2,
    src: '/images/glass-glass-orange-cocktail-garnished-with-dried-orange-slice.webp',
    alt: 'Chef Plating',
    category: 'kitchen'
  },
  {
    id: 3,
    src: '/images/fried-chicken-with-grilled-potatoes-eggplants-tomatoes-peppers.webp',
    alt: 'Pizza Dish',
    category: 'food'
  },
  {
    id: 4,
    src: '/images/red-drink-martini-glass-with-lemon-zest-garnish-dim-lit-bar-with-flowers.webp',
    alt: 'Pasta Dish',
    category: 'food'
  },
  {
    id: 5,
    src: '/images/grilled-salmon-fillet-with-fresh-vegetable-salad-generated-by-ai.webp',
    alt: 'Wine Selection',
    category: 'beverages'
  },
  {
    id: 6,
    src: '/images/avocado-toast-plate-with-tomatoes-sauce.webp',
    alt: 'Cocktails',
    category: 'beverages'
  },
  {
    id: 7,
    src: '/images/delicious-traditional-dessert-assortment.webp',
    alt: 'Dining Area',
    category: 'interior'
  },
  {
    id: 8,
    src: '/images/fried-chicken-mixed-with-vegetables.webp',
    alt: 'Dessert',
    category: 'food'
  },
  {
    id: 9,
    src: '/images/flat-lay-salad-with-chicken-sesame-seeds.webp',
    alt: 'Appetizers',
    category: 'food'
  }
];

const categories = ['all', 'food', 'interior', 'beverages', 'kitchen'];

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
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
                <span className="text-gold font-semibold text-sm uppercase tracking-wide">Our gallery</span>
                <FiStar className="text-gold" />
                </motion.div>
    
                <motion.h1 
                    className="text-5xl md:text-7xl font-serif font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                Gallery
                </motion.h1>
    
                <motion.p 
                    className="text-xl md:text-2xl text-gold/90 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                A visual journey through our culinary world
                </motion.p>
    
            </div>
        </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative aspect-square rounded-2xl overflow-hidden card-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white translate-y-full hover:translate-y-0 transition-transform duration-300">
                    <p className="font-semibold">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}