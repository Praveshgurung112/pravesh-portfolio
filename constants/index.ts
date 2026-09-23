// Shared TypeScript types (Updated for static data)

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  imageUrl?: string | null;
  order: number;
  featured: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  icon?: string | null;
  order: number;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string | null;
  startDate: string;
  endDate?: string | null;
  description: string[];
  type: string;
  order: number;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  url?: string | null;
  order: number;
}

// ── Static Data ────────────────────────────────────────────────

export const skills: Skill[] = [
  { id: "1", name: "SQL", category: "Programming", order: 1 },
  { id: "2", name: "PHP", category: "Programming", order: 2 },
  { id: "3", name: "HTML", category: "Programming", order: 3 },
  { id: "4", name: "CSS", category: "Programming", order: 4 },
  { id: "5", name: "JavaScript", category: "Programming", order: 5 },
  { id: "6", name: "TypeScript", category: "Programming", order: 6 },
  { id: "7", name: "Java", category: "Programming", order: 7 },
  { id: "8", name: "MySQL", category: "Database & BI Tools", order: 1 },
  { id: "9", name: "PostgreSQL", category: "Database & BI Tools", order: 2 },
  { id: "10", name: "phpMyAdmin", category: "Database & BI Tools", order: 3 },
  { id: "11", name: "Power BI", category: "Database & BI Tools", order: 4 },
  { id: "12", name: "SQL Server", category: "Database & BI Tools", order: 5 },
  { id: "13", name: "Prisma ORM", category: "Database & BI Tools", order: 6 },
  { id: "14", name: "React", category: "Web Tools", order: 1 },
  { id: "15", name: "Next.js", category: "Web Tools", order: 2 },
  { id: "16", name: "Node.js", category: "Web Tools", order: 3 },
  { id: "17", name: "Express.js", category: "Web Tools", order: 4 },
  { id: "18", name: "Git", category: "Web Tools", order: 5 },
  { id: "19", name: "GitHub", category: "Web Tools", order: 6 },
  { id: "20", name: "XAMPP", category: "Web Tools", order: 7 },
  { id: "21", name: "Figma", category: "Web Tools", order: 8 },
  { id: "22", name: "Apache", category: "Web Tools", order: 9 },
  { id: "23", name: "DBMS", category: "Core Competencies", order: 1 },
  { id: "24", name: "Software Engineering", category: "Core Competencies", order: 2 },
  { id: "25", name: "Curriculum Development", category: "Core Competencies", order: 3 },
  { id: "26", name: "Academic Administration", category: "Core Competencies", order: 4 },
  { id: "27", name: "SDLC", category: "Core Competencies", order: 5 },
  { id: "28", name: "REST APIs", category: "Core Competencies", order: 6 },
];

export const experience: Experience[] = [
  {
    id: "1",
    title: "Assistant Professor",
    company: "Ram Devi Jindal Group of Institutions (RDJ)",
    location: "India",
    startDate: "Jul 2025",
    endDate: "Apr 2026",
    type: "work",
    order: 1,
    description: [
      "Delivered undergraduate lectures in DBMS, Software Engineering, and Programming",
      "Assisted in curriculum design, academic audits, and departmental coordination",
      "Mentored students for projects and research assignments",
      "Conducted workshops, departmental seminars, and mentoring sessions",
      "Supervised undergraduate academic projects",
    ],
  },
  {
    id: "2",
    title: "Database Administrator Intern",
    company: "PACFC, Dharamshala",
    location: "Dharamshala, HP",
    startDate: "Jan 2024",
    endDate: "Jun 2024",
    type: "internship",
    order: 2,
    description: [
      "Hands-on experience in relational database design and SQL optimization",
      "Implemented secure data management practices",
      "Assisted in syllabus enrichment and curriculum enhancement",
      "Conducted workshops and mentoring sessions for academic staff",
    ],
  },
  {
    id: "3",
    title: "Master of Computer Applications (MCA)",
    company: "Govt. College Dharamshala — HP Technical University Hamirpur",
    location: "Dharamshala, HP",
    startDate: "2023",
    endDate: "2025",
    type: "education",
    order: 3,
    description: [
      "Specialized in advanced database systems and software engineering",
      "Developed full-stack web projects using PHP, MySQL, and Apache",
      "Built real-world applications with React, Node.js, and PostgreSQL",
    ],
  },
  {
    id: "4",
    title: "Bachelor of Computer Applications (BCA)",
    company: "DAV College Kangra — Himachal Pradesh University Shimla",
    location: "Kangra, HP",
    startDate: "2020",
    endDate: "2023",
    type: "education",
    order: 4,
    description: [
      "Core coursework in programming, databases, and software development",
      "Built foundational projects in HTML, CSS, JavaScript, and Java",
      "Graduated with distinction in computer applications",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Food Delivery App",
    description:
      "Full-stack food delivery platform with role-based authentication, restaurant listings, cart management, and order tracking. Built with React, TypeScript, Node.js, Express, and Prisma ORM with PostgreSQL.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/Praveshgurung112/food-delivery-app",
    featured: true,
    order: 1,
  },
  {
    id: "2",
    title: "Notes Point",
    description:
      "Role-based academic notes sharing platform for students and faculty. Features secure upload, search, categorization, and permission-based access control. Built with PHP, MySQL, and Apache on Ubuntu.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Apache"],
    githubUrl: "https://github.com/Praveshgurung112/NotesPoint",
    featured: true,
    order: 2,
  },
  {
    id: "3",
    title: "College Notes Swap",
    description:
      "Web platform enabling students to swap and share college notes. Implements user authentication, file upload, and a categorized notes library with search functionality.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Praveshgurung112/clg-notes-swap",
    featured: true,
    order: 3,
  },
  {
    id: "4",
    title: "Music Store Analysis",
    description:
      "Analyzed customer and sales data from a music store using advanced SQL queries. Applied joins, subqueries, window functions, and aggregations to derive actionable business insights and reports.",
    techStack: ["SQL", "PostgreSQL", "Data Analysis"],
    githubUrl: "https://github.com/Praveshgurung112/-Music-Store-Analysis",
    featured: true,
    order: 4,
  },
  {
    id: "5",
    title: "Art Store (PL/SQL)",
    description:
      "Database-driven art store management system built with PL/SQL. Implements stored procedures, triggers, and complex queries for inventory and sales management.",
    techStack: ["PL/SQL", "Oracle DB", "SQL"],
    githubUrl: "https://github.com/Praveshgurung112/Art-store",
    featured: false,
    order: 5,
  },
  {
    id: "6",
    title: "Live Term",
    description:
      "Interactive terminal/portfolio experience built with TypeScript. A creative browser-based terminal that showcases personal information through command-line interactions.",
    techStack: ["TypeScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Praveshgurung112/Live-term",
    liveUrl: "https://praveshgurung112.github.io/Live-term",
    featured: false,
    order: 6,
  },
  {
    id: "7",
    title: "Weather App",
    description:
      "Real-time weather application fetching live data from a weather API. Displays temperature, humidity, wind speed, and forecasts for any searched city.",
    techStack: ["JavaScript", "HTML", "CSS", "Weather API"],
    githubUrl: "https://github.com/Praveshgurung112/weather",
    liveUrl: "https://praveshgurung112.github.io/weather",
    featured: false,
    order: 7,
  },
  {
    id: "8",
    title: "Dharamshala College Webpage",
    description:
      "Responsive college information website with sections for courses, faculty, admissions, and campus life. Clean UI with CSS animations and mobile-friendly layout.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Praveshgurung112/Dharamshala-clg-webpage",
    featured: false,
    order: 8,
  },
  {
    id: "9",
    title: "Password Generator",
    description:
      "Secure password generator with customizable options for length, uppercase, lowercase, numbers, and special characters. Includes copy-to-clipboard functionality.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Praveshgurung112/Password-generator-system",
    featured: false,
    order: 9,
  },
];

export const certifications: Certification[] = [
  { id: "1", name: "SQL (Advanced)", issuer: "HackerRank", order: 1 },
  { id: "2", name: "SQL (Basic)", issuer: "HackerRank", order: 2 },
  { id: "3", name: "SQL and Relational Databases 101", issuer: "IBM", order: 3 },
  { id: "4", name: "Java Programming", issuer: "Great Learning", order: 4 },
  { id: "5", name: "SQL Injection Attacks", issuer: "EC-Council", order: 5 },
];

// Skill category colors for the UI
export const skillCategoryColors: Record<string, string> = {
  "Programming": "from-cyan-500/20 to-teal-500/20 border-cyan-500/30",
  "Database & BI Tools": "from-violet-500/20 to-purple-500/20 border-violet-500/30",
  "Web Tools": "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
  "Core Competencies": "from-amber-500/20 to-orange-500/20 border-amber-500/30",
};

export const skillCategoryIcons: Record<string, string> = {
  "Programming": "💻",
  "Database & BI Tools": "🗄️",
  "Web Tools": "🛠️",
  "Core Competencies": "🎓",
};
