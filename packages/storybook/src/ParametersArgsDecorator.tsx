import type { Decorator } from '@storybook/react';

export const ParametersArgsDecorator: Decorator = (Story, context) => {
  context.parameters['args'] = context.args;

  return (
    <div className="voorbeeld-theme">
      <Story />
    </div>
  );
};
