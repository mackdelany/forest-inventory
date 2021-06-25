

from sqlalchemy import Column, Integer, String, Float
from sqlalchemy_serializer import SerializerMixin

from database import Base


class ForestTable(Base, SerializerMixin):
    __tablename__ = 'forests'
    forest_id = Column(Integer, primary_key=True, autoincrement=True)
    forest_name = Column(String())
    forest_type = Column(String())
    country = Column(String())
    latitude = Column(Float())
    longitude = Column(Float())
    brief_description = Column(String())
    long_description = Column(String())
    area = Column(Integer())
    carbon_stored = Column(Integer())
    thirty_day_carbon_change = Column(Integer())
    image = Column(String())

    def __init__(
        self,
        forest_name: str,
        forest_type: str,
        country: str,
        latitude: float,
        longitude: float,
        brief_description: str,
        long_description: str,
        area: int,
        carbon_stored: int,
        thirty_day_carbon_change: int,
        image: str
    ) -> None:
        self.forest_name = forest_name
        self.forest_type = forest_type
        self.country = country
        self.latitude = latitude
        self.longitude = longitude
        self.brief_description = brief_description
        self.long_description = long_description
        self.area = area
        self.carbon_stored = carbon_stored
        self.thirty_day_carbon_change = thirty_day_carbon_change
        self.image = image
