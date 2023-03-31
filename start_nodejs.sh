#!/bin/bash

# Define el nombre del proyecto
PROJECT_NAME="Backend"
IMAGE_NAME="nodejs-backend-image"
CONTAINER_NAME="nodejs-backend-container"
NETWORK_NAME="frameworks_javascript"
PORT=3000


# Obtiene la ruta absoluta del directorio actual
CURRENT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Cambia al directorio del proyecto donde se encuentra el Dockerfile
cd "$CURRENT_DIR/$PROJECT_NAME"

# Verifica si la imagen ya existe
if [[ "$(docker images -q $IMAGE_NAME 2> /dev/null)" == "" ]]; then
  # Si la imagen no existe, constrúyela a partir del Dockerfile
  docker build -t $IMAGE_NAME .
fi

# Verifica si el contenedor ya está en ejecución
if [[ "$(docker ps -aqf name=$CONTAINER_NAME 2> /dev/null)" == "" ]]; then
  # Si el contenedor no está en ejecución, crea uno nuevo
  docker run --rm -d -p "$PORT:$PORT" --name $CONTAINER_NAME -v "$CURRENT_DIR/$PROJECT_NAME:/app" --network="$NETWORK_NAME" $IMAGE_NAME
fi