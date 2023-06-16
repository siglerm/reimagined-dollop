import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene7() {
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
          You stand in the realm of the inbetween.
        </p>
        <p className={styles.beastText}>It might be by fate or by chance.</p>
        <p className={styles.beastText}>
          I cannot tell you which, becauses I do not know.
        </p>
        <p className={styles.beastText}>
          Some answers will be revealed in time and others were never meant to
          be known...
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="chapter3/scene1">
          <button className={styles.choiceButton}>
            What should I do next then?
          </button>
        </Link>
      </div>
    </div>
  );
}
