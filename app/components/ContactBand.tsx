import { site } from "../content/site";
import { SectionHeading } from "./SectionHeading";
import styles from "./ContactBand.module.css";

type ContactBandProps = {
  index: string;
};

export function ContactBand({ index }: ContactBandProps) {
  return (
    <section
      id="contact"
      className={`section on-night ${styles.contact}`}
      aria-labelledby="contact-title"
    >
      <div className="container">
        <SectionHeading id="contact-title" index={index} label="Contact">
          Start a conversation.
        </SectionHeading>
        <div className={`offset ${styles.body}`}>
          <p className={styles.lead}>
            For partnerships, startup programs, media, research, or other
            professional inquiries.
          </p>
          <a
            className={styles.email}
            href={`mailto:${site.email}`}
            aria-label={`Email ${site.email}`}
          >
            {site.email}
          </a>
          <p className={styles.routing}>
            Looking for Haven? Visit{" "}
            <a className="text-link" href="https://heyhaven.ca">
              heyhaven.ca
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
