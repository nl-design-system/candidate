import 'react';

declare module 'react' {
  export interface CSSProperties {
    [key: `--${'example' | 'nl'}-${string}`]: string | number | undefined;
  }
}
