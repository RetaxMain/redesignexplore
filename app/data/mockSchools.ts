import { School } from '../types/school';

export const mockSchools: School[] = [
    {
        id: '1',
        name: 'Westfield Academy',
        type: 'Private',
        rating: 4.8,
        location: {
            city: 'San Francisco',
            state: 'CA',
            address: '123 Education Drive',
            area: 'Downtown'
        },
        students: 1200,
        establishedYear: 1985,
        tuitionFee: 25000,
        features: ['STEM Program', 'Arts Center', 'Sports Complex', 'Library'],
        amenities: ['Swimming Pool', 'Cafeteria', 'Medical Room', 'Transport', 'Playground', 'Computer Lab'],
        schoolBoard: 'CBSE',
        medium: ['English'],
        description: 'A prestigious private school known for academic excellence and innovative programs.',
        image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.westfieldacademy.edu',
        contact: {
            phone: '(415) 555-0123',
            email: 'info@westfieldacademy.edu'
        },
        achievements: ['National Merit School', 'STEM Excellence Award'],
        curriculum: ['Advanced Placement', 'International Baccalaureate', 'STEM Focus'],
        feeStructure: {
            class1to5: 18000,
            class6to8: 22000,
            class9to10: 25000,
            class11to12Science: 28000,
            class11to12Commerce: 26000,
            class11to12Arts: 24000
        },
        admissionProcess: ['Online Application', 'Entrance Test', 'Interview', 'Document Verification'],
        facultyCount: 85,
        studentTeacherRatio: '14:1'
    },
    {
        id: '2',
        name: 'Lincoln High School',
        type: 'Public',
        rating: 4.5,
        location: {
            city: 'Los Angeles',
            state: 'CA',
            address: '456 School Street',
            area: 'Central LA'
        },
        students: 2100,
        establishedYear: 1962,
        features: ['Technology Lab', 'Music Program', 'Athletic Fields', 'Career Center'],
        amenities: ['Library', 'Auditorium', 'Sports Ground', 'Canteen', 'Science Lab', 'Art Room'],
        schoolBoard: 'State Board',
        medium: ['English', 'Spanish'],
        description: 'A comprehensive public high school offering diverse programs and opportunities.',
        image: 'https://images.pexels.com/photos/159844/pexels-photo-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.lincolnhs.edu',
        contact: {
            phone: '(213) 555-0456',
            email: 'admin@lincolnhs.edu'
        },
        achievements: ['Blue Ribbon School', 'Distinguished School Award'],
        curriculum: ['College Prep', 'Vocational Training', 'Arts Integration'],
        feeStructure: {
            class1to5: 0,
            class6to8: 0,
            class9to10: 0,
            class11to12Science: 0,
            class11to12Commerce: 0,
            class11to12Arts: 0
        },
        admissionProcess: ['Direct Admission', 'Document Verification'],
        facultyCount: 120,
        studentTeacherRatio: '17:1'
    },
    {
        id: '3',
        name: 'Global International School',
        type: 'International',
        rating: 4.9,
        location: {
            city: 'New York',
            state: 'NY',
            address: '789 World Avenue',
            area: 'Manhattan'
        },
        students: 800,
        establishedYear: 2005,
        tuitionFee: 35000,
        features: ['Multilingual Program', 'Cultural Center', 'Innovation Lab', 'Exchange Program'],
        amenities: ['International Cuisine Cafeteria', 'Olympic Pool', 'Theatre', 'Observatory', 'Language Lab', 'Robotics Lab'],
        schoolBoard: 'IB',
        medium: ['English', 'French', 'Spanish'],
        description: 'Premier international school fostering global citizenship and multilingual education.',
        image: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.globalintlschool.edu',
        contact: {
            phone: '(212) 555-0789',
            email: 'admissions@globalintlschool.edu'
        },
        achievements: ['IB World School', 'Global Education Excellence'],
        curriculum: ['International Baccalaureate', 'Language Immersion', 'Global Studies'],
        feeStructure: {
            class1to5: 28000,
            class6to8: 32000,
            class9to10: 35000,
            class11to12Science: 38000,
            class11to12Commerce: 36000,
            class11to12Arts: 34000
        },
        admissionProcess: ['Online Application', 'Assessment Test', 'Parent Interview', 'Portfolio Review'],
        facultyCount: 65,
        studentTeacherRatio: '12:1'
    },
    {
        id: '4',
        name: 'Innovation Charter Academy',
        type: 'Charter',
        rating: 4.6,
        location: {
            city: 'Austin',
            state: 'TX',
            address: '321 Innovation Blvd',
            area: 'Tech District'
        },
        students: 950,
        establishedYear: 2010,
        features: ['Maker Space', 'Robotics Lab', 'Green Campus', 'Entrepreneurship Center'],
        amenities: ['3D Printing Lab', 'Solar Panels', 'Organic Garden', 'Meditation Room', 'Coding Dojo', 'Startup Incubator'],
        schoolBoard: 'CBSE',
        medium: ['English'],
        description: 'Forward-thinking charter school emphasizing innovation, creativity, and entrepreneurship.',
        image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.innovationcharter.edu',
        contact: {
            phone: '(512) 555-0321',
            email: 'info@innovationcharter.edu'
        },
        achievements: ['Innovation in Education Award', 'Green School Certification'],
        curriculum: ['Project-Based Learning', 'STEAM Integration', 'Digital Citizenship'],
        feeStructure: {
            class1to5: 15000,
            class6to8: 18000,
            class9to10: 20000,
            class11to12Science: 22000,
            class11to12Commerce: 20000,
            class11to12Arts: 18000
        },
        admissionProcess: ['Online Application', 'Aptitude Test', 'Creative Portfolio', 'Group Discussion'],
        facultyCount: 72,
        studentTeacherRatio: '13:1'
    },
    {
        id: '5',
        name: 'Riverside Preparatory',
        type: 'Private',
        rating: 4.7,
        location: {
            city: 'Seattle',
            state: 'WA',
            address: '654 River Road',
            area: 'Riverside'
        },
        students: 1450,
        establishedYear: 1978,
        tuitionFee: 28000,
        features: ['College Counseling', 'Research Center', 'Performing Arts', 'Outdoor Education'],
        amenities: ['Rowing Club', 'Greenhouse', 'Recording Studio', 'Debate Hall', 'Chess Club', 'Wellness Center'],
        schoolBoard: 'ICSE',
        medium: ['English'],
        description: 'Elite preparatory school with a strong focus on college readiness and character development.',
        image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.riversideprep.edu',
        contact: {
            phone: '(206) 555-0654',
            email: 'admissions@riversideprep.edu'
        },
        achievements: ['Top College Placement', 'Excellence in Teaching Award'],
        curriculum: ['Honors Program', 'AP Courses', 'Leadership Development'],
        feeStructure: {
            class1to5: 22000,
            class6to8: 26000,
            class9to10: 28000,
            class11to12Science: 32000,
            class11to12Commerce: 30000,
            class11to12Arts: 28000
        },
        admissionProcess: ['Entrance Exam', 'Interview', 'Academic Records Review', 'Recommendation Letters'],
        facultyCount: 95,
        studentTeacherRatio: '15:1'
    },
    {
        id: '6',
        name: 'Metropolitan Public High',
        type: 'Public',
        rating: 4.2,
        location: {
            city: 'Chicago',
            state: 'IL',
            address: '987 Metro Street',
            area: 'Downtown'
        },
        students: 2500,
        establishedYear: 1955,
        features: ['Diverse Programs', 'Community Service', 'Technical Training', 'Health Center'],
        amenities: ['Multi-purpose Hall', 'Gym', 'Computer Center', 'Counseling Room', 'First Aid', 'Bus Service'],
        schoolBoard: 'State Board',
        medium: ['English'],
        description: 'Large urban high school serving a diverse community with comprehensive programs.',
        image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.metropublic.edu',
        contact: {
            phone: '(312) 555-0987',
            email: 'contact@metropublic.edu'
        },
        achievements: ['Community Partnership Award', 'Diversity Excellence'],
        curriculum: ['Comprehensive Education', 'CTE Programs', 'Dual Enrollment'],
        feeStructure: {
            class1to5: 0,
            class6to8: 0,
            class9to10: 0,
            class11to12Science: 0,
            class11to12Commerce: 0,
            class11to12Arts: 0
        },
        admissionProcess: ['Direct Admission', 'Zoning Requirements'],
        facultyCount: 150,
        studentTeacherRatio: '16:1'
    },
    {
        id: '7',
        name: 'Tech Valley Academy',
        type: 'Charter',
        rating: 4.8,
        location: {
            city: 'San Jose',
            state: 'CA',
            address: '555 Silicon Drive',
            area: 'Silicon Valley'
        },
        students: 1100,
        establishedYear: 2015,
        tuitionFee: 18000,
        features: ['AI Lab', 'Coding Bootcamp', 'Startup Incubator', 'Tech Mentorship'],
        amenities: ['VR Lab', 'Drone Testing Area', 'Blockchain Lab', 'Gaming Zone', 'Tech Library', 'Innovation Hub'],
        schoolBoard: 'CBSE',
        medium: ['English'],
        description: 'Cutting-edge charter school specializing in technology education and digital innovation.',
        image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.techvalleyacademy.edu',
        contact: {
            phone: '(408) 555-0555',
            email: 'info@techvalleyacademy.edu'
        },
        achievements: ['Tech Innovation Award', 'Digital Excellence Recognition'],
        curriculum: ['Computer Science', 'Data Analytics', 'Digital Design'],
        feeStructure: {
            class1to5: 12000,
            class6to8: 15000,
            class9to10: 18000,
            class11to12Science: 20000,
            class11to12Commerce: 18000,
            class11to12Arts: 16000
        },
        admissionProcess: ['Coding Challenge', 'Technical Interview', 'Project Presentation', 'Aptitude Test'],
        facultyCount: 68,
        studentTeacherRatio: '16:1'
    },
    {
        id: '8',
        name: 'Heritage Classical School',
        type: 'Private',
        rating: 4.6,
        location: {
            city: 'Boston',
            state: 'MA',
            address: '777 Tradition Lane',
            area: 'Historic District'
        },
        students: 890,
        establishedYear: 1892,
        tuitionFee: 32000,
        features: ['Classical Education', 'Latin Program', 'Philosophy Studies', 'Debate Team'],
        amenities: ['Ancient Library', 'Philosophy Garden', 'Classical Theatre', 'Museum', 'Chapel', 'Heritage Hall'],
        schoolBoard: 'ICSE',
        medium: ['English', 'Latin'],
        description: 'Traditional private school emphasizing classical education and liberal arts excellence.',
        image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.heritageclassical.edu',
        contact: {
            phone: '(617) 555-0777',
            email: 'admissions@heritageclassical.edu'
        },
        achievements: ['Classical Education Excellence', 'National Debate Champions'],
        curriculum: ['Liberal Arts', 'Classical Languages', 'Philosophy'],
        feeStructure: {
            class1to5: 25000,
            class6to8: 29000,
            class9to10: 32000,
            class11to12Science: 35000,
            class11to12Commerce: 33000,
            class11to12Arts: 36000
        },
        admissionProcess: ['Classical Knowledge Test', 'Latin Proficiency', 'Essay Writing', 'Character Assessment'],
        facultyCount: 78,
        studentTeacherRatio: '11:1'
    },
    {
        id: '9',
        name: 'Green Valley High',
        type: 'Public',
        rating: 4.4,
        location: {
            city: 'Denver',
            state: 'CO',
            address: '888 Mountain View',
            area: 'Green Valley'
        },
        students: 1800,
        establishedYear: 1970,
        features: ['Environmental Science', 'Outdoor Education', 'Sustainability Lab', 'Solar Campus'],
        amenities: ['Nature Trail', 'Botanical Garden', 'Weather Station', 'Recycling Center', 'Green Roof', 'Wind Turbine'],
        schoolBoard: 'State Board',
        medium: ['English'],
        description: 'Environmentally-focused public school with strong outdoor education programs.',
        image: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.greenvalleyhs.edu',
        contact: {
            phone: '(303) 555-0888',
            email: 'info@greenvalleyhs.edu'
        },
        achievements: ['Green School Award', 'Environmental Excellence'],
        curriculum: ['Environmental Science', 'Outdoor Leadership', 'Sustainability Studies'],
        feeStructure: {
            class1to5: 0,
            class6to8: 0,
            class9to10: 0,
            class11to12Science: 0,
            class11to12Commerce: 0,
            class11to12Arts: 0
        },
        admissionProcess: ['Direct Admission', 'Environmental Awareness Test'],
        facultyCount: 105,
        studentTeacherRatio: '17:1'
    },
    {
        id: '10',
        name: 'Arts & Performance Academy',
        type: 'Charter',
        rating: 4.7,
        location: {
            city: 'Nashville',
            state: 'TN',
            address: '999 Creative Circle',
            area: 'Arts District'
        },
        students: 750,
        establishedYear: 2008,
        tuitionFee: 15000,
        features: ['Recording Studio', 'Theater Complex', 'Dance Studios', 'Art Galleries'],
        amenities: ['Concert Hall', 'Costume Workshop', 'Photography Studio', 'Sculpture Garden', 'Music Rooms', 'Exhibition Space'],
        schoolBoard: 'CBSE',
        medium: ['English'],
        description: 'Specialized charter school for students pursuing careers in arts and performance.',
        image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.artsperformance.edu',
        contact: {
            phone: '(615) 555-0999',
            email: 'auditions@artsperformance.edu'
        },
        achievements: ['Arts Excellence Award', 'Performance Recognition'],
        curriculum: ['Performing Arts', 'Visual Arts', 'Music Production'],
        feeStructure: {
            class1to5: 10000,
            class6to8: 12000,
            class9to10: 15000,
            class11to12Science: 16000,
            class11to12Commerce: 15000,
            class11to12Arts: 18000
        },
        admissionProcess: ['Audition', 'Portfolio Review', 'Creative Interview', 'Talent Assessment'],
        facultyCount: 55,
        studentTeacherRatio: '13:1'
    },
    {
        id: '11',
        name: 'International Business School',
        type: 'International',
        rating: 4.9,
        location: {
            city: 'Miami',
            state: 'FL',
            address: '111 Global Plaza',
            area: 'Business District'
        },
        students: 950,
        establishedYear: 2012,
        tuitionFee: 38000,
        features: ['Business Incubator', 'Trading Floor', 'International Exchange', 'Language Center'],
        amenities: ['Stock Market Simulator', 'Conference Rooms', 'Networking Lounge', 'Global Cuisine', 'Cultural Center', 'Embassy Connections'],
        schoolBoard: 'IB',
        medium: ['English', 'Spanish', 'Portuguese'],
        description: 'Premier international school focusing on business education and global commerce.',
        image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.intlbusiness.edu',
        contact: {
            phone: '(305) 555-0111',
            email: 'admissions@intlbusiness.edu'
        },
        achievements: ['Business Education Excellence', 'Global Partnership Award'],
        curriculum: ['International Business', 'Economics', 'Global Studies'],
        feeStructure: {
            class1to5: 30000,
            class6to8: 34000,
            class9to10: 38000,
            class11to12Science: 40000,
            class11to12Commerce: 42000,
            class11to12Arts: 38000
        },
        admissionProcess: ['Business Aptitude Test', 'Language Proficiency', 'Case Study Analysis', 'Leadership Assessment'],
        facultyCount: 70,
        studentTeacherRatio: '13:1'
    },
    {
        id: '12',
        name: 'Future Leaders Academy',
        type: 'Private',
        rating: 4.8,
        location: {
            city: 'Atlanta',
            state: 'GA',
            address: '222 Leadership Way',
            area: 'Executive District'
        },
        students: 1350,
        establishedYear: 1995,
        tuitionFee: 29000,
        features: ['Leadership Center', 'Model UN', 'Public Speaking', 'Community Service'],
        amenities: ['Leadership Lab', 'Mock Parliament', 'Diplomacy Suite', 'Community Center', 'Service Learning Hub', 'Global Classroom'],
        schoolBoard: 'CBSE',
        medium: ['English'],
        description: 'Elite private school dedicated to developing future leaders and public servants.',
        image: 'https://images.pexels.com/photos/159844/pexels-photo-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'www.futureleaders.edu',
        contact: {
            phone: '(404) 555-0222',
            email: 'info@futureleaders.edu'
        },
        achievements: ['Leadership Excellence', 'Community Impact Award'],
        curriculum: ['Leadership Studies', 'Public Policy', 'Social Sciences'],
        feeStructure: {
            class1to5: 23000,
            class6to8: 27000,
            class9to10: 29000,
            class11to12Science: 32000,
            class11to12Commerce: 31000,
            class11to12Arts: 30000
        },
        admissionProcess: ['Leadership Assessment', 'Group Discussion', 'Community Service Record', 'Vision Essay'],
        facultyCount: 88,
        studentTeacherRatio: '15:1'
    }
];