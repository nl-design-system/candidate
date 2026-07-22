// support import css files in TypeScript
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
