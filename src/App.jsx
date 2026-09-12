import React, { useState, useEffect } from 'react';
import { GlobalTheme, Theme, Content } from '@carbon/react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Approach from './components/sections/Approach.jsx';
import Services from './components/sections/Services.jsx';
import Clients from './components/sections/Clients.jsx';
import Contact from './components/sections/Contact.jsx';
import './index.scss';

const STORAGE_KEY = 'portfolio-theme';
const THEMES = { light: 'white', dark: 'g100' };

function App() {
  // Read persisted preference; fall back to light theme.
  const [theme, setTheme] = useState(
    () => localStorage.getItem(STORAGE_KEY) || THEMES.light
  );

  // Keep the Carbon theme class on <html> in sync and persist preference.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  function handleToggle() {
    setTheme(prev => (prev === THEMES.light ? THEMES.dark : THEMES.light));
  }

  return (
    /*
     * GlobalTheme applies the chosen Carbon theme class to the <html> element,
     * ensuring that all Carbon token variables resolve correctly everywhere.
     * Theme wraps the subtree so Carbon components pick up the correct token set.
     */
    <GlobalTheme theme={theme}>
      <Theme theme={theme}>
        {/* ── Navigation ─────────────────────────────────────── */}
        <Navbar theme={theme} onToggle={handleToggle} />

        {/* ── Page content ────────────────────────────────────── */}
        {/*
         * Content provides Carbon's standard top-padding that offsets the
         * fixed 48 px header. Each section inside has its own id for
         * smooth-scroll targeting from the Navbar.
         */}
        {/* <Content id="main"> */}
          <Hero />
          <About />
          <Approach />
          <Services />
          <Clients />
          <Contact />
        {/* </Content> */}
      </Theme>
    </GlobalTheme>
  );
}

export default App;
