export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  ignoreFiles: ['**/dist/'],
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
    'scss/at-mixin-pattern': '^[a-z][a-z0-9-_]*$',
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-default': true,
    'scss/dollar-variable-first-in-block': [true, { ignore: ['comments', 'imports'] }],
    'scss/dollar-variable-pattern': '^nl-[a-z0-9-]+$',
    'scss/percent-placeholder-pattern': '^nl-[a-z0-9-]+$',
    'scss/operator-no-newline-after': null,
    'scss/at-extend-no-missing-placeholder': null,
    'custom-property-pattern': '^_?nl-[a-z0-9-]+$',
    'selector-class-pattern': '^nl-[a-z0-9_-]+$',
    'keyframes-name-pattern': '^nl-[a-z0-9-]+$',
    'at-rule-no-unknown': null,
    'block-no-empty': [true],
    'color-no-invalid-hex': [true],
    'comment-no-empty': [true],
    'declaration-block-no-duplicate-properties': [true, { ignore: ['consecutive-duplicates-with-different-values'] }],
    'declaration-block-no-shorthand-property-overrides': [true],
    'font-family-no-duplicate-names': [true],
    'font-family-no-missing-generic-family-keyword': [true],
    'function-calc-no-unspaced-operator': [true],
    'function-linear-gradient-no-nonstandard-direction': [true],
    'keyframe-declaration-no-important': [true],
    'media-feature-name-no-unknown': [true],
    'no-descending-specificity': [true],
    'no-duplicate-at-import-rules': [true],
    'no-duplicate-selectors': [true],
    'no-empty-source': [true],
    'no-invalid-double-slash-comments': [true],
    'property-no-unknown': [true],
    'selector-pseudo-class-no-unknown': [true],
    'selector-pseudo-element-no-unknown': [true],
    'string-no-newline': [true],
    'unit-no-unknown': [true],
    'alpha-value-notation': ['percentage'],
    'hue-degree-notation': ['number'],
    'color-function-notation': ['modern'],
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
      },
    ],
    'font-weight-notation': [
      'numeric',
      {
        ignore: ['relative'],
      },
    ],
    'function-url-no-scheme-relative': [true],
    'unit-disallowed-list': [['s']],
    'font-family-name-quotes': ['always-unless-keyword'],
    'function-url-quotes': ['always'],
    'declaration-property-value-disallowed-list': [
      {
        'text-align': ['left', 'right'],
      },
    ],
    'property-disallowed-list': [
      [
        'border-bottom',
        'border-bottom-color',
        'border-bottom-left-radius',
        'border-bottom-right-radius',
        'border-bottom-style',
        'border-bottom-width',
        'border-left',
        'border-left-color',
        'border-left-style',
        'border-left-width',
        'border-right',
        'border-right-color',
        'border-right-style',
        'border-right-width',
        'border-top',
        'border-top-color',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-top-style',
        'border-top-width',
        'bottom',
        'contain-intrinsic-height',
        'contain-intrinsic-width',
        'height',
        'left',
        'margin',
        'margin-bottom',
        'margin-left',
        'margin-right',
        'margin-top',
        'max-height',
        'max-width',
        'min-height',
        'min-width',
        'padding',
        'padding-bottom',
        'padding-left',
        'padding-right',
        'padding-top',
        'right',
        'scroll-margin-bottom',
        'scroll-margin-left',
        'scroll-margin-right',
        'scroll-margin-top',
        'scroll-padding-bottom',
        'scroll-padding-left',
        'scroll-padding-right',
        'scroll-padding-top',
        'top',
        'width',
      ],
    ],
    'selector-max-id': [0],
    'selector-attribute-quotes': ['always'],
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
    'declaration-block-no-redundant-longhand-properties': null,
    'at-rule-empty-line-before': null,
    'rule-empty-line-before': null,
    'property-no-vendor-prefix': null,
  },
};
