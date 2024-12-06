import { DesignTokensTable } from '@nl-design-system-unstable/design-tokens-table-react/css';
import { isDesignTokenDefinition } from '@nl-design-system-unstable/tokens-lib/dist/design-tokens';
import { treeToMap, addPath } from '@nl-design-system-unstable/tokens-lib/dist/ExampleTokensCSS';
import { useOf } from '@storybook/blocks';

export function DesignTokens() {
  const resolvedOf = useOf<'story'>('story');
  const { tokens } = resolvedOf.story.parameters;

  if (!tokens) return null;

  const tokensMap = treeToMap(addPath(tokens, isDesignTokenDefinition), isDesignTokenDefinition);

  return <DesignTokensTable tokens={[]} tokensMap={tokensMap as any} />;
}
