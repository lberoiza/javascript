#!/bin/bash

IMAGE_NAME='mongo:latest'
CONTAINER_NAME=mongodb
DATA_DIR='DB'
PORT=27017
NETWORK_NAME="frameworks_javascript"

# Crear carpeta de datos en el host si no existe
mkdir -p "$DATA_DIR"

# Crear la red Docker si no existe
docker network create "$NETWORK_NAME" 2>/dev/null || echo "La red ya existe."

# Iniciar el contenedor de MongoDB en la red
docker run --rm -d --name "$CONTAINER_NAME" -p "$PORT":27017 -v "$DATA_DIR":/data/db --network="$NETWORK_NAME" "$IMAGE_NAME"

echo "El contenedor de MongoDB se está ejecutando en el puerto $PORT y en la red $NETWORK_NAME."
