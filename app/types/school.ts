
export interface School {
    id: string;
    name: string;
    type: 'Public' | 'Private' | 'Charter' | 'International';
    location: {
        address: string;
        city: string;
        state: string;
        area: string;
    };
    rating: number;
    students: number;
    establishedYear: number;
    tuitionFee?: number;
    description: string;
    image: string;
    website: string;
    contact: {
        phone: string;
        email: string;
    };
    features: string[];
    amenities: string[];
    curriculum: string[];
    achievements: string[];
    schoolBoard: string;
    medium: string[];
}

export interface FilterOptions {
    searchTerm: string;
    schoolType: string[];
    minRating: number;
    state: string;
    city: string;
    area: string;
    maxTuition: number;
    amenities: string[];
    schoolBoard: string[];
    medium: string[];
}
