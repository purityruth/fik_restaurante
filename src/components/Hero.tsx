// components/Hero.tsx
'use client';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [currentBackground, setCurrentBackground] = useState(0);
  const [positions, setPositions] = useState<{left:number;top:number;}[]>([])

  const backgrounds = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ];

  useEffect(() => {
    // rotate backgrounds
    const interval = setInterval(() => {
        setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    // generate random sparkle positions once (client-only)
    const arr = Array.from({ length: 15 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
    }))
    setPositions(arr)

    return () => clearInterval(interval);
    }, []);




  const floatingAnimation: Variants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sparkleVariants: Variants = {
    initial: { opacity: 0, scale: 0 },
    animate: (i: number) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: i * 0.5,
        ease: "easeInOut"
      }
    })
  };

  const textGlow: Variants = {
    initial: { textShadow: "0 0 0px rgba(212, 175, 55, 0)" },
    animate: { 
      textShadow: [
        "0 0 0px rgba(212, 175, 55, 0)",
        "0 0 20px rgba(212, 175, 55, 0.8)",
        "0 0 0px rgba(212, 175, 55, 0)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const buttonHover = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  const backgroundVariants: Variants = {
    enter: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const scrollIndicator: Variants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { delay: 2.5 }
    }
  };

  const scrollDot: Variants = {
    animate: {
      y: [0, 12, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const borderPulse: Variants = {
    animate: {
      borderColor: [
        'rgba(212, 175, 55, 0.3)',
        'rgba(212, 175, 55, 1)',
        'rgba(212, 175, 55, 0.3)'
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const mainTitle: Variants = {
    initial: { opacity: 0, y: 100, scale: 0.8 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3
      }
    }
  };

  const subtitle: Variants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1.2 }
    }
  };

  const ctaContainer: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 1.6 }
    }
  };

  const decorativeLine: Variants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 0.5 }
    }
  };

  const textPulse: Variants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const colorMorphGold: Variants = {
    animate: {
      color: ['#D4AF37', '#F4D03F', '#D4AF37'],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const colorMorphBurgundy: Variants = {
    animate: {
      color: ['#722F37', '#8B3A42', '#722F37'],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: 1,
        ease: "easeInOut"
      }
    }
  };

  const buttonText: Variants = {
    animate: {
      x: [0, 5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const buttonTextReverse: Variants = {
    animate: {
      x: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: 1,
        ease: "easeInOut"
      }
    }
  };

  const iconRotate: Variants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const iconPulse: Variants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const gradientOverlay: Variants = {
    animate: {
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const geometricShape1: Variants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const geometricShape2: Variants = {
    animate: {
      scale: [1.2, 1, 1.2],
      rotate: [45, 405, 45],
      opacity: [0.4, 0.7, 0.4],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Images */}
      {backgrounds.map((bg, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${bg}")` }}
          initial={{ opacity: index === 0 ? 1 : 0 }}
          animate={{ opacity: currentBackground === index ? 1 : 0 }}
          variants={backgroundVariants}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
            animate={{
              background: [
                "linear-gradient(to bottom, rgba(27, 11, 13, 0.4), rgba(0, 0, 0, 0.7))",
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))",
                "linear-gradient(to bottom, rgba(41, 35, 14, 0.3), rgba(0, 0, 0, 0.7))",
                "linear-gradient(to bottom, rgba(65, 21, 26, 0.4), rgba(0, 0, 0, 0.7))"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
      ))}

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {positions.map((pos, i) => (
            <motion.div
            key={i}
            custom={i}
            variants={sparkleVariants}
            initial="initial"
            animate="animate"
            className="absolute w-2 h-2 bg-gold rounded-full"
            style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
            }}
            />
        ))}
      </div>


      {/* Animated Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-gold/30 rounded-full"
        variants={geometricShape1}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-burgundy/30 rotate-45"
        variants={geometricShape2}
        initial="initial"
        animate="animate"
      />

      {/* Main Content */}
      <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-6">
        <motion.div
          
          initial="initial"
          animate="animate"
        >
          {/* Decorative Top Element */}
          <motion.div
            className="flex justify-center items-center mb-8"
            variants={decorativeLine}
            initial="initial"
            animate="animate"
          >
            <div className="w-16 h-px bg-gold mr-4" />
            <motion.span 
              className="text-gold font-light tracking-widest uppercase text-md"
              variants={textPulse}
              initial="initial"
              animate="animate"
            >
              Executive Dining Experience
            </motion.span>
            <div className="w-16 h-px bg-gold ml-4" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-8xl font-serif font-bold mb-6 leading-tight"
            variants={mainTitle}
            initial="initial"
            animate="animate"
          >
            <motion.span
              variants={textGlow}
              initial="initial"
              animate="animate"
              className="block"
            >
              Taste
            </motion.span>
            <motion.span
              className="block text-gold bg-gradient-to-r from-gold to-yellow-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Elevated
            </motion.span>
          </motion.h1>
          
          {/* Sub-headline */}
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl mb-12 font-light max-w-4xl mx-auto leading-relaxed"
            variants={subtitle}
            initial="initial"
            animate="animate"
          >
            Where{' '}
            <motion.span 
              className="text-gold font-medium italic"
              variants={colorMorphGold}
              initial="initial"
              animate="animate"
            >
              culinary artistry
            </motion.span>{' '}
            meets{' '}
            <motion.span 
              className="text-burgundy font-medium italic"
              variants={colorMorphBurgundy}
              initial="initial"
              animate="animate"
            >
              authentic flavor
            </motion.span>
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={ctaContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <Link 
                href="/menu" 
                className="group relative overflow-hidden bg-gradient-to-r from-burgundy to-burgundy/90 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-2xl flex items-center space-x-3"
              >
                <motion.span
                  className="relative z-10"
                  variants={buttonText}
                  initial="initial"
                  animate="animate"
                >
                  View Menu
                </motion.span>
                <motion.div
                  variants={iconPulse}
                  initial="initial"
                  animate="animate"
                >
                  →
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-200"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </motion.div>

            <motion.div
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <Link 
                href="/reservations" 
                className="group relative overflow-hidden bg-gradient-to-r from-gold to-yellow-200 text-charcoal px-12 py-4 rounded-full font-semibold text-lg shadow-2xl flex items-center space-x-3"
              >
                <motion.span
                  className="relative z-10"
                  variants={buttonTextReverse}
                  initial="initial"
                  animate="animate"
                >
                  Book a Table
                </motion.span>
                <motion.div
                  variants={iconPulse}
                  initial="initial"
                  animate="animate"
                >
                  ✦
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-burgundy to-burgundy/90"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute mt-8 left-1/2 transform -translate-x-1/2"
            variants={scrollIndicator}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="w-6 h-10 border-2 border-gold rounded-full flex justify-center"
              variants={borderPulse}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="w-1 h-3 bg-gold rounded-full mt-2"
                variants={scrollDot}
                initial="initial"
                animate="animate"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Bottom Gradient */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent"
        variants={gradientOverlay}
        initial="initial"
        animate="animate"
      />
    </section>
  );
}