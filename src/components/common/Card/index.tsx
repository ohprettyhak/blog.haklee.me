import { clsx } from 'clsx';
import React, { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

import * as styles from './styles.css';

type CardProps = {
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<'div'>;

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, children, ...props },
  ref,
) {
  return (
    <div ref={ref} className={clsx(styles.root, className)} {...props}>
      {children}
    </div>
  );
});

type CardContentProps = {
  gap?: number;
} & ComponentPropsWithoutRef<'div'>;

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(function CardContent(
  { children, gap = 0, ...props },
  ref,
) {
  return (
    <div ref={ref} className={styles.content} style={{ gap }} {...props}>
      {children}
    </div>
  );
});

export default Object.assign({}, { Root: Card, Content: CardContent });
