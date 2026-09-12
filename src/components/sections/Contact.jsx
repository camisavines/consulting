import React from "react";
import { Grid, Column } from "@carbon/react";
import { Email } from "@carbon/react/icons";

const EMAIL = "hello@cventures.llc";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "3rem 0",
        backgroundColor: "var(--ink)",
      }}
    >
      <Grid fullWidth style={{ maxWidth: "1300px", margin: "auto" }}>
        <Column sm={4} md={2} lg={4}>
          <h2
            style={{
              fontFamily: "var(--font-body)",
              letterSpacing: "var(--cds-label-01-letter-spacing)",
              color: "#C9C5BA",

            }}
          >
            Contact
          </h2>
        </Column>

        <Column sm={4} md={6} lg={8} xlg={7}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--cds-heading-04-font-size)",
              fontWeight: 560,
              lineHeight: 1.08,
              color: "var(--paper)",
              marginBottom: "1rem",
            }}
          >
            Let&apos;s talk about what you&apos;re building.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--cds-body-02-font-size)",
              lineHeight: "var(--cds-body-02-line-height)",
              color: "#C9C5BA",
              marginBottom: "1rem",
              maxWidth: "54ch",
            }}
          >
            Whether you have a clear brief or just an idea, reach out and
            I&apos;ll figure out the right next step together. No sales pitch —
            just an honest conversation.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "transparent",
              color: "var(--paper)",
              fontFamily: "var(--font-body)",
              fontSize: "0.98rem",
              padding: "0.9rem 1.8rem",
              border: "1px solid var(--paper)",
              borderRadius: "2px",
              textDecoration: "none",
            }}
          >
            <Email size={16} />
            {EMAIL}
          </a>

          {/* ── Contact form placeholder ──────────────────────────── */}
          {/* TODO: Replace the mailto link above with a full contact form
                    (e.g. using Carbon's Form, TextInput, TextArea, Button)
                    once a backend or form-handling service is in place.    */}
        </Column>
      </Grid>
    </section>
  );
}

export default Contact;
