#!/bin/bash

rm -rf canvas.txt
npm install > /dev/null 2>&1
npm test >> canvas.txt 2>&1
echo "Canvas output written to canvas.txt"
echo "You can upload this file to Canvas for grading."