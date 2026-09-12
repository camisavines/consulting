import React from 'react';
import { Grid, Column } from '@carbon/react';

function Clients() {
  return (
    <section
      id="clients"
      style={{
        padding: '3rem 0',
        // paddingBottom: 'var(--cds-spacing-13)',
        backgroundColor: 'var(--cds-layer)',
        
      }}
    >
      <Grid fullWidth style={{
        maxWidth: "1300px",
        margin: "auto",
      }}>
        <Column sm={4} md={2} lg={4}>
          <h2
            style={{
              // fontSize: 'var(--cds-label-01-font-size)',
              letterSpacing: 'var(--cds-label-01-letter-spacing)',
              // textTransform: 'uppercase',
              color: 'var(--cds-text-helper)',
              paddingTop: 'var(--cds-spacing-02)',
            }}
          >
            Clients
          </h2>
        </Column>

        <Column sm={4} md={6} lg={8} xlg={7}>
          <h2
            style={{
              fontSize: 'var(--cds-heading-04-font-size)',
              fontWeight: 'var(--cds-heading-04-font-weight)',
              lineHeight: 'var(--cds-heading-04-line-height)',
              color: 'var(--cds-text-primary)',
              marginBottom: 'var(--cds-spacing-06)',
            }}
          >
            Trusted by founders and small business owners.
          </h2>

          <p
            style={{
              fontSize: 'var(--cds-body-02-font-size)',
              lineHeight: 'var(--cds-body-02-line-height)',
              color: 'var(--cds-text-secondary)',
              marginBottom: 'var(--cds-spacing-10)',
            }}
          >
            We work with a select group of clients at a time to ensure every engagement
            gets the full attention it deserves. Client logos and case studies coming soon.
          </p>

          {/* ── Client logo placeholder grid ─────────────────────── */}
          {/* TODO: Replace these placeholders with actual client logos */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
              gap: 'var(--cds-spacing-06)',
            }}
          >
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                aria-hidden="true"
                style={{
                  height: '3rem',
                  borderRadius: '2px',
                  backgroundColor: 'var(--cds-layer-02)',
                  border: '1px dashed var(--cds-border-subtle)',
                }}
              />
            ))}
          </div>
        </Column>
      </Grid>
    </section>
  );
}

export default Clients;
