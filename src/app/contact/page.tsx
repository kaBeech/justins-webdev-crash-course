import SocialLinks from "@/components/socialLinks";
import styles from "../page.module.css";

export default function Contact() {
  return (
    <main className={styles.main}>
      <h1>
        Contact
      </h1>
      <SocialLinks class="marginTop8 marginBottomAuto textLarge" />
    </main>
  );
}
