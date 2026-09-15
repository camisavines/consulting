import React from "react";

const STEPS = [
  {
    number: "01",
    label: "Discover",
    description:
      "I start by understanding your business, goals, and the landscape you operate in — before writing a single line of code.",
  },
  {
    number: "02",
    label: "Plan",
    description:
      "I map out a clear, scoped roadmap that prioritises the highest-impact work and keeps surprises off the table.",
  },
  {
    number: "03",
    label: "Build",
    description:
      "I execute with precision — clean, maintainable work delivered incrementally so you can see progress at every step.",
  },
  {
    number: "04",
    label: "Grow",
    description:
      "I stay involved after launch to iterate, optimise, and ensure the solution keeps pace with your business.",
  },
];

function Approach() {
  return (
    <section
      id="approach"
      style={{
        padding: "6rem 1.5rem",
        backgroundColor: "var(--paper-alt)",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
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
            How we work
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 560,
              lineHeight: 1.08,
              color: "var(--ink)",
              maxWidth: "30ch",
            }}
          >
            A straightforward process designed to deliver results — not ceremony.
          </h2>
        </div>

        {/* Step grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0",
          }}
        >
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              style={{
                borderTop: "2px solid var(--accent)",
                paddingTop: "1.5rem",
                paddingRight: i < STEPS.length - 1 ? "2rem" : "0",
                paddingBottom: "2rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: "var(--accent)",
                  marginBottom: "1rem",
                }}
              >
                {step.number}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3vw, 2.8rem)",
                  fontWeight: 440,
                  lineHeight: 1.05,
                  color: "var(--ink)",
                  marginBottom: "1rem",
                }}
              >
                {step.label}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.93rem",
                  lineHeight: 1.7,
                  color: "var(--ink-soft)",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;
