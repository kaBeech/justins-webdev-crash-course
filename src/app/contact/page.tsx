import SocialLinks from "@/components/socialLinks";
import styles from "../page.module.css";

export default function Contact() {
  return (
    <main className={styles.main}>
      <h1>
        Contact
      </h1>
      <section className="marginTop8 marginBottomAuto textLarge">
        <SocialLinks />
      </section>
    </main>
  );
}
