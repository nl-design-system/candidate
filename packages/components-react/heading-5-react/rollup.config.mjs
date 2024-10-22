import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import nodeExternals from 'rollup-plugin-node-externals';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default {
  input: ['./src/heading-5.tsx', './src/css.tsx'],
  output: {
    dir: './dist/',
    format: 'es',
    sourcemap: true, // needed because of tsconfig.build.json
  },
  plugins: [
    peerDepsExternal(),
    nodeExternals(),
    nodeResolve({ browser: true }),
    typescript({ tsconfig: './tsconfig.build.json' }),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.ts', '.tsx'],
      inputSourceMap: true,
      plugins: ['@babel/plugin-transform-runtime'],
    }),
    postcss(),
  ],
};
