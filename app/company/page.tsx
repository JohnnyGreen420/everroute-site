import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactBand } from "../components/ContactBand";
import { PrincipleList } from "../components/PrincipleList";
import { Register } from "../components/Register";
import { SectionHeading } from "../components/SectionHeading";
import { pageMetadata } from "../content/metadata";
import { beliefs } from "../content/principles";
import { products } from "../content/products";
import { site } from "../content/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Company",
  ...pageMetadata({
    title: "Company · EverRoute",
    description:
      "EverRoute is a Canadian technology company in New Brunswick, founded by Marc Cormier. Haven, a private AI assistant for family life, is in development.",
    path: "/company/",
  }),
};

export default function CompanyPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="company-title">
        <div className="container">
          <p className="label">Company</p>
          <h1 id="company-title" className={styles.title}>
            Building for the space between technical capability and real life.
          </h1>
          <p className={`lead ${styles.lead}`}>
            EverRoute is a Canadian technology company in New Brunswick, founded
            by {site.founder}.
          </p>
        </div>
        <div className={styles.ground} aria-hidden="true" />
        <div className="container">
          <Register
            columns={4}
            items={[
              { term: "Based in", detail: site.location },
              { term: "Founder", detail: site.founder },
              {
                term: "Now building",
                detail: products.map((product, i) => (
                  <span key={product.id}>
                    {i > 0 ? "; " : null}
                    <Link href={`/#${product.id}`}>{product.name}</Link>,{" "}
                    {product.status.toLowerCase()}
                  </span>
                )),
              },
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
              sizes="(min-width: 1024px) 360px, (min-width: 720px) 40vw, 100vw"
            />
            <div className={styles.founderCopy}>
              <p className={styles.role}>Founder, EverRoute</p>
              <div className="prose">
                <p>
                  Marc is a Canadian technology professional, husband, and
                  father building products around a problem he experiences
                  personally.
                </p>
                <p>
                  Modern life asks people to keep track of work, family
                  responsibilities, appointments, goals, ideas, health, and
                  hundreds of unfinished details, often across disconnected apps
                  and systems.
                </p>
              </div>
              <figure className={styles.question}>
                <blockquote>
                  <p>
                    What would personal technology look like if it helped carry
                    some of life’s mental load without taking control away from
                    the person?
                  </p>
                </blockquote>
                <figcaption>The question behind EverRoute</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="principles-title">
        <div className="container">
          <SectionHeading id="principles-title" index="03" label="Principles">
            What every EverRoute product should be
          </SectionHeading>
          <div className={`offset ${styles.principles}`}>
            <div>
              <PrincipleList items={beliefs} />
              <p className={styles.more}>
                <Link className="text-link" href="/#approach">
                  How we build
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactBand index="04" />
    </>
  );
}
