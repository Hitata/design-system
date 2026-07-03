import * as React from 'react';

/**
 * Single-line text field — hairline frame, square corners, ember focus ring.
 *
 * @startingPoint section="Forms" subtitle="Labelled text field with hint / error" viewport="700x160"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Mono uppercase label rendered above the field. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — recolors the frame to ember and replaces the hint. */
  error?: string;
  /** Static prefix node inside the frame (e.g. a unit or sigil). */
  prefix?: React.ReactNode;
}

export function Input(props: InputProps): JSX.Element;
