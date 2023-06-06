import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to the Inbetween</h1>
      <p>
        A land a bit different from ours, where the familiar is few and far
        between.
      </p>
      <Link href={"/scene/1"}>
        <a className="start-button">Start your Journey</a>
      </Link>
    </div>
  );
}
