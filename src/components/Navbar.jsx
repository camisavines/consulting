import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from '@carbon/react';
import { Light, Moon } from '@carbon/react/icons';

/**
 * Scrolls to a section by id and prevents the default anchor navigation.
 */
function scrollTo(id) {
  return (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
}

/**
 * Navbar — top-level navigation built with Carbon Header components.
 *
 * Props:
 *   theme     {string}   - current theme key ('white' | 'g100')
 *   onToggle  {Function} - callback to toggle the theme
 */
function Navbar({ theme, onToggle }) {
  const isDark = theme === 'g100';

  return (
    <Header aria-label="Portfolio navigation">
      <SkipToContent />

      {/* Brand / site name — scrolls back to hero */}
      <HeaderName href="#hero" prefix="C" onClick={scrollTo('hero')}>
        Ventures
      </HeaderName>

      {/* Primary navigation links */}
      <HeaderNavigation aria-label="Main navigation">
        <HeaderMenuItem href="#about" onClick={scrollTo('about')}>About</HeaderMenuItem>
        <HeaderMenuItem href="#approach" onClick={scrollTo('approach')}>Approach</HeaderMenuItem>
        <HeaderMenuItem href="#services" onClick={scrollTo('services')}>Services</HeaderMenuItem>
        <HeaderMenuItem href="#contact" onClick={scrollTo('contact')}>Contact</HeaderMenuItem>
      </HeaderNavigation>

      {/* Global action bar — theme toggle */}
      <HeaderGlobalBar>
        <HeaderGlobalAction
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          tooltipAlignment="end"
          onClick={onToggle}
        >
          {isDark ? <Light size={20} /> : <Moon size={20} />}
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
}

export default Navbar;
