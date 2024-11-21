#!/bin/bash
handle_git() {
  git add .
  git commit -m "i commit"
  git push -u origin main
}

original_dir=$(pwd)
DEST_DIR="/home/mfoud444/Desktop/htdocs/htdocs/wordpress/wp-content/themes/nasha-store"
PHP_THEMES_FOLDER="/home/mfoud444/1project/customar/freelancer/amjad/nasha-store/themes"
cp -r "${DEST_DIR}" "${PHP_THEMES_FOLDER}/"

cp .envproduction .env
handle_git
