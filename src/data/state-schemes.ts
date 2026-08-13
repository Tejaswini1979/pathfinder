export type StateSchemeCategory =
  | "PRE_MATRIC"
  | "POST_MATRIC"
  | "MERIT"
  | "NEED"
  | "GIRL"
  | "CATEGORY"
  | "FEE"
  | "HOSTEL"
  | "DEVICE"
  | "SKILL";

export type StateRegion =
  | "NORTH"
  | "SOUTH"
  | "EAST"
  | "WEST"
  | "CENTRAL"
  | "NORTH_EAST"
  | "UT";

export interface StateScheme {
  id: string;
  name: string;
  category: StateSchemeCategory;
  educationLevel: string;
  benefit: string;
  eligibility: string;
  url?: string;
  note?: string;
}

export interface StateUt {
  name: string;
  type: "STATE" | "UT";
  region: StateRegion;
  portalName: string;
  portalUrl: string;
  portalNote: string;
  directoryCount?: number;
  schemes: StateScheme[];
}

export const stateCategoryLabels: Record<StateSchemeCategory, string> = {
  PRE_MATRIC: "Pre-matric",
  POST_MATRIC: "Post-matric",
  MERIT: "Merit",
  NEED: "Need-based",
  GIRL: "Girl students",
  CATEGORY: "Category-based",
  FEE: "Fee reimbursement",
  HOSTEL: "Hostel",
  DEVICE: "Device / kit",
  SKILL: "Skill",
};

export const regionLabels: Record<StateRegion | "ALL", string> = {
  ALL: "All regions",
  NORTH: "North",
  SOUTH: "South",
  EAST: "East",
  WEST: "West",
  CENTRAL: "Central",
  NORTH_EAST: "North-East",
  UT: "Union Territories",
};

const nsp = "https://scholarships.gov.in";

