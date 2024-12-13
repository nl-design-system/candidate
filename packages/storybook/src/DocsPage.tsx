import { DocsHeader } from '@nl-design-system-candidate/storybook-shared/src/DocsHeader';
import { Controls, Description, Stories, Subtitle, Title } from '@storybook/blocks';

export const DocsPage = () => (
  <>
    <DocsHeader />
    <Title />
    <Subtitle />
    <Description />
    <Controls />
    <Stories />
  </>
);
