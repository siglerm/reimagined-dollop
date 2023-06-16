import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene5() {
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
        <p className={styles.beastText}>
          You do not need to know where you are going...
        </p>
        <p className={styles.beastText}>
          Just know that you are already on your way...
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene6">
          <button className={styles.choiceButton}>What happened?</button>
        </Link>
        <Link href="scene 7">
          <button className={styles.choiceButton}>
            Can I at least know where I am?
          </button>
        </Link>
      </div>
    </div>
  );
}
