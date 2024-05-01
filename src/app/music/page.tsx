import styles from "../page.module.css";
import SoundCloudSection from "./soundcloudSection";

export default function Music() {
  return (
    <main className={styles.main}>
      <h1>
        Music
      </h1>
      <SoundCloudSection />
    </main>
  );
}
