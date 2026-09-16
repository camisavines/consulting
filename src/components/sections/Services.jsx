import React from "react";
import { ArrowRight } from "@carbon/react/icons";

const SERVICES = [
  {
    number: "01",
    title: "Website Development & Management",
    body: "Custom websites built to perform — fast, secure, and maintained long after launch so your site keeps working as hard as you do.",
  },
  {
    number: "02",
    title: "Brand Identity & Recognition",
    body: "Define how your business looks and sounds online. From visual identity to consistent messaging across every channel people find you.",
  },
  {
    number: "03",
    title: "Digital Presence Strategy",
    body: "A clear map of where your business should show up online and how to make the most of each platform — so time and budget go to what moves the needle.",
  },
  {
    number: "04",
    title: "Strategic Technical Planning",
    body: "Smart technology decisions behind your growth — what to build now, what to hold off on, and how each piece fits together as you scale.",
  },
];

function Services() {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="services"
      style={{
        padding: "6rem 1.5rem",
        backgroundColor: "var(--paper-alt)",
      }}
    >
      {/* Section header */}
      <div style={{ maxWidth: "1300px", margin: "0 auto 4rem" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "1rem",
          }}
        >
          What we do
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 560,
            lineHeight: 1.08,
            color: "var(--ink)",
            maxWidth: "28ch",
          }}
        >
          Everything you need to show up online with confidence.
        </h2>
      </div>

      {/* Service rows */}
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        {SERVICES.map((s) => (
          <div key={s.number} className="cv-service-row">
            <span
              className="cv-service-number"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "var(--accent)",
                paddingTop: "0.2rem",
              }}
            >
              {s.number}
            </span>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.25rem, 2.2vw, 1.7rem)",
                  fontWeight: 440,
                  color: "var(--ink)",
                  marginBottom: "0.75rem",
                  lineHeight: 1.15,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: "var(--ink-soft)",
                  maxWidth: "60ch",
                }}
              >
                {s.body}
              </p>
            </div>

            <button
              onClick={() => scrollTo("contact")}
              aria-label={`Enquire about ${s.title}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "2.5rem",
                height: "2.5rem",
                background: "transparent",
                border: "1px solid var(--line)",
                borderRadius: "2px",
                cursor: "pointer",
                flexShrink: 0,
                marginTop: "0.2rem",
              }}
            >
              <ArrowRight size={16} color="var(--ink)" />
            </button>
          </div>
        ))}

        {/* Bottom border */}
        <div style={{ borderTop: "1px solid var(--line)" }} />
      </div>
    </section>
  );
}

export default Services;
