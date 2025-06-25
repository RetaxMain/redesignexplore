
import { School } from '../types/school';

export const mockSchools: School[] = [
    {
        id: '1',
        name: 'Excellence Public School',
        type: 'Public',
        location: {
            address: '123 Education Street',
            city: 'New York',
            state: 'NY',
            area: 'Manhattan'
        },
        rating: 4.5,
        students: 1200,
        establishedYear: 1985,
        tuitionFee: 15000,
        description: 'Excellence Public School is a premier educational institution committed to providing high-quality education and fostering academic excellence in a nurturing environment.',
        image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&h=300&fit=crop',
        website: 'excellenceschool.edu',
        contact: {
            phone: '+1-555-0123',
            email: 'info@excellenceschool.edu'
        },
        features: ['Smart Classrooms', 'Science Labs', 'Library', 'Sports Complex'],
        amenities: ['WiFi', 'Cafeteria', 'Transportation', 'Medical Room'],
        curriculum: ['CBSE', 'Science Stream', 'Commerce Stream'],
        achievements: ['State Championship 2023', 'Academic Excellence Award'],
        schoolBoard: 'CBSE',
        medium: ['English']
    },
    {
        id: '2',
        name: 'St. Mary\'s International School',
        type: 'Private',
        location: {
            address: '456 Learning Avenue',
            city: 'Los Angeles',
            state: 'CA',
            area: 'Beverly Hills'
        },
        rating: 4.8,
        students: 800,
        establishedYear: 1992,
        tuitionFee: 25000,
        description: 'St. Mary\'s International School offers world-class education with a focus on holistic development and international curricula.',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=300&fit=crop',
        website: 'stmarysintl.edu',
        contact: {
            phone: '+1-555-0124',
            email: 'admissions@stmarysintl.edu'
        },
        features: ['International Curriculum', 'Language Labs', 'Art Studio', 'Swimming Pool'],
        amenities: ['Air Conditioning', 'Digital Library', 'Counseling Center'],
        curriculum: ['IB', 'Cambridge IGCSE', 'AP Courses'],
        achievements: ['IB World School Recognition', 'International Schools Award'],
        schoolBoard: 'IB',
        medium: ['English', 'French']
    },
    {
        id: '3',
        name: 'Green Valley Charter School',
        type: 'Charter',
        location: {
            address: '789 Innovation Drive',
            city: 'Austin',
            state: 'TX',
            area: 'Downtown'
        },
        rating: 4.2,
        students: 600,
        establishedYear: 2005,
        tuitionFee: 12000,
        description: 'Green Valley Charter School focuses on innovative teaching methods and personalized learning experiences for every student.',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&h=300&fit=crop',
        website: 'greenvalleycharter.org',
        contact: {
            phone: '+1-555-0125',
            email: 'contact@greenvalleycharter.org'
        },
        features: ['STEM Labs', 'Maker Space', 'Outdoor Learning Areas', 'Technology Center'],
        amenities: ['Solar Power', 'Organic Garden', 'Flexible Learning Spaces'],
        curriculum: ['STEM Focus', 'Project-Based Learning', 'Arts Integration'],
        achievements: ['STEM Excellence Award', 'Green School Certification'],
        schoolBoard: 'State Charter',
        medium: ['English']
    },
    {
        id: '4',
        name: 'Heritage Academy',
        type: 'Private',
        location: {
            address: '321 Tradition Lane',
            city: 'Boston',
            state: 'MA',
            area: 'Beacon Hill'
        },
        rating: 4.6,
        students: 950,
        establishedYear: 1978,
        tuitionFee: 30000,
        description: 'Heritage Academy combines traditional values with modern educational approaches to prepare students for future success.',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=500&h=300&fit=crop',
        website: 'heritageacademy.edu',
        contact: {
            phone: '+1-555-0126',
            email: 'info@heritageacademy.edu'
        },
        features: ['Classical Architecture', 'Honor Code System', 'Small Class Sizes', 'Alumni Network'],
        amenities: ['Chapel', 'Dining Hall', 'Boarding Facilities', 'Athletic Fields'],
        curriculum: ['Liberal Arts', 'Advanced Placement', 'Honors Programs'],
        achievements: ['National Honor Society Chapter', 'Academic Decathlon Winners'],
        schoolBoard: 'Independent',
        medium: ['English']
    },
    {
        id: '5',
        name: 'Riverside Community School',
        type: 'Public',
        location: {
            address: '654 River Road',
            city: 'Portland',
            state: 'OR',
            area: 'Southeast'
        },
        rating: 4.1,
        students: 1400,
        establishedYear: 1990,
        description: 'Riverside Community School serves the local community with a comprehensive education program and strong parent involvement.',
        image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=300&fit=crop',
        website: 'riversideschool.org',
        contact: {
            phone: '+1-555-0127',
            email: 'office@riversideschool.org'
        },
        features: ['Community Partnerships', 'Volunteer Programs', 'After-School Care', 'Special Education'],
        amenities: ['Playground', 'Computer Lab', 'Music Room', 'Gymnasium'],
        curriculum: ['Common Core', 'Dual Language Program', 'Special Needs Support'],
        achievements: ['Community Service Award', 'Inclusive Education Recognition'],
        schoolBoard: 'Public District',
        medium: ['English', 'Spanish']
    },
    {
        id: '6',
        name: 'Tech Innovation High',
        type: 'Charter',
        location: {
            address: '987 Future Blvd',
            city: 'San Francisco',
            state: 'CA',
            area: 'Silicon Valley'
        },
        rating: 4.7,
        students: 750,
        establishedYear: 2010,
        tuitionFee: 18000,
        description: 'Tech Innovation High prepares students for the digital future with cutting-edge technology integration and coding programs.',
        image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=500&h=300&fit=crop',
        website: 'techinnovationhigh.edu',
        contact: {
            phone: '+1-555-0128',
            email: 'admissions@techinnovationhigh.edu'
        },
        features: ['1:1 Device Program', 'Coding Bootcamps', 'Robotics Lab', 'VR Learning'],
        amenities: ['High-Speed Internet', 'Innovation Lab', 'Startup Incubator'],
        curriculum: ['Computer Science', 'Engineering', 'Digital Media', 'Entrepreneurship'],
        achievements: ['Robotics Competition Winners', 'Tech Innovation Award'],
        schoolBoard: 'Charter Network',
        medium: ['English']
    }
];
