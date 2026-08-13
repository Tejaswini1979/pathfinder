export interface StreamGuide {
  id: string;
  name: string;
  tagline: string;
  color: string;
  subjects: string[];
  futureOptions: string[];
  suitedFor: string;
  exams: string[];
  careers: string[];
}

export const streamGuides: StreamGuide[] = [
  {
    id: "science",
    name: "Science Stream",
    tagline: "Engineering, Medical, IT, Research, Defence — the gateway to technical and healthcare careers.",
    color: "#2563eb",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science"],
    futureOptions: ["Engineering", "Medical", "IT", "Research", "Defence"],
    suitedFor: "Students who enjoy problem-solving, experiments, logic, and understanding how things work.",
    exams: ["JEE Main", "JEE Advanced", "NEET", "CUET", "State CETs", "NDA"],
    careers: ["Software Engineer", "Doctor", "Data Scientist", "Aerospace Engineer", "Scientist", "Pilot"],
  },
  {
    id: "commerce",
    name: "Commerce Stream",
    tagline: "CA, B.Com, BBA, Banking, Management — for careers in finance, business and markets.",
    color: "#16a34a",
    subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "Informatics Practices"],
    futureOptions: ["CA", "B.Com", "BBA", "Banking", "Management", "Economics"],
    suitedFor: "Students who enjoy numbers, markets, money, business, and how economies work.",
    exams: ["CA Foundation", "CUET", "IPMAT", "CLAT (for law)", "CSEET", "Bank PO"],
    careers: ["Chartered Accountant", "Investment Banker", "Entrepreneur", "Company Secretary", "HR Manager", "Economist"],
  },
  {
    id: "arts",
    name: "Arts / Humanities",
    tagline: "Civil Services, Law, Teaching, Media, Social Work — the stream of society and ideas.",
    color: "#d97706",
    subjects: ["History", "Geography", "Political Science", "Economics", "Sociology", "Languages"],
    futureOptions: ["Civil Services", "Law", "Teaching", "Media", "Social Work", "Psychology"],
    suitedFor: "Students who enjoy people, ideas, society, languages, history, and making an impact.",
    exams: ["CUET", "CLAT", "DU Admission", "NCHM JEE", "UPSC", "Mass Comm Entrance"],
    careers: ["IAS Officer", "Lawyer", "Journalist", "Psychologist", "Designer", "Social Worker"],
  },
  {
    id: "vocational",
    name: "Vocational Stream",
    tagline: "Skill-based jobs, diploma courses, early employment — fast and practical career routes.",
    color: "#9333ea",
    subjects: ["Computer Applications", "IT", "Agriculture", "Home Science", "Fine Arts"],
    futureOptions: ["Skill-based jobs", "Diploma courses", "Early employment", "Entrepreneurship"],
    suitedFor: "Students who prefer hands-on learning and want to enter the workforce or start earning sooner.",
    exams: ["State Polytechnic", "ITI Trade Test", "NSDC Certifications"],
    careers: ["Electrician", "Hotel Manager", "Graphic Designer", "Fashion Designer", "Nurse", "AC Technician"],
  },
];

export function getStreamGuides() {
  return streamGuides;
}

export function getStreamGuide(id: string): StreamGuide | undefined {
  return streamGuides.find((s) => s.id === id);
}

export const streamDecisionTips = [
  "Identify your interests and strengths — what subjects do you enjoy the most?",
  "Check your performance — are you strong in Maths/Science or in languages and social studies?",
  "Explore future career opportunities — research what each stream leads to before deciding.",
  "Talk to seniors, teachers and take career counselling — don't decide alone.",
  "Don't pick a stream only because of friends or family pressure.",
  "Look at real job market demand, not just prestige of the stream.",
];
