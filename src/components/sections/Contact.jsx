import React from "react";
import { Grid, Column, Button } from "@carbon/react";
import { Email } from "@carbon/react/icons";

const EMAIL = "hello@cventures.llc";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "3rem 0",
        // paddingBottom: 'var(--cds-spacing-13)',
        backgroundColor: "var(--cds-background)",
        maxWidth: "1300px",
        margin: "auto",
      }}
    >
      <Grid fullWidth>
        <Column sm={4} md={2} lg={4}>
          <h2
            style={{
              // fontSize: 'var(--cds-label-01-font-size)',
              letterSpacing: "var(--cds-label-01-letter-spacing)",
              // textTransform: 'uppercase',
              color: "var(--cds-text-helper)",
              // paddingTop: 'var(--cds-spacing-02)',
            }}
          >
            Contact
          </h2>
        </Column>

        <Column sm={4} md={6} lg={8} xlg={7}>
          <h2
            style={{
              fontSize: "var(--cds-heading-04-font-size)",
              fontWeight: "var(--cds-heading-04-font-weight)",
              lineHeight: "var(--cds-heading-04-line-height)",
              color: "var(--cds-text-primary)",
              marginBottom: "var(--cds-spacing-06)",
            }}
          >
            Let&apos;s talk about what you&apos;re building.
          </h2>

          <p
            style={{
              fontSize: "var(--cds-body-02-font-size)",
              lineHeight: "var(--cds-body-02-line-height)",
              color: "var(--cds-text-secondary)",
              marginBottom: "var(--cds-spacing-08)",
              maxWidth: "54ch",
            }}
          >
            Whether you have a clear brief or just an idea, reach out and
            we&apos;ll figure out the right next step together. No sales pitch —
            just an honest conversation.
          </p>

          <Button
            kind="primary"
            size="lg"
            renderIcon={Email}
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
          </Button>

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
