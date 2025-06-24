import React from 'react';
import { School } from '../types/school';
import SchoolCard from './SchoolCard';

interface SchoolGridProps {
    schools: School[];
}

const SchoolGrid: React.FC<SchoolGridProps> = ({ schools }) => {
    if (schools.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                    <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No schools found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {schools.map(school => (
                <SchoolCard key={school.id} school={school} />
            ))}
        </div>
    );
};

export default SchoolGrid;