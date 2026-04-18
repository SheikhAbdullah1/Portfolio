import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initial Dark Mode Logic
    const currentTheme = localStorage.getItem("theme");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }

    // Initialize Dialogflow Messenger (via effect to avoid React custom element clashes)
    if (!document.querySelector('df-messenger')) {
      const script = document.createElement('script');
      script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
      script.async = true;
      document.body.appendChild(script);

      const dfMessenger = document.createElement('df-messenger');
      dfMessenger.setAttribute('intent', 'WELCOME');
      dfMessenger.setAttribute('chat-title', 'Abdullah');
      dfMessenger.setAttribute('chat-icon', '/Images/favicon.png');
      dfMessenger.setAttribute('agent-id', 'd2d1e23a-5174-4ca6-a8e1-cd6777441d4f');
      dfMessenger.setAttribute('language-code', 'en');
      document.body.appendChild(dfMessenger);
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;
