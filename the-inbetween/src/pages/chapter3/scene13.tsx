import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene13() {
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
        <p className={styles.villageText}>
          We will watch and help when needed.
        </p>
        <p className={styles.villageText}>
          This path that you walk is meant for you and you alone.
        </p>
        <p className={styles.villageText}>We cannot walk it for you...</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/chapter4/scene1">
          <button className={styles.choiceButton}>
            Continue on your journey
          </button>
        </Link>
      </div>
    </div>
  );
}
