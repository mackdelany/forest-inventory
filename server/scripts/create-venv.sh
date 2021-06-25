#!/usr/bin/env bash

# Creates venv and installs requirements

echo "Creating venv"
python3.9 -m venv venv
source venv/bin/activate

echo "Installing requirements"
pip install -r requirements.txt