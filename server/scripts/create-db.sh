#!/usr/bin/env bash

# Creates sqlite db using forest_db.sql then fills db
# with example data using insert_forest_data.py

echo "Creating forest db"
sqlite3 ./db/forests.db < ./db/forest_db.sql

echo "Inserting test data into forest db"
source venv/bin/activate
python ./db/insert_forest_data.py