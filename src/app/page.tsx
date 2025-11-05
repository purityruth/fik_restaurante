// app/page.tsx
import Header from '../components/Header';
import Hero from '../components/Hero';
import PopularDishes from '../components/PopularDishes';
import ChefStory from '../components/ChefStory';
import MenuPreview from '../components/MenuPreview';
import ReservationCTA from '../components/ReservationCTA';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PopularDishes />
      <ChefStory />
      <MenuPreview />
      <ReservationCTA />
      <Testimonials />
      <Footer />
    </main>
  );
}