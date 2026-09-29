import Image from "next/image";
import Link from "next/link";
import { ActionLink } from "./components/ActionLink";
import { ContactBand } from "./components/ContactBand";
import { FounderQuestion } from "./components/FounderQuestion";
import { GroundLine } from "./components/GroundLine";
import { NowBuilding } from "./components/NowBuilding";
import { PrincipleList } from "./components/PrincipleList";
import { ProductIndex } from "./components/ProductIndex";
import { Register } from "./components/Register";
import { SectionHeading } from "./components/SectionHeading";
import { commitments } from "./content/principles";
import { products } from "./content/products";
import { founder, site } from "./content/site";
import styles from "./page.module.css";

// The homepage is a cross-section. The light surface carries what people see:
// the company statement and its products. Everything below the single change
// to Root Black is what supports them.
export default function Home() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className="container">
          <p className="label">{site.location}</p>
          <h1 id="hero-title" className={`headline ${styles.heroTitle}`}>
            Thoughtful technology, designed to grow with people over time.
          </h1>
          <p className={`lead ${styles.heroLead}`}>
            EverRoute is a Canadian technology company building calm, practical
            AI products, including Haven, a private AI assistant for family
            life.
          </p>
          <div className={`actions ${styles.heroActions}`}>
            <ActionLink href="/#products">See what we’re building</ActionLink>
            <ActionLink href="/company/" variant="secondary">
              About EverRoute
            </ActionLink>
          </div>
        </div>
        <GroundLine draw className={styles.ground} />
        <div className="container">
          <Register
            items={[
              { term: "Now building", detail: <NowBuilding /> },
              { term: "Founder", detail: site.founder },
              {
                term: "Contact",
                detail: <a href={`mailto:${site.email}`}>{site.email}</a>,
              },
            ]}
          />
        </div>
      </section>

      <section
        id="products"
        className={styles.products}
        aria-labelledby="products-title"
      >
        <div className="container">
          <SectionHeading id="products-title" index="01" label="Products">
            What we’re building
          </SectionHeading>
          <div className={styles.shelf}>
            <ProductIndex products={products} />
          </div>
        </div>
      </section>

      <div className={`on-night ${styles.beneath}`}>
        <section
          id="approach"
          className={`section ${styles.approach}`}
          aria-labelledby="approach-title"
        >
          <div className="container">
            <SectionHeading
              id="approach-title"
              index="02"
              label="Approach"
              statement
              intro={
                <p>
                  Artificial intelligence is becoming more capable quickly.
                  Making it helpful, trustworthy, and comfortable to live with
                  takes deliberate work. Four principles shape how we build.
                </p>
              }
            >
              Capability is not the same as help.
            </SectionHeading>
            <div className={`offset ${styles.commitments}`}>
              <PrincipleList items={commitments} />
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="founder-title">
          <div className="container">
            <SectionHeading id="founder-title" index="03" label="Founder">
              {site.founder}
            </SectionHeading>
            <div className={`offset ${styles.founder}`}>
              <FounderQuestion />
              <div className={styles.founderRow}>
                {/* Decorative here: the founder is named in the heading above. */}
                <Image
                  className={styles.portrait}
                  src="/marc-cormier-288.jpg"
                  alt=""
                  width={288}
                  height={384}
                />
                <div className={styles.founderCopy}>
                  <p>{founder.bio}</p>
                  <p>
                    <Link className="text-link tap-target" href="/company/">
                      About EverRoute and its founder
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactBand index="04" />
      </div>
    </>
  );
}
