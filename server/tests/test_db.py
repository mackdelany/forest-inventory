
from models.forest_table import ForestTable


def test_db_content(test_db_session):
    forests_table = test_db_session.query(ForestTable).all()
    forests = [f.to_dict() for f in forests_table]

    forest_names = [f['forest_name'] for f in forests]
    assert 'The Brook Waimarama Sanctuary' in forest_names
    assert 'Møysalen National Park' in forest_names
    assert 'Nelson Lakes' in forest_names

    forest_types = [f['forest_type'] for f in forests]
    assert all(t in ['Conservation', 'Reforestation'] for t in forest_types)

    assert all(isinstance(f['longitude'], float) for f in forests)
    assert all(isinstance(f['latitude'], float) for f in forests)
