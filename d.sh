#!/bin/bash
handle_git() {
  git add .
  git commit -m "i commit"
  git push -u origin main
}

original_dir=$(pwd)

cp .envproduction .env
handle_git
