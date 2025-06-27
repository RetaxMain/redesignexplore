"use client";
import React, { useState, useMemo, useEffect } from "react";
import {
  GraduationCap,
  Filter,
  BarChart3,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import SearchFilters from "./components/SearchFilters";
import SchoolGrid from "./components/SchoolGrid";
import { mockSchools } from "./data/mockSchools";
import { FilterOptions, School } from "./types/school.d";
import ContactModal from "./components/ContactModal";
import SchoolDetails from "./components/SchoolDetails";
import { useRouter } from "next/navigation";

import ComparisonBar from "./components/ComparisonBar";
import {
  ComparisonProvider,
  useComparison,
} from "./contexts/ComparisonContext";
import SchoolComparison from "./components/SchoolComparison";
import { getAllSchools } from "./types/school";

export function buildQueryFromFilters(filters: FilterOptions) {
  const params = new URLSearchParams();
  if (filters.searchTerm) params.set("search", filters.searchTerm);
  if (filters.schoolType.length)
    params.set("type", filters.schoolType.join(","));
  if (filters.minRating) params.set("minRating", String(filters.minRating));
  if (filters.state) params.set("state", filters.state);
  if (filters.city) params.set("city", filters.city);
  if (filters.area) params.set("area", filters.area);
  if (filters.maxTuition) params.set("maxTuition", String(filters.maxTuition));
  if (filters.amenities.length)
    params.set("amenities", filters.amenities.join(","));
  if (filters.schoolBoard.length)
    params.set("schoolBoard", filters.schoolBoard.join(","));
  if (filters.medium.length) params.set("medium", filters.medium.join(","));
  return params.toString();
}

function ExplorePageContent({
  initialSchools = [],
  initialFilters,
}: {
  initialSchools?: School[];
  initialFilters?: FilterOptions;
}) {
  const router = useRouter();

  const [filters, setFilters] = useState<FilterOptions>(
    initialFilters ?? {
      searchTerm: "",
      schoolType: [],
      minRating: 0,
      state: "",
      city: "",
      area: "",
      maxTuition: 0,
      amenities: [],
      schoolBoard: [],
      medium: [],
    }
  );

  useEffect(() => {
    const query = buildQueryFromFilters(filters);
    const pathname = window.location.pathname;
    router.replace(`${pathname}?${query}`, { scroll: false });
  }, [filters, router]);

  const [schools, setSchools] = useState<School[]>(initialSchools || []);
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [showComparison, setShowComparison] = useState(false);
  const [contactModal, setContactModal] = useState<{
    isOpen: boolean;
    type: "phone" | "whatsapp";
    school: School | null;
  }>({
    isOpen: false,
    type: "phone",
    school: null,
  });

  const { selectedSchools } = useComparison();

  useEffect(() => {
    setLoading(true);
    getAllSchools(filters)
      .then((data) => setSchools(data))
      .catch((err) => {
        setSchools([]);
        console.error("Failed to fetch schools:", err);
      })
      .finally(() => setLoading(false));
  }, [filters]);

  {
    /*const filteredSchools = useMemo(() => {
    return mockSchools.filter((school) => {
      // Search term filter
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        const matchesSearch =
          school.name.toLowerCase().includes(searchLower) ||
          school.location.city.toLowerCase().includes(searchLower) ||
          school.location.area.toLowerCase().includes(searchLower) ||
          school.description.toLowerCase().includes(searchLower) ||
          school.features.some((feature) =>
            feature.toLowerCase().includes(searchLower)
          ) ||
          school.amenities.some((amenity) =>
            amenity.toLowerCase().includes(searchLower)
          ) ||
          school.curriculum.some((curr) =>
            curr.toLowerCase().includes(searchLower)
          );

        if (!matchesSearch) return false;
      }

      // School type filter
      if (
        filters.schoolType.length > 0 &&
        !filters.schoolType.includes(school.type)
      ) {
        return false;
      }

      // Rating filter
      if (school.rating < filters.minRating) {
        return false;
      }

      // Location filters
      if (filters.state && school.location.state !== filters.state) {
        console.log(
          `Comparing State: Filter: '${filters.state}' vs School: '${
            school.location.state
          }' - Match: ${school.location.state === filters.state}`
        );
        return false;
      }
      if (filters.city && school.location.city !== filters.city) {
        console.log(
          `Comparing City: Filter: '${filters.city}' vs School: '${
            school.location.city
          }' - Match: ${school.location.city === filters.city}`
        );
        return false;
      }
      if (filters.area && school.location.area !== filters.area) {
        console.log(
          `Comparing Area: Filter: '${filters.area}' vs School: '${
            school.location.area
          }' - Match: ${school.location.area === filters.area}`
        );
        return false;
      }

      // Tuition filter
      if (school.tuitionFee && school.tuitionFee > filters.maxTuition) {
        return false;
      }

      // Amenities filter
      if (filters.amenities.length > 0) {
        const hasAmenities = filters.amenities.every((amenity) =>
          school.amenities.includes(amenity)
        );
        if (!hasAmenities) return false;
      }

      // School Board filter
      if (
        filters.schoolBoard.length > 0 &&
        !filters.schoolBoard.includes(school.schoolBoard)
      ) {
        return false;
      }

      // Medium filter
      if (filters.medium.length > 0) {
        const hasMedium = filters.medium.some((medium) =>
          school.medium.includes(medium)
        );
        if (!hasMedium) return false;
      }

      return true;
    });
  }, [filters]); */
  }

  const filteredSchools = schools;

  // const filteredSchools = useMemo(() => {
  //   return schools.filter((school) => {
  //     // Search term filter
  //     if (filters.searchTerm) {
  //       const searchLower = filters.searchTerm.toLowerCase();
  //       const matchesSearch =
  //         school.name.toLowerCase().includes(searchLower) ||
  //         school.location.city.toLowerCase().includes(searchLower) ||
  //         school.location.area.toLowerCase().includes(searchLower) ||
  //         school.description.toLowerCase().includes(searchLower) ||
  //         (school.features || []).some((feature) =>
  //           feature.toLowerCase().includes(searchLower)
  //         ) ||
  //         (school.amenities || []).some((amenity) =>
  //           amenity.toLowerCase().includes(searchLower)
  //         ) ||
  //         (school.curriculum || []).some((curr) =>
  //           curr.toLowerCase().includes(searchLower)
  //         );
  //       if (!matchesSearch) return false;
  //     }

  //     // School type filter
  //     console.log("filters.schoolType:", filters.schoolType);
  //     if (
  //       filters.schoolType.length > 0 &&
  //       !school.type.some((t) => filters.schoolType.includes(t))
  //     ) {
  //       return false;
  //     }

  //     // Rating filter
  //     if (school.rating < filters.minRating) {
  //       return false;
  //     }

  //     // Location filters
  //     if (filters.state && school.location.state !== filters.state) {
  //       return false;
  //     }
  //     if (filters.city && school.location.city !== filters.city) {
  //       return false;
  //     }
  //     if (filters.area && school.location.area !== filters.area) {
  //       return false;
  //     }

  //     // Tuition filter
  //     if (school.tuitionFee && school.tuitionFee > filters.maxTuition) {
  //       return false;
  //     }

  //     // Amenities filter
  //     if (filters.amenities.length > 0) {
  //       const hasAmenities = filters.amenities.every((amenity) =>
  //         (school.amenities || []).includes(amenity)
  //       );
  //       if (!hasAmenities) return false;
  //     }

  //     // School Board filter
  //     if (
  //       filters.schoolBoard.length > 0 &&
  //       !filters.schoolBoard.includes(school.schoolBoard)
  //     ) {
  //       return false;
  //     }

  //     // Medium filter
  //     if (filters.medium.length > 0) {
  //       const hasMedium = filters.medium.some((medium) =>
  //         (school.medium || []).includes(medium)
  //       );
  //       if (!hasMedium) return false;
  //     }

  //     return true;
  //   });
  // }, [schools, filters]);

  // Calculate stats
  //   const stats = useMemo(() => {
  //     const totalStudents = mockSchools.reduce(
  //       (sum, school) => sum + school.students,
  //       0
  //     );
  //     const avgRating =
  //       mockSchools.reduce((sum, school) => sum + school.rating, 0) /
  //       mockSchools.length;
  //     const totalAchievements = mockSchools.reduce(
  //       (sum, school) => sum + school.achievements.length,
  //       0
  //     );

  //     return {
  //       totalSchools: mockSchools.length,
  //       totalStudents: Math.round(totalStudents / 1000),
  //       avgRating: avgRating.toFixed(1),
  //       totalAchievements,
  //     };
  //   }, []);

  const stats = useMemo(() => {
    const totalStudents = filteredSchools.reduce(
      (sum, school) => sum + school.students,
      0
    );
    const avgRating = filteredSchools.length
      ? filteredSchools.reduce((sum, school) => sum + school.rating, 0) /
        filteredSchools.length
      : 0;
    const placeholderAchievements = 0;
    const totalAchievements = filteredSchools.reduce(
      (sum, school) =>
        sum + (school.achievements?.length || placeholderAchievements),
      0
    );

    return {
      totalSchools: filteredSchools.length,
      totalStudents: Math.round(totalStudents / 1000),
      avgRating: avgRating.toFixed(1),
      totalAchievements,
    };
  }, [filteredSchools]);

  const handleContactClick = (type: "phone" | "whatsapp", school: School) => {
    setContactModal({
      isOpen: true,
      type,
      school,
    });
  };

  const handleViewDetails = (school: School) => {
    setSelectedSchool(school);
  };

  const handleBackToList = () => {
    setSelectedSchool(null);
    setShowComparison(false);
  };

  const handleContactModalClose = () => {
    setContactModal({
      isOpen: false,
      type: "phone",
      school: null,
    });
  };

  const handleShowComparison = () => {
    setShowComparison(true);
  };

  // If comparison is shown, show comparison page
  if (showComparison) {
    return (
      <>
        <SchoolComparison
          onBack={handleBackToList}
          onContactClick={handleContactClick}
          availableSchools={mockSchools}
        />
        <ContactModal
          isOpen={contactModal.isOpen}
          onClose={handleContactModalClose}
          type={contactModal.type}
          schoolName={contactModal.school?.name || ""}
        />
      </>
    );
  }

  // If a school is selected, show details page
  if (selectedSchool) {
    return (
      <>
        <SchoolDetails
          school={selectedSchool}
          onBack={handleBackToList}
          onContactClick={(type) => handleContactClick(type, selectedSchool)}
        />
        <ContactModal
          isOpen={contactModal.isOpen}
          onClose={handleContactModalClose}
          type={contactModal.type}
          schoolName={contactModal.school?.name || ""}
        />
      </>
    );
  }

  const handleFiltersChange = (newFilters: FilterOptions) => {
    console.log("ExplorePageContent: Received new filters:", newFilters); // ADD THIS LOG
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Schoogle</h1>
                  <p className="text-sm text-gray-600">
                    Premium School Analytics
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-1">
                <BarChart3 className="h-4 w-4 text-blue-600" />
                <span className="font-semibold text-gray-900">
                  {filteredSchools.length}
                </span>
                <span className="text-gray-600">Results</span>
              </div>
              {selectedSchools.length > 0 && (
                <>
                  <div className="w-px h-4 bg-gray-300" />
                  <div className="flex items-center space-x-1">
                    <BarChart3 className="h-4 w-4 text-purple-600" />
                    <span className="font-semibold text-purple-900">
                      {selectedSchools.length}
                    </span>
                    <span className="text-gray-600">Selected</span>
                  </div>
                </>
              )}
              <div className="w-px h-4 bg-gray-300" />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-colors ${
                  showFilters
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">
              Educational Excellence Dashboard
            </h2>
            <p className="text-blue-100 text-lg">
              Comprehensive school analytics and insights
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BarChart3 className="h-6 w-6 text-blue-200 mr-2" />
                <span className="text-2xl font-bold">{stats.totalSchools}</span>
              </div>
              <p className="text-blue-100 text-sm">Total Schools</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-blue-200 mr-2" />
                <span className="text-2xl font-bold">
                  {stats.totalStudents}K
                </span>
              </div>
              <p className="text-blue-100 text-sm">Students Enrolled</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-blue-200 mr-2" />
                <span className="text-2xl font-bold">{stats.avgRating}</span>
              </div>
              <p className="text-blue-100 text-sm">Avg Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-blue-200 mr-2" />
                <span className="text-2xl font-bold">
                  {stats.totalAchievements}
                </span>
              </div>
              <p className="text-blue-100 text-sm">Total Awards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        {showFilters && (
          <SearchFilters
            filters={filters}
            onFiltersChange={handleFiltersChange} // Use this new handler
          />
        )}

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {filteredSchools.length} Schools Found
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Showing all {filteredSchools.length} educational institutions
            </p>
          </div>

          {(filters.searchTerm ||
            filters.schoolType.length > 0 ||
            filters.state ||
            filters.city ||
            filters.area ||
            filters.amenities.length > 0 ||
            filters.schoolBoard.length > 0 ||
            filters.medium.length > 0) && (
            <button
              onClick={() =>
                setFilters({
                  searchTerm: "",
                  schoolType: [],
                  minRating: 0,
                  state: "",
                  city: "",
                  area: "",
                  //maxTuition: 0,
                  amenities: [],
                  schoolBoard: [],
                  medium: [],
                })
              }
              className="text-sm text-blue-600 hover:text-blue-800 font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* School Grid - Exactly 12 cards */}
        <SchoolGrid
          schools={filteredSchools.slice(0, 12)}
          onContactClick={handleContactClick}
          onViewDetails={handleViewDetails}
        />

        {/* Pagination Info */}
        <div className="text-center mt-8 p-4 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-600 text-sm">
            Showing{" "}
            <span className="font-semibold">
              {Math.min(filteredSchools.length, 12)}
            </span>{" "}
            of <span className="font-semibold">{filteredSchools.length}</span>{" "}
            schools
          </p>
          {filteredSchools.length > 12 && (
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Load More Schools
            </button>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">Schoogle</span>
            </div>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Advanced educational analytics platform providing comprehensive
              insights into academic institutions and performance metrics.
            </p>
          </div>
        </div>
      </footer>

      {/* Comparison Bar */}
      <ComparisonBar onCompare={handleShowComparison} />

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModal.isOpen}
        onClose={handleContactModalClose}
        type={contactModal.type}
        schoolName={contactModal.school?.name || ""}
      />
    </div>
  );
}

export default function Index(props: {
  initialSchools?: School[];
  initialFilters?: FilterOptions;
}) {
  return (
    <ComparisonProvider>
      <ExplorePageContent {...props} />
    </ComparisonProvider>
  );
}
