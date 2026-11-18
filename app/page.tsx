import Image from "next/image";
import Link from "next/link";
import { ProductIndex } from "./components/ProductIndex";
import { products } from "./content/products";
import { site } from "./content/site";
import styles from "./page.module.css";

const approach = [
  {
    title: "Notice the friction",
    body: "A time changes. Someone remembers hearing about it, but the message is buried. We look for moments like this, when a simple task takes more attention than it should.",
  },
  {
    title: "Keep the decision human",
    body: "We design for privacy by asking what each task needs. To plan a ride, a family may need the appointment time and place. The person going should decide whether to share the reason for the visit.",
  },
  {
    title: "Test it against a real day",
    body: "We start small and come back to the original problem. If using a tool is another thing to remember, there’s still work to do.",
  },
];

export default function Home() {
  return (
    <>
      <section className={`on-night ${styles.hero}`} aria-labelledby="hero-title">
        <picture className={styles.landscape}>
          <source media="(max-width: 660px)" srcSet="/st-john-river-sunset-real-mobile.webp" />
          <Image
            src="/st-john-river-sunset-real.webp"
            alt="Sunset over the Saint John River in New Brunswick, reflected beside wooded banks"
            width={2240}
            height={992}
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.intro}>
            <p className={styles.location}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" />
                <path d="m15.5 7.5-2 6-5 3 2-6z" fill="currentColor" />
              </svg>
              {site.location}
            </p>
            <h1 id="hero-title">Built for life<br /><em>as it’s lived.</em></h1>
            <p className={styles.lead}>
              EverRoute is a technology company building tools for the everyday
              work of remembering, planning, and making decisions.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#products">
                Explore our work <span aria-hidden="true">↓</span>
              </a>
              <Link className={styles.secondary} href="/company/">
                About EverRoute <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <p className={styles.photoCredit}>
          Photo by{" "}
          <a href="https://commons.wikimedia.org/wiki/File:St_John_River_sunset_new_brunswick.jpg">Jared DenHollander</a>
          . Cropped and converted to WebP. Crops licensed under{" "}
          <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.
        </p>
      </section>

      <section id="approach" className={styles.approach} aria-labelledby="approach-title">
        <div className={`container ${styles.story}`}>
          <div>
            <p className={styles.kicker}>Our approach</p>
            <h2 id="approach-title" className={styles.heading}>Start with a real day.</h2>
            <p className={styles.originCopy}>
              EverRoute began with a familiar feeling for founder Marc Cormier.
              Even when the day’s work is done, there’s still a whole list in
              your head. That experience shapes what we choose to build.
            </p>
            <Link className={styles.byline} href="/company/">
              <Image src="/marc-cormier-288.jpg" alt="" width={288} height={384} />
              <span>Meet the founder <span aria-hidden="true">→</span></span>
            </Link>
          </div>
          <div className={styles.principles}>
            {approach.map((item, index) => (
              <details name="approach" key={item.title} open={index === 0}>
                <summary>{item.title}<span aria-hidden="true" /></summary>
                <p>{item.body}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className={styles.work} aria-labelledby="work-title">
        <div className="container">
          <h2 id="work-title" className={styles.heading}>What we’re building</h2>
          <ProductIndex products={products} />
        </div>
      </section>
    </>
  );
}
