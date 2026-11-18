import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "../content/metadata";
import { abri } from "../content/products";
import { founder, site } from "../content/site";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Company",
  description:
    "Meet Marc Cormier, founder of EverRoute, a Canadian technology company in New Brunswick. See how the question behind the company shapes its work on ABRI.",
  path: "/company/",
});

export default function CompanyPage() {
  return (
    <>
      <section className={styles.profile} aria-labelledby="company-title">
        <div className={`container ${styles.spread}`}>
          <div className={styles.introduction}>
            <p className={styles.location}>{site.location}</p>
            <h1 id="company-title" className={styles.title}>
              Why EverRoute exists<span>.</span>
            </h1>
            <p className={styles.lead}>
              A calendar can hold an appointment. A note can hold the details.
              Someone still has to put the two together.
            </p>
            <p className={styles.story}>
              As a parent, {site.founder} knows that work firsthand. He founded
              EverRoute to bring his experience in technology to the problems he
              kept running into at home.
            </p>
            <p className={styles.story}>
              That experience shapes EverRoute’s work as a technology company.
              We start with an everyday need and ask what should stay private
              and what people want to decide for themselves. We’re taking that
              approach with {abri.name}.
            </p>
          </div>
          <figure className={styles.portraitFigure}>
            <Image
              className={styles.portrait}
              src="/marc-cormier-900.jpg"
              alt="Portrait of Marc Cormier"
              width={900}
              height={1200}
              loading="eager"
            />
            <figcaption className={styles.caption}>
              <strong>{site.founder}</strong>
              <span>Founder, EverRoute</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.question} aria-labelledby="question-title">
        <div className={`container ${styles.questionLayout}`}>
          <h2 id="question-title" className={styles.sectionLabel}>
            The question behind EverRoute
          </h2>
          <blockquote className={styles.quotation}>
            <p>“{founder.question}”</p>
          </blockquote>
        </div>
      </section>

      <section className={styles.roots} aria-labelledby="roots-title">
        <div className={["container", styles.rootsLayout].join(" ")}>
          <div className={styles.rootsCopy}>
            <p className={styles.sectionLabel}>Our roots</p>
            <h2 id="roots-title" className={styles.rootsTitle}>Rooted in New Brunswick.</h2>
            <p>
              EverRoute is based in New Brunswick. The Saint John River runs
              through the province we call home. Our work begins here, with
              real places, real people, and everyday life.
            </p>
          </div>
          <figure className={styles.riverFigure}>
            <Image
              className={styles.riverImage}
              src="/fredericton-wolastoq-aerial.webp"
              alt="Aerial view of downtown Fredericton beside the Wolastoq (Saint John River), New Brunswick"
              width={1920}
              height={1150}
              loading="lazy"
            />
            <figcaption className={styles.riverCredit}>
              Fredericton and the Wolastoq (Saint John River) · Photo by{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Fredericton,_New_Brunswick_aerial_view_(cropped).jpg">Quintin Soloviev</a>
              {" · "}
              <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
              {" · "}Cropped and converted to WebP.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.work} aria-labelledby="work-title">
        <div className={`container ${styles.workLayout}`}>
          <div>
            <h2 id="work-title" className={styles.workTitle}>
              Building {abri.name}
            </h2>
            <p className={styles.status}>{abri.status}</p>
          </div>
          <div className={styles.workCopy}>
            <p>
              {abri.name} is EverRoute’s private AI assistant for family life.
              We’re designing it to help people make plans together and find the
              information their household has already shared.
            </p>
            <a className={styles.productLink} href={abri.links[0].href}>
              {abri.links[0].label} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
