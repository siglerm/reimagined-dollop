import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene3() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {/* <Image
          src="/Chapter1:scene2.png"
          width={500}
          height={450}
          alt="Picture of a forest with red trees, birds circling in the air, dense canopies"
        /> */}
      </div>
      <div className={styles.textContainer}>
        <p>As you open your mouth to speak, no words come out.</p>
        <p>The beast&apos;s mouth open and speaks in your voice...</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene4">
          <button className={styles.choiceButton}>Listen</button>
        </Link>
      </div>
    </div>
  );
}
