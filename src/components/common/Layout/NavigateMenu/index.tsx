import { useLocation } from '@reach/router';
import { clsx } from 'clsx';
import { Link } from 'gatsby';
import React from 'react';

import { menuItems } from '@/constants/menu';

import * as styles from './styles.css';

const NavigateMenu = () => {
  const { pathname } = useLocation();
  const path: string = pathname.split('/')[1];

  return (
    <nav>
      <ul className={styles.navList}>
        {menuItems.map(menu => (
          <li
            key={menu.link}
            className={clsx(
              styles.navItem,
              path === menu.link.replace(/\//g, '') && styles.navItemActive,
            )}
          >
            <Link to={menu.link} className={styles.navLink}>
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigateMenu;
