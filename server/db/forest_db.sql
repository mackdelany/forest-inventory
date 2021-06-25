CREATE TABLE forests (
  forest_id INTEGER NOT NULL,
  forest_name VARCHAR(30) DEFAULT NULL,
  forest_type VARCHAR(30) DEFAULT NULL,
  country VARCHAR(30) DEFAULT NULL,
  latitude FLOAT(8) DEFAULT NULL,
  longitude FLOAT(8) DEFAULT NULL,
  brief_description VARCHAR(255) DEFAULT NULL,
  long_description TEXT DEFAULT NULL,
  area int(11) DEFAULT NULL,
  carbon_stored int(11) DEFAULT NULL,
  thirty_day_carbon_change int(11) DEFAULT NULL,
  health_metrics JSON DEFAULT NULL,
  image VARCHAR(30) DEFAULT NULL,
  PRIMARY KEY (forest_id)
);