import { School, FilterOptions } from "../app/types/school.d";

export function filterSchools(
  schools: School[],
  filters: FilterOptions
): School[] {
  return schools.filter((school) => {
    const searchLower = filters.searchTerm.toLowerCase();

    if (filters.searchTerm) {
      const matchesSearch =
        school.name.toLowerCase().includes(searchLower) ||
        school.location.city.toLowerCase().includes(searchLower) ||
        school.location.area.toLowerCase().includes(searchLower) ||
        school.description.toLowerCase().includes(searchLower) ||
        (school.features || []).some((f) =>
          f.toLowerCase().includes(searchLower)
        ) ||
        (school.amenities || []).some((a) =>
          a.toLowerCase().includes(searchLower)
        ) ||
        (school.curriculum || []).some((c) =>
          c.toLowerCase().includes(searchLower)
        );
      if (!matchesSearch) return false;
    }

    if (
      filters.schoolType.length > 0 &&
      !school.type.some((t) => filters.schoolType.includes(t))
    ) {
      return false;
    }

    if (school.rating < filters.minRating) return false;

    if (filters.state && school.location.state !== filters.state) return false;
    if (filters.city && school.location.city !== filters.city) return false;
    if (filters.area && school.location.area !== filters.area) return false;

    if (school.tuitionFee && school.tuitionFee > filters.maxTuition)
      return false;

    if (filters.amenities.length > 0) {
      const hasAll = filters.amenities.every((a) =>
        (school.amenities || []).includes(a)
      );
      if (!hasAll) return false;
    }

    if (
      filters.schoolBoard.length > 0 &&
      !filters.schoolBoard.includes(school.schoolBoard)
    ) {
      return false;
    }

    if (
      filters.medium.length > 0 &&
      !filters.medium.some((m) => (school.medium || []).includes(m))
    ) {
      return false;
    }

    return true;
  });
}
