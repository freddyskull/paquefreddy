#!/bin/sh
set -e

# In producción, la imagen ya trae dist/ (multi-stage build).
# Este script solo arranca el servidor de preview.
# Si en algún caso dist/ no existe, mostramos un aviso.
if [ ! -d "./dist" ] || [ -z "$(ls -A ./dist 2>/dev/null)" ]; then
  echo "[frontend entrypoint.prod] WARNING: dist/ no encontrado en la imagen."
  echo "[frontend entrypoint.prod] Asegúrate de construir la imagen con 'docker build' (multi-stage)."
fi

echo "[frontend entrypoint.prod] Iniciando preview..."
exec npm run preview -- --host 0.0.0.0