export const stateUtDirectory: StateUt[] = [
  {
    name: "Andhra Pradesh",
    type: "STATE",
    region: "SOUTH",
    portalName: "Jagananna Vidya Deevena / AP Scholarship",
    portalUrl: "https://jagananna.ap.gov.in",
    portalNote:
      "Navasakam platform for fee reimbursement (Vidya Deevena) and hostel assistance (Vasathi Deevena) for AP domicile students.",
    schemes: [
      {
        id: "AP-01",
        name: "Jagananna Vidya Deevena",
        category: "FEE",
        educationLevel: "Class 5 to PG",
        benefit:
          "Full tuition and fee reimbursement to eligible students pursuing recognised courses.",
        eligibility:
          "AP domicile, family income ≤ ₹2.5 lakh/year, studying in recognised institutions.",
        url: "https://jagananna.ap.gov.in",
      },
      {
        id: "AP-02",
        name: "Jagananna Vasathi Deevena",
        category: "HOSTEL",
        educationLevel: "Class 5 to PG",
        benefit:
          "Hostel / mess allowance of up to ₹10,000–₹20,000 per year depending on course and family income.",
        eligibility:
          "AP domicile, eligible under Vidya Deevena, income slabs up to ₹2.5 lakh.",
        url: "https://jagananna.ap.gov.in",
      },
      {
        id: "AP-03",
        name: "Amma Vodi",
        category: "GIRL",
        educationLevel: "Class 1 to 12",
        benefit:
          "₹15,000 per year to mothers / guardians of eligible school-going children to encourage retention.",
        eligibility:
          "AP domicile; children must be enrolled and attending recognised schools (rationalised in govt/aided schools).",
        url: "https://jagananna.ap.gov.in",
      },
      {
        id: "AP-04",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit:
          "₹150–₹350 per month plus ad-hoc and book allowance for SC/ST students.",
        eligibility: "AP domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "AP-05",
        name: "Post-Matric Scholarship (SC/ST)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit:
          "Fee reimbursement, maintenance allowance and other provisions for post-matric SC/ST students.",
        eligibility: "AP domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
    ],
  },
  {
    name: "Arunachal Pradesh",
    type: "STATE",
    region: "NORTH_EAST",
    portalName: "Arunachal Pradesh Scholarship Portal",
    portalUrl: "https://arunachalscholarship.in",
    portalNote:
      "State scholarship portal for ST students covering pre-matric, post-matric and merit schemes.",
    schemes: [
      {
        id: "AR-01",
        name: "Pre-Matric Scholarship (ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance plus book/ad-hoc allowance for ST students.",
        eligibility: "Arunachal Pradesh domicile, ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "AR-02",
        name: "Post-Matric Scholarship (ST)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit:
          "Fee reimbursement and maintenance allowance for ST students in post-matric courses.",
        eligibility: "Arunachal Pradesh domicile, ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "AR-03",
        name: "State Merit Scholarship",
        category: "MERIT",
        educationLevel: "Class 11 & 12, UG",
        benefit: "One-time and annual merit awards for top performers in board and university exams.",
        eligibility: "Arunachal Pradesh domicile, meritorious performance in recognised exams.",
      },
    ],
  },
  {
    name: "Assam",
    type: "STATE",
    region: "NORTH_EAST",
    portalName: "Assam Scholarship Portal",
    portalUrl: "https://scholarships.assam.gov.in",
    portalNote:
      "Unified portal for state and central scholarship applications for Assam domicile students.",
    schemes: [
      {
        id: "AS-01",
        name: "Pre-Matric Scholarship (SC/ST/OBC)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and ad-hoc allowance for eligible students.",
        eligibility: "Assam domicile, category-based, parental income within limits.",
        url: nsp,
      },
      {
        id: "AS-02",
        name: "Post-Matric Scholarship (SC/ST/OBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance for post-matric courses.",
        eligibility: "Assam domicile, category-based, parental income within limits.",
        url: nsp,
      },
      {
        id: "AS-03",
        name: "Mukhyamantri Nijut Moina",
        category: "GIRL",
        educationLevel: "Class 11, 12 & UG",
        benefit:
          "One-time financial support of ₹10,000–₹25,000 for girls continuing higher education (launched 2024–25).",
        eligibility: "Assam domicile, girl students, family income within limits.",
      },
      {
        id: "AS-04",
        name: "State Merit Scholarship",
        category: "MERIT",
        educationLevel: "HSLC & HS level",
        benefit: "Merit awards for students scoring distinction in board examinations.",
        eligibility: "Assam domicile, top rankers in HSLC/AHSEC exams.",
      },
    ],
  },
  {
    name: "Bihar",
    type: "STATE",
    region: "EAST",
    portalName: "PMS Online Bihar",
    portalUrl: "https://pmsonline.bihar.gov.in",
    portalNote:
      "Post-matric scholarship portal of the Bihar Social Welfare Department for SC/ST/OBC/EBC/EWS students.",
    schemes: [
      {
        id: "BR-01",
        name: "Post-Matric Scholarship (SC/ST/OBC/EBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG & professional",
        benefit:
          "Full fee reimbursement plus maintenance allowance for eligible category students.",
        eligibility: "Bihar domicile, category students, parental income within limits.",
        url: "https://pmsonline.bihar.gov.in",
      },
      {
        id: "BR-02",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance for SC/ST students.",
        eligibility: "Bihar domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "BR-03",
        name: "Mukhyamantri Kanya Utthan Yojana",
        category: "GIRL",
        educationLevel: "Class 12 & Graduation",
        benefit:
          "₹25,000 at Class 12 and ₹50,000 at graduation for girls as an incentive for continued education.",
        eligibility: "Bihar domicile, girl students, not more than two girls per family.",
      },
    ],
  },
  {
    name: "Chhattisgarh",
    type: "STATE",
    region: "CENTRAL",
    portalName: "Chhattisgarh Scholarship Portal",
    portalUrl: "https://scholarships.cg.nic.in",
    portalNote:
      "State scholarship portal covering pre/post-matric and merit schemes for CG domicile students.",
    schemes: [
      {
        id: "CG-01",
        name: "Post-Matric Scholarship (SC/ST/OBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance for post-matric category students.",
        eligibility: "Chhattisgarh domicile, category-based, parental income within limits.",
        url: nsp,
      },
      {
        id: "CG-02",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance for SC/ST students.",
        eligibility: "Chhattisgarh domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "CG-03",
        name: "Medhavi Chhattar Yojana",
        category: "MERIT",
        educationLevel: "Class 12 to PG",
        benefit: "Merit-based financial assistance for students excelling in board/university exams.",
        eligibility: "Chhattisgarh domicile, strong academic merit, family income within limits.",
      },
    ],
  },
  {
    name: "Goa",
    type: "STATE",
    region: "WEST",
    portalName: "Goa CM Scholarship Portal",
    portalUrl: "https://cmscholarship.goa.gov.in",
    portalNote:
      "State schemes of the Directorate of Social Welfare are applied online on this portal; central schemes go through NSP.",
    schemes: [
      {
        id: "GA-01",
        name: "Gagan Bharari Shiksha Yojana",
        category: "NEED",
        educationLevel: "UG & PG",
        benefit: "Educational assistance for higher studies of SC and Dhangar community students.",
        eligibility: "Goa domicile, SC or Dhangar community, studying recognised courses.",
        url: "https://cmscholarship.goa.gov.in",
      },
      {
        id: "GA-02",
        name: "Saral Vidya Sahay Scheme",
        category: "PRE_MATRIC",
        educationLevel: "Class 5–8",
        benefit: "Financial support for SC and OBC students in elementary classes.",
        eligibility: "Goa domicile, SC/OBC community, Classes V–VIII.",
        url: "https://cmscholarship.goa.gov.in",
      },
      {
        id: "GA-03",
        name: "Kanya Dhan",
        category: "GIRL",
        educationLevel: "Secondary & above",
        benefit: "Financial assistance for girls of the SC community continuing education.",
        eligibility: "Goa domicile, SC community girl students.",
        url: "https://cmscholarship.goa.gov.in",
      },
      {
        id: "GA-04",
        name: "Merit Based Award (SSC/HSSC)",
        category: "MERIT",
        educationLevel: "Class 10 & 12",
        benefit: "Cash awards recognising high performance in Goa Board SSC and HSSC exams.",
        eligibility: "Goa domicile, SC or Dhangar community, high board exam performance.",
        url: "https://cmscholarship.goa.gov.in",
      },
      {
        id: "GA-05",
        name: "Scholarship for Home Nursing Courses",
        category: "SKILL",
        educationLevel: "Diploma / certificate",
        benefit: "Scholarship support for students pursuing home nursing courses.",
        eligibility: "Goa domicile, admitted to recognised home nursing programme.",
        url: "https://cmscholarship.goa.gov.in",
      },
    ],
  },
  {
    name: "Gujarat",
    type: "STATE",
    region: "WEST",
    portalName: "Digital Gujarat",
    portalUrl: "https://www.digitalgujarat.gov.in",
    portalNote:
      "Single portal for 500+ Gujarat government services including all state scholarship and fee-reimbursement schemes.",
    directoryCount: 14,
    schemes: [
      {
        id: "GJ-01",
        name: "Mukhyamantri Yuva Swavalamban Yojana (MMYSY)",
        category: "MERIT",
        educationLevel: "Class 12 to PG & professional",
        benefit:
          "Merit-cum-means assistance of up to ₹50,000 per year for higher education.",
        eligibility:
          "Gujarat domicile, at least 60% in previous exam (75% for professional), parental income ≤ ₹6 lakh.",
        url: "https://www.digitalgujarat.gov.in",
      },
      {
        id: "GJ-02",
        name: "Post-Matric Scholarship (SC/ST/OBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance for post-matric students.",
        eligibility: "Gujarat domicile, category-based, parental income within limits.",
        url: nsp,
      },
      {
        id: "GJ-03",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance for SC/ST students.",
        eligibility: "Gujarat domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "GJ-04",
        name: "Girl Student Fee Reimbursement",
        category: "GIRL",
        educationLevel: "UG & PG",
        benefit: "Tuition fee reimbursement for meritorious girl students in higher education.",
        eligibility: "Gujarat domicile, girl students, income slab based.",
        url: "https://www.digitalgujarat.gov.in",
      },
    ],
  },
  {
    name: "Haryana",
    type: "STATE",
    region: "NORTH",
    portalName: "Haryana Scholarship Portal",
    portalUrl: "https://scholarships.hry.nic.in",
    portalNote:
      "State scholarship portal of Haryana Welfare Department for AASARA, pre/post-matric and merit schemes.",
    schemes: [
      {
        id: "HR-01",
        name: "AASARA (SC/BC/AABF students)",
        category: "CATEGORY",
        educationLevel: "Class 11 to PG",
        benefit:
          "Financial assistance of ₹3,750–₹12,000 per year plus reimbursement for eligible students.",
        eligibility:
          "Haryana domicile, SC/BC/AABF category, parental income within limits, minimum 50% marks.",
        url: "https://scholarships.hry.nic.in",
      },
      {
        id: "HR-02",
        name: "Post-Matric Scholarship (SC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance for SC students.",
        eligibility: "Haryana domicile, SC category, parental income within limits.",
        url: nsp,
      },
      {
        id: "HR-03",
        name: "Pre-Matric Scholarship (SC/BC)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Haryana domicile, SC/BC category, parental income within limits.",
        url: nsp,
      },
    ],
  },
  {
    name: "Himachal Pradesh",
    type: "STATE",
    region: "NORTH",
    portalName: "HP Scholarship Portal",
    portalUrl: "https://scholarship.hp.gov.in",
    portalNote: "State portal for pre/post-matric and merit scholarships for HP domicile students.",
    schemes: [
      {
        id: "HP-01",
        name: "Post-Matric Scholarship (SC/ST/OBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance for post-matric students.",
        eligibility: "Himachal Pradesh domicile, category-based, parental income within limits.",
        url: nsp,
      },
      {
        id: "HP-02",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Himachal Pradesh domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
    ],
  },
  {
    name: "Jharkhand",
    type: "STATE",
    region: "EAST",
    portalName: "e-Kalyan Jharkhand",
    portalUrl: "https://e-kalyan.jharkhand.gov.in",
    portalNote:
      "Welfare portal covering post-matric, pre-matric and merit schemes for SC/ST/OBC students of Jharkhand.",
    schemes: [
      {
        id: "JH-01",
        name: "Post-Matric Scholarship (SC/ST)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG & professional",
        benefit: "Fee reimbursement and maintenance allowance for post-matric students.",
        eligibility: "Jharkhand domicile, SC/ST category, parental income within limits.",
        url: "https://e-kalyan.jharkhand.gov.in",
      },
      {
        id: "JH-02",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Jharkhand domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "JH-03",
        name: "Mukhyamantri Shravan Kumar Yojana",
        category: "NEED",
        educationLevel: "UG & PG",
        benefit: "Scholarship support for children of differently-abled parents.",
        eligibility: "Jharkhand domicile, parents with disability, studying higher education.",
        url: "https://e-kalyan.jharkhand.gov.in",
      },
    ],
  },
  {
    name: "Karnataka",
    type: "STATE",
    region: "SOUTH",
    portalName: "SSP Karnataka",
    portalUrl: "https://ssp.karnataka.gov.in",
    portalNote:
      "State Scholarship Portal of the Social Welfare Department — 26 scheme groups including Vidyasiri, Vidyadhara and Pragathi.",
    directoryCount: 26,
    schemes: [
      {
        id: "KA-01",
        name: "Vidyasiri",
        category: "NEED",
        educationLevel: "Class 11 to PG",
        benefit:
          "Mess/hostel and fee assistance for SC/ST/category students with parental income within limits.",
        eligibility: "Karnataka domicile, category students, parental income ≤ ₹2.5 lakh (urban)/₹2 lakh (rural).",
        url: "https://ssp.karnataka.gov.in",
      },
      {
        id: "KA-02",
        name: "Vidyadhara",
        category: "FEE",
        educationLevel: "UG & PG (professional & general)",
        benefit: "Fee reimbursement for higher education of eligible category students.",
        eligibility: "Karnataka domicile, category students, parental income within limits.",
        url: "https://ssp.karnataka.gov.in",
      },
      {
        id: "KA-03",
        name: "Pragathi Scholarship",
        category: "GIRL",
        educationLevel: "Class 11 & 12",
        benefit: "₹3,000 per year for girl students continuing education.",
        eligibility: "Karnataka domicile, girl students, parental income ≤ ₹2.5 lakh (urban)/₹2 lakh (rural).",
        url: "https://ssp.karnataka.gov.in",
      },
      {
        id: "KA-04",
        name: "Post-Matric Scholarship (SC/ST/OBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance.",
        eligibility: "Karnataka domicile, category-based, parental income within limits.",
        url: nsp,
      },
      {
        id: "KA-05",
        name: "Pratibha Puraskara",
        category: "MERIT",
        educationLevel: "Class 10 (SSLC)",
        benefit: "Merit awards for top-ranking SSLC students.",
        eligibility: "Karnataka domicile, high SSLC performance.",
        url: "https://ssp.karnataka.gov.in",
      },
    ],
  },
  {
    name: "Kerala",
    type: "STATE",
    region: "SOUTH",
    portalName: "Kerala Scholarship Portal",
    portalUrl: "https://scholarship.smefd.kerala.gov.in",
    portalNote:
      "State portal of the Social Justice Department for pre/post-matric and merit scholarships in Kerala.",
    schemes: [
      {
        id: "KL-01",
        name: "Post-Matric Scholarship (SC/ST)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG & professional",
        benefit: "Fee reimbursement and maintenance allowance for post-matric students.",
        eligibility: "Kerala domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "KL-02",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Kerala domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "KL-03",
        name: "Suvarna Jubilee Merit Scholarship",
        category: "MERIT",
        educationLevel: "UG & PG",
        benefit: "Merit scholarships for top students across all categories.",
        eligibility: "Kerala domicile, strong academic merit, family income within limits.",
      },
      {
        id: "KL-04",
        name: "Sukrutham",
        category: "NEED",
        educationLevel: "UG & PG",
        benefit: "Educational assistance for students with disabilities.",
        eligibility: "Kerala domicile, differently-abled students, family income within limits.",
      },
    ],
  },
  {
    name: "Madhya Pradesh",
    type: "STATE",
    region: "CENTRAL",
    portalName: "MPTAAS (MP Treasury Accounting & Scholarship)",
    portalUrl: "https://mptaas.mp.gov.in",
    portalNote:
      "MP scholarship portal covering MMVY, MMJKY, Gaon Ki Beti and pre/post-matric schemes.",
    schemes: [
      {
        id: "MP-01",
        name: "Mukhya Mantri Medhavi Vidyarthi Yojana (MMVY)",
        category: "MERIT",
        educationLevel: "UG & professional",
        benefit: "Full fee support for merit students in professional and technical courses.",
        eligibility: "MP domicile, high merit in Class 12, family income within limits.",
        url: "https://mptaas.mp.gov.in",
      },
      {
        id: "MP-02",
        name: "Mukhya Mantri Jan Kalyan (Shiksha Protsahan) Yojana (MMJKY)",
        category: "NEED",
        educationLevel: "Diploma, ITI, UG & professional",
        benefit: "Education support for economically weaker category students.",
        eligibility: "MP domicile, category/income based, studying recognised courses.",
        url: "https://mptaas.mp.gov.in",
      },
      {
        id: "MP-03",
        name: "Gaon Ki Beti Yojana",
        category: "GIRL",
        educationLevel: "UG & PG",
        benefit: "₹20,000–₹40,000 for rural girl students pursuing higher education.",
        eligibility: "MP domicile, girl students from rural areas, family income within limits.",
        url: "https://mptaas.mp.gov.in",
      },
      {
        id: "MP-04",
        name: "Post-Matric Scholarship (SC/ST/OBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance.",
        eligibility: "MP domicile, category-based, parental income within limits.",
        url: nsp,
      },
      {
        id: "MP-05",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "MP domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
    ],
  },
  {
    name: "Maharashtra",
    type: "STATE",
    region: "WEST",
    portalName: "MahaDBT",
    portalUrl: "https://mahadbt.maharashtra.gov.in",
    portalNote:
      "Direct benefit transfer portal of Maharashtra covering 13 education and social security scheme groups.",
    directoryCount: 13,
    schemes: [
      {
        id: "MH-01",
        name: "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti",
        category: "FEE",
        educationLevel: "UG & PG (professional & general)",
        benefit: "Full tuition fee reimbursement for economically weaker students.",
        eligibility:
          "Maharashtra domicile, family income ≤ ₹8 lakh (₹3 lakh for PG), studying recognised courses.",
        url: "https://mahadbt.maharashtra.gov.in",
      },
      {
        id: "MH-02",
        name: "Post-Matric Scholarship (SC/ST/OBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance.",
        eligibility: "Maharashtra domicile, category-based, parental income within limits.",
        url: nsp,
      },
      {
        id: "MH-03",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Maharashtra domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "MH-04",
        name: "Pragati Scholarship for Girls",
        category: "GIRL",
        educationLevel: "Technical education (AICTE)",
        benefit: "₹50,000 per year for girl students in approved technical institutions.",
        eligibility: "Maharashtra domicile, girl students, one child per family, income within limits.",
        url: "https://mahadbt.maharashtra.gov.in",
      },
    ],
  },
  {
    name: "Manipur",
    type: "STATE",
    region: "NORTH_EAST",
    portalName: "Manipur Scholarship Portal",
    portalUrl: "https://scholarshipmanipur.gov.in",
    portalNote: "State portal for pre/post-matric and merit schemes in Manipur.",
    schemes: [
      {
        id: "MN-01",
        name: "Post-Matric Scholarship (ST/SC/OBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance.",
        eligibility: "Manipur domicile, category-based, parental income within limits.",
        url: nsp,
      },
      {
        id: "MN-02",
        name: "Pre-Matric Scholarship (ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Manipur domicile, ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "MN-03",
        name: "State Merit Scholarship",
        category: "MERIT",
        educationLevel: "Class 10 & 12",
        benefit: "Merit awards for top board exam performers.",
        eligibility: "Manipur domicile, high board performance.",
      },
    ],
  },
  {
    name: "Meghalaya",
    type: "STATE",
    region: "NORTH_EAST",
    portalName: "Meghalaya Scholarship Portal",
    portalUrl: "https://megscholarship.gov.in",
    portalNote: "State portal for pre/post-matric and merit scholarships in Meghalaya.",
    schemes: [
      {
        id: "ML-01",
        name: "Post-Matric Scholarship (ST)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance for ST students.",
        eligibility: "Meghalaya domicile, ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "ML-02",
        name: "Pre-Matric Scholarship (ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Meghalaya domicile, ST category, parental income within limits.",
        url: nsp,
      },
    ],
  },
  {
    name: "Mizoram",
    type: "STATE",
    region: "NORTH_EAST",
    portalName: "Mizoram Scholarship Portal",
    portalUrl: "https://scholarship.mizoram.gov.in",
    portalNote: "State portal for pre/post-matric and merit schemes in Mizoram.",
    schemes: [
      {
        id: "MZ-01",
        name: "Post-Matric Scholarship (ST)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance for ST students.",
        eligibility: "Mizoram domicile, ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "MZ-02",
        name: "Pre-Matric Scholarship (ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Mizoram domicile, ST category, parental income within limits.",
        url: nsp,
      },
    ],
  },
  {
    name: "Nagaland",
    type: "STATE",
    region: "NORTH_EAST",
    portalName: "Nagaland Scholarship Portal",
    portalUrl: "https://scholarship.nagaland.gov.in",
    portalNote: "State portal for pre/post-matric and merit schemes in Nagaland.",
    schemes: [
      {
        id: "NL-01",
        name: "Post-Matric Scholarship (ST)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance for ST students.",
        eligibility: "Nagaland domicile, ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "NL-02",
        name: "Pre-Matric Scholarship (ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Nagaland domicile, ST category, parental income within limits.",
        url: nsp,
      },
    ],
  },
  {
    name: "Odisha",
    type: "STATE",
    region: "EAST",
    portalName: "SAMS Odisha",
    portalUrl: "https://samsodisha.gov.in",
    portalNote:
      "SAMS covers 21 scheme groups including Medhabruti, post-matric and merit scholarships.",
    directoryCount: 21,
    schemes: [
      {
        id: "OD-01",
        name: "Mukhyamantri Medhabruti Puraskar",
        category: "MERIT",
        educationLevel: "Class 11 to PG",
        benefit:
          "Merit scholarship of ₹15,000–₹60,000 per year for top-performing students.",
        eligibility:
          "Odisha domicile, minimum 60–75% in qualifying exam, family income ≤ ₹6 lakh, one student per family.",
        url: "https://samsodisha.gov.in",
      },
      {
        id: "OD-02",
        name: "Post-Matric Scholarship (SC/ST/SEBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance.",
        eligibility: "Odisha domicile, category-based, parental income within limits.",
        url: nsp,
      },
      {
        id: "OD-03",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Odisha domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "OD-04",
        name: "Odisha State Merit Scholarship",
        category: "MERIT",
        educationLevel: "Class 10 & 12",
        benefit: "Merit awards for board exam toppers.",
        eligibility: "Odisha domicile, top board performance.",
        url: "https://samsodisha.gov.in",
      },
    ],
  },
  {
    name: "Punjab",
    type: "STATE",
    region: "NORTH",
    portalName: "Punjab Scholarship Portal",
    portalUrl: "https://scholarships.punjab.gov.in",
    portalNote: "State portal of the Punjab Welfare Department for pre/post-matric and merit schemes.",
    schemes: [
      {
        id: "PB-01",
        name: "Post-Matric Scholarship (SC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance for SC students.",
        eligibility: "Punjab domicile, SC category, parental income within limits.",
        url: nsp,
      },
      {
        id: "PB-02",
        name: "Pre-Matric Scholarship (SC)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Punjab domicile, SC category, parental income within limits.",
        url: nsp,
      },
      {
        id: "PB-03",
        name: "Dr. B.R. Ambedkar State Scholarship",
        category: "CATEGORY",
        educationLevel: "UG & PG",
        benefit: "Financial assistance for meritorious SC students in higher education.",
        eligibility: "Punjab domicile, SC category, merit-based selection.",
      },
    ],
  },
  {
    name: "Rajasthan",
    type: "STATE",
    region: "NORTH",
    portalName: "SJMS Rajasthan",
    portalUrl: "https://sje.rajasthan.gov.in",
    portalNote:
      "Social Justice and Empowerment portal of Rajasthan for Dr. Ambedkar, Kalpana Chawla and pre/post-matric schemes.",
    schemes: [
      {
        id: "RJ-01",
        name: "Dr. Ambedkar Post-Matric Scholarship (SC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG & professional",
        benefit: "Full fee reimbursement and maintenance allowance for SC students.",
        eligibility: "Rajasthan domicile, SC category, parental income within limits.",
        url: "https://sje.rajasthan.gov.in",
      },
      {
        id: "RJ-02",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Rajasthan domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "RJ-03",
        name: "Kalpana Chawla Scholarship",
        category: "GIRL",
        educationLevel: "Class 11 & 12",
        benefit: "Merit scholarship for meritorious girl students continuing education.",
        eligibility: "Rajasthan domicile, girl students, strong academic merit.",
        url: "https://sje.rajasthan.gov.in",
      },
      {
        id: "RJ-04",
        name: "Mukhyamantri Annapratha Yojana",
        category: "HOSTEL",
        educationLevel: "Higher education",
        benefit: "Meal/hostel support for students in higher education.",
        eligibility: "Rajasthan domicile, students in recognised institutions, income slab based.",
      },
    ],
  },
  {
    name: "Sikkim",
    type: "STATE",
    region: "NORTH_EAST",
    portalName: "Sikkim Scholarship Portal",
    portalUrl: "https://scholarship.sikkim.gov.in",
    portalNote: "State portal for pre/post-matric and merit schemes in Sikkim.",
    schemes: [
      {
        id: "SK-01",
        name: "Post-Matric Scholarship (ST)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance for ST students.",
        eligibility: "Sikkim domicile, ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "SK-02",
        name: "Pre-Matric Scholarship (ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Sikkim domicile, ST category, parental income within limits.",
        url: nsp,
      },
    ],
  },
  {
    name: "Tamil Nadu",
    type: "STATE",
    region: "SOUTH",
    portalName: "TN e-Scholarship",
    portalUrl: "https://tnscholarships.tnschools.gov.in",
    portalNote:
      "Tamil Nadu e-scholarship portal covering Pudhumai Penn, post-matric and merit schemes.",
    schemes: [
      {
        id: "TN-01",
        name: "Pudhumai Penn Scheme",
        category: "GIRL",
        educationLevel: "Class 6 to UG",
        benefit:
          "₹1,000 per month for girl students in government schools and colleges (launched 2024–25).",
        eligibility:
          "Tamil Nadu, girl students studying in government/aided institutions.",
        url: "https://tnscholarships.tnschools.gov.in",
      },
      {
        id: "TN-02",
        name: "Post-Matric Scholarship (SC/ST)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG & professional",
        benefit: "Fee reimbursement and maintenance allowance.",
        eligibility: "Tamil Nadu domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "TN-03",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Tamil Nadu domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "TN-04",
        name: "Moovalur Ramamirtham Higher Education Assurance Scheme",
        category: "GIRL",
        educationLevel: "UG (govt/aided colleges)",
        benefit: "₹1,000 per month for girl students in government colleges.",
        eligibility: "Tamil Nadu, girl students, family income ≤ ₹2.5 lakh.",
        url: "https://tnscholarships.tnschools.gov.in",
      },
    ],
  },
  {
    name: "Telangana",
    type: "STATE",
    region: "SOUTH",
    portalName: "ePASS Telangana",
    portalUrl: "https://telanganaepass.cgg.gov.in",
    portalNote:
      "Electronic Payment and Application System of Telangana for fee reimbursement and post-matric schemes.",
    schemes: [
      {
        id: "TS-01",
        name: "Post-Matric Scholarship (SC/ST/BC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG & professional",
        benefit: "Full fee reimbursement and maintenance allowance.",
        eligibility: "Telangana domicile, category students, parental income within limits.",
        url: "https://telanganaepass.cgg.gov.in",
      },
      {
        id: "TS-02",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Telangana domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "TS-03",
        name: "KCR Kit / Student Kit",
        category: "DEVICE",
        educationLevel: "Class 9 to PG",
        benefit:
          "Free textbooks, kits and educational support distributed to students in government institutions.",
        eligibility: "Telangana, students of government/aided institutions.",
        url: "https://telanganaepass.cgg.gov.in",
      },
    ],
  },
  {
    name: "Tripura",
    type: "STATE",
    region: "NORTH_EAST",
    portalName: "Tripura Scholarship Portal",
    portalUrl: "https://scholarship.tripura.gov.in",
    portalNote: "State portal for pre/post-matric and merit schemes in Tripura.",
    schemes: [
      {
        id: "TR-01",
        name: "Post-Matric Scholarship (ST/SC/OBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance.",
        eligibility: "Tripura domicile, category-based, parental income within limits.",
        url: nsp,
      },
      {
        id: "TR-02",
        name: "Pre-Matric Scholarship (ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Tripura domicile, ST category, parental income within limits.",
        url: nsp,
      },
    ],
  },
  {
    name: "Uttar Pradesh",
    type: "STATE",
    region: "NORTH",
    portalName: "UP Scholarship Portal",
    portalUrl: "https://scholarship.up.gov.in",
    portalNote:
      "UP scholarship portal covering 19 scheme groups including pre/post-matric, Kanya Sumangala and merit schemes.",
    directoryCount: 19,
    schemes: [
      {
        id: "UP-01",
        name: "Post-Matric Scholarship (SC/ST/OBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG & professional",
        benefit: "Fee reimbursement and maintenance allowance for category students.",
        eligibility: "UP domicile, category-based, parental income within limits.",
        url: "https://scholarship.up.gov.in",
      },
      {
        id: "UP-02",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "UP domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "UP-03",
        name: "Mukhyamantri Kanya Sumangala Yojana",
        category: "GIRL",
        educationLevel: "Class 1 to PG",
        benefit:
          "₹50,000 in staged financial support to girls from Class 1 through post-graduation.",
        eligibility: "UP domicile, girl students, family income ≤ ₹2 lakh.",
        url: "https://scholarship.up.gov.in",
      },
      {
        id: "UP-04",
        name: "Dr. Ambedkar Post-Matric Scholarship",
        category: "CATEGORY",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance for SC students.",
        eligibility: "UP domicile, SC category, parental income within limits.",
        url: "https://scholarship.up.gov.in",
      },
    ],
  },
  {
    name: "Uttarakhand",
    type: "STATE",
    region: "NORTH",
    portalName: "Uttarakhand Scholarship Portal",
    portalUrl: "https://scholarship.uk.gov.in",
    portalNote: "State portal for pre/post-matric and merit schemes in Uttarakhand.",
    schemes: [
      {
        id: "UK-01",
        name: "Post-Matric Scholarship (SC/ST/OBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance.",
        eligibility: "Uttarakhand domicile, category-based, parental income within limits.",
        url: nsp,
      },
      {
        id: "UK-02",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Uttarakhand domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "UK-03",
        name: "State Merit Scholarship",
        category: "MERIT",
        educationLevel: "Class 10 & 12",
        benefit: "Merit awards for top board exam performers.",
        eligibility: "Uttarakhand domicile, high board performance.",
      },
    ],
  },
  {
    name: "West Bengal",
    type: "STATE",
    region: "EAST",
    portalName: "Aikyashree / Bikash Bhavan",
    portalUrl: "https://aikyashree.net",
    portalNote:
      "Aikyashree portal for minority scholarships plus Kanyashree and Swami Vivekananda schemes under Bikash Bhavan.",
    schemes: [
      {
        id: "WB-01",
        name: "Aikyashree Minority Scholarship",
        category: "CATEGORY",
        educationLevel: "Class 9 to PG",
        benefit: "Pre-matric, post-matric and merit-cum-means scholarships for minority students.",
        eligibility: "West Bengal domicile, minority community, parental income within limits.",
        url: "https://aikyashree.net",
      },
      {
        id: "WB-02",
        name: "Kanyashree Prakalpa",
        category: "GIRL",
        educationLevel: "Class 8 to UG",
        benefit:
          "₹1,000 per year (plus ₹25,000 one-time) for girls to prevent early marriage and support education.",
        eligibility: "West Bengal, girl students, unmarried, family income ≤ ₹2.5 lakh (₹1.2 lakh rural).",
        url: "https://www.wbkanyashree.gov.in",
      },
      {
        id: "WB-03",
        name: "Swami Vivekananda Merit-cum-Means Scholarship",
        category: "MERIT",
        educationLevel: "Class 11 to PG",
        benefit: "Merit-cum-means scholarship for meritorious students from economically weaker families.",
        eligibility: "West Bengal domicile, merit in previous exam, family income within limits.",
        url: "https://svmcm.wb.gov.in",
      },
      {
        id: "WB-04",
        name: "Post-Matric Scholarship (SC/ST/OBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance.",
        eligibility: "West Bengal domicile, category-based, parental income within limits.",
        url: nsp,
      },
    ],
  },
  {
    name: "Andaman & Nicobar Islands",
    type: "UT",
    region: "UT",
    portalName: "A&N Scholarship Portal",
    portalUrl: "https://andaman.gov.in",
    portalNote:
      "Union Territory applies central pre/post-matric schemes through NSP; UT top-up schemes via education department.",
    schemes: [
      {
        id: "AN-01",
        name: "Post-Matric Scholarship (SC/ST/OBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance.",
        eligibility: "A&N Islands domicile, category-based, parental income within limits.",
        url: nsp,
      },
      {
        id: "AN-02",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "A&N Islands domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
    ],
  },
  {
    name: "Chandigarh",
    type: "UT",
    region: "UT",
    portalName: "Chandigarh Scholarship Portal",
    portalUrl: "https://chandigarh.gov.in",
    portalNote:
      "Chandigarh applies central pre/post-matric schemes and UT-run merit schemes through NSP and the education department.",
    schemes: [
      {
        id: "CH-01",
        name: "Post-Matric Scholarship (SC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance for SC students.",
        eligibility: "Chandigarh resident, SC category, parental income within limits.",
        url: nsp,
      },
      {
        id: "CH-02",
        name: "Pre-Matric Scholarship (SC)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Chandigarh resident, SC category, parental income within limits.",
        url: nsp,
      },
    ],
  },
  {
    name: "Dadra & Nagar Haveli and Daman & Diu",
    type: "UT",
    region: "UT",
    portalName: "DNH-DD Scholarship Portal",
    portalUrl: "https://daman.nic.in",
    portalNote:
      "UT applies central pre/post-matric schemes for SC/ST/OBC students through NSP.",
    schemes: [
      {
        id: "DD-01",
        name: "Post-Matric Scholarship (ST/SC/OBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance.",
        eligibility: "DNH & DD domicile, category-based, parental income within limits.",
        url: nsp,
      },
      {
        id: "DD-02",
        name: "Pre-Matric Scholarship (ST/SC)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "DNH & DD domicile, ST/SC category, parental income within limits.",
        url: nsp,
      },
    ],
  },
  {
    name: "Delhi",
    type: "UT",
    region: "UT",
    portalName: "Delhi e-Scholarship Portal",
    portalUrl: "https://edistrict.delhigovt.nic.in",
    portalNote:
      "Delhi applies central pre/post-matric schemes plus UT merit and category schemes through the education department.",
    schemes: [
      {
        id: "DL-01",
        name: "Post-Matric Scholarship (SC/ST/OBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance.",
        eligibility: "Delhi resident, category-based, parental income within limits.",
        url: nsp,
      },
      {
        id: "DL-02",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Delhi resident, SC/ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "DL-03",
        name: "Delhi Government Merit Scholarship",
        category: "MERIT",
        educationLevel: "Class 10, 12 & UG",
        benefit: "Merit awards for Delhi board exam toppers and meritorious students.",
        eligibility: "Delhi resident, strong academic merit.",
      },
    ],
  },
  {
    name: "Jammu & Kashmir",
    type: "UT",
    region: "UT",
    portalName: "J&K Scholarship Portal",
    portalUrl: "https://scholarships.jk.gov.in",
    portalNote:
      "J&K applies central pre/post-matric schemes plus UT-run merit and category schemes.",
    schemes: [
      {
        id: "JK-01",
        name: "Post-Matric Scholarship (ST/SC/OBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance.",
        eligibility: "J&K domicile, category-based, parental income within limits.",
        url: nsp,
      },
      {
        id: "JK-02",
        name: "Pre-Matric Scholarship (ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "J&K domicile, ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "JK-03",
        name: "J&K UT Merit Scholarship",
        category: "MERIT",
        educationLevel: "UG & PG",
        benefit: "Merit scholarships for top performers in UT examinations.",
        eligibility: "J&K domicile, strong academic merit.",
      },
    ],
  },
  {
    name: "Ladakh",
    type: "UT",
    region: "UT",
    portalName: "Ladakh Scholarship Portal",
    portalUrl: "https://ladakh.nic.in",
    portalNote:
      "Ladakh applies central pre/post-matric schemes for ST students through NSP.",
    schemes: [
      {
        id: "LA-01",
        name: "Post-Matric Scholarship (ST)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance for ST students.",
        eligibility: "Ladakh domicile, ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "LA-02",
        name: "Pre-Matric Scholarship (ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Ladakh domicile, ST category, parental income within limits.",
        url: nsp,
      },
    ],
  },
  {
    name: "Lakshadweep",
    type: "UT",
    region: "UT",
    portalName: "Lakshadweep Scholarship Portal",
    portalUrl: "https://lakshadweep.gov.in",
    portalNote:
      "Lakshadweep applies central pre/post-matric schemes for ST students through NSP.",
    schemes: [
      {
        id: "LD-01",
        name: "Post-Matric Scholarship (ST)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance for ST students.",
        eligibility: "Lakshadweep domicile, ST category, parental income within limits.",
        url: nsp,
      },
      {
        id: "LD-02",
        name: "Pre-Matric Scholarship (ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Lakshadweep domicile, ST category, parental income within limits.",
        url: nsp,
      },
    ],
  },
  {
    name: "Puducherry",
    type: "UT",
    region: "UT",
    portalName: "Puducherry Scholarship Portal",
    portalUrl: "https://pon.nic.in",
    portalNote:
      "Puducherry applies central pre/post-matric schemes and UT-run merit schemes through NSP and the education department.",
    schemes: [
      {
        id: "PY-01",
        name: "Post-Matric Scholarship (SC/ST/OBC)",
        category: "POST_MATRIC",
        educationLevel: "Class 11 to PG",
        benefit: "Fee reimbursement and maintenance allowance.",
        eligibility: "Puducherry domicile, category-based, parental income within limits.",
        url: nsp,
      },
      {
        id: "PY-02",
        name: "Pre-Matric Scholarship (SC/ST)",
        category: "PRE_MATRIC",
        educationLevel: "Class 9–10",
        benefit: "Monthly maintenance and book allowance.",
        eligibility: "Puducherry domicile, SC/ST category, parental income within limits.",
        url: nsp,
      },
    ],
  },
];

export function getStatesUts(): StateUt[] {
  return stateUtDirectory;
}

export function getStateUt(name: string): StateUt | undefined {
  return stateUtDirectory.find((s) => s.name.toLowerCase() === name.toLowerCase());
}

export function getStateCount(): number {
  return stateUtDirectory.filter((s) => s.type === "STATE").length;
}

export function getUtCount(): number {
  return stateUtDirectory.filter((s) => s.type === "UT").length;
}

export function getAllStateSchemes(): StateScheme[] {
  return stateUtDirectory.flatMap((s) => s.schemes);
}
