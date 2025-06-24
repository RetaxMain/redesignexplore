import React from 'react';
import {
    MapPin,
    Users,
    Calendar,
    Star,
    Award,
    ExternalLink,
    Phone,
    Mail,
    BookOpen,
    TrendingUp,
    Shield,
    IndianRupee

} from 'lucide-react';
import { School } from '../types/school';

interface SchoolCardProps {
    school: School;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ school }) => {
    const getTypeColor = (type: string) => {
        const colors = {
            'Public': 'bg-emerald-50 text-emerald-700 border-emerald-200',
            'Private': 'bg-blue-50 text-blue-700 border-blue-200',
            'Charter': 'bg-purple-50 text-purple-700 border-purple-200',
            'International': 'bg-orange-50 text-orange-700 border-orange-200'
        };
        return colors[type as keyof typeof colors] || 'bg-gray-50 text-gray-700 border-gray-200';
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'Public': return <Shield className="h-3 w-3" />;
            case 'Private': return <Award className="h-3 w-3" />;
            case 'Charter': return <TrendingUp className="h-3 w-3" />;
            case 'International': return <BookOpen className="h-3 w-3" />;
            default: return <Shield className="h-3 w-3" />;
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 group hover:border-gray-200 h-full flex flex-col">
            {/* Header with Image and Overlay */}
            <div className="relative h-32 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Type Badge */}
                <div className="absolute top-2 left-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border ${getTypeColor(school.type)}`}>
                        {getTypeIcon(school.type)}
                        {school.type}
                    </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center shadow-sm">
                    <Star className="h-3 w-3 text-amber-400 fill-amber-400 mr-1" />
                    <span className="text-xs font-semibold text-gray-800">{school.rating}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-3 flex-1 flex flex-col">
                {/* School Name and Location */}
                <div className="mb-3">
                    <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {school.name}
                    </h3>
                    <div className="flex items-center text-gray-500 text-xs">
                        <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span className="truncate">{school.location.city}, {school.location.state}</span>
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-3 p-2 bg-gray-50 rounded-lg">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                            <Users className="h-3 w-3 text-blue-600 mr-1" />
                            <span className="text-xs font-semibold text-gray-900">{(school.students / 1000).toFixed(1)}K</span>
                        </div>
                        <span className="text-xs text-gray-600">Students</span>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                            <Calendar className="h-3 w-3 text-green-600 mr-1" />
                            <span className="text-xs font-semibold text-gray-900">{school.establishedYear}</span>
                        </div>
                        <span className="text-xs text-gray-600">Est.</span>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                            <Award className="h-3 w-3 text-purple-600 mr-1" />
                            <span className="text-xs font-semibold text-gray-900">{school.achievements.length}</span>
                        </div>
                        <span className="text-xs text-gray-600">Awards</span>
                    </div>
                </div>

                {/* Tuition */}
                {school.tuitionFee && (
                    <div className="flex items-center justify-between mb-3 p-2 bg-blue-50 rounded-lg">
                        <div className="flex items-center">
                            <IndianRupee className="h-3 w-3 text-blue-600 mr-1" />
                            <span className="text-xs font-medium text-blue-900">Annual Tuition</span>
                        </div>
                        <span className="text-xs font-bold text-blue-900">
                            ₹{(school.tuitionFee / 1000).toFixed(0)}K
                        </span>
                    </div>
                )}

                {/* Features */}
                <div className="mb-3 flex-1">
                    <div className="flex flex-wrap gap-1">
                        {school.features.slice(0, 2).map((feature, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">
                                {feature}
                            </span>
                        ))}
                        {school.features.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                                +{school.features.length - 2}
                            </span>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-xs mb-3 line-clamp-2 flex-1">{school.description}</p>

                {/* Actions - Fixed at bottom */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                    <div className="flex space-x-2">
                        <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                            <Phone className="h-3 w-3" />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                            <Mail className="h-3 w-3" />
                        </button>
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-xs transition-colors group/btn">
                        View Details
                        <ExternalLink className="h-3 w-3 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SchoolCard;