import nlDesignSystemConfig from '@nl-design-system/eslint-config';
import { globalIgnores } from 'eslint/config';

export default [
  ...nlDesignSystemConfig,
  globalIgnores(['**/playwright-report/', '**/test-results/', '**/e2e/playwright/.cache/']),
];
