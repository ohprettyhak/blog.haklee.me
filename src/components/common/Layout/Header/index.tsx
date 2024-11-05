import * as Accordion from '@radix-ui/react-accordion';
import dayjs from 'dayjs';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import React, { Fragment, useState } from 'react';

import { useSiteMetadata } from '@/hooks/useSiteMetadata';

import Divider from '../../Divider';
import NavigateMenu from '../NavigateMenu';
import ThemeToggle from '../ThemeToggle';
import * as styles from './styles.css';

const Header = () => {
  const { title, author } = useSiteMetadata();

  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <Accordion.Root type="single" value={accordionOpen ? 'menu' : ''} collapsible>
        <AnimatePresence>
          {accordionOpen && (
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setAccordionOpen(false)}
            />
          )}
        </AnimatePresence>

        <header className={styles.root}>
          <div className={styles.inner}>
            <Link to="/" className={styles.branding}>
              {title}
            </Link>

            <Accordion.Item
              className={styles.menuContainer}
              id="menu-accordion-item"
              value="menu"
              aria-label="Menu Accordion"
            >
              <button
                className={styles.menu}
                onClick={() => setAccordionOpen(!accordionOpen)}
                aria-controls="menu-accordion-content"
              >
                {accordionOpen ? '-' : 'menu'}
              </button>
              <Accordion.Content
                className={styles.menuContent}
                id="menu-accordion-content"
                aria-labelledby="menu-accordion-item"
              >
                <div className={styles.menuContentInner}>
                  <div className={styles.menuContentNavigation}>
                    <NavigateMenu />
                    <ThemeToggle />
                  </div>
                  <p className={styles.license}>
                    Copyright © {dayjs().year()} {author}, All rights reserved.
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </div>
        </header>
      </Accordion.Root>

      <div className={styles.dividerContainer}>
        <Divider />
      </div>
    </Fragment>
  );
};

export default Header;
