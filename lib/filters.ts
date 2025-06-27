import { FilterOptions } from "../app/types/school.d";

export function parseFiltersFromParams(params: URLSearchParams): FilterOptions {
  return {
    searchTerm: params.get("search") ?? "",
    schoolType: params.get("type")?.split(",") ?? [],
    minRating: Number(params.get("minRating") ?? 0),
    state: params.get("state") ?? "",
    city: params.get("city") ?? "",
    area: params.get("area") ?? "",
    // maxTuition: Number(params.get("maxTuition") ?? 0),
    amenities: params.get("amenities")?.split(",") ?? [],
    schoolBoard: params.get("schoolBoard")?.split(",") ?? [],
    medium: params.get("medium")?.split(",") ?? [],
  };
}
