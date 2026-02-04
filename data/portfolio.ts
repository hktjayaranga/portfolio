export type SkillGroup = {
  category: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  bullets: string[];
  technologies: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  meta?: string;
};

export type Certification = {
  title: string;
  issuer?: string;
};

export type Experience = {
  role: string;
  company: string;
  focus: string;
  period: string;
  location: string;
  bullets: string[];
};

export const portfolio = {
  name: 'Thilina Jayaranga',
  title: 'Associate Software Engineering',
  summary:
    'Computer Science undergraduate with practical full-stack development experience gained during an internship at Creative Software. Proficient in ASP.NET Core, React, TypeScript, and web application development, with hands-on knowledge of REST APIs and collaborative Agile workflows. Eager to apply problem-solving skills and coding best practices as an Associate Software Engineer to deliver high-quality, production-ready solutions.',
  location: 'Matara, Sri Lanka',
  email: 'hktjayaranga@gmail.com',
  phone: '+94 77 865 17 83',
  social: {
    github: 'github.com/hktjayaranga',
    linkedin: 'www.linkedin.com/in/thilina-jayaranga'
  },
  experience: [
    {
      role: 'Software Engineer Intern',
      company: 'Creative Software',
      focus: 'Full-stack Developer (ASP.NET Core, React, TypeScript)',
      period: '05/2025 - 12/2025',
      location: 'Colombo, Sri Lanka',
      bullets: [
        'Worked on BookNordics, a multi-tenant SaaS platform, contributing to both frontend and backend development.',
        'Developed features using ASP.NET Core, React, and TypeScript to enhance user experience and functionality.',
        'Gained hands-on experience with microservices architecture and building REST APIs.',
        'Collaborated in Agile teams, participating in sprint planning, code reviews, and daily stand-ups.',
        'Focused on delivering scalable, maintainable, and production-ready software.'
      ]
    }
  ] as Experience[],
  skills: [
    {
      category: 'Programming Languages',
      items: ['Java', 'Python', 'C#']
    },
    {
      category: 'Tools & Frameworks',
      items: ['Git', 'Spring Boot', 'ASP.NET']
    },
    {
      category: 'Web Development',
      items: ['React', 'Angular', 'HTML/CSS/JavaScript']
    },
    {
      category: 'Databases',
      items: ['MySQL']
    },
    {
      category: 'AI/ML',
      items: ['AI/ML basics', 'Neural networks']
    },
    {
      category: 'Soft Skills',
      items: ['Communication', 'Teamwork', 'Problem Solving', 'Attention to Detail']
    }
  ] as SkillGroup[],
  projects: [
    {
      title: 'AHN Fashion Pvt Ltd - Garment Factory Management System',
      description:
        'A full-stack factory management system for inventory, sales, and purchase tracking.',
      bullets: [
        'Built the system using Spring Boot and React.',
        'Integrated MySQL for secure data storage, reducing manual record-keeping efforts.',
        'Optimized the UI/UX using React to improve usability for factory staff.',
        'Added role-based access, payment tracking, and reporting for operational control.'
      ],
      technologies: ['Spring Boot', 'React', 'MySQL']
    },
    {
      title: 'RtmisQ - Wildlife Quiz Application',
      description:
        'A user-friendly Java application that makes wildlife education more accessible.',
      bullets: [
        'Designed the interface with JavaFX for a clean, guided quiz experience.',
        'Implemented SQLite to store questions, user scores, and progress.',
        'Built an adaptive question selection system to keep engagement high.'
      ],
      technologies: ['Java', 'JavaFX', 'SQLite']
    },
    {
      title: 'Student Management System (Personal Project)',
      description: 'A Windows Forms application for managing student records.',
      bullets: [
        'Developed the system using C# and MySQL in Visual Studio.',
        'Created a Windows Forms UI for student record management.',
        'Implemented CRUD operations with search, filter, and export features.',
        'Added validation and error handling to maintain reliability.'
      ],
      technologies: ['C#', 'MySQL', 'Windows Forms']
    }
  ] as Project[],
  education: [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Ruhuna',
      period: '2022 - Present'
    },
    {
      degree: 'G.C.E Advanced Level',
      institution: "St. Thomas' College Matara",
      period: '2018 - 2020'
    }
  ] as EducationItem[],
  certifications: [
    { title: 'Microsoft Certified: Azure Al Fundamentals' },
    {
      title: 'Introduction to Artificial Intelligence',
      issuer: 'Great Learning Academy'
    },
    { title: 'HackerRank Certified SQL (Basic) Professional' },
    { title: 'Programming in Python', issuer: 'DP Education' },
    { title: 'Web Development', issuer: 'DP Education' }
  ] as Certification[]
};
