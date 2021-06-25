
from typing import List, Optional

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import get_db
from models.forest_table import ForestTable
from models.forest_request import GetForestRequest, forest_dict_to_get_request


app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
def root() -> str:
    return "API Service for forest inventory; see '<endpoint>/docs' for more information"


@app.get("/api/forests/{forest_id}")
def get_forest_by_id(forest_id: int, db: Session = Depends(get_db)) -> GetForestRequest:
    """Get all data about a given forest

    Args:
        forest_id: the id of the forest to return
    """
    forest = db.query(ForestTable).filter_by(forest_id=forest_id).scalar()
    forest = forest.to_dict() if forest else None
    if forest:
        return forest_dict_to_get_request(forest)
    raise HTTPException(
        status_code=404, detail=f"Forest with ID {forest_id} does not exist")


@app.get("/api/forests")
def query_forest_table(
    forest_range: Optional[str] = None,
    search: Optional[str] = None,
    forest_type: Optional[str] = None,
    db: Session = Depends(get_db)
) -> List[GetForestRequest]:
    query = db.query(ForestTable)

    if forest_range:
        pass

    if search:
        pass

    if forest_type:
        pass

    forests = [forest_dict_to_get_request(f.to_dict()) for f in query.all()]
    return forests
