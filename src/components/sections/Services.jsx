import React from "react";
import { Grid, Column, Tile } from "@carbon/react";

const SERVICES = [
  {
    title: "Website Development & Management",
    body: "I design and build custom websites, then keep them fast, secure, and current long after launch — so the site keeps working for your business, not the other way around.",
  },
  {
    title: "Brand Identity & Recognition",
    body: "I help you define how your business looks and sounds online, from visual identity to consistent messaging across your site, socials, and everywhere else people find you.",
  },
  {
    title: "Digital Presence Strategy",
    body: "I map out where your business should show up online and how to make the most of each platform, so your time and budget go toward what actually moves the needle.",
  },
  {
    title: "Strategic Technical Planning",
    body: "I plan the technology decisions behind your growth — what to build now, what to hold off on, and how each piece fits together as the business scales.",
  },
];

function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "4rem 0",
        backgroundColor: "var(--paper-alt)",
      }}
    >
      <Grid fullWidth style={{ maxWidth: "1300px", margin: "auto" }}>
        {/* Section header */}
        <Column sm={4} md={8} lg={4} style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--ink-soft)",

            }}
          >
            Services
          </h2>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--cds-heading-04-font-size)",
              fontWeight: 560,
              lineHeight: 1.08,
              color: "var(--ink)",
              marginBottom: "var(--cds-spacing-10)",
              maxWidth: "42ch",
            }}
          >
            Everything you need to show up online with confidence.
          </h2>
        </Column>

        <Column sm={4} md={8} lg={12}>
          {/* Service cards */}
          {SERVICES.map((service) => (
            <div
              style={{
                marginBottom: "2rem",
                borderBottom: "1px solid var(--line)",
                paddingBottom: "2.5rem",
              }}
              key={service.title}
            >
              <h4>{service.title}</h4>
              {service.body}
            </div>
            // <Column key={service.title} sm={4} md={4} lg={4}>
            //   <Tile
            //     style={{
            //       height: "100%",
            //       padding: "var(--cds-spacing-07)",
            //       backgroundColor: "var(--paper)",
            //       borderTop: "1px solid var(--line)",
            //     }}
            //   >
            //     <h3
            //       style={{
            //         fontFamily: "var(--font-display)",
            //         fontSize: "1.35rem",
            //         fontWeight: 440,
            //         lineHeight: 1.08,
            //         color: "var(--ink)",
            //         marginBottom: "var(--cds-spacing-05)",
            //       }}
            //     >
            //       {service.title}
            //     </h3>
            //     <p
            //       style={{
            //         fontFamily: "var(--font-body)",
            //         fontSize: "var(--cds-body-01-font-size)",
            //         lineHeight: "var(--cds-body-01-line-height)",
            //         color: "var(--ink-soft)",
            //       }}
            //     >
            //       {service.body}
            //     </p>
            //   </Tile>
            // </Column>
          ))}
        </Column>
      </Grid>
    </section>
  );
}

export default Services;
