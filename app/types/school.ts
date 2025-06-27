import { normalizeSchools } from "@/lib/utils";
import { School } from "./school.d";
import querystring from "query-string";

const baseUrl = process.env.SCHOOL_URL || "http://65.1.65.205/api/student/get-school";

if (!baseUrl) {
  throw new Error("SCHOOL_URL environment variable is not defined");
}

function getUrl(query?: Record<string, any>) {
  const params = query ? querystring.stringify(query) : "";
  return `${baseUrl}${params ? `?${params}` : ""}`;
}

class SchoolAPIError extends Error {
  constructor(message: string, public status: number, public endpoint: string) {
    super(message);
    this.name = "SchoolAPIError";
  }
}


async function FetchData(url: string): Promise<School[]> {
  const res = await fetch(url);
  console.log(res);
  if (!res.ok) throw new Error(`API error: ${res.statusText}`);
  const school= await res.json();
  // console.log("Response Data:", school);
  return normalizeSchools(school);

}

// export async function getAllSchools(filterParams?: {
//   searchTerm: string;
//   schoolType: string[];
//   minRating: number;
//   state: string;
//   city: string;
//   area: string;
//   maxTuition: number;
//   amenities: string[];
//   schoolBoard: string[];
//   medium: string[];
// }): Promise<School[]> {
//   const query: Record<string, any> = {};

//   if (filterParams?.searchTerm) {
//     query.search = filterParams.searchTerm;
//   }
//   if (filterParams?.schoolType?.length) {
//     query.type = filterParams.schoolType.join(",");
//   }
//   if (filterParams?.minRating) {
//     query.minRating = filterParams.minRating;
//   }
//   if (filterParams?.state) {
//     query.state = filterParams.state;
//   }
//   if (filterParams?.city) {
//     query.city = filterParams.city;
//   }
//   if (filterParams?.area) {
//     query.area = filterParams.area;
//   }
//   if (filterParams?.maxTuition) {
//     query.maxTuition = filterParams.maxTuition;
//   }
//   if (filterParams?.amenities?.length) {
//     query.amenities = filterParams.amenities.join(",");
//   }
//   if (filterParams?.schoolBoard?.length) {
//     query.schoolBoard = filterParams.schoolBoard.join(",");
//   }
//   if (filterParams?.medium?.length) {
//     query.medium = filterParams.medium.join(",");
//   }
//   const url = getUrl(query);
//   console.log("Generated URL:", url);
//   const data = await FetchData(url);
//   console.log("Fetched Data:", data);
//   return data;
// }

// export async function getAllSchools(filterParams?: {
//   searchTerm: string;
//   schoolType: string[];
//   minRating: number;
//   state: string;
//   city: string;
//   area: string;
//   maxTuition: number;
//   amenities: string[];
//   schoolBoard: string[];
//   medium: string[];
// }): Promise<School[]> {
//   const query: Record<string, any> = {};

//   if (filterParams?.searchTerm) query.search = filterParams.searchTerm;
//   if (filterParams?.schoolType?.length) query.type = filterParams.schoolType.join(",");
//   if (filterParams?.minRating && filterParams.minRating > 0) query.minRating = filterParams.minRating;
//   if (filterParams?.state) query.state = filterParams.state;
//   if (filterParams?.city) query.city = filterParams.city;
//   if (filterParams?.area) query.area = filterParams.area;
//   if (filterParams?.maxTuition && filterParams.maxTuition > 0) query.maxTuition = filterParams.maxTuition;
//   if (filterParams?.amenities?.length) query.amenities = filterParams.amenities.join(",");
//   if (filterParams?.schoolBoard?.length) query.schoolBoard = filterParams.schoolBoard.join(",");
//   if (filterParams?.medium?.length) query.medium = filterParams.medium.join(",");

//   const url = getUrl(query);
//   console.log("Generated URL:", url);
//   const data = await FetchData(url);
//   // console.log("Fetched Data:", data);
//   return data;
// }



export async function getAllSchools(filterParams?: {
  searchTerm: string;
  schoolType: string[];
  minRating: number;
  state: string;
  city: string;
  area: string;
  maxTuition: number;
  amenities: string[];
  schoolBoard: string[];
  medium: string[];
}): Promise<School[]> {
  console.log("getAllSchools called with:", filterParams);
  
  const query: Record<string, any> = {};

  if (filterParams?.searchTerm) query.search = filterParams.searchTerm;
  if (filterParams?.schoolType?.length) query.type = filterParams.schoolType.join(",");
  if (filterParams?.minRating && filterParams.minRating > 0) query.minRating = filterParams.minRating;
  if (filterParams?.state) query.state = filterParams.state;
  if (filterParams?.city) query.city = filterParams.city;
  if (filterParams?.area) query.area = filterParams.area;
  if (filterParams?.maxTuition) query.maxTuition = filterParams.maxTuition;
  if (filterParams?.amenities?.length) query.amenities = filterParams.amenities.join(",");
  if (filterParams?.schoolBoard?.length) query.schoolBoard = filterParams.schoolBoard.join(",");
  if (filterParams?.medium?.length) query.medium = filterParams.medium.join(",");

  const url = getUrl(query);
  console.log("Final API URL:", url);
  
  const data = await FetchData(url);
  console.log("Raw API response length:", data.length);
  
  return data;
}

export { SchoolAPIError };
