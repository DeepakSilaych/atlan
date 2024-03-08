import Link from 'next/link';
import { Search, TrendingUp, PlayCircle, Layers, Menu } from 'lucide-react';
import { useState } from 'react';
import styles from '@/styles/navbar.module.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}> 
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span>ML</span>Exchange
        </Link>
        <div className={styles.menuIcon} onClick={toggleNavbar}>
          <Menu />
        </div>
        <ul className={`${styles.navbarNav} ${isOpen ? styles.open : ''}`}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              <span>
                <Search />
                <span className={styles.navLinkText}>Explore</span>
              </span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/featured" className={styles.navLink}>
              <span>
                <TrendingUp />
                <span className={styles.navLinkText}>Top Charts</span>
              </span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/demo" className={styles.navLink}>
              <span>
                <PlayCircle />
                <span className={styles.navLinkText}>Try Out</span>
              </span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/provider" className={styles.navLink}>
              <span>
                <Layers />
                <span className={styles.navLinkText}>Become a Provider</span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
