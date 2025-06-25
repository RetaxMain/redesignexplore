
"use client"
import React, { useState, useMemo } from 'react';
import Link from 'next/link';

import { GraduationCap, Filter, BarChart3, Users, TrendingUp, Award } from 'lucide-react';
import SearchFilters from '../components/SearchFilters';
import SchoolGrid from '../components/SchoolGrid';
import { mockSchools } from '../data/mockSchools';
import { FilterOptions, School } from '../types/school';
import ContactModal from '../components/ContactModal';
import ComparisonBar from '../components/ComparisonBar';
import { ComparisonProvider, useComparison } from '../contexts/ComparisonContext';
import SchoolComparison from '../components/SchoolComparison';
import { useRouter } from 'next/navigation';

function SchoolsPageContent() {
    const router = useRouter();
    const [filters, setFilters] = useState<FilterOptions>({
        searchTerm: '',
        schoolType: [],
        minRating: 0,
        state: '',
        city: '',
        area: '',
        maxTuition: 50000,
        amenities: [],
        schoolBoard: [],
        medium: []
    });

    const [showFilters, setShowFilters] = useState(true);
    const [showComparison, setShowComparison] = useState(false);
    const [contactModal, setContactModal] = useState<{
        isOpen: boolean;
        type: 'phone' | 'whatsapp';
        school: School | null;
    }>({
        isOpen: false,
        type: 'phone',
        school: null
    });

    const { selectedSchools } = useComparison();

    const filteredSchools = useMemo(() => {
        return mockSchools.filter(school => {
            // Search term filter
            if (filters.searchTerm) {
                const searchLower = filters.searchTerm.toLowerCase();
                const matchesSearch =
                    school.name.toLowerCase().includes(searchLower) ||
                    school.location.city.toLowerCase().includes(searchLower) ||
                    school.location.area.toLowerCase().includes(searchLower) ||
                    school.description.toLowerCase().includes(searchLower) ||
                    school.features.some(feature => feature.toLowerCase().includes(searchLower)) ||
                    school.amenities.some(amenity => amenity.toLowerCase().includes(searchLower)) ||
                    school.curriculum.some(curr => curr.toLowerCase().includes(searchLower));

                if (!matchesSearch) return false;
            }

            // School type filter
            if (filters.schoolType.length > 0 && !filters.schoolType.includes(school.type)) {
                return false;
            }

            // Rating filter
            if (school.rating < filters.minRating) {
                return false;
            }

            // Location filters
            if (filters.state && school.location.state !== filters.state) {
                return false;
            }
            if (filters.city && school.location.city !== filters.city) {
                return false;
            }
            if (filters.area && school.location.area !== filters.area) {
                return false;
            }

            // Tuition filter
            if (school.tuitionFee && school.tuitionFee > filters.maxTuition) {
                return false;
            }

            // Amenities filter
            if (filters.amenities.length > 0) {
                const hasAmenities = filters.amenities.every(amenity =>
                    school.amenities.includes(amenity)
                );
                if (!hasAmenities) return false;
            }

            // School Board filter
            if (filters.schoolBoard.length > 0 && !filters.schoolBoard.includes(school.schoolBoard)) {
                return false;
            }

            // Medium filter
            if (filters.medium.length > 0) {
                const hasMedium = filters.medium.some(medium =>
                    school.medium.includes(medium)
                );
                if (!hasMedium) return false;
            }

            return true;
        });
    }, [filters]);

    // Calculate stats
    const stats = useMemo(() => {
        const totalStudents = mockSchools.reduce((sum, school) => sum + school.students, 0);
        const avgRating = mockSchools.reduce((sum, school) => sum + school.rating, 0) / mockSchools.length;
        const totalAchievements = mockSchools.reduce((sum, school) => sum + school.achievements.length, 0);

        return {
            totalSchools: mockSchools.length,
            totalStudents: Math.round(totalStudents / 1000),
            avgRating: avgRating.toFixed(1),
            totalAchievements
        };
    }, []);

    const handleContactClick = (type: 'phone' | 'whatsapp', school: School) => {
        setContactModal({
            isOpen: true,
            type,
            school
        });
    };

    const handleViewDetails = (school: School) => {
        // Create SEO-friendly URL slug from school name
        const slug = school.name.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');

        router.push(`/school/${slug}?id=${school.id}`);
    };

    const handleContactModalClose = () => {
        setContactModal({
            isOpen: false,
            type: 'phone',
            school: null
        });
    };

    const handleShowComparison = () => {
        setShowComparison(true);
    };

    const handleBackToList = () => {
        setShowComparison(false);
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
                    schoolName={contactModal.school?.name || ''}
                />
            </>
        );
    }

    const handleFiltersChange = (newFilters: FilterOptions) => {
        setFilters(newFilters);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
                                <GraduationCap className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">Schoogle</h1>
                                <p className="text-sm text-gray-600">Premium School Analytics</p>
                            </div>
                        </Link>

                        {/* Stats Bar */}
                        <div className="hidden md:flex items-center space-x-6 text-sm">
                            <div className="flex items-center space-x-1">
                                <BarChart3 className="h-4 w-4 text-blue-600" />
                                <span className="font-semibold text-gray-900">{filteredSchools.length}</span>
                                <span className="text-gray-600">Results</span>
                            </div>
                            {selectedSchools.length > 0 && (
                                <>
                                    <div className="w-px h-4 bg-gray-300" />
                                    <div className="flex items-center space-x-1">
                                        <BarChart3 className="h-4 w-4 text-purple-600" />
                                        <span className="font-semibold text-purple-900">{selectedSchools.length}</span>
                                        <span className="text-gray-600">Selected</span>
                                    </div>
                                </>
                            )}
                            <div className="w-px h-4 bg-gray-300" />
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-colors ${showFilters
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                        <h2 className="text-3xl font-bold mb-2">Educational Excellence Dashboard</h2>
                        <p className="text-blue-100 text-lg">Comprehensive school analytics and insights</p>
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
                                <span className="text-2xl font-bold">{stats.totalStudents}K</span>
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
                                <span className="text-2xl font-bold">{stats.totalAchievements}</span>
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
                        onFiltersChange={handleFiltersChange}
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

                    {(filters.searchTerm || filters.schoolType.length > 0 || filters.state || filters.city ||
                        filters.area || filters.amenities.length > 0 || filters.schoolBoard.length > 0 ||
                        filters.medium.length > 0) && (
                            <button
                                onClick={() => setFilters({
                                    searchTerm: '',
                                    schoolType: [],
                                    minRating: 0,
                                    state: '',
                                    city: '',
                                    area: '',
                                    maxTuition: 50000,
                                    amenities: [],
                                    schoolBoard: [],
                                    medium: []
                                })}
                                className="text-sm text-blue-600 hover:text-blue-800 font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors"
                            >
                                Reset Filters
                            </button>
                        )}
                </div>

                {/* School Grid */}
                <SchoolGrid
                    schools={filteredSchools.slice(0, 12)}
                    onContactClick={handleContactClick}
                    onViewDetails={handleViewDetails}
                />

                {/* Pagination Info */}
                <div className="text-center mt-8 p-4 bg-white rounded-lg border border-gray-200">
                    <p className="text-gray-600 text-sm">
                        Showing <span className="font-semibold">{Math.min(filteredSchools.length, 12)}</span> of{' '}
                        <span className="font-semibold">{filteredSchools.length}</span> schools
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
                        <Link href="/" className="flex items-center justify-center space-x-3 mb-4">
                            <div className="p-2 bg-blue-600 rounded-lg">
                                <GraduationCap className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-lg font-bold">Schoogle</span>
                        </Link>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                            Advanced educational analytics platform providing comprehensive insights
                            into academic institutions and performance metrics.
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
                schoolName={contactModal.school?.name || ''}
            />
        </div>
    );
}

export default function Schools() {
    return (
        <ComparisonProvider>
            <SchoolsPageContent />
        </ComparisonProvider>
    );
}
