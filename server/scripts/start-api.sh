#!/usr/bin/env bash

# Starts API service

conda deactivate
export PYTHONPATH=$PWD
source venv/bin/activate
uvicorn app:app --reload --port 3001