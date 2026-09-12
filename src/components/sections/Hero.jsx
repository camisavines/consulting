import React from "react";
import { Grid, Column, Button } from "@carbon/react";
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

          <Button
            kind="primary"
            size="lg"
            renderIcon={ArrowDown}
            onClick={handleCTA}
            style={{ marginTop: "1rem" }}
          >
            Start a conversation
          </Button>
        </Column>
      </Grid>
    </section>
  );
}

export default Hero;
