// React's `ButtonHTMLAttributes` doesn't support the HTML `command` and
// `commandfor` attributes yet, so we provide them through this helper.
export const commandProps = (commandfor: string, command: string): React.ButtonHTMLAttributes<HTMLButtonElement> =>
  ({ commandfor, command }) as React.ButtonHTMLAttributes<HTMLButtonElement>;
