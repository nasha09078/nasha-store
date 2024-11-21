#!/bin/bash
original_dir=$(pwd)

# Run the build command
npm run generate

# Define source and destination directories
SOURCE_DIR="/home/mfoud444/1project/customar/freelancer/amjad/nasha-store/.output/public"
DEST_DIR="/home/mfoud444/Desktop/htdocs/htdocs/wordpress/wp-content/themes/nasha-store"
DEST_THEMES_FOLDER="/home/mfoud444/1project/customar/freelancer/amjad/nasha-store/etc"
PHP_THEMES_FOLDER="/home/mfoud444/1project/customar/freelancer/amjad/nasha-store/themes"

# Delete the existing folder
rm -rf "${DEST_DIR}/public"

# Copy the new folder
cp -r "${SOURCE_DIR}" "${DEST_DIR}/"

# Copy DEST_DIR to PHP_THEMES_FOLDER
cp -r "${DEST_DIR}" "${PHP_THEMES_FOLDER}/"

# Define the name for the zip file
ZIP_FILE="nasha-store.zip"

# Remove the existing zip file in DEST_THEMES_FOLDER if it exists
if [ -f "${DEST_THEMES_FOLDER}/${ZIP_FILE}" ]; then
    rm "${DEST_THEMES_FOLDER}/${ZIP_FILE}"
fi

# Create a zip archive of the PHP_THEMES_FOLDER
zip -r "${ZIP_FILE}" "${PHP_THEMES_FOLDER}"

# Move the zip file to the DEST_THEMES_FOLDER
mv "${ZIP_FILE}" "${DEST_THEMES_FOLDER}/"


echo "Folder has been replaced successfully, zipped theme file has been copied, and old zip file has been removed from the destination folder."
