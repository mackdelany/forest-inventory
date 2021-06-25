
from pydantic import BaseModel


class GetForestRequest(BaseModel):
    forestId: int
    forestName: str
    forestType: str
    country: str
    latitude: float
    longitude: float
    briefDescription: str
    longDescription: str
    area: int
    carbonStored: int
    thirtyDayCarbonChange: int
    image: str


def forest_dict_to_get_request(forest: dict) -> GetForestRequest:
    forest['forestId'] = forest.pop('forest_id')
    forest['forestName'] = forest.pop('forest_name')
    forest['forestType'] = forest.pop('forest_type')
    forest['briefDescription'] = forest.pop('brief_description')
    forest['longDescription'] = forest.pop('long_description')
    forest['carbonStored'] = forest.pop('carbon_stored')
    forest['thirtyDayCarbonChange'] = forest.pop('thirty_day_carbon_change')
    return forest
