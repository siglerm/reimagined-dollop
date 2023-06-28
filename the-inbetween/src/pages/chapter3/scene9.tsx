import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene9() {
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
        <p>That&apos;s just rude...</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene10">
          <button className={styles.choiceButton}>Accept their hand</button>
        </Link>
      </div>
    </div>
  );
}
