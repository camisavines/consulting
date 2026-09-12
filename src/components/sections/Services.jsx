import React from 'react';
import { Grid, Column, Tile } from '@carbon/react';

const SERVICES = [
  {
    title: 'Website Development & Management',
    body: 'I design and build custom websites, then keep them fast, secure, and current long after launch — so the site keeps working for your business, not the other way around.',
  },
  {
    title: 'Brand Identity & Recognition',
    body: 'I help you define how your business looks and sounds online, from visual identity to consistent messaging across your site, socials, and everywhere else people find you.',
  },
  {
    title: 'Digital Presence Strategy',
    body: 'I map out where your business should show up online and how to make the most of each platform, so your time and budget go toward what actually moves the needle.',
  },
  {
    title: 'Strategic Technical Planning',
    body: 'I plan the technology decisions behind your growth — what to build now, what to hold off on, and how each piece fits together as the business scales.',
  },
];

function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '3rem 0',
        // backgroundColor: 'var(--cds-background)',
        maxWidth: "1300px",
        margin: "auto",
      }}
    >
      <Grid fullWidth>
        {/* Section header */}
        <Column sm={4} md={8} lg={16} style={{marginBottom: "2rem"}}>
          <h2
            style={{
              // fontSize: 'var(--cds-label-01-font-size)',
              letterSpacing: 'var(--cds-label-01-letter-spacing)',
              // textTransform: 'uppercase',
              color: 'var(--cds-text-helper)',
              // marginBottom: 'var(--cds-spacing-05)',
            }}
          >
            Services
          </h2>
          <h2
            style={{
              fontSize: 'var(--cds-heading-04-font-size)',
              fontWeight: 'var(--cds-heading-04-font-weight)',
              lineHeight: 'var(--cds-heading-04-line-height)',
              color: 'var(--cds-text-primary)',
              marginBottom: 'var(--cds-spacing-10)',
              maxWidth: '42ch',
            }}
          >
            Everything you need to show up online with confidence.
          </h2>
        </Column>

        {/* Service cards */}
        {SERVICES.map((service) => (
          <Column key={service.title} sm={4} md={4} lg={4}>
            <Tile
              style={{
                height: '100%',
                padding: 'var(--cds-spacing-07)',
                backgroundColor: 'var(--cds-layer)',
              }}
            >
              <h3
                style={{
                  fontSize: 'var(--cds-heading-02-font-size)',
                  fontWeight: 'var(--cds-heading-02-font-weight)',
                  lineHeight: 'var(--cds-heading-02-line-height)',
                  color: 'var(--cds-text-primary)',
                  marginBottom: 'var(--cds-spacing-05)',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: 'var(--cds-body-01-font-size)',
                  lineHeight: 'var(--cds-body-01-line-height)',
                  color: 'var(--cds-text-secondary)',
                }}
              >
                {service.body}
              </p>
            </Tile>
          </Column>
        ))}
      </Grid>
    </section>
  );
}

export default Services;
