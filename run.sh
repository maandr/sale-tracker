#!/bin/bash

docker-compose down

./scripts/docker-build.sh

docker-compose up -d