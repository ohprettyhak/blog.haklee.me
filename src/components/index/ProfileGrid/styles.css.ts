import { style } from '@vanilla-extract/css';

import { breakpoint } from '@/styles/responsive.css';
import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const root = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  width: '100%',
  gap: rem(65),

  ...breakpoint({ tablet: { gridTemplateColumns: '1fr 1fr' } }),
});

export const container = style({
  ...theme.layouts.column,
  width: '100%',
});

export const title = style({
  ...theme.typographies.h3,
  color: theme.colors.gray.light,
});

export const cardProfileContainer = style({
  ...theme.layouts.rowBetween,
  height: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const cardProfileAuthor = style({
  ...theme.typographies.profile_name,
  width: '100%',
  textAlign: 'center',
});

export const cardProfileImage = style({
  width: rem(97),
  height: rem(97),
  borderRadius: rem(4),
});

export const cardProfileTitle = style({
  ...theme.typographies.profile_sub,
});

export const cardProfileContent = style({
  ...theme.typographies.profile_title,
  color: '#302C1D',
  whiteSpace: 'pre-wrap',
});

export const profileModalButton = style({
  ...theme.layouts.center,
  position: 'absolute',
  top: rem(15),
  right: rem(15),
  width: rem(28),
  height: rem(28),
  userSelect: 'none',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
});

export const profileModalButtonIcon = style({
  fontSize: '1.25rem',
  fontWeight: 500,
});

export const dialogOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'grid',
  placeItems: 'center',
  overflowY: 'auto',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  backdropFilter: `blur(${rem(11)})`,
  zIndex: theme.zIndices.overlay,
  transform: 'none',
});

export const dialogContainer = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: rem(958),
  paddingBlock: rem(62),
  paddingInline: rem(76),
  border: `${rem(1)} solid rgba(0, 0, 0, 0.03)`,
  borderRadius: rem(14),
  boxShadow: `
    inset 0 ${rem(-2)} ${rem(2)} rgba(255, 255, 255, 0.3),
    inset 0 ${rem(2)} ${rem(2)} rgba(255, 255, 255, 0.3)
  `,
  zIndex: theme.zIndices.modal,
});
