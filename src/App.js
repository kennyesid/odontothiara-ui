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
