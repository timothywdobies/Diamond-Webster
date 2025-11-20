#!/bin/bash

echo "Installing dependencies..."
npm install

echo "Building project..."
npm run build

echo "Opening dist folder..."
open dist

echo "Done! Drag the dist folder to Netlify."
