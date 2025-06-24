export interface School {
    id: string;
    name: string;
    type: 'Public' | 'Private' | 'Charter' | 'International';
    rating: number;
    location: {
        city: string;
        state: string;
        address: string;
    };
    students: number;
    establishedYear: number;
    tuitionFee?: number;
    features: string[];
    description: string;
    image: string;
    website: string;
    contact: {
        phone: string;
        email: string;
    };
    achievements: string[];
    curriculum: string[];
}

export interface FilterOptions {
    searchTerm: string;
    schoolType: string[];
    minRating: number;
    location: string;
    maxTuition: number;
    features: string[];
}