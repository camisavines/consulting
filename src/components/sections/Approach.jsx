import React from 'react';
import { Grid, Column } from '@carbon/react';

const STEPS = [
  {
    number: '01',
    label: 'Discover',
    description:
      'We start by understanding your business, goals, and the landscape you operate in — before writing a single line of code.',
  },
  {
    number: '02',
    label: 'Plan',
    description:
      'We map out a clear, scoped roadmap that prioritises the highest-impact work and keeps surprises off the table.',
  },
  {
    number: '03',
    label: 'Build',
    description:
      'We execute with precision — clean, maintainable work delivered incrementally so you can see progress at every step.',
  },
  {
    number: '04',
    label: 'Grow',
    description:
      'We stay involved after launch to iterate, optimise, and ensure the solution keeps pace with your business.',
  },
];

function Approach() {
  return (
    <section
      id="approach"
      style={{
        padding: '3rem 0',
        minHeight: "50vh",
        paddingBottom: 'var(--cds-spacing-13)',
        // backgroundColor: 'var(--cds-layer)',
        maxWidth: "1300px",
        margin: "auto",
      }}
    >
      <Grid fullWidth>
        {/* Section label */}
        <Column sm={4} md={8} lg={16} style={{marginBottom: "2rem"}}>
          <h2
            style={{
              // fontSize: 'var(--cds-label-01-font-size)',
              letterSpacing: 'var(--cds-label-01-letter-spacing)',
              // textTransform: 'uppercase',
              color: 'var(--cds-text-helper)',
              marginBottom: '1rem',
            }}
          >
            Approach
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
            A straightforward process designed to deliver results — not ceremony.
          </h2>
        </Column>

        {/* Step columns */}
        {STEPS.map((step) => (
          <Column key={step.number} sm={4} md={4} lg={4}>
            <p
              style={{
                fontSize: 'var(--cds-heading-06-font-size)',
                fontWeight: 300,
                color: 'var(--cds-text-placeholder)',
                marginBottom: 'var(--cds-spacing-04)',
              }}
            >
              {step.number}
            </p>
            <h3
              style={{
                fontSize: '3em',
                fontWeight: 'var(--cds-heading-03-font-weight)',
                lineHeight: 'var(--cds-heading-03-line-height)',
                color: 'var(--cds-text-primary)',
                marginBottom: 'var(--cds-spacing-04)',
              }}
            >
              {step.label}
            </h3>
            <p
              style={{
                fontSize: 'var(--cds-body-01-font-size)',
                lineHeight: 'var(--cds-body-01-line-height)',
                color: 'var(--cds-text-secondary)',
              }}
            >
              {step.description}
            </p>
          </Column>
        ))}
      </Grid>
    </section>
  );
}

export default Approach;
