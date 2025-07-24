#!/bin/bash

git reset --hard HEAD
git pull
docker run --rm -it   -v "$(pwd):/app"   -w /app   -p 80:5173   node:lts   sh -c "npm install && npm run dev -- --host"
