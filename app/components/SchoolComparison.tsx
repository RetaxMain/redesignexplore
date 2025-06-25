import React, { useState } from 'react';
import {
    ArrowLeft,
    Star,
    Users,
    Calendar,
    DollarSign,
    MapPin,
    Award,
    BookOpen,
    Building,
    CheckCircle,
    X,
    Phone,
    MessageCircle,
    ExternalLink,
    Plus,
    Search
} from 'lucide-react';
import { School } from '../types/school';
import { useComparison } from '../contexts/ComparisonContext';
import SchoolSearchModal from './SchoolSearchModal';

interface SchoolComparisonProps {
    onBack: () => void;
    onContactClick: (type: 'phone' | 'whatsapp', school: School) => void;
    availableSchools: School[];
}

const SchoolComparison: React.FC<SchoolComparisonProps> = ({ onBack, onContactClick, availableSchools }) => {
    const { selectedSchools, removeSchool, canAddMore } = useComparison();
    const [showSearchModal, setShowSearchModal] = useState(false);

    const getTypeColor = (type: string) => {
        const colors = {
            'Public': 'bg-emerald-50 text-emerald-700 border-emerald-200',
            'Private': 'bg-blue-50 text-blue-700 border-blue-200',
            'Charter': 'bg-purple-50 text-purple-700 border-purple-200',
            'International': 'bg-orange-50 text-orange-700 border-orange-200'
        };
        return colors[type as keyof typeof colors] || 'bg-gray-50 text-gray-700 border-gray-200';
    };

    const getBestValue = (schools: School[], key: keyof School) => {
        if (key === 'rating') {
            return Math.max(...schools.map(s => s.rating as number));
        }
        if (key === 'students') {
            return Math.max(...schools.map(s => s.students as number));
        }
        if (key === 'tuitionFee') {
            const fees = schools.map(s => s.tuitionFee).filter(Boolean) as number[];
            return fees.length > 0 ? Math.min(...fees) : null;
        }
        return null;
    };

    const isHighlighted = (school: School, key: keyof School, value: any) => {
        const bestValue = getBestValue(selectedSchools, key);
        if (bestValue === null) return false;

        if (key === 'tuitionFee' && school.tuitionFee) {
            return school.tuitionFee === bestValue;
        }
        return value === bestValue;
    };

    if (selectedSchools.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">No Schools Selected</h2>
                    <p className="text-gray-600 mb-6">Please select at least 2 schools to compare</p>
                    <button
                        onClick={onBack}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Back to Schools
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <button
                            onClick={onBack}
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            <span className="font-medium">Back to Schools</span>
                        </button>
                        <h1 className="text-xl font-bold text-gray-900">School Comparison</h1>
                        <div className="w-32" /> {/* Spacer for balance */}
                        {/* Add School Button */}
                        {canAddMore && (
                            <button
                                onClick={() => setShowSearchModal(true)}
                                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                <Search className="h-4 w-4" />
                                <span>Add School</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* School Headers */}
                <div className="grid gap-6 mb-8" style={{ gridTemplateColumns: `repeat(${Math.min(selectedSchools.length + (canAddMore ? 1 : 0), 3)}, 1fr)` }}>
                    {selectedSchools.map((school) => (
                        <div key={school.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="relative h-48">
                                <img
                                    src={school.image}
                                    alt={school.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                <button
                                    onClick={() => removeSchool(school.id)}
                                    className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                                >
                                    <X className="h-4 w-4 text-gray-600" />
                                </button>

                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${getTypeColor(school.type)} bg-white/95`}>
                                            {school.type}
                                        </span>
                                        <div className="bg-white/95 rounded px-2 py-1 flex items-center">
                                            <Star className="h-3 w-3 text-amber-400 fill-amber-400 mr-1" />
                                            <span className="text-xs font-semibold">{school.rating}</span>
                                        </div>
                                    </div>
                                    <h2 className="text-lg font-bold text-white mb-1">{school.name}</h2>
                                    <div className="flex items-center text-white/90 text-sm">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        <span>{school.location.city}, {school.location.state}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4">
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => onContactClick('phone', school)}
                                        className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                                    >
                                        <Phone className="h-3 w-3" />
                                        <span>Call</span>
                                    </button>
                                    <button
                                        onClick={() => onContactClick('whatsapp', school)}
                                        className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                                    >
                                        <MessageCircle className="h-3 w-3" />
                                        <span>Chat</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Add School Card */}
                    {canAddMore && (
                        <div className="bg-white rounded-xl shadow-sm border-2 border-dashed border-gray-300 overflow-hidden flex items-center justify-center min-h-[300px]">
                            <button
                                onClick={() => setShowSearchModal(true)}
                                className="flex flex-col items-center space-y-3 p-8 text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-colors group"
                            >
                                <div className="w-16 h-16 bg-gray-100 group-hover:bg-blue-50 rounded-full flex items-center justify-center transition-colors">
                                    <Plus className="h-8 w-8" />
                                </div>
                                <div className="text-center">
                                    <p className="font-semibold">Add School</p>
                                    <p className="text-sm">Search and compare more schools</p>
                                </div>
                            </button>
                        </div>
                    )}
                </div>

                {/* Comparison Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <tbody>
                                {/* Basic Info */}
                                <tr className="border-b border-gray-100">
                                    <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-900 sticky left-0 z-10">
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 mr-2 text-blue-600" />
                                            Rating
                                        </div>
                                    </td>
                                    {selectedSchools.map((school) => (
                                        <td key={school.id} className="px-6 py-4 text-center">
                                            <div className={`inline-flex items-center px-3 py-1 rounded-full ${isHighlighted(school, 'rating', school.rating)
                                                ? 'bg-green-100 border-2 border-green-400'
                                                : 'bg-amber-50'
                                                }`}>
                                                <Star className="h-4 w-4 text-amber-400 fill-amber-400 mr-1" />
                                                <span className="font-semibold">{school.rating}</span>
                                            </div>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b border-gray-100">
                                    <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-900 sticky left-0 z-10">
                                        <div className="flex items-center">
                                            <Users className="h-4 w-4 mr-2 text-blue-600" />
                                            Students
                                        </div>
                                    </td>
                                    {selectedSchools.map((school) => (
                                        <td key={school.id} className="px-6 py-4 text-center">
                                            <span className={`font-semibold ${isHighlighted(school, 'students', school.students)
                                                ? 'text-green-600 bg-green-50 px-2 py-1 rounded border-2 border-green-400'
                                                : 'text-gray-900'
                                                }`}>
                                                {school.students.toLocaleString()}
                                            </span>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b border-gray-100">
                                    <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-900 sticky left-0 z-10">
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                                            Established
                                        </div>
                                    </td>
                                    {selectedSchools.map((school) => (
                                        <td key={school.id} className="px-6 py-4 text-center">
                                            <span className="font-semibold text-gray-900">{school.establishedYear}</span>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b border-gray-100">
                                    <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-900 sticky left-0 z-10">
                                        <div className="flex items-center">
                                            <DollarSign className="h-4 w-4 mr-2 text-blue-600" />
                                            Annual Fee
                                        </div>
                                    </td>
                                    {selectedSchools.map((school) => (
                                        <td key={school.id} className="px-6 py-4 text-center">
                                            {school.tuitionFee ? (
                                                <span className={`font-semibold ${isHighlighted(school, 'tuitionFee', school.tuitionFee)
                                                    ? 'text-green-600 bg-green-50 px-2 py-1 rounded border-2 border-green-400'
                                                    : 'text-gray-900'
                                                    }`}>
                                                    ${school.tuitionFee.toLocaleString()}
                                                </span>
                                            ) : (
                                                <span className="text-gray-500">Not specified</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b border-gray-100">
                                    <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-900 sticky left-0 z-10">
                                        <div className="flex items-center">
                                            <Award className="h-4 w-4 mr-2 text-blue-600" />
                                            Achievements
                                        </div>
                                    </td>
                                    {selectedSchools.map((school) => (
                                        <td key={school.id} className="px-6 py-4">
                                            <div className="space-y-1 max-h-32 overflow-y-auto">
                                                {school.achievements.map((achievement, index) => (
                                                    <div key={index} className="text-sm text-gray-700 bg-purple-50 px-2 py-1 rounded">
                                                        {achievement}
                                                    </div>
                                                ))}
                                            </div>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b border-gray-100">
                                    <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-900 sticky left-0 z-10">
                                        <div className="flex items-center">
                                            <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                                            Curriculum
                                        </div>
                                    </td>
                                    {selectedSchools.map((school) => (
                                        <td key={school.id} className="px-6 py-4">
                                            <div className="space-y-1 max-h-32 overflow-y-auto">
                                                {school.curriculum.map((program, index) => (
                                                    <div key={index} className="flex items-center text-sm text-gray-700">
                                                        <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                                                        {program}
                                                    </div>
                                                ))}
                                            </div>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b border-gray-100">
                                    <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-900 sticky left-0 z-10">
                                        <div className="flex items-center">
                                            <Building className="h-4 w-4 mr-2 text-blue-600" />
                                            Features
                                        </div>
                                    </td>
                                    {selectedSchools.map((school) => (
                                        <td key={school.id} className="px-6 py-4">
                                            <div className="space-y-1 max-h-32 overflow-y-auto">
                                                {school.features.map((feature, index) => (
                                                    <div key={index} className="text-sm text-gray-700 bg-blue-50 px-2 py-1 rounded">
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </td>
                                    ))}
                                </tr>

                                <tr>
                                    <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-900 sticky left-0 z-10">
                                        <div className="flex items-center">
                                            <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                                            Website
                                        </div>
                                    </td>
                                    {selectedSchools.map((school) => (
                                        <td key={school.id} className="px-6 py-4 text-center">
                                            <a
                                                href={`https://${school.website}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                            >
                                                Visit Website
                                            </a>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Legend */}
                <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-green-100 border-2 border-green-400 rounded mr-3"></div>
                        <span className="text-sm text-green-800 font-medium">
                            Highlighted values indicate the best option in each category
                        </span>
                    </div>
                </div>
            </div>
            {/* Search Modal */}
            <SchoolSearchModal
                isOpen={showSearchModal}
                onClose={() => setShowSearchModal(false)}
                availableSchools={availableSchools}
            />
        </div>
    );
};

export default SchoolComparison;