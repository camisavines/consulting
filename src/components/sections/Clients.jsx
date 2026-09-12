import React from "react";
import { Grid, Column, Tile } from "@carbon/react";

const clients = [
  {
    img: "/photos/clients/yap.png",
    title: "YouArePerfect LLC",
    quote: "",
    link: "https://www.youareperfect.us/"
  },
  {
    img: "/photos/clients/ep.png",
    title: "Excellence Project",
    quote: "",
    link: "https://www.excellenceproject.org/"
  },
];

function Clients() {
  return (
    <section
      id="clients"
      style={{
        padding: "3rem 0",
        // backgroundColor: 'var(--paper-alt)',
      }}
    >
      <Grid
        fullWidth
        style={{
          maxWidth: "1300px",
          margin: "auto",
        }}
      >
        <Column sm={4} md={2} lg={4}>
          <h2
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--ink-soft)",
            }}
          >
            Clients
          </h2>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--cds-heading-04-font-size)",
              fontWeight: 560,
              lineHeight: 1.08,
              color: "var(--ink)",
              marginBottom: "var(--cds-spacing-06)",
            }}
          >
            Trusted by founders and small business owners.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              lineHeight: "var(--cds-body-02-line-height)",
              color: "var(--ink-soft)",
              marginBottom: "var(--cds-spacing-10)",
              marginTop: "1rem",
            }}
          >
            I work with a select group of clients at a time to ensure every
            engagement gets the full attention it deserves.
          </p>
        </Column>

        <Column sm={4} md={6} lg={12} xlg={12}>
          {/* ── Client logo placeholder grid ─────────────────────── */}
          {/* TODO: Replace these placeholders with actual client logos */}
          <Grid narrow style={{paddingBottom: "4rem"}}>
            {clients.map((c, i) => (
              <Column sm={4} md={4} lg={6} key={i}>
                <img
                  src={c.img}
                  width={"100%"}
                  height={"80%"}
                  style={{
                    borderRadius: "15px",
                    marginBottom: "-25px",
                    padding: "0 10px",
                  }}
                />
                <Tile style={{ borderRadius: "10px", marginTop: "-10", background: "var(--paper)"}}>
                  <h4>{c.title}</h4>
                  <h4>"</h4>
                  <p>{c.quote}</p>
                </Tile>
              </Column>
            ))}
          </Grid>
        </Column>
      </Grid>
    </section>
  );
}

export default Clients;
