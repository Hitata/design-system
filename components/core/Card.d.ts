import * as React from 'react';

/**
 * A raw structural block — hairline-framed panel, optional hard offset shadow.
 *
 * @startingPoint section="Surfaces" subtitle="Framed content block with eyebrow + title" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Ground color. `ink` flips to ink-slate with paper text. */
  surface?: 'paper' | 'cement' | 'plaster' | 'ink';
  /** Frame treatment. `block` adds the 4px hard offset shadow. */
  frame?: 'none' | 'hair' | 'thick' | 'block';
  /** Honest industrial material overlay. */
  texture?: 'none' | 'rivet' | 'grid' | 'mesh' | 'conduit' | 'distress';
  /** Add four corner bolts (riveted-panel detailing). */
  rivets?: boolean;
  /** Mono uppercase eyebrow above the title. */
  eyebrow?: string;
  /** Display-weight title. */
  title?: string;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
