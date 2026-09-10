import 'react';

declare module 'react' {
  export interface CSSProperties {
    [key: `--${'example' | 'denhaag' | 'utrecht' | 'nl'}-${string}`]: string | number | undefined;
  }
}
