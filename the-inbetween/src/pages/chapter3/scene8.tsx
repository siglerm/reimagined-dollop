import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene8() {
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
          As you&apos;re frantically searching around, you hear strange noises
          coming from whatever is surrounding you.
        </p>
        <p>You listen a bit closer and it sounds... almost familiar...</p>
        <p>One of them steps forward and holds out their hand.</p>
        <p className={styles.textThought}>
          It sseems like they want me to touch their hand...
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene9">
          <button className={styles.choiceButton}>Slap their hand away</button>
        </Link>
        <Link href="scene10">
          <button className={styles.choiceButton}>Accept their hand</button>
        </Link>
      </div>
    </div>
  );
}
