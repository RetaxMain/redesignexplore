import React from 'react';
import { X, BarChart3, Plus } from 'lucide-react';
import { useComparison } from '../contexts/ComparisonContext';

interface ComparisonBarProps {
    onCompare: () => void;
}

const ComparisonBar: React.FC<ComparisonBarProps> = ({ onCompare }) => {
    const { selectedSchools, removeSchool, clearAll } = useComparison();

    if (selectedSchools.length === 0) return null;

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 max-w-4xl">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                        <BarChart3 className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-gray-900">Compare Schools</span>
                        <span className="text-sm text-gray-500">({selectedSchools.length}/3)</span>
                    </div>
                    <button
                        onClick={clearAll}
                        className="text-gray-400 hover:text-gray-600 text-sm"
                    >
                        Clear All
                    </button>
                </div>

                <div className="flex items-center space-x-3 mb-3">
                    {selectedSchools.map((school) => (
                        <div key={school.id} className="flex items-center bg-gray-50 rounded-lg p-2 pr-1">
                            <img
                                src={school.image}
                                alt={school.name}
                                className="w-8 h-8 rounded object-cover mr-2"
                            />
                            <div className="min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate max-w-24">
                                    {school.name}
                                </p>
                                <p className="text-xs text-gray-500 truncate">
                                    {school.location.city}
                                </p>
                            </div>
                            <button
                                onClick={() => removeSchool(school.id)}
                                className="ml-2 p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded"
                            >
                                <X className="h-3 w-3" />
                            </button>
                        </div>
                    ))}

                    {selectedSchools.length < 3 && (
                        <div className="flex items-center justify-center w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg text-gray-400">
                            <Plus className="h-4 w-4" />
                        </div>
                    )}
                </div>

                <button
                    onClick={onCompare}
                    disabled={selectedSchools.length < 2}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                    <BarChart3 className="h-4 w-4" />
                    <span>Compare {selectedSchools.length} Schools</span>
                </button>
            </div>
        </div>
    );
};

export default ComparisonBar;