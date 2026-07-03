import * as React from 'react';

/**
 * The primary action primitive — square, hairline-bordered, mono uppercase label.
 *
 * @startingPoint section="Core" subtitle="Ember / ink-slate / ghost / link actions" viewport="700x140"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual role. `primary` is the one hero (ember). */
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  /** Control height / density. */
  size?: 'sm' | 'md' | 'lg';
  /** Disabled state — dims and blocks interaction. */
  disabled?: boolean;
  /** Stretch to fill the container width. */
  full?: boolean;
  /** Icon node placed before the label. */
  startIcon?: React.ReactNode;
  /** Icon node placed after the label. */
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
