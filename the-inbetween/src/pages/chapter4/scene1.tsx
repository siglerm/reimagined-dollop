import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene1() {
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
        <p>
          Grateful for their presence and guidance, you thank the creatures and
          continue down the path.
        </p>
        <p>As you walk away you hear a voice from behind...</p>
        <p className={styles.villageText}>
          Be careful sleeping on this path, lest you not wake up...
        </p>
        <p>
          Their words linger in the air, a solemn reminder to remain vigilant...
        </p>
        <p className={styles.textThought}>I must be careful going forward...</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene2">
          <button className={styles.choiceButton}>
            Continue along the path
          </button>
        </Link>
      </div>
    </div>
  );
}
