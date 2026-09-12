import React from "react";
import { Grid, Column } from "@carbon/react";
import { ArrowDown } from "@carbon/react/icons";

function Hero() {
  function handleCTA(e) {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "3rem", // clear fixed header
        backgroundColor: "var(--paper)",
      }}
    >
      <Grid fullWidth style={{maxWidth: "1300px",
              margin: "auto",}}>
        <Column sm={4} md={6} lg={8} xlg={7}>
          <p
            style={{
              fontSize: "var(--cds-label-01-font-size)",
              letterSpacing: "var(--cds-label-01-letter-spacing)",
              textTransform: "uppercase",
              color: "var(--ink-soft)",
              fontFamily: "var(--font-body)",
              marginBottom: "var(--cds-spacing-04)",
            }}
          >
            Technical Consulting
          </p>

          <h1
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontFamily: "var(--font-display)",
              fontWeight: 560,
              lineHeight: 1.08,
              color: "var(--ink)",
              marginBottom: "var(--cds-spacing-06)",
              maxWidth: "38ch",
            }}
          >
            Digital foundations built for businesses that mean business.
          </h1>

          <p
            style={{
              fontSize: "var(--cds-body-02-font-size)",
              lineHeight: "var(--cds-body-02-line-height)",
              fontFamily: "var(--font-body)",
              color: "var(--ink-soft)",
              marginTop: "3rem",
              marginBottom: "var(--cds-spacing-01)",
              maxWidth: "52ch",
            }}
          >
            C Ventures LLC partners with small businesses and founders to
            design, build, and grow their digital presence — with clarity,
            craftsmanship, and long-term strategy.
          </p>

          <button
            onClick={handleCTA}
            style={{
              marginTop: "1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--ink)",
              color: "var(--paper)",
              fontFamily: "var(--font-body)",
              fontSize: "0.98rem",
              padding: "0.9rem 1.8rem",
              border: "1px solid var(--ink)",
              borderRadius: "2px",
              cursor: "pointer",
            }}
          >
            Start a conversation
            <ArrowDown size={16} />
          </button>
        </Column>
      </Grid>
    </section>
  );
}

export default Hero;
