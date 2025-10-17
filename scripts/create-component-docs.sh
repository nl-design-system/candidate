#!/usr/bin/env bash
set -euo pipefail

if [ $# -ne 1 ]; then
  printf 'Usage: %s <component-name>\n' "$0"
  exit 1
fi

# change to the repository root directory
cd "$(git rev-parse --show-toplevel)"

component=$(echo "$1" | tr '[:upper:]' '[:lower:]')
component_dir="./packages/docs/${component}-docs"
package_json="${component_dir}/package.json"

# this will silently fail if the directory already exists
mkdir -p "${component_dir}/docs"

# create new empty files but leave existing files alone
touch "${component_dir}/README.md"
touch "${component_dir}/docs/aliases.md"
touch "${component_dir}/docs/component.md"

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
pnpm pkg set "name=@nl-design-system-candidate/${component}-docs"
pnpm pkg set "version=${version}"
pnpm pkg set "license=CC0-1.0"
pnpm pkg set "homepage=https://github.com/nl-design-system/candidate/tree/main/packages/docs/${component}-docs#readme"
# use files[0] instead of files[] to make this idempotent
pnpm pkg set "files[0]=./docs/"
pnpm pkg set "repository.type=git+ssh"
pnpm pkg set "repository.url=git@github.com:nl-design-system/candidate.git"
pnpm pkg set "repository.directory=packages/docs/${component}-docs"
# only make new components private
if [ "${version}" = "0.0.0" ]; then
  pnpm pkg set "private=true" --json
fi
pnpm pkg set "publishConfig.access=public"
pnpm pkg set "publishConfig.provenance=true" --json
