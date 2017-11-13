#!/bin/bash

docker-compose down

tsc
./scripts/docker-build.sh

docker-compose up -d