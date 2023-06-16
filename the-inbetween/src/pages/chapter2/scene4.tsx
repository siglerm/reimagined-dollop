import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene4() {
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
        <p className={styles.beastText}>Welcome child...</p>
        <p className={styles.beastText}>
          You have began this journey on purpose or by accident...
        </p>
        <p className={styles.beastText}>
          By fate or by chance, but which it is does not matter.
        </p>
        <p className={styles.beastText}>You are simply here.</p>
        <p className={styles.beastText}>
          Now you must summon the courage to venture forth and see this journey
          through. It is a dept owed to your own spirit.
        </p>
        <p className={styles.beastText}>
          We, the stewards of this realm, are here to guide you along the path
          that lies ahead.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene5">
          <button className={styles.choiceButton}>Where should I go?</button>
        </Link>
        <Link href="scene6">
          <button className={styles.choiceButton}>What happened?</button>
        </Link>
      </div>
    </div>
  );
}
