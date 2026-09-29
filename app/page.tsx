import Image from "next/image";
import Link from "next/link";
import { ActionLink } from "./components/ActionLink";
import { ContactBand } from "./components/ContactBand";
import { PrincipleList } from "./components/PrincipleList";
import { ProductIndex } from "./components/ProductIndex";
import { Register } from "./components/Register";
import { SectionHeading } from "./components/SectionHeading";
import { commitments } from "./content/principles";
import { products } from "./content/products";
import { site } from "./content/site";
import styles from "./page.module.css";

// The homepage is a cross-section. The light surface carries what people see:
// the company statement and its products. Everything below the single change
// to Root Black is what supports them.
export default function Home() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className="container">
          <p className="label">EverRoute · {site.location}</p>
          <h1 id="hero-title" className={styles.heroTitle}>
            Thoughtful technology, designed to grow with people over time.
          </h1>
          <p className={`lead ${styles.heroLead}`}>
            EverRoute is a Canadian technology company. We start from a real
            human need, keep important decisions with people, and treat privacy
            as part of the architecture, not something added later.
          </p>
          <div className={styles.heroActions}>
            <ActionLink href="/#products">See what we’re building</ActionLink>
            <ActionLink href="/company/" variant="secondary">
              About EverRoute
            </ActionLink>
          </div>
        </div>
        <div className={styles.ground} aria-hidden="true" />
        <div className="container">
          <Register
            items={[
              {
                term: "Now building",
                detail: products.map((product, i) => (
                  <span key={product.id}>
                    {i > 0 ? "; " : null}
                    <a href={`#${product.id}`}>{product.name}</a>,{" "}
                    {product.status.toLowerCase()}
                  </span>
                )),
              },
              { term: "Based in", detail: site.location },
              {
                term: "Inquiries",
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
          className="section"
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
              The question behind EverRoute
            </SectionHeading>
            <div className={`offset ${styles.founder}`}>
              <figure className={styles.question}>
                <blockquote>
                  <p>
                    What would personal technology look like if it helped carry
                    some of life’s mental load without taking control away from
                    the person?
                  </p>
                </blockquote>
                <figcaption className={styles.byline}>
                  <Image
                    className={styles.portrait}
                    src="/marc-cormier-900.jpg"
                    alt=""
                    width={900}
                    height={1200}
                    sizes="96px"
                  />
                  <span>
                    <span className={styles.bylineName}>{site.founder}</span>
                    <span className={styles.bylineRole}>
                      Founder, EverRoute
                    </span>
                  </span>
                </figcaption>
              </figure>
              <div className={styles.founderCopy}>
                <p>
                  EverRoute was founded by {site.founder}, a Canadian technology
                  professional, husband, and father building products around a
                  problem he experiences personally.
                </p>
                <p>
                  <Link className="text-link" href="/company/">
                    About EverRoute and its founder
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactBand index="04" />
      </div>
    </>
  );
}
