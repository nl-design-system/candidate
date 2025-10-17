#!/usr/bin/env bash
set -euo pipefail

if [ $# -ne 1 ]; then
  printf 'Usage: %s <component-name>\n' "$0"
  exit 1
fi

# change to the repository root directory
cd "$(git rev-parse --show-toplevel)"

component=$(echo "$1" | tr '[:upper:]' '[:lower:]')
component_dir="./packages/components-react/${component}-react"
package_json="${component_dir}/package.json"

# this will silently fail if the directory already exists
mkdir -p "${component_dir}/src"

# create new empty files but leave existing files alone
touch "${component_dir}/README.md"
touch "${component_dir}/src/${component}.test.tsx"
touch "${component_dir}/src/${component}.tsx"
touch "${component_dir}/src/css.test.tsx"
touch "${component_dir}/src/css.tsx"
touch "${component_dir}/babel.config.cjs"
touch "${component_dir}/rollup.config.mjs"
touch "${component_dir}/tsconfig.build.json"
touch "${component_dir}/tsconfig.json"
touch "${component_dir}/vitest.config.js"

# copy LICENSE file
cp ./scripts/LICENSE.EUPL-1.2.template.md "${component_dir}/LICENSE.md"

# create package.json if it doesn't exist
if [ ! -f "${package_json}" ]; then
  jq --null-input '{}' > "${package_json}"
  # set version to 0.0.0 for a new component
  version="0.0.0"
else
  # grab version from existing component
  version=$(jq --raw-output '.version' "${package_json}")
fi

# change to the component directory
cd "${component_dir}"

# fill package.json
pnpm pkg set name="@nl-design-system-candidate/${component}-react"
pnpm pkg set version="${version}"
pnpm pkg set description="TODO: Fill description"
pnpm pkg set license="EUPL-1.2"
pnpm pkg set homepage="https://github.com/nl-design-system/candidate/tree/main/packages/components-react/${component}-react#readme"
pnpm pkg set main="./dist/${component}.js"
# use files[0] instead of files[] to make this idempotent
pnpm pkg set files[0]="./dist/"
pnpm pkg set exports['.']['types']="./dist/${component}.d.ts"
pnpm pkg set exports['.']['import']="./dist/${component}.js"
pnpm pkg set exports['./css']['types']="./dist/css.d.ts"
pnpm pkg set exports['./css']['import']="./dist/css.js"
pnpm pkg set repository.type="git+ssh"
pnpm pkg set repository.url="git@github.com:nl-design-system/candidate.git"
pnpm pkg set repository.directory="packages/components-react/${component}-react"
# only make new components private
if [ "${version}" = "0.0.0" ]; then
  pnpm pkg set private=true --json
fi
pnpm pkg set publishConfig.access="public"
pnpm pkg set publishConfig.provenance=true --json
pnpm pkg set scripts['build']="../../../scripts/generate-tokens.sh ${component}"
pnpm pkg set scripts['build']="rollup --config ./rollup.config.mjs"
pnpm pkg set scripts['clean']="rimraf ./dist/ ./*.tsbuildinfo ./.rollup.cache/ ./coverage/"
pnpm pkg set scripts['test']="vitest run"
pnpm pkg set scripts['test:coverage']="vitest run --coverage"
pnpm pkg set scripts['test:watch']="vitest"
pnpm pkg set scripts['typecheck']="tsc"
pnpm pkg set devDependencies['@babel/preset-env']="7.28.0"
pnpm pkg set devDependencies['@babel/preset-react']="7.27.1"
pnpm pkg set devDependencies['@babel/preset-typescript']="7.27.1"
pnpm pkg set devDependencies['@babel/runtime']="7.28.2"
pnpm pkg set devDependencies["@nl-design-system-candidate/${component}-css"]='workspace:*'
pnpm pkg set devDependencies['@nl-design-system/rollup-config-react-component']="1.0.6"
pnpm pkg set devDependencies['@types/react']="18.3.23"
pnpm pkg set devDependencies['react']="18.3.1"
pnpm pkg set devDependencies['rimraf']="6.0.1"
pnpm pkg set devDependencies['rollup']="4.46.2"
pnpm pkg set devDependencies['typescript']="5.9.2"
pnpm pkg set devDependencies['vitest']="3.2.4"
pnpm pkg set peerDependencies['@babel/runtime']="^7"
pnpm pkg set peerDependencies['react']="^18"
pnpm pkg set dependencies['clsx']="2.1.1"

