import React, { useState } from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenuButton,
  SideNav,
  SideNavItems,
  SideNavMenuItem,
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
  const [sideNavOpen, setSideNavOpen] = useState(false);

  function handleNavItem(id) {
    return (e) => {
      e.preventDefault();
      setSideNavOpen(false);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };
  }

  return (
    <Header aria-label="Portfolio navigation">
      <SkipToContent />

      {/* Hamburger — visible only when Carbon hides HeaderNavigation (<1056px) */}
      <HeaderMenuButton
        aria-label={sideNavOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setSideNavOpen((v) => !v)}
        isActive={sideNavOpen}
      />

      <HeaderName href="#hero" prefix="C" onClick={scrollTo('hero')}>
        Ventures
      </HeaderName>

      {/* Desktop nav — Carbon hides this below 1056px */}
      <HeaderNavigation aria-label="Main navigation">
        <HeaderMenuItem href="#about" onClick={scrollTo('about')}>About</HeaderMenuItem>
        <HeaderMenuItem href="#approach" onClick={scrollTo('approach')}>Approach</HeaderMenuItem>
        <HeaderMenuItem href="#services" onClick={scrollTo('services')}>Services</HeaderMenuItem>
        <HeaderMenuItem href="#clients" onClick={scrollTo('clients')}>Work</HeaderMenuItem>
      </HeaderNavigation>

      {/* Mobile side nav */}
      <SideNav
        aria-label="Side navigation"
        expanded={sideNavOpen}
        isPersistent={false}
        onOverlayClick={() => setSideNavOpen(false)}
      >
        <SideNavItems>
          <SideNavMenuItem href="#about" onClick={handleNavItem('about')}>About</SideNavMenuItem>
          <SideNavMenuItem href="#approach" onClick={handleNavItem('approach')}>Approach</SideNavMenuItem>
          <SideNavMenuItem href="#services" onClick={handleNavItem('services')}>Services</SideNavMenuItem>
          <SideNavMenuItem href="#clients" onClick={handleNavItem('clients')}>Work</SideNavMenuItem>
          <SideNavMenuItem href="#contact" onClick={handleNavItem('contact')}>Get a quote</SideNavMenuItem>
        </SideNavItems>
      </SideNav>

      {/* CTA button — flush right */}
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
          <span className="cv-nav-cta-label">Get a quote&nbsp;</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </Header>
  );
}

export default Navbar;
