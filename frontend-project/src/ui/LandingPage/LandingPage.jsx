import LandingNavBar from '../../components/landing/LandingNavBar';
import Hero from '../../components/landing/Hero';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-background min-h-screen">
      {/* Just one line! All config is hidden inside LandingNavBar */}
      <LandingNavBar />

      <Hero
        title="Automate Your Vendor Management Today"
        subtitle="The smartest way to handle market stall allocations and vendor payments."
        onSignIn={() => navigate('/signin')}
        onSignUp={() => navigate('/signup')}
      />

      {/* <section id="hero" className="h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold text-text-high">Hero Section</h1>
      </section>

      <section id="features" className="h-screen py-20 bg-muted/20">
        <h2 className="text-3xl font-bold px-10">Features</h2>
      </section>

      <section id="pricing" className="h-screen py-20">
        <h2 className="text-3xl font-bold px-10">Pricing</h2>
      </section> */}
    </div>
  );
}

export default LandingPage;

