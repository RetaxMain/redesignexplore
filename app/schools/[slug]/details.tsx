"use client"
import React from 'react';

import Link from 'next/link';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import {
    ArrowLeft,
    MapPin,
    Users,
    Calendar,
    DollarSign,
    Star,
    Award,
    Phone,
    MessageCircle,
    ExternalLink,
    Globe,
    BookOpen,
    GraduationCap,
    CheckCircle,
    Building,
    Mail,
    TrendingUp,
    Shield,
    Zap
} from 'lucide-react';
import { School } from '../../types/school';
import { mockSchools } from '../../data/mockSchools';
import ContactModal from '../../components/ContactModal';
import { useRouter } from 'next/navigation';

interface SchoolPageProps {
    school: School | null;
}

export default function SchoolPage({ school }: SchoolPageProps) {
    const router = useRouter();
    const [contactModal, setContactModal] = React.useState<{
        isOpen: boolean;
        type: 'phone' | 'whatsapp';
    }>({
        isOpen: false,
        type: 'phone'
    });

    // If school not found, show 404
    if (!school) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">School Not Found</h1>
                    <p className="text-gray-600 mb-8">The school you're looking for doesn't exist.</p>
                    <Link href="/schools" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Browse All Schools
                    </Link>
                </div>
            </div>
        );
    }

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
            case 'Public': return <Shield className="h-4 w-4" />;
            case 'Private': return <Award className="h-4 w-4" />;
            case 'Charter': return <TrendingUp className="h-4 w-4" />;
            case 'International': return <BookOpen className="h-4 w-4" />;
            default: return <Shield className="h-4 w-4" />;
        }
    };

    const handleContactClick = (type: 'phone' | 'whatsapp') => {
        setContactModal({
            isOpen: true,
            type
        });
    };

    const handleContactModalClose = () => {
        setContactModal({
            isOpen: false,
            type: 'phone'
        });
    };

    return (
        <>
            <Head>
                <title>{school.name} - School Details | Schoogle</title>
                <meta name="description" content={`Learn about ${school.name}, a ${school.type.toLowerCase()} school in ${school.location.city}, ${school.location.state}. ${school.description.slice(0, 150)}...`} />
                <meta name="keywords" content={`${school.name}, school, education, ${school.location.city}, ${school.location.state}, ${school.type}, ${school.curriculum.join(', ')}`} />
                <meta property="og:title" content={`${school.name} - School Details`} />
                <meta property="og:description" content={school.description} />
                <meta property="og:image" content={school.image} />
                <meta property="og:type" content="website" />
                <link rel="canonical" href={`https://schoogle.com/school/${router.query.slug}`} />
            </Head>

            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center space-x-4">
                                <Link href="/schools" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                                    <ArrowLeft className="h-5 w-5" />
                                    <span className="font-medium">Back to Schools</span>
                                </Link>
                                <div className="h-6 w-px bg-gray-300" />
                                <Link href="/" className="flex items-center space-x-2">
                                    <div className="p-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded">
                                        <GraduationCap className="h-5 w-5 text-white" />
                                    </div>
                                    <span className="font-bold text-gray-900">Schoogle</span>
                                </Link>
                            </div>

                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={() => handleContactClick('phone')}
                                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    <Phone className="h-4 w-4" />
                                    <span>Call</span>
                                </button>
                                <button
                                    onClick={() => handleContactClick('whatsapp')}
                                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    <span>WhatsApp</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="relative h-80 overflow-hidden">
                    <img
                        src={school.image}
                        alt={school.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="flex items-center space-x-3 mb-4">
                                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium border ${getTypeColor(school.type)} bg-white/95 backdrop-blur-sm`}>
                                            {getTypeIcon(school.type)}
                                            {school.type} School
                                        </span>
                                        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center">
                                            <Star className="h-4 w-4 text-amber-400 fill-amber-400 mr-1" />
                                            <span className="text-sm font-semibold text-gray-800">{school.rating}</span>
                                        </div>
                                    </div>

                                    <h1 className="text-4xl font-bold text-white mb-2">{school.name}</h1>
                                    <div className="flex items-center text-white/90 text-lg">
                                        <MapPin className="h-5 w-5 mr-2" />
                                        <span>{school.location.city}, {school.location.state}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Main Info */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Key Metrics */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-6">Key Metrics</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                                        <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                                        <div className="text-2xl font-bold text-gray-900">{(school.students / 1000).toFixed(1)}K</div>
                                        <div className="text-sm text-gray-600">Students</div>
                                    </div>
                                    <div className="text-center p-4 bg-green-50 rounded-lg">
                                        <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
                                        <div className="text-2xl font-bold text-gray-900">{school.establishedYear}</div>
                                        <div className="text-sm text-gray-600">Established</div>
                                    </div>
                                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                                        <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                                        <div className="text-2xl font-bold text-gray-900">{school.achievements.length}</div>
                                        <div className="text-sm text-gray-600">Awards</div>
                                    </div>
                                    {school.tuitionFee && (
                                        <div className="text-center p-4 bg-orange-50 rounded-lg">
                                            <DollarSign className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                                            <div className="text-2xl font-bold text-gray-900">${(school.tuitionFee / 1000).toFixed(0)}K</div>
                                            <div className="text-sm text-gray-600">Annual Fee</div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* About */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">About the School</h2>
                                <p className="text-gray-700 leading-relaxed">{school.description}</p>
                            </div>

                            {/* Curriculum */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                                    Curriculum & Programs
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {school.curriculum.map((program, index) => (
                                        <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                                            <span className="text-gray-800 font-medium">{program}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features & Facilities */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <Building className="h-5 w-5 mr-2 text-blue-600" />
                                    Features & Facilities
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {school.features.map((feature, index) => (
                                        <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                                            <Zap className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                                            <span className="text-gray-800">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Achievements */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <Award className="h-5 w-5 mr-2 text-purple-600" />
                                    Achievements & Recognition
                                </h2>
                                <div className="space-y-3">
                                    {school.achievements.map((achievement, index) => (
                                        <div key={index} className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
                                            <div className="p-2 bg-purple-100 rounded-lg mr-4">
                                                <Award className="h-5 w-5 text-purple-600" />
                                            </div>
                                            <span className="text-gray-800 font-medium">{achievement}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact & Quick Info */}
                        <div className="space-y-6">
                            {/* Contact Card */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center">
                                        <Phone className="h-5 w-5 text-gray-400 mr-3" />
                                        <span className="text-gray-700">{school.contact.phone}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="h-5 w-5 text-gray-400 mr-3" />
                                        <span className="text-gray-700">{school.contact.email}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Globe className="h-5 w-5 text-gray-400 mr-3" />
                                        <a href={`https://${school.website}`} className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                                            {school.website}
                                        </a>
                                    </div>
                                    <div className="flex items-start">
                                        <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                                        <span className="text-gray-700">{school.location.address}, {school.location.city}, {school.location.state}</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <button
                                        onClick={() => handleContactClick('phone')}
                                        className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                                    >
                                        <Phone className="h-4 w-4" />
                                        <span>Request Call Back</span>
                                    </button>
                                    <button
                                        onClick={() => handleContactClick('whatsapp')}
                                        className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                    >
                                        <MessageCircle className="h-4 w-4" />
                                        <span>WhatsApp Inquiry</span>
                                    </button>
                                    <a
                                        href={`https://${school.website}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        <span>Visit Website</span>
                                    </a>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-sm p-6 text-white">
                                <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-blue-100">School Type</span>
                                        <span className="font-semibold">{school.type}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-blue-100">Rating</span>
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                                            <span className="font-semibold">{school.rating}</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-blue-100">Students</span>
                                        <span className="font-semibold">{school.students.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-blue-100">Established</span>
                                        <span className="font-semibold">{school.establishedYear}</span>
                                    </div>
                                    {school.tuitionFee && (
                                        <div className="flex justify-between items-center">
                                            <span className="text-blue-100">Annual Fee</span>
                                            <span className="font-semibold">${school.tuitionFee.toLocaleString()}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
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

                {/* Contact Modal */}
                <ContactModal
                    isOpen={contactModal.isOpen}
                    onClose={handleContactModalClose}
                    type={contactModal.type}
                    schoolName={school.name}
                />
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params, query }) => {
    const schoolId = query.id as string;
    const school = mockSchools.find(s => s.id === schoolId) || null;

    return {
        props: {
            school,
        },
    };
};
