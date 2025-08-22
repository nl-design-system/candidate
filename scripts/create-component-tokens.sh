#!/usr/bin/env bash
set -euo pipefail

if [ $# -ne 1 ]; then
  printf 'Usage: %s <component-name>\n' "$0"
  exit 1
fi

# change to the repository root directory
cd "$(git rev-parse --show-toplevel)"

component=$(echo "$1" | tr '[:upper:]' '[:lower:]')
component_dir="./packages/tokens/${component}-tokens"
package_json="${component_dir}/package.json"

# this will silently fail if the directory already exists
mkdir -p "${component_dir}/docs"

# create new empty files but leave existing files alone
>>"${component_dir}/README.md"

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

# create empty tokens.json if needed
if [ ! -f "./tokens.json" ]; then
  jq --null-input --arg component "${component}" '{nl: {($component): {}}}' > "./tokens.json"
fi

# fill package.json
pnpm pkg set name="@nl-design-system-candidate/${component}-tokens"
pnpm pkg set version="${version}"
pnpm pkg set license="EUPL-1.2"
pnpm pkg set homepage="https://github.com/nl-design-system/candidate/tree/main/packages/tokens/${component}-tokens#readme"
pnpm pkg set main="./tokens.json"
pnpm pkg set export="./tokens.json"
# use files[0] instead of files[] to make this idempotent
pnpm pkg set files[0]="./tokens.json"
pnpm pkg set repository.type="git+ssh"
pnpm pkg set repository.url="git@github.com:nl-design-system/candidate.git"
pnpm pkg set repository.directory="packages/tokens/${component}-tokens"
# only make new components private
if [ "${version}" = "0.0.0" ]; then
  pnpm pkg set private=true --json
fi
pnpm pkg set publishConfig.access="public"
pnpm pkg set publishConfig.provenance=true --json
pnpm pkg set scripts["generate-tokens"]="../../../scripts/generate-tokens.sh ${component}"
