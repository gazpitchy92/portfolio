#!/bin/bash

git reset --hard HEAD
git pull
chmod +x host.sh
docker run --rm -it   -v "$(pwd):/app"   -w /app   -p 3000:5173   node:lts   sh -c "npm install && npm run dev -- --host"
