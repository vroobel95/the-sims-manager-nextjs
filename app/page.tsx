import Image from 'next/image';
import styles from './page.module.css';
import Navbar from './ui/navbar';
import Sidebar from './ui/sidebar';

export default function Home() {
  return (
    <div className={styles.page}>
      <span>Welcome to The Sims Manager</span>
    </div>
  );
}
