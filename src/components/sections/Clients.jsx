import React from "react";
import { ArrowRight } from "@carbon/react/icons";

const clients = [
  {
    img: "/photos/clients/yap.png",
    title: "YouArePerfect LLC",
    description: "Brand identity and web presence for a growing wellness company.",
    link: "https://www.youareperfect.us/",
  },
  {
    img: "/photos/clients/ep.png",
    title: "Excellence Project",
    description: "Digital strategy and website development for a non-profit education initiative.",
    link: "https://www.excellenceproject.org/",
  },
];

function Clients() {
  return (
    <section
      id="clients"
      style={{
        padding: "6rem 1.5rem",
        backgroundColor: "var(--paper)",
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
            Our work
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
            Trusted by founders and small business owners.
          </h2>
        </div>

        {/* Client cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {clients.map((c) => (
            <div
              key={c.title}
              style={{
                backgroundColor: "var(--paper-alt)",
                border: "1px solid var(--line)",
                borderRadius: "3px",
                overflow: "hidden",
              }}
            >
              <img
                src={c.img}
                alt={c.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  display: "block",
                  borderBottom: "1px solid var(--line)",
                }}
              />
              <div style={{ padding: "1.75rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: 440,
                    color: "var(--ink)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    color: "var(--ink-soft)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {c.description}
                </p>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    color: "var(--ink)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--ink)",
                    paddingBottom: "1px",
                  }}
                >
                  Visit site <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
