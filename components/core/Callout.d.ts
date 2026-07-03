import * as React from 'react';

/**
 * An inline note block with a heavy left rule in the tone color.
 *
 * @startingPoint section="Feedback" subtitle="Note / aside with meaning-carrying edge" viewport="700x160"
 */
export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Edge color role. */
  tone?: 'primary' | 'success' | 'ink' | 'premium' | 'neutral';
  /** Mono uppercase title in the tone color. */
  title?: string;
  children?: React.ReactNode;
}

export function Callout(props: CalloutProps): JSX.Element;
