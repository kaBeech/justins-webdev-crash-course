import styles from "../page.module.css";
import VideoSection from "./videoSection";
import SoundCloudSection from "./soundcloudSection";

export default function Music() {
  return (
    <main className={styles.main}>
      <h1>
        Music
      </h1>
      <VideoSection />
      <SoundCloudSection />
    </main>
  );
}
