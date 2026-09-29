import type { Metadata } from "next";
import Image from "next/image";
import { ContactBand } from "../components/ContactBand";
import { FounderQuestion } from "../components/FounderQuestion";
import { GroundLine } from "../components/GroundLine";
import { NowBuilding } from "../components/NowBuilding";
import { PrincipleList } from "../components/PrincipleList";
import { Register } from "../components/Register";
import { SectionHeading } from "../components/SectionHeading";
import { pageMetadata } from "../content/metadata";
import { beliefs } from "../content/principles";
import { founder, site } from "../content/site";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Company",
  description:
    "EverRoute is a Canadian technology company in New Brunswick, founded by Marc Cormier. Haven, a private AI assistant for family life, is in development.",
  path: "/company/",
});

export default function CompanyPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="company-title">
        <div className="container">
          <p className="label">Company</p>
          <h1 id="company-title" className={`headline ${styles.title}`}>
            Building for the space between technical capability and real life.
          </h1>
        </div>
        <GroundLine className={styles.ground} />
        <div className="container">
          <Register
            items={[
              { term: "Based in", detail: site.location },
              { term: "Founder", detail: site.founder },
              { term: "Now building", detail: <NowBuilding hrefPrefix="/" /> },
              {
                term: "Contact",
                detail: <a href={`mailto:${site.email}`}>{site.email}</a>,
              },
            ]}
          />
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <SectionHeading id="why-title" index="01" label="Point of view">
            Why EverRoute exists
          </SectionHeading>
          <div className={`offset ${styles.why}`}>
            <div className="prose">
              <p>
                Many digital tools promise to save time while adding more
                notifications, more decisions, and more systems to maintain.
                EverRoute is exploring a different approach.
              </p>
              <p>
                Artificial intelligence is becoming more capable quickly. But
                capability alone does not make a product helpful, trustworthy,
                or comfortable to live with.
              </p>
              <p>
                EverRoute exists to turn emerging technical capabilities into
                products that feel useful in the ordinary moments where life
                actually happens.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.founderSection}`}
        aria-labelledby="founder-title"
      >
        <div className="container">
          <SectionHeading id="founder-title" index="02" label="Founder">
            {site.founder}
          </SectionHeading>
          <div className={styles.founder}>
            <Image
              className={styles.portrait}
              src="/marc-cormier-900.jpg"
              alt="Portrait of Marc Cormier, founder of EverRoute"
              width={900}
              height={1200}
            />
            <div className={styles.founderCopy}>
              <p className={styles.role}>Founder, EverRoute</p>
              <div className="prose">
                <p>{founder.bio}</p>
                <p>
                  Modern life asks people to keep track of work, family
                  responsibilities, appointments, goals, ideas, health, and
                  hundreds of unfinished details, often across disconnected apps
                  and systems.
                </p>
              </div>
              <div className={styles.question}>
                <FounderQuestion size="medium" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="principles-title">
        <div className="container">
          <SectionHeading
            id="principles-title"
            index="03"
            label="Product principles"
          >
            What every EverRoute product should be
          </SectionHeading>
          <div className={`offset ${styles.principles}`}>
            <div>
              <PrincipleList items={beliefs} />
              <p className={styles.more}>
                {/* Native anchor on purpose: next/link does not move keyboard
                    focus to a fragment target (see app/components/links.tsx). */}
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a className="text-link tap-target" href="/#approach">
                  Our approach
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactBand index="04" />
    </>
  );
}
