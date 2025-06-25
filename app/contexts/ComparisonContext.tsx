"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { School } from '../types/school';

interface ComparisonContextType {
    selectedSchools: School[];
    addSchool: (school: School) => void;
    removeSchool: (schoolId: string) => void;
    clearAll: () => void;
    isSelected: (schoolId: string) => boolean;
    canAddMore: boolean;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const useComparison = () => {
    const context = useContext(ComparisonContext);
    if (!context) {
        throw new Error('useComparison must be used within a ComparisonProvider');
    }
    return context;
};

interface ComparisonProviderProps {
    children: ReactNode;
}

export const ComparisonProvider: React.FC<ComparisonProviderProps> = ({ children }) => {
    const [selectedSchools, setSelectedSchools] = useState<School[]>([]);
    const MAX_SCHOOLS = 3;

    const addSchool = (school: School) => {
        if (selectedSchools.length < MAX_SCHOOLS && !isSelected(school.id)) {
            setSelectedSchools(prev => [...prev, school]);
        }
    };

    const removeSchool = (schoolId: string) => {
        setSelectedSchools(prev => prev.filter(school => school.id !== schoolId));
    };

    const clearAll = () => {
        setSelectedSchools([]);
    };

    const isSelected = (schoolId: string) => {
        return selectedSchools.some(school => school.id === schoolId);
    };

    const canAddMore = selectedSchools.length < MAX_SCHOOLS;

    return (
        <ComparisonContext.Provider
            value={{
                selectedSchools,
                addSchool,
                removeSchool,
                clearAll,
                isSelected,
                canAddMore,
            }}
        >
            {children}
        </ComparisonContext.Provider>
    );
};