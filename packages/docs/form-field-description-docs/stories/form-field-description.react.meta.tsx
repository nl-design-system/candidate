import type { Meta } from '@storybook/react-vite';
import { FormFieldDescription } from '@nl-design-system-candidate/form-field-description-react/css';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: FormFieldDescription,
} satisfies Meta<typeof FormFieldDescription>;

export default meta;
