import { DocsHeader } from '@nl-design-system-candidate/storybook-shared/src/DocsHeader';
import { Controls, Description, Stories, Subtitle, Title, Primary } from '@storybook/addon-docs/blocks';

export const DocsPage = () => (
  <>
    <DocsHeader />
    <Title />
    <Subtitle />
    <Description />
    <Controls />
    <Primary />
    <Stories includePrimary={false} />
  </>
);
