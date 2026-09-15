import React from "react";
import { ArrowRight, LogoLinkedin } from "@carbon/react/icons";

const EMAIL = "camisa.vines@icloud.com";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "7rem 1.5rem",
        backgroundColor: "var(--ink)",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
        }}
      >
        {/* Left: heading */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1.25rem",
            }}
          >
            Get in touch
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 560,
              lineHeight: 1.08,
              color: "var(--paper)",
              marginBottom: "1.5rem",
            }}
          >
            Let&apos;s talk about what you&apos;re building.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#C9C5BA",
              maxWidth: "44ch",
            }}
          >
            Whether you have a clear brief or just an idea, reach out and
            I&apos;ll figure out the right next step together. No sales pitch —
            just an honest conversation.
          </p>
        </div>

        {/* Right: CTA + email */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <a
            href={`mailto:${EMAIL}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              background: "var(--accent)",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 500,
              padding: "1.1rem 1.75rem",
              borderRadius: "2px",
              textDecoration: "none",
            }}
          >
            Send me an email
            <ArrowRight size={18} />
          </a>

          <a
            href={`mailto:${EMAIL}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "#C9C5BA",
              textDecoration: "none",
              borderBottom: "1px solid #58554C",
              paddingBottom: "1px",
              alignSelf: "flex-start",
            }}
          >
            {EMAIL}
          </a>
        </div>
      </div>

      {/* Footer bar */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "5rem auto 0",
          paddingTop: "2rem",
          borderTop: "1px solid #3a3832",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.82rem",
            color: "#58554C",
          }}
        >
          © {new Date().getFullYear()} C Ventures LLC. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.82rem",
            color: "#58554C",
          }}
        >
          Technical Consulting · Web Design · Digital Strategy
        </p>
      </div>
    </section>
  );
}

export default Contact;
