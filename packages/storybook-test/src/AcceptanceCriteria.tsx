import { mergeMarkdown, replaceMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Markdown, useOf } from '@storybook/addon-docs/blocks';

export function AcceptanceCriteria() {
  const resolvedOf = useOf<'story'>('story');
  const { acceptanceCriteria } = resolvedOf.story.parameters;

  if (!AcceptanceCriteria) {
    return null;
  }

  // Use temporary heading1 to shift all heading levels by one and then remove it.
  const tmpH1 = '# x';

  return <Markdown>{replaceMarkdown(mergeMarkdown([tmpH1, acceptanceCriteria]), tmpH1, '')}</Markdown>;
}
