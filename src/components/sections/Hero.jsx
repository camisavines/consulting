import React from "react";
import { ArrowDown, ArrowRight } from "@carbon/react/icons";

function Hero() {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "8rem 1.5rem 5rem",
        backgroundColor: "var(--paper)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.78rem",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "1.5rem",
        }}
      >
        Technical Consulting · Web Design · Digital Strategy
      </p>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.6rem, 6.5vw, 5rem)",
          fontWeight: 560,
          lineHeight: 1.06,
          color: "var(--ink)",
          maxWidth: "18ch",
          margin: "0 auto 1.75rem",
        }}
      >
        Digital foundations built for businesses that mean business.
      </h1>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
          lineHeight: 1.65,
          color: "var(--ink-soft)",
          maxWidth: "52ch",
          margin: "0 auto 2.75rem",
        }}
      >
        C Ventures LLC partners with small businesses and founders to design,
        build, and grow their digital presence — with clarity, craftsmanship,
        and long-term strategy.
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={() => scrollTo("contact")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "var(--ink)",
            color: "var(--paper)",
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            fontWeight: 500,
            padding: "0.85rem 1.75rem",
            border: "1px solid var(--ink)",
            borderRadius: "2px",
            cursor: "pointer",
          }}
        >
          Start a conversation
          <ArrowRight size={16} />
        </button>

        <button
          onClick={() => scrollTo("services")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "transparent",
            color: "var(--ink)",
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            fontWeight: 500,
            padding: "0.85rem 1.75rem",
            border: "1px solid var(--line)",
            borderRadius: "2px",
            cursor: "pointer",
          }}
        >
          See our services
          <ArrowDown size={16} />
        </button>
      </div>

      {/* Trust bar */}
      <div
        style={{
          marginTop: "5rem",
          display: "flex",
          gap: "3rem",
          flexWrap: "wrap",
          justifyContent: "center",
          borderTop: "1px solid var(--line)",
          paddingTop: "2.5rem",
          width: "100%",
          maxWidth: "680px",
        }}
      >
        {[
          { stat: "100%", label: "Client satisfaction" },
          { stat: "2+", label: "Businesses served" },
          { stat: "Fast", label: "Turnaround" },
        ].map(({ stat, label }) => (
          <div key={label} style={{ textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 560,
                color: "var(--ink)",
                marginBottom: "0.25rem",
              }}
            >
              {stat}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ink-soft)",
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
