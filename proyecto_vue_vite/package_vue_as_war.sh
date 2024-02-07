#!/bin/bash

# Comando para construir la aplicación Vue.js
npm run build

# Directorio de salida de la aplicación Vue.js
distDir="dist"

# Directorio temporal para empaquetar los archivos WAR
tempDir="temp"

# Nombre del archivo WAR final
warFile="price-importer.war"

# Eliminar el directorio temporal si ya existe
if [ -d "$tempDir" ]; then
  rm -rf "$tempDir"
fi

# Crear el directorio temporal
mkdir -p "$tempDir/WEB-INF"

# Copiar los archivos estáticos de la aplicación Vue.js al directorio temporal
cp -R "$distDir"/* "$tempDir"

# Crear el archivo web.xml en el directorio temporal
echo '<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://java.sun.com/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd" version="3.0">
</web-app>' > "$tempDir/WEB-INF/web.xml"

# Empaquetar los archivos del directorio temporal en un archivo WAR
cd "$tempDir" || exit
jar -cvf "$warFile" .

# Mover el archivo WAR final al directorio raíz del proyecto Vue.js
mv "$warFile" ../

# Eliminar el directorio temporal
cd .. && rm -rf "$tempDir"

echo "El archivo WAR se ha creado correctamente."
