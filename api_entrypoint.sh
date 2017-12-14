#!/usr/bin/env sh
echo $1
if [ "$1" ]
then
  echo "run develop"
  npm start
else
  echo "run release"
  npm run release
fi
