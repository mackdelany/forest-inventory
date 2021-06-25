import ForestData from "../models/forest";

async function throwIfNotOk(response: Response) {
  if (!response.ok) {
    // add error stuff
  }
}

export class ApiService {
  constructor(private baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async get<T>(query: string): Promise<T> {
    const fetchResponse = await fetch(`${this.baseUrl}${query}`, {
      method: "GET",
    });
    await throwIfNotOk(fetchResponse);
    const json = await fetchResponse.json();
    return json;
  }

  async getForest(forestId: number): Promise<ForestData> {
    return this.get(`/forests/${forestId}`);
  }

  async getAllForests(): Promise<ForestData[]> {
    return this.get(`/forests`);
  }
}

const apiService = new ApiService("/api");
export default apiService;
