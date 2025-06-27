import { School } from "@/app/types/school";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

// export function normalizeSchools(apiData: any): School[] {
//   return apiData.data.schools.map((school) => ({
//     id: school._id,
//     name: school.name || "",
//     email: school.contact?.email || "",
//     location: {
//       address: school.location?.address || "",
//       area: school.location?.area || "",
//       city: school.location?.city || "",
//       state: school.location?.state || ""
//     },
//     type: Array.isArray(school.type) && school.type.length > 0
//       ? school.type.flatMap(t => t.split(",")).map(t => t.trim())
//       : [],
//     amenities: Array.isArray(school.amenities) && school.amenities.length > 0
//       ? school.amenities.flatMap(a => a.split(",")).map(a => a.trim())
//       : [],
//     features: school.features || [],
//     description: school.description || "",
//     image: school.image || "",
//     schoolBoard: school.schoolBoard || "",
//     medium: school.medium || [],
//     students: school.students || 0,
//     achievements: school.achievements || [],
//     rating: school.rating || 0,
//     tuitionFee: school.tuitionFee || 0,
//     establishedYear: typeof school.establishedYear === "number" && school.establishedYear > 1000
//       ? school.establishedYear
//       : school.establishedYear > 0
//         ? new Date(school.establishedYear).getFullYear()
//         : null
//   }));
// }

{
  /* export function normalizeSchools(apiData: any): School[] {
  return apiData.data.schools.map((school) => ({
    id: school._id,
    name: school.name || "",
     curriculum: school.curriculum || [],
    email: school.contact?.email || "",
    contact: {
      phone: school.contact?.phone || "",
      email: school.contact?.email || "",
    },
    location: {
      address: school.location?.address || "",
      area: school.location?.area || "",
      city: school.location?.city || "",
      state: school.location?.state || ""
    },
    type: typeof school.type === "string"
      ? school.type
      : Array.isArray(school.type) && school.type.length > 0
        ? school.type.flatMap(t => t.split(",")).map(t => t.trim()).join(", ")
        : "",
    amenities: Array.isArray(school.amenities) && school.amenities.length > 0
      ? school.amenities.flatMap(a => a.split(",")).map(a => a.trim())
      : [],
    features: school.features || [],
    description: school.description || "",
    image: school.image || "",
    schoolBoard: school.schoolBoard || "",
    medium: school.medium || [],
    students: school.students || 0,
    achievements: school.achievements || [],
    rating: school.rating || 0,
    tuitionFee: school.tuitionFee || 0,
    establishedYear: typeof school.establishedYear === "number" && school.establishedYear > 1000
      ? school.establishedYear
      : school.establishedYear > 0
        ? new Date(school.establishedYear).getFullYear()
        : null,
    website: school.website || "",
    admissionProcess: school.admissionProcess || [],
    facultyCount: school.facultyCount || 0,
    studentTeacherRatio: school.studentTeacherRatio || "",
    feeStructure: {
      class1to5:
        (school.feeStructure?.class1 || 0) +
        (school.feeStructure?.class2 || 0) +
        (school.feeStructure?.class3 || 0) +
        (school.feeStructure?.class4 || 0) +
        (school.feeStructure?.class5 || 0),
      class6to8:
        (school.feeStructure?.class6 || 0) +
        (school.feeStructure?.class7 || 0) +
        (school.feeStructure?.class8 || 0),
      class9to10:
        (school.feeStructure?.class9 || 0) +
        (school.feeStructure?.class10 || 0),
      class11to12Science:
        (school.feeStructure?.class11Science || 0) +
        (school.feeStructure?.class12Science || 0),
      class11to12Commerce:
        (school.feeStructure?.class11Commerce || 0) +
        (school.feeStructure?.class12Commerce || 0),
      class11to12Arts:
        (school.feeStructure?.class11Arts || 0) +
        (school.feeStructure?.class12Arts || 0),
    }
  }));
} */
}

export function normalizeSchools(apiData: any): School[] {
  return apiData.data.schools.map((school: any) => ({
    id: school._id,
    name: school.name || "",
    curriculum: school.curriculum || [],
    email: school.contact?.email || "",
    contact: {
      phone: school.contact?.phone || "",
      email: school.contact?.email || "",
    },
    location: {
      address: school.location?.address || "",
      area: school.location?.area || "",
      city: school.location?.city || "",
      state: school.location?.state || "",
    },
    // Keep type as string to match your filter logic
    type: Array.isArray(school.type)
      ? school.type
      : typeof school.type === "string" && school.type.length > 0
      ? [school.type]
      : [],
    features: school.features || [],
    description: school.description || "",
    image: school.image || "",
    schoolBoard: school.schoolBoard || "",
    medium: school.medium || [],
    students: school.students || 0,
    achievements: school.achievements || [],
    rating: school.rating || 0,
    tuitionFee: school.tuitionFee || 0,
    establishedYear:
      typeof school.establishedYear === "number" &&
      school.establishedYear > 1000
        ? school.establishedYear
        : school.establishedYear > 0
        ? new Date(school.establishedYear).getFullYear()
        : null,
    website: school.website || "",
    admissionProcess: school.admissionProcess || [],
    facultyCount: school.facultyCount || 0,
    studentTeacherRatio: school.studentTeacherRatio || "",
    feeStructure: {
      class1to5:
        (school.feeStructure?.class1 || 0) +
        (school.feeStructure?.class2 || 0) +
        (school.feeStructure?.class3 || 0) +
        (school.feeStructure?.class4 || 0) +
        (school.feeStructure?.class5 || 0),
      class6to8:
        (school.feeStructure?.class6 || 0) +
        (school.feeStructure?.class7 || 0) +
        (school.feeStructure?.class8 || 0),
      class9to10:
        (school.feeStructure?.class9 || 0) +
        (school.feeStructure?.class10 || 0),
      class11to12Science:
        (school.feeStructure?.class11Science || 0) +
        (school.feeStructure?.class12Science || 0),
      class11to12Commerce:
        (school.feeStructure?.class11Commerce || 0) +
        (school.feeStructure?.class12Commerce || 0),
      class11to12Arts:
        (school.feeStructure?.class11Arts || 0) +
        (school.feeStructure?.class12Arts || 0),
    },
  }));
}
