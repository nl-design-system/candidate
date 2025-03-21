#!/usr/bin/env bash
set -euo pipefail

script_name="${BASH_SOURCE[0]##*/}"
script_path="${BASH_SOURCE[0]%/*}"

if [ -z "${1-}" ]; then
  printf "%s\n\n" "Usage: ${script_name} <component>"
  exit 1
fi

if [ ! -e "${script_path}/filter.jq" ]; then
  printf "%s\n\n" "filter.jq is missing"
  exit 1
fi

if ! command -v jq > /dev/null; then
  printf "%s\n\n" "Is jq installed?"
  exit 1
fi

if ! command -v curl > /dev/null; then
  printf "%s\n\n" "Is curl installed?"
  exit 1
fi

tokens_file=voorbeeld.tokens.json
temp_dir=$(mktemp -d)
trap 'rm -rf "${temp_dir}"' EXIT

printf "%s\n\n" "Downloading latest tokens from the ‘themes’ repository."
curl --silent -O --output-dir "${temp_dir}" "https://raw.githubusercontent.com/nl-design-system/themes/refs/heads/main/packages/voorbeeld-design-tokens/figma/${tokens_file}"

printf "%s\n\n" "Extracting and converting ‘${1}’ tokens."
jq -f "${script_path}/filter.jq" --arg key "components/${1}/nl" "${temp_dir}/${tokens_file}" | jq -S . > "./tokens.json"

printf "%s\n\n" "Adding design tokens using this script will extend the official public API for design tokens. Changing design tokens might be a breaking change. Follow the official process for API changes and request reviews by the appropriate team members before you merge changes like this."
