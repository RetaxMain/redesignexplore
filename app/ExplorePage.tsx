"use client"
import React, { useState, useMemo } from 'react';
import { GraduationCap, Filter, BarChart3, Users, TrendingUp, Award } from 'lucide-react';
import SearchFilters from './components/SearchFilters';
import SchoolGrid from './components/SchoolGrid';
import { mockSchools } from './data/mockSchools';
import { FilterOptions } from './types/school';

export default function Explorepage() {
    const [filters, setFilters] = useState<FilterOptions>({
        searchTerm: '',
        schoolType: [],
        minRating: 0,
        location: '',
        maxTuition: 50000,
        features: []
    });

    const [showFilters, setShowFilters] = useState(true);

    const filteredSchools = useMemo(() => {
        return mockSchools.filter(school => {
            // Search term filter
            if (filters.searchTerm) {
                const searchLower = filters.searchTerm.toLowerCase();
                const matchesSearch =
                    school.name.toLowerCase().includes(searchLower) ||
                    school.location.city.toLowerCase().includes(searchLower) ||
                    school.description.toLowerCase().includes(searchLower) ||
                    school.features.some(feature => feature.toLowerCase().includes(searchLower));

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

            // Location filter
            if (filters.location && school.location.state !== filters.location) {
                return false;
            }

            // Tuition filter
            if (school.tuitionFee && school.tuitionFee > filters.maxTuition) {
                return false;
            }

            // Features filter
            if (filters.features.length > 0) {
                const hasFeatures = filters.features.every(feature =>
                    school.features.includes(feature)
                );
                if (!hasFeatures) return false;
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
                                    <p className="text-sm text-gray-600">Premium School Analytics</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats Bar */}
                        <div className="hidden md:flex items-center space-x-6 text-sm">
                            <div className="flex items-center space-x-1">
                                <BarChart3 className="h-4 w-4 text-blue-600" />
                                <span className="font-semibold text-gray-900">{filteredSchools.length}</span>
                                <span className="text-gray-600">Results</span>
                            </div>
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
                        onFiltersChange={setFilters}
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

                    {(filters.searchTerm || filters.schoolType.length > 0 || filters.location || filters.features.length > 0) && (
                        <button
                            onClick={() => setFilters({
                                searchTerm: '',
                                schoolType: [],
                                minRating: 0,
                                location: '',
                                maxTuition: 50000,
                                features: []
                            })}
                            className="text-sm text-blue-600 hover:text-blue-800 font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            Reset Filters
                        </button>
                    )}
                </div>

                {/* School Grid - Exactly 12 cards */}
                <SchoolGrid schools={filteredSchools.slice(0, 12)} />

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
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <div className="p-2 bg-blue-600 rounded-lg">
                                <GraduationCap className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-lg font-bold">Schoogle</span>
                        </div>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                            Advanced educational analytics platform providing comprehensive insights
                            into academic institutions and performance metrics.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

