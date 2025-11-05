// app/gallery/page.tsx
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    src: '/images/fried-chicken-mixed-with-vegetables.webp',
    alt: 'Restaurant Interior',
    category: 'interior'
  },
  {
    id: 2,
    src: '/images/fried-chicken-mixed-with-vegetables.webp',
    alt: 'Chef Plating',
    category: 'kitchen'
  },
  {
    id: 3,
    src: '/images/fried-chicken-mixed-with-vegetables.webp',
    alt: 'Pizza Dish',
    category: 'food'
  },
  {
    id: 4,
    src: '/images/fried-chicken-mixed-with-vegetables.webp',
    alt: 'Pasta Dish',
    category: 'food'
  },
  {
    id: 5,
    src: '/images/fried-chicken-mixed-with-vegetables.webp',
    alt: 'Wine Selection',
    category: 'beverages'
  },
  {
    id: 6,
    src: '/images/fried-chicken-mixed-with-vegetables.webp',
    alt: 'Cocktails',
    category: 'beverages'
  },
  {
    id: 7,
    src: '/images/fried-chicken-mixed-with-vegetables.webp',
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
    src: '/images/fried-chicken-mixed-with-vegetables.webp',
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
      <section className="pt-32 pb-20 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Gallery
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
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