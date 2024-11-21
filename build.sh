#!/bin/bash
original_dir=$(pwd)
!cp .envproduction .env
!cat .env
!npm i
npm run generate
SOURCE_DIR="${original_dir}/.output/public"
DEST_THEMES_FOLDER="${original_dir}/etc"
PHP_THEMES_FOLDER="${original_dir}/themes"
rm -rf "${PHP_THEMES_FOLDER}/public"
cp -r "${SOURCE_DIR}" "${PHP_THEMES_FOLDER}/"
ZIP_FILE="nasha-store.zip"
if [ -f "${DEST_THEMES_FOLDER}/${ZIP_FILE}" ]; then
    rm "${DEST_THEMES_FOLDER}/${ZIP_FILE}"
fi
zip -r "${ZIP_FILE}" "${PHP_THEMES_FOLDER}"
mv "${ZIP_FILE}" "${DEST_THEMES_FOLDER}/"
echo "Build successfully"
