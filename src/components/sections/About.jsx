import React from "react";
import { Grid, Column } from "@carbon/react";

function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "30vh",
        padding: "3rem 0",
        backgroundColor: "var(--paper)",
      }}
    >
      <Grid fullWidth style={{maxWidth: "1300px",
        margin: "auto",}}>
        <Column sm={4} md={2} lg={4}>
          <h2
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--ink-soft)",
            }}
          >
            About
          </h2>
        </Column>

        <Column sm={4} md={6} lg={8} xlg={7}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--cds-heading-04-font-size)",
              fontWeight: 560,
              lineHeight: 1.08,
              color: "var(--ink)",
              marginBottom: "1rem",
            }}
          >
            A focused practice for businesses ready to take their digital
            presence seriously.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--cds-body-02-font-size)",
              lineHeight: "var(--cds-body-02-line-height)",
              color: "var(--ink-soft)",
              marginBottom: "1rem",
            }}
          >
            C Ventures LLC is a boutique technical consulting practice that
            helps founders and small business owners build credible,
            well-crafted digital presences. I work closely with each client —
            not as a vendor, but as a strategic partner invested in their
            growth.
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--cds-body-02-font-size)",
              lineHeight: "var(--cds-body-02-line-height)",
              color: "var(--ink-soft)",
            }}
          >
            Every engagement is direct, honest, and built around what actually
            moves the needle for your business — not unnecessary complexity or
            feature bloat.
          </p>
        </Column>
      </Grid>
    </section>
  );
}

export default About;
