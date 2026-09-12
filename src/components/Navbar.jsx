import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
} from '@carbon/react';

function scrollTo(id) {
  return (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
}

function Navbar() {
  return (
    <Header aria-label="Portfolio navigation">
      <SkipToContent />

      <HeaderName href="#hero" prefix="C" onClick={scrollTo('hero')}>
        Ventures
      </HeaderName>

      <HeaderNavigation aria-label="Main navigation">
        <HeaderMenuItem href="#about" onClick={scrollTo('about')}>About</HeaderMenuItem>
        <HeaderMenuItem href="#approach" onClick={scrollTo('approach')}>Approach</HeaderMenuItem>
        <HeaderMenuItem href="#services" onClick={scrollTo('services')}>Services</HeaderMenuItem>
        <HeaderMenuItem href="#contact" onClick={scrollTo('contact')}>Contact</HeaderMenuItem>
      </HeaderNavigation>
    </Header>
  );
}

export default Navbar;
