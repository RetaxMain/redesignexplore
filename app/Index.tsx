"use client"
import React from 'react';
import Link from 'next/link';
import { GraduationCap, Search, TrendingUp, Users, Award, BarChart3 } from 'lucide-react';

const Index = () => {
    const stats = [
        { icon: BarChart3, value: '500+', label: 'Schools Listed', color: 'text-blue-600' },
        { icon: Users, value: '250K+', label: 'Students Enrolled', color: 'text-green-600' },
        { icon: TrendingUp, value: '4.5', label: 'Average Rating', color: 'text-purple-600' },
        { icon: Award, value: '1200+', label: 'Total Awards', color: 'text-orange-600' }
    ];

    const features = [
        {
            title: 'Advanced Search',
            description: 'Find schools by location, type, curriculum, and more with our powerful search filters.',
            icon: Search
        },
        {
            title: 'School Comparison',
            description: 'Compare multiple schools side-by-side to make the best decision for your child.',
            icon: BarChart3
        },
        {
            title: 'Detailed Profiles',
            description: 'Access comprehensive information about each school including facilities, achievements, and contact details.',
            icon: GraduationCap
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
                                <GraduationCap className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">Schoogle</h1>
                                <p className="text-xs text-gray-600">Premium School Analytics</p>
                            </div>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link href="/schools" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                Browse Schools
                            </Link>
                            <Link href="/schools" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Get Started
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Find the Perfect
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                                School for Your Child
                            </span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Discover and compare top educational institutions with our comprehensive school directory.
                            Make informed decisions with detailed insights and analytics.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link href="/schools" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                                Explore Schools
                            </Link>
                            <Link href="/schools" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                                Advanced Search
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
                        <p className="text-lg text-gray-600">Join families who have found their perfect school match</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="p-3 bg-white rounded-full shadow-md">
                                        <stat.icon className={`h-8 w-8 ${stat.color}`} />
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Why Choose Schoogle?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We provide comprehensive tools and insights to help you make the best educational decisions for your family.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center group">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors">
                                    <feature.icon className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect School?</h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        Start exploring our comprehensive database of schools and find the perfect match for your child's educational journey.
                    </p>
                    <Link href="/schools" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
                        <Search className="h-5 w-5" />
                        <span>Start Your Search</span>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-50 border-t border-gray-200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <div className="p-2 bg-blue-600 rounded-lg">
                                <GraduationCap className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900">Schoogle</span>
                        </div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Advanced educational analytics platform providing comprehensive insights
                            into academic institutions and performance metrics.
                        </p>
                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-500">
                                © 2024 Schoogle. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
