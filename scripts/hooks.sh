#!/usr/bin/env bash

echo "📝  Do you want add git hooks? [y/N]: "
read DEFAULT
if [[ $DEFAULT =~ ^([Yy])$ ]]; then
  echo "🚨 Adding husky git hooks"
  npm install
  npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
fi
