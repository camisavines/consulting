import React from "react";

function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 1.5rem",
        backgroundColor: "var(--paper)",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        {/* Two-column layout: label left, content right */}
        <div className="cv-about-grid">
          <div>
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
              Who we are
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 560,
                lineHeight: 1.08,
                color: "var(--ink)",
              }}
            >
              A focused practice for businesses ready to take their digital
              presence seriously.
            </h2>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--ink-soft)",
                marginBottom: "1.5rem",
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
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--ink-soft)",
              }}
            >
              Every engagement is direct, honest, and built around what actually
              moves the needle for your business — not unnecessary complexity or
              feature bloat.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            margin: "4rem 0 0",
            height: "1px",
            background: "var(--line)",
          }}
        />
      </div>
    </section>
  );
}

export default About;
