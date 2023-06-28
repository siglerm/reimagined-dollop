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
        <p>
          Your eyelids are heavy from the journey so far and before you know it,
          you have fallen asleep.
        </p>
        <p>
          When you awaken, you find yourself surrounded by unknown creatures.
        </p>
        <p>
          Standing at your eye level, these creatures possess an otherworldly
          aura, their eyes shimmer with an ethereal glow.
        </p>
        <p>
          Each one of them dons a mask adorned with a distinct fluorescent mark,
          hinting at some symbolism embedded within their existence...
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene8">
          <button className={styles.choiceButton}>
            Glance around for anything to help
          </button>
        </Link>
      </div>
    </div>
  );
}
