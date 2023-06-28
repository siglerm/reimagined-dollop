import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene10() {
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
          As your hand intertwines with theirs, the glow of the creatures eyes
          gets brighter and brighter.
        </p>
        <p>You see all of them staring at you...</p>
        <p>Maybe not at you, but through you...</p>
        <p>
          In their presence, you stand stripped of pretenses, vulnerable and
          exposed.
        </p>
        <p>
          After what feels like an eternity, you hear voices ring out from the
          creatures...
        </p>
        <p className={styles.villageText}>Welcome... Welcome... Welcome...</p>
        <p className={styles.textThought}>
          Maybe they&apos;re not as scary as I thought...
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene11">
          <button className={styles.choiceButton}>What are you?</button>
        </Link>
        <Link href="scene12">
          <button className={styles.choiceButton}>Who are you?</button>
        </Link>
      </div>
    </div>
  );
}
