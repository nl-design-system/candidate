import { useOf } from '@storybook/addon-docs/blocks';

type ExternalLink = Record<'name' | 'url', string>;

export function DocsHeader() {
  const resolvedOf = useOf<'story'>('story');
  const { externalLinks } = resolvedOf.story.parameters;

  if (!Array.isArray(externalLinks || externalLinks.length === 0)) {
    return null;
  }

  return (
    <div style={{ display: 'flex', gap: '1rem', marginBlock: '1rem' }}>
      {(externalLinks as ExternalLink[]).map(({ name, url }) => (
        <a key={url} href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
      ))}
    </div>
  );
}
