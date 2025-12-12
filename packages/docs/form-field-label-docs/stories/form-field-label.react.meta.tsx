import type { Meta } from '@storybook/react-vite';
import { FormFieldLabel } from '@nl-design-system-candidate/form-field-label-react/css';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: FormFieldLabel,
} satisfies Meta<typeof FormFieldLabel>;

export default meta;
