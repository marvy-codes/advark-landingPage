#!/usr/bin/end sh

set -e 

yarn build

cd dist
git init 
git add -add -A
git commit -m "New Development"
git push -f https://github.com/marvy-codes/advark-landingPage.git main:gh-pages

cd -