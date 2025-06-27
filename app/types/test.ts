import { getAllSchools } from "../types/school";

(async () => {
  const schools = await getAllSchools({
    searchTerm: "prata",
    schoolType: ["public"],
    minRating: 0,
    state: "Gujarat",
    city: "Surat",
    area: "",
    maxTuition: 0,
    amenities: [],
    schoolBoard: [],
    medium: ["english"],
  });
  console.log(schools);
})();
