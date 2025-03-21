#!/usr/bin/env bash
set -euo pipefail

if ! command -v jq > /dev/null; then
  printf "is jq installed?\n\n"
  exit 1
fi

if ! command -v curl > /dev/null; then
  printf "is curl installed?\n\n"
  exit 1
fi

tokens_file=voorbeeld.tokens.json
temp_dir=$(mktemp -d)
trap "rm -rf ${temp_dir}" EXIT

curl --silent -O --output-dir "${temp_dir}" "https://raw.githubusercontent.com/nl-design-system/themes/refs/heads/main/packages/voorbeeld-design-tokens/figma/${tokens_file}"

for dir in packages/tokens/*-tokens; do
  # strip prefix
  component="${dir#packages/tokens/}"
  # strip suffix
  component="${component%-tokens}"
  jq -f scripts/filter.jq --arg key "components/${component}/nl" "${temp_dir}/${tokens_file}" | jq -S . > "${dir}/tokens.json"
done
