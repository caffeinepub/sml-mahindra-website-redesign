import { Toaster } from '@/components/ui/sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VehicleCatalog from './components/VehicleCatalog';
import DealerLocator from './components/DealerLocator';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal-deep text-foreground">
      <Navbar />
      <main>
        <Hero />
        <VehicleCatalog />
        <DealerLocator />
        <AboutSection />
        <ContactForm />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'oklch(0.18 0.01 260)',
            border: '1px solid oklch(0.28 0.01 260)',
            color: 'oklch(0.97 0.005 260)',
          },
        }}
      />
    </div>
  );
}
