import * as React from 'react';

/**
 * A square brutalist toggle — hard ink thumb, ember track when on.
 *
 * @startingPoint section="Forms" subtitle="On/off toggle with mono label" viewport="700x120"
 */
export interface SwitchProps {
  /** Controlled on/off value. */
  checked?: boolean;
  /** Initial value when uncontrolled. */
  defaultChecked?: boolean;
  /** Fires with the next boolean value. */
  onChange?: (checked: boolean) => void;
  /** Disabled state. */
  disabled?: boolean;
  /** Mono uppercase label beside the track. */
  label?: string;
  id?: string;
}

export function Switch(props: SwitchProps): JSX.Element;
