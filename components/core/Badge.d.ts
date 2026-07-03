import * as React from 'react';

/**
 * A small status / label chip. Tones map to the ngũ hành roles.
 *
 * @startingPoint section="Core" subtitle="Status & label chips" viewport="700x120"
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color role. */
  tone?: 'neutral' | 'primary' | 'success' | 'premium' | 'ink';
  /** Fill with the tone color instead of outlining. */
  solid?: boolean;
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
