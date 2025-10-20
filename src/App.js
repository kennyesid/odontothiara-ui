<<<<<<< HEAD
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import ImageCarousel from './components/ImageCarousel';
import Testimonials from './components/Testimonials';
import NewsSection from './components/NewsSection';
import LocationMap from './components/LocationMap';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import BannerToothDoomsday from './components/BannerToothDoomsday';
import ServiceSection from './components/ServiceSection';
import FilosofiaSection from './components/FilosofiaSection';
import BannerTooth from './components/BannerTooth';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutUs />
        <BannerToothDoomsday />
        <ServiceSection />
        <BannerTooth />
        <FilosofiaSection />
        {/* <ContentSection />
        <Testimonials />
        <ImageCarousel />
        <NewsSection /> */}
        <LocationMap />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
=======
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import ImageCarousel from "./components/ImageCarousel";
import Testimonials from "./components/Testimonials";
import NewsSection from "./components/NewsSection";
import LocationMap from "./components/LocationMap";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <main>
          <HeroSection />
          <ContentSection />
          <Testimonials />
          <ImageCarousel />
          <NewsSection />
          <LocationMap />
          <ContactForm />
        </main>
        <Footer />
      </header>
    </div>
  );
}

export default App;
>>>>>>> c6913f9503b8ce6c235e3762a8e8a6ecbcdf6ea2
