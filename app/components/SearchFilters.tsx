import React from 'react';
import { Search, MapPin, DollarSign, Star, Filter, SlidersHorizontal, X } from 'lucide-react';
import { FilterOptions } from '../types/school';

interface SearchFiltersProps {
    filters: FilterOptions;
    onFiltersChange: (filters: FilterOptions) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filters, onFiltersChange }) => {
    const schoolTypes = ['Public', 'Private', 'Charter', 'International'];
    const commonFeatures = ['STEM Program', 'Arts Center', 'Sports Complex', 'Technology Lab', 'Library'];

    const handleFilterChange = (key: keyof FilterOptions, value: any) => {
        onFiltersChange({ ...filters, [key]: value });
    };

    const toggleSchoolType = (type: string) => {
        const newTypes = filters.schoolType.includes(type)
            ? filters.schoolType.filter(t => t !== type)
            : [...filters.schoolType, type];
        handleFilterChange('schoolType', newTypes);
    };

    const toggleFeature = (feature: string) => {
        const newFeatures = filters.features.includes(feature)
            ? filters.features.filter(f => f !== feature)
            : [...filters.features, feature];
        handleFilterChange('features', newFeatures);
    };

    const clearAllFilters = () => {
        onFiltersChange({
            searchTerm: '',
            schoolType: [],
            minRating: 0,
            location: '',
            maxTuition: 50000,
            features: []
        });
    };

    const hasActiveFilters = filters.searchTerm || filters.schoolType.length > 0 ||
        filters.location || filters.features.length > 0 || filters.minRating > 0;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="flex items-center">
                    <SlidersHorizontal className="h-5 w-5 text-gray-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                    {hasActiveFilters && (
                        <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                            Active
                        </span>
                    )}
                </div>
                {hasActiveFilters && (
                    <button
                        onClick={clearAllFilters}
                        className="flex items-center text-sm text-gray-500 hover:text-red-600 transition-colors"
                    >
                        <X className="h-4 w-4 mr-1" />
                        Clear All
                    </button>
                )}
            </div>

            <div className="p-4">
                {/* Search Bar */}
                <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                        type="text"
                        placeholder="Search schools, programs, or locations..."
                        value={filters.searchTerm}
                        onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* School Type Filter */}
                    <div>
                        <h4 className="font-medium text-gray-800 mb-3 flex items-center text-sm">
                            <Filter className="h-4 w-4 mr-2" />
                            School Type
                        </h4>
                        <div className="space-y-2">
                            {schoolTypes.map(type => (
                                <label key={type} className="flex items-center cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={filters.schoolType.includes(type)}
                                        onChange={() => toggleSchoolType(type)}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-colors h-4 w-4"
                                    />
                                    <span className="ml-2 text-sm text-gray-700 group-hover:text-gray-900">{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Location Filter */}
                    <div>
                        <h4 className="font-medium text-gray-800 mb-3 flex items-center text-sm">
                            <MapPin className="h-4 w-4 mr-2" />
                            Location
                        </h4>
                        <select
                            value={filters.location}
                            onChange={(e) => handleFilterChange('location', e.target.value)}
                            className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        >
                            <option value="">All States</option>
                            <option value="GJ">Gujarat</option>
                            <option value="NY">New York</option>
                            <option value="TX">Texas</option>
                            <option value="WA">Washington</option>
                            <option value="IL">Illinois</option>
                            <option value="MA">Massachusetts</option>
                            <option value="CO">Colorado</option>
                            <option value="TN">Tennessee</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                        </select>
                    </div>

                    {/* Rating Filter */}
                    <div>
                        <h4 className="font-medium text-gray-800 mb-3 flex items-center text-sm">
                            <Star className="h-4 w-4 mr-2" />
                            Min Rating
                        </h4>
                        <div className="space-y-2">
                            {[4.5, 4.0, 3.5, 3.0].map(rating => (
                                <label key={rating} className="flex items-center cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={rating}
                                        checked={filters.minRating === rating}
                                        onChange={() => handleFilterChange('minRating', rating)}
                                        className="border-gray-300 text-blue-600 focus:ring-blue-500 h-4 w-4"
                                    />
                                    <span className="ml-2 text-sm text-gray-700 group-hover:text-gray-900 flex items-center">
                                        {rating}+ <Star className="h-3 w-3 ml-1 fill-amber-400 text-amber-400" />
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Tuition Filter */}
                    <div>
                        <h4 className="font-medium text-gray-800 mb-3 flex items-center text-sm">
                            <DollarSign className="h-4 w-4 mr-2" />
                            Max Tuition
                        </h4>
                        <input
                            type="range"
                            min="0"
                            max="50000"
                            step="5000"
                            value={filters.maxTuition}
                            onChange={(e) => handleFilterChange('maxTuition', parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>Free</span>
                            <span className="font-medium">${(filters.maxTuition / 1000).toFixed(0)}K</span>
                        </div>
                    </div>

                    {/* Features Filter */}
                    <div>
                        <h4 className="font-medium text-gray-800 mb-3 text-sm">Programs</h4>
                        <div className="space-y-1">
                            {commonFeatures.map(feature => (
                                <button
                                    key={feature}
                                    onClick={() => toggleFeature(feature)}
                                    className={`w-full text-left px-2 py-1 rounded text-xs font-medium transition-all duration-200 ${filters.features.includes(feature)
                                        ? 'bg-blue-100 text-blue-800 border border-blue-200'
                                        : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100'
                                        }`}
                                >
                                    {feature}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchFilters;