export interface School {
    id: string;
    name: string;
    type: ('Public' | 'Private' | 'International')[];
    rating: number;
    location: {
        city: string;
        state: string;
        address: string;
        area: string;
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
    amenities: string[];
    schoolBoard: string;
    medium: string[];
    feeStructure: {
        class1to5: number;
        class6to8: number;
        class9to10: number;
        class11to12Science: number;
        class11to12Commerce: number;
        class11to12Arts: number;
    };
    admissionProcess: string[];
    facultyCount: number;
    studentTeacherRatio: string;
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