#!/usr/bin/env bash

# Runs forest inventory tests

echo "Creating temporary virtual env"
cd server
python3 -m venv .venv-test
source .venv-test/bin/activate
export PYTHONPATH=$PWD
pip install -r requirements.txt

echo "Running tests"
pytest

echo "Tearing down venv"
deactivate
rm -rf .venv-test
cd ..
