import React, { useState, useMemo } from 'react';
import { Search, X, Plus, Star, MapPin, Users, Filter } from 'lucide-react';
import { School } from '../types/school';
import { useComparison } from '../contexts/ComparisonContext';

interface SchoolSearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    availableSchools: School[];
}

const SchoolSearchModal: React.FC<SchoolSearchModalProps> = ({
    isOpen,
    onClose,
    availableSchools
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [minRating, setMinRating] = useState(0);
    const { addSchool, isSelected, canAddMore } = useComparison();

    const filteredSchools = useMemo(() => {
        return availableSchools.filter(school => {
            // Skip already selected schools
            if (isSelected(school.id)) return false;

            // Search term filter
            if (searchTerm) {
                const searchLower = searchTerm.toLowerCase();
                const matchesSearch =
                    school.name.toLowerCase().includes(searchLower) ||
                    school.location.city.toLowerCase().includes(searchLower) ||
                    school.location.state.toLowerCase().includes(searchLower) ||
                    school.description.toLowerCase().includes(searchLower) ||
                    school.features.some(feature => feature.toLowerCase().includes(searchLower));

                if (!matchesSearch) return false;
            }

            // Type filter
            if (selectedType && school.type !== selectedType) {
                return false;
            }

            // Rating filter
            if (school.rating < minRating) {
                return false;
            }

            return true;
        });
    }, [availableSchools, searchTerm, selectedType, minRating, isSelected]);

    const handleAddSchool = (school: School) => {
        addSchool(school);
        if (!canAddMore) {
            onClose();
        }
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedType('');
        setMinRating(0);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">Add Schools to Compare</h2>
                        <p className="text-sm text-gray-600 mt-1">
                            Search and add schools to your comparison ({3 - (availableSchools.length - filteredSchools.length - (availableSchools.filter(s => isSelected(s.id)).length))} slots remaining)
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Search and Filters */}
                <div className="p-6 border-b border-gray-200 bg-gray-50">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search schools by name, location, features..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Type Filter */}
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="">All Types</option>
                            <option value="Public">Public</option>
                            <option value="Private">Private</option>
                            <option value="Charter">Charter</option>
                            <option value="International">International</option>
                        </select>

                        {/* Rating Filter */}
                        <div className="flex items-center space-x-2">
                            <Star className="h-4 w-4 text-amber-400" />
                            <input
                                type="range"
                                min="0"
                                max="5"
                                step="0.1"
                                value={minRating}
                                onChange={(e) => setMinRating(parseFloat(e.target.value))}
                                className="w-20"
                            />
                            <span className="text-sm text-gray-600 min-w-[2rem]">{minRating.toFixed(1)}</span>
                        </div>

                        {/* Clear Filters */}
                        {(searchTerm || selectedType || minRating > 0) && (
                            <button
                                onClick={clearFilters}
                                className="px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>

                {/* Results */}
                <div className="p-6 overflow-y-auto max-h-96">
                    {filteredSchools.length === 0 ? (
                        <div className="text-center py-8">
                            <Filter className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No schools found</h3>
                            <p className="text-gray-500">
                                {searchTerm || selectedType || minRating > 0
                                    ? "Try adjusting your search criteria"
                                    : "All available schools are already in your comparison"
                                }
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {filteredSchools.map((school) => (
                                <div
                                    key={school.id}
                                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={school.image}
                                            alt={school.name}
                                            className="w-16 h-16 rounded-lg object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{school.name}</h3>
                                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                                                <div className="flex items-center">
                                                    <MapPin className="h-3 w-3 mr-1" />
                                                    {school.location.city}, {school.location.state}
                                                </div>
                                                <div className="flex items-center">
                                                    <Star className="h-3 w-3 text-amber-400 fill-amber-400 mr-1" />
                                                    {school.rating}
                                                </div>
                                                <div className="flex items-center">
                                                    <Users className="h-3 w-3 mr-1" />
                                                    {(school.students / 1000).toFixed(1)}K students
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-2">
                                                <span className={`px-2 py-1 text-xs rounded-md font-medium ${school.type === 'Public' ? 'bg-emerald-100 text-emerald-700' :
                                                    school.type === 'Private' ? 'bg-blue-100 text-blue-700' :
                                                        school.type === 'Charter' ? 'bg-purple-100 text-purple-700' :
                                                            'bg-orange-100 text-orange-700'
                                                    }`}>
                                                    {school.type}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleAddSchool(school)}
                                        disabled={!canAddMore}
                                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <Plus className="h-4 w-4" />
                                        <span>Add</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">
                            Showing {filteredSchools.length} of {availableSchools.filter(s => !isSelected(s.id)).length} available schools
                        </p>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                        >
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchoolSearchModal;