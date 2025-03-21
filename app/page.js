import Image from "next/image";
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className="text-center text-4xl">Gallery</h1>
      <br></br>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <Image src="/gallery/1.jpg" alt="Image 1" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.gridItem}>
          <Image src="/gallery/2.jpg" alt="Image 2" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.gridItem}>
          <Image src="/gallery/3.jpg" alt="Image 3" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.gridItem}>
          <Image src="/gallery/4.jpg" alt="Image 4" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.gridItem}>
          <Image src="/gallery/5.jpg" alt="Image 5" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.gridItem}>
          <Image src="/gallery/6.jpg" alt="Image 6" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}