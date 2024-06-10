import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello world!</h1>
      <Link href="/users" className={styles.homeButton}>Users</Link>
      <ProductCard/>
    </main>
  );
}
