import { StyleRule } from '@vanilla-extract/css';

type BP = 'mobile' | 'tablet' | 'desktop' | string;

export const breakpoints = {
  mobile: '640px',
  tablet: '960px',
  desktop: '1280px',
};

export const breakpoint = (rules: Partial<Record<BP, StyleRule>>) => {
  const mediaQueries = Object.entries(rules).reduce(
    (acc, [bp, rule]) => {
      if (rule) {
        const minWidth: string = breakpoints[bp as keyof typeof breakpoints] || bp;
        acc[`screen and (min-width: ${minWidth})`] = rule;
      }
      return acc;
    },
    {} as Record<string, StyleRule>,
  );

  return {
    '@media': mediaQueries,
  };
};
