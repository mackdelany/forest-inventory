import React, { memo, useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import apiService from "../apis/ApiService";
import ForestData from "../models/forest";
import Map from "../components/Map";
import ForestInfo from "../components/ForestInfo";

interface DetailPageProps {
  forestId: string;
}

const DetailPage: React.FC<RouteComponentProps<DetailPageProps>> = memo(
  ({ match }: RouteComponentProps<DetailPageProps>) => {
    const forestId = +match.params.forestId;
    const [forest, setForest] = useState<ForestData | undefined>();

    useEffect(() => {
      (async (): Promise<void> => {
        const forestData = await apiService.getForest(forestId);
        setForest(forestData);
      })();
    }, [forestId]);

    return (
      <>
        {forest ? (
          <div className="forest-detail-container">
            <div className="forest-information">
              <ForestInfo {...forest} />
            </div>
            <div id="map-container" className="map-container">
              <Map
                longitude={forest.longitude}
                latitude={forest.latitude}
                area={forest.area}
              />
            </div>
          </div>
        ) : (
          "Loading forest..."
        )}
      </>
    );
  }
);

export default DetailPage;
