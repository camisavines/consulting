import React from "react";
import { Grid, Column } from "@carbon/react";

const STEPS = [
  {
    number: "01",
    label: "Discover",
    description:
      "I start by understanding your business, goals, and the landscape you operate in — before writing a single line of code.",
  },
  {
    number: "02",
    label: "Plan",
    description:
      "I map out a clear, scoped roadmap that prioritises the highest-impact work and keeps surprises off the table.",
  },
  {
    number: "03",
    label: "Build",
    description:
      "I execute with precision — clean, maintainable work delivered incrementally so you can see progress at every step.",
  },
  {
    number: "04",
    label: "Grow",
    description:
      "I stay involved after launch to iterate, optimise, and ensure the solution keeps pace with your business.",
  },
];

function Approach() {
  return (
    <section
      id="approach"
      style={{
        padding: "4rem 0",
        minHeight: "60vh",
        paddingBottom: "var(--cds-spacing-13)",
        backgroundColor: "var(--paper)",
      }}
    >
      <Grid fullWidth style={{ maxWidth: "1300px", margin: "auto" }}>
        {/* Section label */}
        <Column sm={4} md={8} lg={16} style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--ink-soft)",

              marginBottom: "1rem",
            }}
          >
            Approach
          </h2>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--cds-heading-04-font-size)",
              fontWeight: 560,
              lineHeight: 1.08,
              color: "var(--ink)",
              marginBottom: "var(--cds-spacing-10)",
              maxWidth: "30ch",
            }}
          >
            A straightforward process designed to deliver results — not
            ceremony.
          </h2>
        </Column>

        {/* Step columns */}
        {STEPS.map((step) => (
          <Column
            key={step.number}
            sm={4}
            md={4}
            lg={4}
            style={{ borderTop: "2px solid var(--accent)", padding: "1rem 0" }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                color: "var(--accent)",
                marginBottom: "var(--cds-spacing-04)",
              }}
            >
              {step.number}
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "3em",
                fontWeight: 440,
                lineHeight: 1.08,
                color: "var(--ink)",
                marginBottom: "var(--cds-spacing-04)",
                paddingBottom: "1rem",
              }}
            >
              {step.label}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                lineHeight: "var(--cds-body-01-line-height)",
                color: "var(--ink-soft)",
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
