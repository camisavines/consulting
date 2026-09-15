import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
} from '@carbon/react';
import { ArrowRight } from '@carbon/react/icons';

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
        <HeaderMenuItem href="#clients" onClick={scrollTo('clients')}>Work</HeaderMenuItem>
      </HeaderNavigation>

      {/* CTA — flush right */}
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        <button
          onClick={scrollTo('contact')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'var(--accent)',
            color: '#fff',
            fontFamily: 'var(--font-body)',
            fontSize: '0.82rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            padding: '0 1.25rem',
            height: '3rem',
            border: 'none',
            borderRadius: '0',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          Get a quote <ArrowRight size={14} />
        </button>
      </div>
    </Header>
  );
}

export default Navbar;
