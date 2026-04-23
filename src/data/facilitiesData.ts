export interface Facility {
        id: number;
        name: string;
        sector: string;
        category: string;
        icon: string;
        description: string;
        image: string;
        plotArea: number;
        builtUpArea: number;
        stories: number;
        details: string[];
      }

      export const facilitiesData: Facility[] = [
        {
          id: 1,
          name: "General Hospital",
          sector: "01",
          category: "Medical",
          icon: "Stethoscope",
          description: "The flagship medical facility providing comprehensive acute care services",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
          plotArea: 4200,
          builtUpArea: 21000,
          stories: 5,
          details: [
            "500+ bed capacity",
            "24/7 Emergency Department",
            "Advanced ICU facilities",
            "State-of-the-art surgical suites",
            "Digital patient management system"
          ]
        },
        {
          id: 2,
          name: "Pharmacy & Pediatrics",
          sector: "02",
          category: "Medical",
          icon: "Pill",
          description: "Specialized pharmaceutical services and pediatric care center",
          image: "https://placehold.co/1200x400",
          plotArea: 400,
          builtUpArea: 1200,
          stories: 3,
          details: [
            "Pediatric emergency care",
            "Neonatal intensive care unit",
            "Pharmacy compounding lab",
            "Medication dispensing center",
            "Child-friendly treatment areas"
          ]
        },
        {
          id: 3,
          name: "Oncology",
          sector: "03",
          category: "Medical",
          icon: "Activity",
          description: "Comprehensive cancer treatment and research facility",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
          plotArea: 620,
          builtUpArea: 2480,
          stories: 4,
          details: [
            "Radiation therapy center",
            "Chemotherapy suites",
            "Tumor board facilities",
            "Cancer research labs",
            "Patient support services"
          ]
        },
        {
          id: 4,
          name: "Bone Marrow & Kidney",
          sector: "04",
          category: "Medical",
          icon: "HeartPulse",
          description: "Specialized transplant and organ care services",
          image: "https://placehold.co/1200x400",
          plotArea: 350,
          builtUpArea: 1050,
          stories: 3,
          details: [
            "Bone marrow transplant unit",
            "Kidney dialysis center",
            "Transplant surgery suites",
            "Immunology labs",
            "Post-transplant care wards"
          ]
        },
        {
          id: 5,
          name: "Kidney Specialist Center",
          sector: "05",
          category: "Medical",
          icon: "HeartPulse",
          description: "Dedicated nephrology and renal care facility",
          image: "https://placehold.co/1200x400",
          plotArea: 450,
          builtUpArea: 1350,
          stories: 3,
          details: [
            "Hemodialysis stations",
            "Peritoneal dialysis center",
            "Nephrology consultation rooms",
            "Renal function testing lab",
            "Patient education center"
          ]
        },
        {
          id: 6,
          name: "Herbal Treatment Center",
          sector: "06",
          category: "Medical",
          icon: "Leaf",
          description: "Integrative medicine and herbal therapy services",
          image: "https://placehold.co/1200x400",
          plotArea: 650,
          builtUpArea: 2600,
          stories: 4,
          details: [
            "Herbal medicine preparation lab",
            "Traditional medicine practitioners",
            "Wellness consultation rooms",
            "Herbal garden and greenhouse",
            "Integrative therapy suites"
          ]
        },
        {
          id: 7,
          name: "Diagnosis Center",
          sector: "07",
          category: "Medical",
          icon: "Microscope",
          description: "Advanced diagnostic imaging and laboratory services",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
          plotArea: 400,
          builtUpArea: 1200,
          stories: 3,
          details: [
            "MRI and CT scanning",
            "Ultrasound imaging",
            "Pathology laboratory",
            "Blood testing center",
            "Genetic testing facility"
          ]
        },
        {
          id: 8,
          name: "Therapy & Diagnosis Center",
          sector: "08",
          category: "Medical",
          icon: "Activity",
          description: "Physical therapy and rehabilitation services",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
          plotArea: 520,
          builtUpArea: 2080,
          stories: 4,
          details: [
            "Physical therapy gym",
            "Occupational therapy studios",
            "Speech therapy rooms",
            "Hydrotherapy pools",
            "Rehabilitation wards"
          ]
        },
        {
          id: 9,
          name: "Women Center",
          sector: "09",
          category: "Medical",
          icon: "Baby",
          description: "Comprehensive women's health and maternity services",
          image: "https://placehold.co/1200x400",
          plotArea: 800,
          builtUpArea: 4000,
          stories: 5,
          details: [
            "Obstetrics and gynecology",
            "Labor and delivery suites",
            "Neonatal care unit",
            "Breast health center",
            "Women's wellness programs"
          ]
        },
        {
          id: 10,
          name: "Doctors Private Clinic",
          sector: "10",
          category: "Medical",
          icon: "Stethoscope",
          description: "Private consultation and specialist clinics",
          image: "https://placehold.co/1200x400",
          plotArea: 280,
          builtUpArea: 560,
          stories: 2,
          details: [
            "Private consultation rooms",
            "Specialist offices",
            "Patient waiting areas",
            "Medical records storage",
            "Telemedicine facilities"
          ]
        },
        {
          id: 11,
          name: "Radiation Room",
          sector: "11",
          category: "Medical",
          icon: "Activity",
          description: "Radiation therapy and oncology treatment facility",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
          plotArea: 110,
          builtUpArea: 110,
          stories: 1,
          details: [
            "Linear accelerator",
            "Radiation planning room",
            "Shielded treatment chamber",
            "Patient positioning equipment",
            "Safety monitoring systems"
          ]
        },
        {
          id: 12,
          name: "Research Center",
          sector: "12",
          category: "Academic",
          icon: "FlaskConical",
          description: "Medical research and innovation hub",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
          plotArea: 4200,
          builtUpArea: 21000,
          stories: 5,
          details: [
            "50+ research laboratories",
            "Clinical trial facilities",
            "Biomedical research equipment",
            "Data analysis center",
            "International collaboration spaces"
          ]
        },
        {
          id: 13,
          name: "Training Center",
          sector: "13",
          category: "Academic",
          icon: "GraduationCap",
          description: "Medical education and professional development",
          image: "https://placehold.co/1200x400",
          plotArea: 3820,
          builtUpArea: 15280,
          stories: 4,
          details: [
            "Lecture halls and classrooms",
            "Simulation labs",
            "Hands-on training facilities",
            "Residency program offices",
            "Continuing education center"
          ]
        },
        {
          id: 14,
          name: "Library",
          sector: "14",
          category: "Academic",
          icon: "Library",
          description: "Medical knowledge and research resource center",
          image: "https://placehold.co/1200x400",
          plotArea: 600,
          builtUpArea: 1800,
          stories: 3,
          details: [
            "Digital medical library",
            "Research databases",
            "Study areas",
            "Journal archives",
            "Quiet research zones"
          ]
        },
        {
          id: 15,
          name: "Apartment",
          sector: "15",
          category: "Residential",
          icon: "Home",
          description: "Residential apartments for staff and visitors",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
          plotArea: 1800,
          builtUpArea: 12600,
          stories: 7,
          details: [
            "Modern apartment units",
            "Furnished accommodations",
            "Amenity spaces",
            "Parking facilities",
            "24/7 security"
          ]
        },
        {
          id: 16,
          name: "Doctors Residence Villa",
          sector: "16",
          category: "Residential",
          icon: "Building",
          description: "Luxury residential villas for senior medical staff",
          image: "https://placehold.co/1200x400",
          plotArea: 250,
          builtUpArea: 500,
          stories: 2,
          details: [
            "Luxury villa units",
            "Private gardens",
            "Premium amenities",
            "Concierge services",
            "Exclusive community"
          ]
        },
        {
          id: 17,
          name: "Nurses Residence",
          sector: "17",
          category: "Residential",
          icon: "UserCheck",
          description: "Dedicated housing for nursing staff",
          image: "https://placehold.co/1200x400",
          plotArea: 2200,
          builtUpArea: 8800,
          stories: 4,
          details: [
            "Comfortable dormitories",
            "Common areas",
            "Recreational facilities",
            "Dining facilities",
            "Laundry services"
          ]
        },
        {
          id: 18,
          name: "Students Apartment",
          sector: "18",
          category: "Residential",
          icon: "UserCircle",
          description: "Housing for medical students and trainees",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
          plotArea: 3620,
          builtUpArea: 25340,
          stories: 7,
          details: [
            "Student housing units",
            "Study lounges",
            "Computer labs",
            "Recreation areas",
            "Affordable rates"
          ]
        },
        {
          id: 19,
          name: "Outside Patient Residence",
          sector: "19",
          category: "Residential",
          icon: "Bed",
          description: "Accommodation for outpatient families",
          image: "https://placehold.co/1200x400",
          plotArea: 800,
          builtUpArea: 3200,
          stories: 4,
          details: [
            "Patient family rooms",
            "Kitchenette facilities",
            "Comfortable bedding",
            "Support services",
            "Proximity to hospital"
          ]
        },
        {
          id: 20,
          name: "5 Star Hotel",
          sector: "20",
          category: "Commercial",
          icon: "Hotel",
          description: "Luxury hospitality for international patients and visitors",
          image: "https://placehold.co/1200x400",
          plotArea: 6000,
          builtUpArea: 42000,
          stories: 7,
          details: [
            "500+ luxury rooms",
            "Fine dining restaurants",
            "Spa and wellness center",
            "Conference facilities",
            "Concierge services"
          ]
        },
        {
          id: 21,
          name: "Shopping Center",
          sector: "21",
          category: "Commercial",
          icon: "ShoppingBag",
          description: "Retail and commercial shopping facilities",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
          plotArea: 2500,
          builtUpArea: 10000,
          stories: 4,
          details: [
            "Retail stores",
            "Pharmacy outlets",
            "Gift shops",
            "Flower shops",
            "Food courts"
          ]
        },
        {
          id: 22,
          name: "Mall",
          sector: "22",
          category: "Commercial",
          icon: "Store",
          description: "Large-scale shopping and entertainment complex",
          image: "https://placehold.co/1200x400",
          plotArea: 2200,
          builtUpArea: 8800,
          stories: 4,
          details: [
            "Multi-brand retail",
            "Entertainment venues",
            "Dining options",
            "Parking facilities",
            "Family entertainment"
          ]
        },
        {
          id: 23,
          name: "Office (Rental)",
          sector: "23",
          category: "Commercial",
          icon: "Building",
          description: "Commercial office space for lease",
          image: "https://placehold.co/1200x400",
          plotArea: 800,
          builtUpArea: 5600,
          stories: 7,
          details: [
            "Modern office spaces",
            "Flexible lease terms",
            "Business amenities",
            "Meeting rooms",
            "High-speed internet"
          ]
        },
        {
          id: 24,
          name: "Administration Office",
          sector: "24",
          category: "Operations",
          icon: "Briefcase",
          description: "Central administrative and management hub",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
          plotArea: 1800,
          builtUpArea: 9000,
          stories: 5,
          details: [
            "Executive offices",
            "Administrative departments",
            "HR facilities",
            "Finance center",
            "Board meeting rooms"
          ]
        }
      ];