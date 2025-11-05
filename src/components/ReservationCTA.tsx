// components/ReservationCTA.tsx
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function ReservationCTA() {
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [guests, setGuests] = useState<string>('2');

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/french-restaurant-scene-with-menu-board.webp"
          alt="Restaurant ambiance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          className="text-center mb-12"
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
            className="inline-block bg-gold/20 px-4 py-2 mb-6"
          >
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">
              Limited Availability
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Reserve Your Table
          </h2>
          <p className="text-xl text-gold/90 max-w-2xl mx-auto">
            Secure your exclusive spot for an unforgettable culinary journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-sm shadow-2xl p-8 md:p-12 border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-charcoal font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-burgundy rounded-full"></span>
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 bg-white/80 focus:bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-charcoal font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-burgundy rounded-full"></span>
                Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 bg-white/80 focus:bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="">Select Time</option>
                <option value="17:00">5:00 PM | Early Dinner</option>
                <option value="17:30">5:30 PM | Early Dinner</option>
                <option value="18:00">6:00 PM | Prime Time</option>
                <option value="18:30">6:30 PM | Prime Time</option>
                <option value="19:00">7:00 PM | Prime Time</option>
                <option value="19:30">7:30 PM | Prime Time</option>
                <option value="20:00">8:00 PM | Late Dining</option>
                <option value="20:30">8:30 PM | Late Dining</option>
                <option value="21:00">9:00 PM | Late Dining</option>
              </select>
            </div>
            
            <div>
              <label className="block text-charcoal font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-burgundy rounded-full"></span>
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 bg-white/80 focus:bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="1">1 Person | Intimate</option>
                <option value="2">2 People | Romantic</option>
                <option value="3">3 People | Small Group</option>
                <option value="4">4 People | Perfect Table</option>
                <option value="5">5 People | Family</option>
                <option value="6">6 People | Gathering</option>
                <option value="7">7 People | Large Party</option>
                <option value="8">8 People | Celebration</option>
              </select>
            </div>
          </div>

          {/* Additional Information */}
          <motion.div 
            className="bg-gold/10 border-l-4 border-gold p-4 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-charcoal text-sm flex items-center gap-2">
              <span className="text-burgundy font-bold">✦</span>
              For parties larger than 8, please contact us directly for special arrangements
            </p>
          </motion.div>
          
          <div className="text-center">
            <motion.button
              className="relative bg-gradient-to-r from-burgundy to-burgundy/90 text-white px-16 py-4 font-semibold text-lg overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Reserve Your Table
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-200"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
            
            <motion.p 
              className="text-slate text-sm mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              You'll receive a confirmation within 15 minutes
            </motion.p>
          </div>
        </motion.div>

        {/* Decorative Bottom Element */}
        <motion.div
          className="flex justify-center items-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-8 h-px bg-gold/50"></div>
          <span className="text-gold/70 text-sm uppercase tracking-widest">Premium Experience</span>
          <div className="w-8 h-px bg-gold/50"></div>
        </motion.div>
      </div>
    </section>
  );
}