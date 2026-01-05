import type { Meta } from '@storybook/react-vite';
import { Code } from '@nl-design-system-candidate/code-react/css';

const CLASSES = 'classes';
const ATTRIBUTES = 'attributes';

const meta = {
  argTypes: {
    nlCode: {
      name: 'nl-code',
      description: 'De basis class van dit component',
      control: false,
      type: { name: 'other', value: 'string', required: true },
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    dir: {
      description:
        'Zet het `dir` attribute op `lrt` om aan te geven dat de code van links naar rechts wordt weergegeven',
      control: false,
      type: { name: 'other', value: 'string' },
      table: {
        category: ATTRIBUTES,
        type: { summary: `"lrt"` },
      },
    },
    translate: {
      description: 'Zet de translate attribute op `no` zodat een screenreader de code niet probeert te vertalen',
      control: false,
      type: { name: 'other', value: 'string' },
      table: {
        category: ATTRIBUTES,
        type: { summary: `"no"` },
      },
    },
    children: {
      table: { disable: true },
    },
  },
  component: (props) => <Code {...props} />,
} satisfies Meta;

export default meta;
