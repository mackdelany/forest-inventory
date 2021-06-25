

FOREST_TABLE_COLUMNS = [
    'forestId', 'forestName', 'forestType', 'country', 'latitude',
    'longitude', 'briefDescription', 'longDescription', 'area',
    'carbonStored', 'thirtyDayCarbonChange', 'image'
]


def test_get_one_forest(client):
    res = client.get('/api/forests/1')
    assert res.status_code == 200
    assert [k in res.json() for k in FOREST_TABLE_COLUMNS]

    res = client.get('/api/forests/2')
    assert res.status_code == 200
    assert [k in res.json() for k in FOREST_TABLE_COLUMNS]

    res = client.get('/api/forests/3')
    assert res.status_code == 200
    assert [k in res.json() for k in FOREST_TABLE_COLUMNS]

    res = client.get('/api/forests/4')
    assert res.status_code == 200
    assert [k in res.json() for k in FOREST_TABLE_COLUMNS]


def test_get_all_forests(client):
    res = client.get('/api/forests')
    assert res.status_code == 200

    forests = res.json()
    assert isinstance(forests, list)
    assert len(forests) > 0

    for f in forests:
        assert isinstance(f['longitude'], float)
        assert isinstance(f['latitude'], float)
        assert isinstance(f['briefDescription'], str)
        assert isinstance(f['longDescription'], str)
