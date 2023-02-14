#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

echo "m3labexperiment.com" > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/FrankBianDuo/M3LabExperiments.git master:gh-pages

cd -
