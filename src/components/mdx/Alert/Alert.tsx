import React, { ReactNode } from 'react';

import * as styles from './styles.css';

type NoteProps = {
  children: ReactNode;
};

export const Note = ({ children }: NoteProps) => (
  <div className={styles.root.note} data-markdown-alert={true}>
    <div className={styles.title.note}>
      <span className="material-symbols-rounded">info</span>
      Note
    </div>
    {children}
  </div>
);

export const Tip = ({ children }: NoteProps) => (
  <div className={styles.root.tip} data-markdown-alert={true}>
    <div className={styles.title.tip}>
      <span className="material-symbols-rounded">lightbulb</span>
      Tip
    </div>
    {children}
  </div>
);

export const Important = ({ children }: NoteProps) => (
  <div className={styles.root.important} data-markdown-alert={true}>
    <div className={styles.title.important}>
      <span className="material-symbols-rounded">emergency_home</span>
      Important
    </div>
    {children}
  </div>
);

export const Warning = ({ children }: NoteProps) => (
  <div className={styles.root.warning} data-markdown-alert={true}>
    <div className={styles.title.warning}>
      <span className="material-symbols-rounded">warning</span>
      Warning
    </div>
    {children}
  </div>
);

export const Caution = ({ children }: NoteProps) => (
  <div className={styles.root.caution} data-markdown-alert={true}>
    <div className={styles.title.caution}>
      <span className="material-symbols-rounded">report</span>
      Caution
    </div>
    {children}
  </div>
);
