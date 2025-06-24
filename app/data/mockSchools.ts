import { School } from '../types/school';

export const mockSchools: School[] = [
    {
        id: '1',
        name: 'Tata School',
        type: 'Private',
        rating: 4.8,
        location: {
            city: 'Gujarat',
            state: 'GJ',
            address: '123 Education Drive'
        },
        students: 1200,
        establishedYear: 1985,
        tuitionFee: 25000,
        features: ['STEM Program', 'Arts Center', 'Sports Complex', 'Library'],
        description: 'A prestigious private school known for academic excellence and innovative programs.',
        image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.westfieldacademy.edu',
        contact: {
            phone: '(415) 555-0123',
            email: 'info@westfieldacademy.edu'
        },
        achievements: ['National Merit School', 'STEM Excellence Award'],
        curriculum: ['Advanced Placement', 'International Baccalaureate', 'STEM Focus']
    },
    {
        id: '2',
        name: 'Reliance School',
        type: 'Public',
        rating: 4.5,
        location: {
            city: 'Mumbai',
            state: 'MB',
            address: '456 School Street'
        },
        students: 2100,
        establishedYear: 1962,
        features: ['Technology Lab', 'Music Program', 'Athletic Fields', 'Career Center'],
        description: 'A comprehensive public high school offering diverse programs and opportunities.',
        image: 'https://images.pexels.com/photos/159844/pexels-photo-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.lincolnhs.edu',
        contact: {
            phone: '(213) 555-0456',
            email: 'admin@lincolnhs.edu'
        },
        achievements: ['Blue Ribbon School', 'Distinguished School Award'],
        curriculum: ['College Prep', 'Vocational Training', 'Arts Integration']
    },
    {
        id: '3',
        name: 'G.D Goenka School',
        type: 'International',
        rating: 4.9,
        location: {
            city: 'New York',
            state: 'NY',
            address: '789 World Avenue'
        },
        students: 800,
        establishedYear: 2005,
        tuitionFee: 35000,
        features: ['Multilingual Program', 'Cultural Center', 'Innovation Lab', 'Exchange Program'],
        description: 'Premier international school fostering global citizenship and multilingual education.',
        image: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.globalintlschool.edu',
        contact: {
            phone: '(212) 555-0789',
            email: 'admissions@globalintlschool.edu'
        },
        achievements: ['IB World School', 'Global Education Excellence'],
        curriculum: ['International Baccalaureate', 'Language Immersion', 'Global Studies']
    },
    {
        id: '4',
        name: 'Delhi Public School',
        type: 'Charter',
        rating: 4.6,
        location: {
            city: 'Austin',
            state: 'TX',
            address: '321 Innovation Blvd'
        },
        students: 950,
        establishedYear: 2010,
        features: ['Maker Space', 'Robotics Lab', 'Green Campus', 'Entrepreneurship Center'],
        description: 'Forward-thinking charter school emphasizing innovation, creativity, and entrepreneurship.',
        image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.innovationcharter.edu',
        contact: {
            phone: '(512) 555-0321',
            email: 'info@innovationcharter.edu'
        },
        achievements: ['Innovation in Education Award', 'Green School Certification'],
        curriculum: ['Project-Based Learning', 'STEAM Integration', 'Digital Citizenship']
    },
    {
        id: '5',
        name: 'St. Xaviers School',
        type: 'Private',
        rating: 4.7,
        location: {
            city: 'Seattle',
            state: 'WA',
            address: '654 River Road'
        },
        students: 1450,
        establishedYear: 1978,
        tuitionFee: 28000,
        features: ['College Counseling', 'Research Center', 'Performing Arts', 'Outdoor Education'],
        description: 'Elite preparatory school with a strong focus on college readiness and character development.',
        image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.riversideprep.edu',
        contact: {
            phone: '(206) 555-0654',
            email: 'admissions@riversideprep.edu'
        },
        achievements: ['Top College Placement', 'Excellence in Teaching Award'],
        curriculum: ['Honors Program', 'AP Courses', 'Leadership Development']
    },
    {
        id: '6',
        name: 'Metropolitan Public High',
        type: 'Public',
        rating: 4.2,
        location: {
            city: 'Chicago',
            state: 'IL',
            address: '987 Metro Street'
        },
        students: 2500,
        establishedYear: 1955,
        features: ['Diverse Programs', 'Community Service', 'Technical Training', 'Health Center'],
        description: 'Large urban high school serving a diverse community with comprehensive programs.',
        image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.metropublic.edu',
        contact: {
            phone: '(312) 555-0987',
            email: 'contact@metropublic.edu'
        },
        achievements: ['Community Partnership Award', 'Diversity Excellence'],
        curriculum: ['Comprehensive Education', 'CTE Programs', 'Dual Enrollment']
    },
    {
        id: '7',
        name: 'Tech Valley Academy',
        type: 'Charter',
        rating: 4.8,
        location: {
            city: 'San Jose',
            state: 'CA',
            address: '555 Silicon Drive'
        },
        students: 1100,
        establishedYear: 2015,
        tuitionFee: 18000,
        features: ['AI Lab', 'Coding Bootcamp', 'Startup Incubator', 'Tech Mentorship'],
        description: 'Cutting-edge charter school specializing in technology education and digital innovation.',
        image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.techvalleyacademy.edu',
        contact: {
            phone: '(408) 555-0555',
            email: 'info@techvalleyacademy.edu'
        },
        achievements: ['Tech Innovation Award', 'Digital Excellence Recognition'],
        curriculum: ['Computer Science', 'Data Analytics', 'Digital Design']
    },
    {
        id: '8',
        name: 'Heritage Classical School',
        type: 'Private',
        rating: 4.6,
        location: {
            city: 'Boston',
            state: 'MA',
            address: '777 Tradition Lane'
        },
        students: 890,
        establishedYear: 1892,
        tuitionFee: 32000,
        features: ['Classical Education', 'Latin Program', 'Philosophy Studies', 'Debate Team'],
        description: 'Traditional private school emphasizing classical education and liberal arts excellence.',
        image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.heritageclassical.edu',
        contact: {
            phone: '(617) 555-0777',
            email: 'admissions@heritageclassical.edu'
        },
        achievements: ['Classical Education Excellence', 'National Debate Champions'],
        curriculum: ['Liberal Arts', 'Classical Languages', 'Philosophy']
    },
    {
        id: '9',
        name: 'Marry Mata School',
        type: 'Public',
        rating: 4.4,
        location: {
            city: 'Denver',
            state: 'CO',
            address: '888 Mountain View'
        },
        students: 1800,
        establishedYear: 1970,
        features: ['Environmental Science', 'Outdoor Education', 'Sustainability Lab', 'Solar Campus'],
        description: 'Environmentally-focused public school with strong outdoor education programs.',
        image: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.greenvalleyhs.edu',
        contact: {
            phone: '(303) 555-0888',
            email: 'info@greenvalleyhs.edu'
        },
        achievements: ['Green School Award', 'Environmental Excellence'],
        curriculum: ['Environmental Science', 'Outdoor Leadership', 'Sustainability Studies']
    },
    {
        id: '10',
        name: 'Arts & Performance Academy',
        type: 'Charter',
        rating: 4.7,
        location: {
            city: 'Nashville',
            state: 'TN',
            address: '999 Creative Circle'
        },
        students: 750,
        establishedYear: 2008,
        tuitionFee: 15000,
        features: ['Recording Studio', 'Theater Complex', 'Dance Studios', 'Art Galleries'],
        description: 'Specialized charter school for students pursuing careers in arts and performance.',
        image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.artsperformance.edu',
        contact: {
            phone: '(615) 555-0999',
            email: 'auditions@artsperformance.edu'
        },
        achievements: ['Arts Excellence Award', 'Performance Recognition'],
        curriculum: ['Performing Arts', 'Visual Arts', 'Music Production']
    },
    {
        id: '11',
        name: 'International Business School',
        type: 'International',
        rating: 4.9,
        location: {
            city: 'Miami',
            state: 'FL',
            address: '111 Global Plaza'
        },
        students: 950,
        establishedYear: 2012,
        tuitionFee: 38000,
        features: ['Business Incubator', 'Trading Floor', 'International Exchange', 'Language Center'],
        description: 'Premier international school focusing on business education and global commerce.',
        image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.intlbusiness.edu',
        contact: {
            phone: '(305) 555-0111',
            email: 'admissions@intlbusiness.edu'
        },
        achievements: ['Business Education Excellence', 'Global Partnership Award'],
        curriculum: ['International Business', 'Economics', 'Global Studies']
    },
    {
        id: '12',
        name: 'Future Leaders Academy',
        type: 'Private',
        rating: 4.8,
        location: {
            city: 'Atlanta',
            state: 'GA',
            address: '222 Leadership Way'
        },
        students: 1350,
        establishedYear: 1995,
        tuitionFee: 29000,
        features: ['Leadership Center', 'Model UN', 'Public Speaking', 'Community Service'],
        description: 'Elite private school dedicated to developing future leaders and public servants.',
        image: 'https://images.pexels.com/photos/159844/pexels-photo-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.futureleaders.edu',
        contact: {
            phone: '(404) 555-0222',
            email: 'info@futureleaders.edu'
        },
        achievements: ['Leadership Excellence', 'Community Impact Award'],
        curriculum: ['Leadership Studies', 'Public Policy', 'Social Sciences']
    }
];