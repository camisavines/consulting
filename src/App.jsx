import React from 'react';
import { GlobalTheme, Theme } from '@carbon/react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Approach from './components/sections/Approach.jsx';
import Services from './components/sections/Services.jsx';
import Clients from './components/sections/Clients.jsx';
import Contact from './components/sections/Contact.jsx';
import './index.scss';

function App() {
  return (
    <GlobalTheme theme="white">
      <Theme theme="white">
        <Navbar />
        <Hero />
        <About />
        <Approach />
        <Services />
        <Clients />
        <Contact />
      </Theme>
    </GlobalTheme>
  );
}

export default App;
