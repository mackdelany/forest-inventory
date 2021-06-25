
import json

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from config import DB_URL, FOREST_JSON
from models.forest_table import ForestTable


def insert_forest_data(path_to_db: str, path_to_forest_data: str) -> None:
    engine = create_engine(path_to_db)
    Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    db = Session()

    with open(path_to_forest_data) as f:
        forest_data = json.load(f)

    for forest in forest_data:
        new_forest = ForestTable(
            forest_name=forest['name'],
            forest_type=forest['type'],
            country=forest['country'],
            latitude=forest['latitude'],
            longitude=forest['longitude'],
            brief_description=forest['briefDescription'],
            long_description=forest['longDescription'],
            area=forest['area'],
            carbon_stored=forest['carbonStored'],
            thirty_day_carbon_change=forest['thirtyDayCarbonChange'],
            image=forest['image']
        )
        db.add(new_forest)

    db.commit()


if __name__ == '__main__':
    insert_forest_data(DB_URL, FOREST_JSON)
