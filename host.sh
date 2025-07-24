#!/bin/bash

git pull
docker run --rm -it   -v "$(pwd):/app"   -w /app   -p 5173:5173   node:lts   sh -c "npm install && npm run dev -- --host"
