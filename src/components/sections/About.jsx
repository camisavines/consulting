import React from "react";
import { Grid, Column } from "@carbon/react";

function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "50vh",
        paddingTop: "3rem",
        maxWidth: "1300px",
        margin: "auto",
      }}
    >
      <Grid fullWidth>
        <Column sm={4} md={2} lg={4}>
          <h2
            style={{
              // fontSize: "var(--cds-label-01-font-size)",
              letterSpacing: "var(--cds-label-01-letter-spacing)",
              // textTransform: "uppercase",
              color: "var(--cds-text-helper)",
            }}
          >
            About
          </h2>
        </Column>

        <Column sm={4} md={6} lg={8} xlg={7}>
          <h2
            style={{
              fontSize: "var(--cds-heading-04-font-size)",
              fontWeight: "var(--cds-heading-04-font-weight)",
              lineHeight: "var(--cds-heading-04-line-height)",
              color: "var(--cds-text-primary)",
              marginBottom: "1rem",
            }}
          >
            A focused practice for businesses ready to take their digital
            presence seriously.
          </h2>

          <p
            style={{
              fontSize: "var(--cds-body-02-font-size)",
              lineHeight: "var(--cds-body-02-line-height)",
              color: "var(--cds-text-secondary)",
              marginBottom: "1rem",

            }}
          >
            C Ventures LLC is a boutique technical consulting practice that
            helps founders and small business owners build credible,
            well-crafted digital presences. We work closely with each client —
            not as a vendor, but as a strategic partner invested in their
            growth.
          </p>

          <p
            style={{
              fontSize: "var(--cds-body-02-font-size)",
              lineHeight: "var(--cds-body-02-line-height)",
              color: "var(--cds-text-secondary)",
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
