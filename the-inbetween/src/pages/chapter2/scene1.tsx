import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene2() {
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
        <p>You turn around to where you were first facing.</p>
        <p>You stare ahead at the long journey that stretches before you.</p>
        <p>
          In an instant, a formidable creature materializes in front of you.
        </p>
        <p>It has been watc hing you...</p>
        <p>It has seen everything, even though you could not see it...</p>
        <p className={styles.textThought}>
          Maybe it didn&apos;t want me to be seen...
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href={"/chapter1/scene3"}>
          <button className={styles.choiceButton}>Look the other way</button>
        </Link>
        <button className={styles.choiceButton}>Turn around</button>
      </div>
    </div>
  );
}
