interface ForestData {
  forestId: number;
  forestName: string;
  forestType: string;
  country: string;
  latitude: number;
  longitude: number;
  briefDescription: string;
  longDescription: string;
  area: number;
  carbonStored?: number;
  thirtyDayCarbonChange?: number;
  image: string;
}

export default ForestData;
