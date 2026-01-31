'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './Header.module.css';

const Header = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.wrapper}>
          <Link href="/" className={css.logo}>
            <svg width="136" height="16" aria-hidden>
              <use href="/icons.svg#icon-travel-trucks" />
            </svg>
          </Link>

          <nav className={css.nav} aria-label="Main navigation">
            <Link
              href="/"
              className={`${css.link} ${isActive('/') ? css.active : ''}`}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
            </Link>

            <Link
              href="/catalog"
              className={`${css.link} ${isActive('/catalog') ? css.active : ''}`}
              aria-current={isActive('/catalog') ? 'page' : undefined}
            >
              Catalog
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
