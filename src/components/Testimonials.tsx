// components/Testimonials.tsx
'use client';
import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Critic",
    comment: "The most innovative dining experience I've had this year. Every dish tells a story and the flavors are absolutely breathtaking.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Regular Guest",
    comment: "Consistently exceptional. The attention to detail in both service and cuisine makes every visit memorable.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "First-time Visitor",
    comment: "From the ambiance to the final bite, everything was perfect. The truffle risotto is life-changing!",
    rating: 4.5
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Wine Enthusiast",
    comment: "Outstanding wine pairings and culinary craftsmanship. A true gem in the city's dining scene.",
    rating: 5
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-1 text-gold">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {hasHalfStar && <FaStarHalfAlt />}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-slate max-w-2xl mx-auto">
            Don't just take our word for it - hear from our delighted guests
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-slate leading-relaxed my-6 italic">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-burgundy rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-charcoal">{testimonial.name}</p>
                  <p className="text-slate text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}