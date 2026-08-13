export interface RoadmapStep {
  title: string;
  duration: string;
  detail: string;
}

export interface CareerRoadmap {
  id: string;
  title: string;
  stream: string;
  summary: string;
  examRef: string;
  steps: RoadmapStep[];
  tips: string[];
}

export const roadmaps: CareerRoadmap[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    stream: "Science",
    summary: "The most in-demand technical career — a clear 10th-to-job ladder through JEE.",
    examRef: "jee-main",
    steps: [
      { title: "Choose Science (PCM) after Class 10", duration: "Class 11-12", detail: "Pick PCM with Computer Science optional. Keep maths strong — it is the real filter." },
      { title: "Crack JEE Main / state CET", duration: "Class 12", detail: "JEE Main for NITs/IIITs, BITSAT for BITS, VITEEE/COMEDK for private. Even a good state CET works." },
      { title: "Complete B.Tech CSE or IT", duration: "4 years", detail: "Focus on data structures, DSA, web/system design. Internships from year 2-3." },
      { title: "Get placed or build a portfolio", duration: "Year 4", detail: "Campus placement, or open-source + GitHub + LeetCode for off-campus offers." },
      { title: "Early career (SDE 1-2)", duration: "0-3 years", detail: "Learn production engineering, code reviews, cloud basics. Salary ₹6-20 LPA to start." },
    ],
    tips: [
      "Coding is a skill, not a subject — practice from Class 11 itself.",
      "If JEE is hard, the Polytechnic → B.Tech lateral entry is a proven alternative.",
    ],
  },
  {
    id: "doctor",
    title: "Doctor (MBBS)",
    stream: "Science",
    summary: "Medicine is a marathon — the entry is NEET, the reward is lifelong.",
    examRef: "neet-ug",
    steps: [
      { title: "Choose Science (PCB) after Class 10", duration: "Class 11-12", detail: "Biology, Physics, Chemistry + optional Maths. NCERT Biology is your bible." },
      { title: "Crack NEET UG", duration: "Class 12", detail: "180 questions, 720 marks. Secure 550-650+ for a good govt MBBS seat." },
      { title: "Complete MBBS", duration: "5.5 years", detail: "Including 1-year compulsory internship. Start in a government or affordable college." },
      { title: "Choose specialisation (optional)", duration: "3+ years", detail: "MD/MS/Diploma via NEET PG. Or start as a General Physician / rural service." },
      { title: "Practice or hospital career", duration: "Ongoing", detail: "Private practice, corporate hospitals, or government service. Salary scales with specialisation." },
    ],
    tips: [
      "NEET is not just biology — physics and chemistry decide your rank.",
      "BAMS/BHMS/BDS and B.Sc Nursing are parallel healthcare routes with lower cutoffs.",
    ],
  },
  {
    id: "chartered-accountant",
    title: "Chartered Accountant (CA)",
    stream: "Commerce",
    summary: "India's most respected finance credential — start right after Class 10 planning.",
    examRef: "caf",
    steps: [
      { title: "Choose Commerce after Class 10", duration: "Class 11-12", detail: "Accountancy, Business Studies, Economics. Register for CA Foundation early." },
      { title: "Clear CA Foundation", duration: "After Class 12", detail: "4 papers, 400 marks. Pass percentage is low — consistency wins." },
      { title: "Clear CA Intermediate", duration: "1.5-2 years", detail: "8 papers across 2 groups. Join articleship after clearing both groups." },
      { title: "Complete articleship", duration: "3 years", detail: "Paid practical training under a practicing CA. Choose a firm with diverse work." },
      { title: "Clear CA Final + get membership", duration: "Final stretch", detail: "Crack final exams and become a qualified CA. Start practice or join a firm/industry." },
    ],
    tips: [
      "Start reading balance sheets and business news from Class 11.",
      "CA + commerce degrees (B.Com/B.Com(H)) stack well together.",
    ],
  },
  {
    id: "civil-services",
    title: "Civil Servant (IAS/IPS)",
    stream: "Arts",
    summary: "UPSC CSE is a test of discipline more than brilliance — plan it from Class 10.",
    examRef: "nda",
    steps: [
      { title: "Choose Arts/Humanities after Class 10 (or any stream)", duration: "Class 11-12", detail: "History, Polity, Geography, Economics give a head start — but any stream can crack UPSC." },
      { title: "Complete graduation", duration: "3 years", detail: "Choose a degree you enjoy — optional subjects matter at Mains. Read newspapers daily." },
      { title: "Prepare for UPSC CSE", duration: "12-18 months", detail: "Prelims (objective) → Mains (descriptive) → Interview. NCERTs first, then standard books." },
      { title: "Clear Prelims and Mains", duration: "Yearly cycle", detail: "Target 1-2 years of dedicated prep. Attempt count is what separates serious aspirants." },
      { title: "Interview + joining", duration: "Final", detail: "Personality test then training at LBSNAA. A career of public service and leadership." },
    ],
    tips: [
      "Read newspapers (not just headlines) from Class 11 — it compounds.",
      "State PSCs (MPPSC, UPPSC) have similar roles with far less competition.",
    ],
  },
  {
    id: "designer",
    title: "Designer (Fashion/UX)",
    stream: "Arts",
    summary: "Design careers reward portfolios over percentages — start building now.",
    examRef: "nid-dat",
    steps: [
      { title: "Choose Arts/Science after Class 10", duration: "Class 11-12", detail: "Arts stream with Fine Arts is common, but designers come from every stream." },
      { title: "Prepare for NID/NIFT/UCEED", duration: "Class 11-12", detail: "Sketch daily, build observation skills, practise design aptitude papers." },
      { title: "Complete B.Des or B.FTech", duration: "4 years", detail: "NID, NIFT, IIT-IDC, Pearl, MIT-ID. Portfolio is the most important asset." },
      { title: "Intern at studios or brands", duration: "Years 2-4", detail: "Fashion houses, design studios, tech companies' UX teams." },
      { title: "Specialise and grow", duration: "Ongoing", detail: "UX/UI, fashion, industrial, communication — specialisation decides your salary curve." },
    ],
    tips: [
      "A daily sketchbook from Class 10 is worth more than any coaching.",
      "Diplomas (1-2 years) are a faster, cheaper entry into fashion and graphics.",
    ],
  },
  {
    id: "diploma-engineer",
    title: "Diploma Engineer (Polytechnic)",
    stream: "Science",
    summary: "The smart, fast engineering route — enter right after Class 10.",
    examRef: "polytechnic",
    steps: [
      { title: "Pass Class 10", duration: "Class 10", detail: "A 60%+ score opens most polytechnic seats; some states have entrance tests." },
      { title: "Join a 3-year Diploma", duration: "3 years", detail: "Mechanical, Civil, Electrical, Electronics, Computer. Practical-heavy from year 1." },
      { title: "Lateral entry to B.Tech (optional)", duration: "Year 3-4", detail: "Direct 2nd-year entry into B.Tech — the smartest path for many." },
      { title: "Start as Junior Engineer", duration: "Ongoing", detail: "Government JE posts, PSUs, private industry. Or move up to degree + PSU exams." },
    ],
    tips: [
      "Government polytechnics cost a fraction of private B.Tech and teach more hands-on skills.",
      "Diploma + GATE opens the same PSU doors as a full B.Tech.",
    ],
  },
  {
    id: "hospitality",
    title: "Hotel Management",
    stream: "All",
    summary: "A global, underrated career — low competition, worldwide demand.",
    examRef: "nchm-jee",
    steps: [
      { title: "Finish Class 10 (any stream)", duration: "Class 10", detail: "No stream is required — hospitality accepts everyone." },
      { title: "Clear NCHM JEE after Class 12", duration: "Class 12", detail: "Easiest major entrance exam — aptitude + GK based. IHMs are government-run." },
      { title: "Complete B.Sc Hospitality", duration: "3-4 years", detail: "IHM (Bhopal, Delhi, Mumbai) or private academies. Includes paid internship year." },
      { title: "Join hotels, cruises, or airports", duration: "Ongoing", detail: "Front office, F&B, kitchen. Salaries are modest initially but climb fast with brand hotels." },
    ],
    tips: [
      "IHM + cruise lines is a famously lucrative combo.",
      "Diploma in Hotel Management (1-3 years) is a faster alternative after Class 10.",
    ],
  },
  {
    id: "lawyer",
    title: "Lawyer",
    stream: "All",
    summary: "Law accepts every stream — CLAT and NLU seats make it elite.",
    examRef: "clat",
    steps: [
      { title: "Finish Class 10 (any stream)", duration: "Class 10", detail: "Commerce and Arts help slightly, but Science lawyers succeed too." },
      { title: "Prepare for CLAT/AILET", duration: "Class 11-12", detail: "English + legal reasoning + logical reasoning + current affairs." },
      { title: "Complete 5-year BA LLB at an NLU", duration: "5 years", detail: "Or 3-year LLB after graduation. Moots, internships at law firms from year 2." },
      { title: "Litigation or corporate law", duration: "Ongoing", detail: "Corporate firms, courts, arbitration, or in-house legal teams." },
    ],
    tips: [
      "Reading speed is 50% of CLAT — train it daily.",
      "AILET (NLU Delhi) has fewer seats but is worth a parallel attempt.",
    ],
  },
  {
    id: "defence-officer",
    title: "Defence Forces (Officer)",
    stream: "All",
    summary: "NDA after Class 12 or CDS after graduation — a career of honour and adventure.",
    examRef: "nda",
    steps: [
      { title: "Finish Class 10, focus on fitness", duration: "Class 10", detail: "Maths and English matter for the NDA written exam. Start running and swimming early." },
      { title: "Clear NDA written (UPSC)", duration: "Class 12", detail: "Maths + GAT. Appears twice a year. Eligible 16.5-19.5 years." },
      { title: "Clear SSB interview + medicals", duration: "5 days", detail: "The most unique stage — psychology, GTO, and personal interview." },
      { title: "Train at NDA, Khadakwasla", duration: "3 years", detail: "Then academy training → commission as officer." },
    ],
    tips: [
      "SSB tests personality, not academics — practice group tasks and self-awareness.",
      "Agniveer is the parallel entry for those who miss NDA age/written.",
    ],
  },
  {
    id: "teaching",
    title: "Teacher / Professor",
    stream: "Arts",
    summary: "Stable, respected, and increasingly specialised — from school to university.",
    examRef: "ctet",
    steps: [
      { title: "Choose Arts/Science after Class 10", duration: "Class 11-12", detail: "Your teaching subject starts here — pick the one you love explaining." },
      { title: "Complete graduation in the subject", duration: "3 years", detail: "BA/B.Sc in the subject you want to teach." },
      { title: "B.Ed + CTET/state TET", duration: "2 years", detail: "B.Ed is mandatory for school teaching. CTET/state TET is the eligibility test." },
      { title: "Teach or move to academia", duration: "Ongoing", detail: "School teacher, or MSc + UGC NET → college lecturer. EdTech is a growing parallel." },
    ],
    tips: [
      "Special education and EdTech teaching pay premium salaries today.",
      "KVS/NVS jobs offer central government pay and stability.",
    ],
  },
];

export function getRoadmaps() {
  return roadmaps;
}

export function getRoadmap(id: string): CareerRoadmap | undefined {
  return roadmaps.find((r) => r.id === id);
}
