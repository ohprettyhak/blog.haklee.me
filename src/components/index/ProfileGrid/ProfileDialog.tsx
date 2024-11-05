import * as Dialog from '@radix-ui/react-dialog';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';

import { profile } from '@/constants/profile';

import * as styles from './styles.css';

type ProfileDialogProps = {
  children: ReactNode;
};

const ProfileDialog = ({ children }: ProfileDialogProps) => {
  const [open, setOpen] = useState(false);

  if (typeof window === 'undefined') return null;

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      {createPortal(
        <AnimatePresence mode="wait">
          {open && (
            <>
              <motion.div
                className={styles.dialogOverlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
              <Dialog.Content
                className={styles.dialogContainer}
                style={{
                  backgroundColor: profile.cardBackgroundColor,
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <Dialog.Close asChild>
                  <button className={styles.profileModalButton}>
                    <span
                      className={clsx(styles.profileModalButtonIcon, 'material-symbols-rounded')}
                      style={{ color: profile.modalButtonColor }}
                    >
                      close
                    </span>
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </Dialog.Root>
  );
};

export default ProfileDialog;
