import type { Meta, StoryObj } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import packageJSON from '../../components-react/heading-react/package.json';
import { Heading } from '../../components-react/heading-react/src/css';
import { I18nDecorator } from '../src/I18nDecorator';

const meta = {
  argTypes: {
    appearance: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6'],
      table: { category: 'API' },
    },
    children: { table: { category: 'API' } },
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      table: { category: 'API' },
    },
  },
  component: Heading,
  parameters: {
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=153-1039',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Heading',
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeadingLevel1: Story = {
  name: 'Heading 1',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 1,
  },
};

export const HeadingLevel1SmallViewport: Story = {
  name: 'Heading 1 (small viewport)',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 1,
  },
  globals: {
    viewport: { value: 'phone' },
    zoom: 1,
  },
};

export const HeadingLevel1Zoom400: Story = {
  name: 'Heading 1 (zoom 400%)',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 1,
  },
  globals: {
    viewport: { value: undefined },
    zoom: 4,
  },
};

export const HeadingLevel1Arabic: Story = {
  name: 'Heading 1 (Arabic)',
  args: {
    children: 'voorbeeld',
    level: 1,
  },
  decorators: [I18nDecorator],
  globals: {
    locale: 'ar',
  },
  render({ children, ...restProps }) {
    const { t } = useTranslation('translation', { keyPrefix: 'heading' });

    return <Heading {...restProps}>{t(children as string)}</Heading>;
  },
};

export const HeadingLevel2: Story = {
  name: 'Heading 2',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 2,
  },
};

export const HeadingLevel3: Story = {
  name: 'Heading 3',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 3,
  },
};

export const HeadingLevel4: Story = {
  name: 'Heading 4',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 4,
  },
};

export const HeadingLevel5: Story = {
  name: 'Heading 5',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 5,
  },
};

export const HeadingLevel6: Story = {
  name: 'Heading 6',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 6,
  },
};
