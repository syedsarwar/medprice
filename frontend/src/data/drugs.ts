export interface Drug {
    id: number;
    name: string;
    dosage: string;
    price: number;
    pharmacy: string;
    location: string;
}

export const mockDrugs: Drug[] = [
    {
        id: 1,
        name: "Insulin Glargine",
        dosage: "10ml vial",
        price: 25.99,
        pharmacy: "CVS",
        location: "New York, NY",
    },
    {
        id: 2,
        name: "Metformin",
        dosage: "500mg tablet",
        price: 4.99,
        pharmacy: "Walgreens",
        location: "Los Angeles, CA",
    },
    {
        id: 3,
        name: "atorvastatin",
        dosage: "20mg tablet",
        price: 19.67,
        pharmacy: "CVS Pharmacy",
        location: "Chicago, illinois",
    },
    {
        id: 4,
        name: "lisinopril",
        dosage: "10mg oral suspension",
        price: 12.92,
        pharmacy: "Rite Aid",
        location: "Manchester, CT",
    },
]
