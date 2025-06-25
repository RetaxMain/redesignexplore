import React from 'react';
import { Search, MapPin, DollarSign, Star, Filter, SlidersHorizontal, X, Building, BookOpen, Globe } from 'lucide-react';
import { FilterOptions } from '../types/school';

interface SearchFiltersProps {
    filters: FilterOptions;
    onFiltersChange: (filters: FilterOptions) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filters, onFiltersChange }) => {
    const schoolTypes = ['Public', 'Private', 'Charter', 'International'];
    const schoolBoards = ['CBSE', 'ICSE', 'IB', 'State Board'];
    const mediums = ['English', 'Hindi', 'Spanish', 'French', 'German', 'Mandarin', 'Latin', 'Portuguese'];
    const commonAmenities = [
        'Swimming Pool', 'Library', 'Computer Lab', 'Science Lab', 'Sports Ground',
        'Auditorium', 'Cafeteria', 'Transport', 'Medical Room', 'Playground',
        'Art Room', 'Music Room', 'Dance Studio', 'Gymnasium', 'Theatre'
    ];

    const states = [
        'California',
        'New York',
        'Texas',
        'Washington',
        'Illinois',
        'Massachusetts',
        'Colorado',
        'Tennessee',
        'Florida',
        'Georgia'
    ];

    const stateAbbreviationsMap: { [key: string]: string } = {
        'California': 'CA',
        'New York': 'NY',
        'Texas': 'TX',
        'Washington': 'WA',
        'Illinois': 'IL',
        'Massachusetts': 'MA',
        'Colorado': 'CO',
        'Tennessee': 'TN',
        'Florida': 'FL',
        'Georgia': 'GA'
    };

    // --- IMPORTANT: UPDATED cities object to use STATE ABBREVIATIONS as keys ---
    const cities = {
        'CA': ['San Francisco', 'Los Angeles', 'San Jose', 'San Diego'],
        'NY': ['New York', 'Buffalo', 'Rochester', 'Syracuse'],
        'TX': ['Austin', 'Houston', 'Dallas', 'San Antonio'],
        'WA': ['Seattle', 'Spokane', 'Tacoma', 'Vancouver'],
        'IL': ['Chicago', 'Aurora', 'Peoria', 'Rockford'],
        'MA': ['Boston', 'Worcester', 'Springfield', 'Cambridge'],
        'CO': ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins'],
        'TN': ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga'],
        'FL': ['Miami', 'Orlando', 'Tampa', 'Jacksonville'],
        'GA': ['Atlanta', 'Augusta', 'Columbus', 'Savannah']
    };

    const areas = {
        'San Francisco': ['Downtown', 'Mission District', 'SOMA', 'Nob Hill'],
        'Los Angeles': ['Central LA', 'Hollywood', 'Beverly Hills', 'Santa Monica'],
        'New York': ['Manhattan', 'Brooklyn', 'Queens', 'Bronx'],
        'Austin': ['Tech District', 'Downtown', 'South Austin', 'North Austin'],
        'Seattle': ['Riverside', 'Capitol Hill', 'Ballard', 'Fremont'],
        'Chicago': ['Downtown', 'Lincoln Park', 'Wicker Park', 'River North'],
        'Boston': ['Historic District', 'Back Bay', 'Cambridge', 'Beacon Hill'],
        'Denver': ['Green Valley', 'LoDo', 'Capitol Hill', 'Highlands'],
        'Nashville': ['Arts District', 'Music Row', 'Downtown', 'Gulch'],
        'Miami': ['Business District', 'South Beach', 'Brickell', 'Coral Gables'],
        'Atlanta': ['Executive District', 'Midtown', 'Buckhead', 'Virginia Highland']
    };

    const handleFilterChange = (key: keyof FilterOptions, value: any) => {
        console.log(`SearchFilters: Attempting to change ${String(key)} to:`, value);
        onFiltersChange({ ...filters, [key]: value });
    };

    const toggleArrayFilter = (key: keyof FilterOptions, value: string) => {
        const currentArray = filters[key] as string[];
        const newArray = currentArray.includes(value)
            ? currentArray.filter(item => item !== value)
            : [...currentArray, value];
        handleFilterChange(key, newArray);
    };

    const clearAllFilters = () => {
        onFiltersChange({
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
    };

    const hasActiveFilters = filters.searchTerm || filters.schoolType.length > 0 ||
        filters.state || filters.city || filters.area || filters.amenities.length > 0 ||
        filters.minRating > 0 || filters.schoolBoard.length > 0 || filters.medium.length > 0;

    // These lines now work correctly because `cities` is keyed by abbreviations
    const availableCities = filters.state ? cities[filters.state as keyof typeof cities] || [] : [];
    const availableAreas = filters.city ? areas[filters.city as keyof typeof areas] || [] : [];

    console.log('Current State:', filters.state);
    console.log('Current City:', filters.city);
    console.log('Available Cities:', availableCities);
    console.log('Available Areas:', availableAreas);


    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                        <SlidersHorizontal className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">Advanced Filters</h3>
                        <p className="text-sm text-gray-600">Find your perfect school with precision</p>
                    </div>
                    {hasActiveFilters && (
                        <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                            {[
                                filters.searchTerm && 'Search',
                                filters.schoolType.length && `${filters.schoolType.length} Type${filters.schoolType.length > 1 ? 's' : ''}`,
                                // Display the full state name for active filters for better UX
                                filters.state && (Object.keys(stateAbbreviationsMap).find(key => stateAbbreviationsMap[key] === filters.state) || filters.state),
                                filters.amenities.length && `${filters.amenities.length} Amenities`,
                                filters.schoolBoard.length && `${filters.schoolBoard.length} Board${filters.schoolBoard.length > 1 ? 's' : ''}`,
                                filters.medium.length && `${filters.medium.length} Medium${filters.medium.length > 1 ? 's' : ''}`,
                                filters.minRating > 0 && 'Rating'
                            ].filter(Boolean).join(', ')}
                        </span>
                    )}
                </div>
                {hasActiveFilters && (
                    <button
                        onClick={clearAllFilters}
                        className="flex items-center text-sm text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors font-medium"
                    >
                        <X className="h-4 w-4 mr-1" />
                        Clear All Filters
                    </button>
                )}
            </div>

            <div className="p-6">
                {/* Search Bar */}
                <div className="relative mb-8">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search schools, programs, locations, or specializations..."
                        value={filters.searchTerm}
                        onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm bg-gray-50 hover:bg-white"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
                    {/* School Type Filter */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-gray-800 flex items-center text-sm">
                            <Filter className="h-4 w-4 mr-2 text-blue-600" />
                            School Type
                        </h4>
                        <div className="space-y-3">
                            {schoolTypes.map(type => (
                                <label key={type} className="flex items-center cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={filters.schoolType.includes(type)}
                                        onChange={() => toggleArrayFilter('schoolType', type)}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-colors h-4 w-4"
                                    />
                                    <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 font-medium">{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Location Filters */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-gray-800 flex items-center text-sm">
                            <MapPin className="h-4 w-4 mr-2 text-green-600" />
                            Location
                        </h4>
                        <div className="space-y-3">
                            <select
                                value={filters.state} // This should be 'CA', 'NY', or ''
                                onChange={(e) => {
                                    // e.target.value is already the abbreviation (e.g., 'CA')
                                    // or an empty string ('') if "All States" is selected.
                                    const selectedAbbreviation = e.target.value;

                                    onFiltersChange({
                                        ...filters,
                                        state: selectedAbbreviation, // Directly use e.target.value as it's already the abbreviation
                                        city: '',
                                        area: ''
                                    });
                                    console.log(`SearchFilters: Combined update - setting state to ${selectedAbbreviation} (from input value: ${e.target.value}), city to '', area to ''`);
                                }}
                                className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
                            >
                                {/* Explicitly define the "All States" option with value="" */}
                                <option value="">All States</option>

                                {/* Map over states for other options, using abbreviation as value */}
                                {states.map(fullStateName => (
                                    <option
                                        key={fullStateName}
                                        value={stateAbbreviationsMap[fullStateName]} // Set option value to abbreviation (e.g., 'CA')
                                    >
                                        {fullStateName} {/* Display full name to the user (e.g., 'California') */}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={filters.city}
                                onChange={(e) => {
                                    const newCity = e.target.value;
                                    onFiltersChange({
                                        ...filters,
                                        city: newCity,
                                        area: ''
                                    });
                                    console.log(`SearchFilters: Combined update - setting city to ${newCity}, area to ''`);
                                }}
                                disabled={!filters.state}
                                className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white disabled:bg-gray-100"
                            >
                                <option value="">All Cities</option>
                                {availableCities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>

                            <select
                                value={filters.area}
                                onChange={(e) => handleFilterChange('area', e.target.value)}
                                disabled={!filters.city}
                                className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white disabled:bg-gray-100"
                            >
                                <option value="">All Areas</option>
                                {availableAreas.map(area => (
                                    <option key={area} value={area}>{area}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* School Board Filter */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-gray-800 flex items-center text-sm">
                            <Building className="h-4 w-4 mr-2 text-purple-600" />
                            School Board
                        </h4>
                        <div className="space-y-3">
                            {schoolBoards.map(board => (
                                <label key={board} className="flex items-center cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={filters.schoolBoard.includes(board)}
                                        onChange={() => toggleArrayFilter('schoolBoard', board)}
                                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 transition-colors h-4 w-4"
                                    />
                                    <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 font-medium">{board}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Medium Filter */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-gray-800 flex items-center text-sm">
                            <Globe className="h-4 w-4 mr-2 text-orange-600" />
                            Medium
                        </h4>
                        <div className="space-y-2 max-h-32 overflow-y-auto">
                            {mediums.map(medium => (
                                <label key={medium} className="flex items-center cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={filters.medium.includes(medium)}
                                        onChange={() => toggleArrayFilter('medium', medium)}
                                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500 transition-colors h-4 w-4"
                                    />
                                    <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 font-medium">{medium}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Rating Filter */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-gray-800 flex items-center text-sm">
                            <Star className="h-4 w-4 mr-2 text-amber-600" />
                            Min Rating
                        </h4>
                        <div className="space-y-3">
                            {[4.5, 4.0, 3.5, 3.0, 0].map(rating => (
                                <label key={rating} className="flex items-center cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={rating}
                                        checked={filters.minRating === rating}
                                        onChange={() => handleFilterChange('minRating', rating)}
                                        className="border-gray-300 text-amber-600 focus:ring-amber-500 h-4 w-4"
                                    />
                                    <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 flex items-center font-medium">
                                        {rating === 0 ? 'Any Rating' : (
                                            <>
                                                {rating}+ <Star className="h-3 w-3 ml-1 fill-amber-400 text-amber-400" />
                                            </>
                                        )}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Tuition Filter */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-gray-800 flex items-center text-sm">
                            <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                            Max Tuition
                        </h4>
                        <div className="space-y-3">
                            <input
                                type="range"
                                min="0"
                                max="50000"
                                step="5000"
                                value={filters.maxTuition}
                                onChange={(e) => handleFilterChange('maxTuition', parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            />
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>Free</span>
                                <span className="font-semibold text-green-600">${(filters.maxTuition / 1000).toFixed(0)}K</span>
                            </div>
                            <div className="text-center">
                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                                    Up to ${filters.maxTuition.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Amenities Filter */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-gray-800 flex items-center text-sm">
                            <BookOpen className="h-4 w-4 mr-2 text-indigo-600" />
                            Amenities
                        </h4>
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                            {commonAmenities.map(amenity => (
                                <button
                                    key={amenity}
                                    onClick={() => toggleArrayFilter('amenities', amenity)}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${filters.amenities.includes(amenity)
                                        ? 'bg-indigo-100 text-indigo-800 border border-indigo-200 shadow-sm'
                                        : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100'
                                        }`}
                                >
                                    {amenity}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Active Filters Summary */}
                {hasActiveFilters && (
                    <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
                        <h5 className="font-semibold text-blue-900 mb-3 text-sm">Active Filters:</h5>
                        <div className="flex flex-wrap gap-2">
                            {filters.searchTerm && (
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                    Search: "{filters.searchTerm}"
                                </span>
                            )}
                            {filters.schoolType.map(type => (
                                <span key={type} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                    {type}
                                </span>
                            ))}
                            {filters.state && (
                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                                    {/* Display full state name for clarity */}
                                    {Object.keys(stateAbbreviationsMap).find(key => stateAbbreviationsMap[key] === filters.state) || filters.state}
                                </span>
                            )}
                            {filters.city && (
                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                                    {filters.city}
                                </span>
                            )}
                            {filters.area && (
                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                                    {filters.area}
                                </span>
                            )}
                            {filters.schoolBoard.map(board => (
                                <span key={board} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                                    {board}
                                </span>
                            ))}
                            {filters.medium.map(med => (
                                <span key={med} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                                    {med}
                                </span>
                            ))}
                            {filters.minRating > 0 && (
                                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                                    {filters.minRating}+ Rating
                                </span>
                            )}
                            {filters.amenities.map(amenity => (
                                <span key={amenity} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                                    {amenity}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchFilters;