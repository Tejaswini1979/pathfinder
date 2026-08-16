export interface ExamPattern {
  structure?: string;
  sections?: string[];
  stages?: string[];
  marks?: string;
  duration?: string;
  mode?: string;
  notes?: string;
}

export interface Exam {
  id: string;
  name: string;
  short: string;
  body: string;
  stream: string;
  afterClass: "10th" | "12th" | "Both";
  courses: string[];
  pattern: ExamPattern;
  frequency: string;
  officialSite: string;
  advice: string;
}

export const exams: Exam[] = [
  {
    id: "jee-main",
    name: "Joint Entrance Examination – Main",
    short: "JEE Main",
    body: "National Testing Agency",
    stream: "Science",
    afterClass: "12th",
    courses: ["B.Tech / B.E.", "B.Arch (Paper 2A)", "B.Plan (Paper 2B)"],
    pattern: {
      structure: "2 papers",
      sections: ["Physics", "Chemistry", "Maths"],
      marks: "100 marks per paper",
      mode: "Computer-based",
    },
    frequency: "2 sessions a year (Jan & Apr)",
    officialSite: "https://jeemain.nta.nic.in",
    advice: "Start NCERT early, build formula speed, and practice PYQs. Good JEE Main rank opens NITs/IIITs/CFTIs.",
  },
  {
    id: "jee-advanced",
    name: "Joint Entrance Examination – Advanced",
    short: "JEE Advanced",
    body: "IITs (rotating seat, organiser IIT)",
    stream: "Science",
    afterClass: "12th",
    courses: ["B.Tech at IITs", "BS in Science", "B.Arch (AAT)"],
    pattern: {
      structure: "2 papers",
      marks: "~180 marks each",
      mode: "MCQ + numerical",
      notes: "Only the top ~2.5 lakh JEE Main candidates are eligible.",
    },
    frequency: "Once a year (May/June)",
    officialSite: "https://jeeadv.ac.in",
    advice: "Concept depth over rote. Solve JEE Advanced PYQs and take mock tests under strict timing.",
  },
  {
    id: "neet-ug",
    name: "National Eligibility cum Entrance Test – Undergraduate",
    short: "NEET UG",
    body: "National Testing Agency",
    stream: "Science",
    afterClass: "12th",
    courses: ["MBBS", "BDS", "BAMS", "BHMS", "BUMS", "B.Sc Nursing"],
    pattern: {
      structure: "1 paper",
      sections: ["Physics: 45 questions", "Chemistry: 45 questions", "Biology: 90 questions"],
      marks: "720 marks (180 MCQs)",
      mode: "MCQ",
    },
    frequency: "Once a year (May)",
    officialSite: "https://neet.nta.nic.in",
    advice: "Biology carries 50% weight — master NCERT Biology line by line. Consistent revision beats cramming.",
  },
  {
    id: "cuet-ug",
    name: "Common University Entrance Test – Undergraduate",
    short: "CUET UG",
    body: "National Testing Agency",
    stream: "All",
    afterClass: "12th",
    courses: ["BA", "B.Com", "B.Sc", "BBA at central universities"],
    pattern: {
      structure: "Language + domain subjects + general test",
      notes: "Each paper is sectional with negative marking.",
    },
    frequency: "Once a year (May–June)",
    officialSite: "https://cuet.nta.nic.in",
    advice: "Pick domain subjects you are strong in. Speed matters — all sections are time-bound.",
  },
  {
    id: "clat",
    name: "Common Law Admission Test",
    short: "CLAT",
    body: "Consortium of NLUs",
    stream: "All",
    afterClass: "12th",
    courses: ["BA LLB at National Law Universities"],
    pattern: {
      structure: "1 paper",
      sections: ["English", "Current Affairs", "Legal Reasoning", "Logical Reasoning", "Quantitative"],
      marks: "120 MCQs, 120 marks",
      mode: "MCQ",
    },
    frequency: "Once a year (December)",
    officialSite: "https://consortiumofnlus.ac.in",
    advice: "Legal reasoning and reading speed decide your rank. Read editorials daily to build comprehension.",
  },
  {
    id: "nda",
    name: "National Defence Academy Exam",
    short: "NDA",
    body: "UPSC",
    stream: "Science & Arts",
    afterClass: "12th",
    courses: ["Army, Navy, Air Force officer training at NDA"],
    pattern: {
      structure: "Written exam: Maths + GAT",
      marks: "Maths: 300, GAT: 600",
      stages: ["Written exam (UPSC)", "SSB interview (5 days)", "Medical examination"],
    },
    frequency: "Twice a year (April & September)",
    officialSite: "https://nda.upsc.gov.in",
    advice: "GAT and Maths both matter. Prepare with the SSB interview in mind from day one.",
  },
  {
    id: "nchm-jee",
    name: "NCHMCT Joint Entrance Examination",
    short: "NCHM JEE",
    body: "National Testing Agency",
    stream: "All",
    afterClass: "12th",
    courses: ["B.Sc Hospitality & Hotel Administration", "IHM diplomas"],
    pattern: {
      structure: "1 paper",
      sections: ["Reasoning", "English", "General Knowledge", "Numerical Ability", "Aptitude"],
      marks: "200 MCQs",
      mode: "MCQ",
    },
    frequency: "Once a year",
    officialSite: "https://nchmjee.nta.nic.in",
    advice: "Light preparation of aptitude + GK can crack it. Hospitality is a low-competition entry to a global career.",
  },
  {
    id: "nift",
    name: "NIFT Entrance Exam",
    short: "NIFT",
    body: "NIFT (Ministry of Textiles)",
    stream: "Arts & Science",
    afterClass: "12th",
    courses: ["B.Des Fashion", "B.FTech Apparel Production"],
    pattern: {
      structure: "CAT + GAT + Situation Test",
      notes: "CAT (creative ability), GAT (general ability) and a situation test.",
    },
    frequency: "Once a year (Jan–Feb)",
    officialSite: "https://nift.ac.in",
    advice: "Sketch daily, build a portfolio, and practise creative thinking exercises from year 10 itself.",
  },
  {
    id: "nid-dat",
    name: "NID Design Aptitude Test",
    short: "NID DAT",
    body: "NID (Ministry of Commerce & Industry)",
    stream: "Arts & Science",
    afterClass: "12th",
    courses: ["B.Des at NID campuses"],
    pattern: {
      structure: "Two-stage selection",
      stages: ["DAT Prelims (MCQ + sketch)", "Studio Test + personal interview"],
    },
    frequency: "Once a year (Dec–Jan)",
    officialSite: "https://nid.edu",
    advice: "Observation and sketching skill matter more than academic marks. Keep a daily sketchbook.",
  },
  {
    id: "nata",
    name: "National Aptitude Test in Architecture",
    short: "NATA",
    body: "Council of Architecture",
    stream: "Science & Arts",
    afterClass: "12th",
    courses: ["B.Arch"],
    pattern: {
      structure: "Drawing test + Maths/Aptitude",
      mode: "Online proctored",
      notes: "Multiple attempts allowed in a year.",
    },
    frequency: "Multiple attempts through the year",
    officialSite: "https://nata.in",
    advice: "Drawing practice + PCM basics. Several colleges also accept JEE Main Paper 2A.",
  },
  {
    id: "uceed",
    name: "Undergraduate Common Entrance Examination for Design",
    short: "UCEED",
    body: "IIT Bombay",
    stream: "Science & Arts",
    afterClass: "12th",
    courses: ["B.Des at IIT Bombay", "IIT Guwahati & IIITDM design"],
    pattern: {
      structure: "Part A + Part B",
      sections: ["Part A: MCQ / NAT", "Part B: Drawing"],
      notes: "Sketching is not required for all sections.",
    },
    frequency: "Once a year (January)",
    officialSite: "https://www.uceed.iitb.ac.in",
    advice: "Design aptitude + visualisation speed. Solve past papers — the paper pattern is very specific.",
  },
  {
    id: "caf",
    name: "CA Foundation",
    short: "CA Foundation",
    body: "Institute of Chartered Accountants of India (ICAI)",
    stream: "Commerce",
    afterClass: "12th",
    courses: ["Chartered Accountant (entry)"],
    pattern: {
      structure: "4 papers",
      sections: ["Accounting", "Law", "Maths / Statistics", "Economics"],
      marks: "400 marks",
    },
    frequency: "3 times a year (Jan/May/Sept)",
    officialSite: "https://www.icai.org",
    advice: "Register early after 10th while in 11th/12th. Accounting clarity from school helps a lot.",
  },
  {
    id: "cseet",
    name: "Company Secretary Executive Entrance Test",
    short: "CSEET",
    body: "Institute of Company Secretaries of India (ICSI)",
    stream: "Commerce",
    afterClass: "12th",
    courses: ["Company Secretary"],
    pattern: {
      structure: "4 modules",
      sections: ["Business Communication", "Legal Aptitude", "Economic & Business Environment", "Current Affairs"],
    },
    frequency: "4 times a year",
    officialSite: "https://www.icsi.edu",
    advice: "Freshers after 12th can give it immediately. Current affairs + legal aptitude are the key scoring areas.",
  },
  {
    id: "ipmat",
    name: "Integrated Programme in Management Aptitude Test",
    short: "IPMAT",
    body: "IIM Indore / Rohtak",
    stream: "Commerce & Science",
    afterClass: "12th",
    courses: ["Integrated 5-year BBA+MBA at IIMs"],
    pattern: {
      structure: "1 paper",
      sections: ["Quantitative Aptitude", "Verbal Ability", "Logical Reasoning"],
      mode: "Objective + short answer",
    },
    frequency: "Once a year",
    officialSite: "https://www.iimidr.ac.in",
    advice: "Strong Class 10 maths is the foundation. Start aptitude practice early — seats are very few.",
  },
  {
    id: "comdex",
    name: "COMEDK UGET",
    short: "COMEDK",
    body: "COMEDK (Karnataka)",
    stream: "Science",
    afterClass: "12th",
    courses: ["B.Tech at private Karnataka colleges"],
    pattern: {
      structure: "1 paper",
      sections: ["Physics", "Chemistry", "Maths"],
      marks: "180 questions, 180 marks",
    },
    frequency: "Once a year",
    officialSite: "https://www.comedk.org",
    advice: "Falls on the same line as JEE prep — a good fallback for private engineering colleges.",
  },
  {
    id: "bitsat",
    name: "BITS Admission Test",
    short: "BITSAT",
    body: "BITS Pilani",
    stream: "Science",
    afterClass: "12th",
    courses: ["B.E. / B.Pharm at BITS Pilani, Goa, Hyderabad"],
    pattern: {
      structure: "1 paper",
      sections: ["English", "Physics", "Chemistry", "Maths", "Logical Reasoning"],
      duration: "3 hours",
      mode: "Computer-based",
    },
    frequency: "Once a year (May–June)",
    officialSite: "https://www.bitsadmission.com",
    advice: "JEE-syllabus aligned with a twist of reasoning section. Speed is critical — attempt smartly.",
  },
  {
    id: "polytechnic",
    name: "State Polytechnic Entrance",
    short: "Polytechnic",
    body: "State Technical Boards",
    stream: "Science",
    afterClass: "10th",
    courses: ["Diploma in Engineering (3 years)"],
    pattern: {
      structure: "Merit-based admission",
      notes: "Based on Class 10 marks or a state-level entrance, varies by state.",
    },
    frequency: "Once a year",
    officialSite: "https://examinationservices.in",
    advice: "The earliest engineering entry — right after Class 10. Diploma holders can lateral-enter B.Tech in year 2.",
  },
  {
    id: "iti",
    name: "ITI Admission",
    short: "ITI",
    body: "State DGE&T / DGT",
    stream: "All",
    afterClass: "10th",
    courses: ["Electrician", "Fitter", "Welder", "CNSM", "COPA", "Mechanic trades"],
    pattern: {
      structure: "Merit-based admission",
      notes: "Based on Class 10 marks; some trades accept Class 8 pass.",
    },
    frequency: "Once a year (admissions July–Aug)",
    officialSite: "https://ncvtmis.gov.in",
    advice: "NSQF-aligned trades with strong placement. Trade apprentice (ATS) after ITI adds paid on-job training.",
  },
  {
    id: "ctet",
    name: "Central Teacher Eligibility Test",
    short: "CTET",
    body: "CBSE",
    stream: "Arts & Science",
    afterClass: "12th",
    courses: ["Teaching at CBSE schools (after B.Ed)"],
    pattern: {
      structure: "2 papers",
      sections: [
        "Paper 1 (Classes 1–5): Child development, subjects, pedagogy",
        "Paper 2 (Classes 6–8): Child development, subjects, pedagogy",
      ],
    },
    frequency: "Twice a year",
    officialSite: "https://ctet.nic.in",
    advice: "Not needed right after 12th, but knowing the requirement shapes your B.Ed decision.",
  },
  {
    id: "gpat",
    name: "Graduate Pharmacy Aptitude Test",
    short: "GPAT",
    body: "NTA",
    stream: "Science",
    afterClass: "12th",
    courses: ["M.Pharm (after B.Pharm)"],
    pattern: {
      structure: "1 paper",
      sections: ["Pharmacy subjects"],
      marks: "125 MCQs",
      duration: "3 hours",
      mode: "Computer-based",
    },
    frequency: "Once a year",
    officialSite: "https://gpat.nta.nic.in",
    advice: "B.Pharm is the first step. GPAT determines M.Pharm seats and stipend — aim early.",
  },
  {
    id: "clat-aiet",
    name: "AILET",
    short: "AILET",
    body: "NLU Delhi",
    stream: "All",
    afterClass: "12th",
    courses: ["BA LLB at NLU Delhi"],
    pattern: {
      structure: "1 paper",
      sections: ["English", "Legal Reasoning", "General Knowledge", "Reasoning", "Mathematics"],
      marks: "150 MCQs",
      mode: "MCQ",
    },
    frequency: "Once a year (December)",
    officialSite: "https://nationallawuniversitydelhi.in",
    advice: "Read the newspaper and build legal-logic speed. Fewer seats than CLAT = harder, prepare accordingly.",
  },
];

export function getExams() {
  return exams;
}

export function getExam(id: string): Exam | undefined {
  return exams.find((e) => e.id === id);
}

export function getExamsForStream(streamId: string): Exam[] {
  const streamNames: Record<string, string[]> = {
    maths: ["Science"],
    bio: ["Science"],
    commerce: ["Commerce"],
    arts: ["Arts"],
  };
  const names = streamNames[streamId] ?? [];
  return exams.filter((e) => {
    if (e.stream === "All") return true;
    return names.some((n) => e.stream === n || e.stream.includes(n));
  });
}
