#!/bin/bash

source ./env.sh

docker build -t ${IMAGE_NAME}:${IMAGE_VERSION} .