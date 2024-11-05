import { clsx } from 'clsx';
import React, { ComponentProps, ReactNode } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import * as styles from './styles.css';

type LayoutProps = ComponentProps<'div'> & {
  className?: string;
  children: ReactNode;
};

const Layout = ({ className, children, ...props }: LayoutProps) => {
  return (
    <div className={styles.root}>
      <Sidebar />
      <Header />
      <main
        className={clsx(styles.main, className)}
        {...props}
        data-animate={true}
        data-animate-speed="slow"
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
