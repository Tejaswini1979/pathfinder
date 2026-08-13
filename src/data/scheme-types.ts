export type SchemeCategory = "STATE" | "CENTRAL";
export type SchemeStatus = "ACTIVE" | "INACTIVE";

export interface EducationCoverage {
  education_level?: string[];
  eligible_classes?: string[] | null;
  eligible_courses?: string[];
  eligible_degrees?: string[];
  eligible_institutions?: string;
}

export interface MonetaryBenefit {
  scholarship_amount_description?: string;
  annual_amount?: number | null;
  monthly_amount?: number | null;
  one_time_grant?: number | null;
  tuition_coverage?: boolean;
  tuition_coverage_note?: string;
  hostel_coverage?: boolean;
  hostel_coverage_note?: string;
  examination_fee_coverage?: boolean;
  book_allowance?: boolean;
  transport_allowance?: boolean;
  coaching_allowance?: boolean;
  device_assistance?: boolean;
}

export interface NonMonetaryBenefit {
  free_education?: boolean;
  hostel?: boolean;
  uniform?: boolean;
  books?: boolean;
  meals?: boolean;
  laptop?: boolean;
  bicycle?: boolean;
  mentorship?: boolean;
  coaching?: boolean;
  residential_schooling?: boolean;
  career_guidance?: boolean;
}

export interface BenefitDetails {
  monetary?: MonetaryBenefit;
  non_monetary?: NonMonetaryBenefit;
}

export interface DemographicEligibility {
  gender?: "ALL" | "FEMALE" | "MALE";
  age_min?: number | null;
  age_max?: number | null;
  state_requirement?: string;
  district_restriction?: string | null;
  rural_restriction?: boolean;
  urban_restriction?: boolean;
  rural_note?: string;
  urban_note?: string;
}

export interface EconomicEligibility {
  income_threshold?: number | null;
  family_income_limit?: string;
  ews_eligibility?: boolean;
  bpl_requirement?: boolean;
  bpl_note?: string;
}

export interface SocialCategoryEligibility {
  general?: boolean;
  ews?: boolean;
  obc?: boolean;
  obc_ncl?: boolean;
  sc?: boolean;
  st?: boolean;
  minority?: boolean;
  denotified_tribes?: boolean;
  special_tribal_groups?: boolean;
  note?: string;
}

export interface DisabilityEligibility {
  disability_eligible?: boolean;
  disability_percentage_requirement?: number | null;
  specific_disability_categories?: string | null;
}

export interface AcademicEligibility {
  minimum_percentage?: string;
  grade_requirement?: string | null;
  rank_requirement?: string;
  attendance_requirement?: string;
  course_restrictions?: string;
}

export interface InstitutionalEligibility {
  government_school_required?: boolean;
  government_college_required?: boolean;
  recognized_institution_required?: boolean;
  specific_institution_list?: string | null;
  note?: string;
}

export interface SchemeEligibility {
  demographic?: DemographicEligibility;
  economic?: EconomicEligibility;
  social_category?: SocialCategoryEligibility;
  disability?: DisabilityEligibility;
  academic?: AcademicEligibility;
  institutional?: InstitutionalEligibility;
}

export interface ApplicationDetails {
  application_mode?: "ONLINE" | "OFFLINE";
  application_portal?: string;
  application_frequency?: string;
  renewal_required?: boolean;
  renewal_conditions?: string;
  documents_required?: string[];
  aadhaar_required?: boolean;
  domicile_required?: boolean;
  income_certificate_required?: boolean;
  caste_certificate_required?: boolean;
  disability_certificate_required?: boolean;
}

export interface BenefitDelivery {
  direct_benefit_transfer?: boolean;
  institution_payment?: boolean;
  reimbursement?: boolean;
  voucher?: boolean;
  physical_benefit?: boolean;
  payment_note?: string;
}

export interface SchemeTimeline {
  application_start?: string;
  application_end?: string;
  benefit_distribution_cycle?: string;
  renewal_cycle?: string;
}

export interface SourceDocument {
  source_type?: string;
  url?: string;
}

export interface Scheme {
  scheme_id: string;
  scheme_name: string;
  alternate_names?: string[];
  category: SchemeCategory;
  state?: string;
  implementing_authority?: string;
  department?: string;
  ministry?: string | null;
  official_website?: string;
  official_application_url?: string;
  scheme_status: SchemeStatus;
  launched_year?: number | null;
  education_coverage?: EducationCoverage;
  benefit_details?: BenefitDetails;
  eligibility?: SchemeEligibility;
  application_details?: ApplicationDetails;
  benefit_delivery?: BenefitDelivery;
  timeline?: SchemeTimeline;
  source_documents?: SourceDocument[];
  last_verified?: string;
  confidence_score?: number;
  data_completeness_score?: number;
  notes?: string;
}

export interface SchemesDatabase {
  metadata: {
    title: string;
    version: string;
    compiled_date: string;
    disclaimer: string;
    primary_portals: string[];
    helpline: string;
  };
  coverage_summary: Record<string, unknown>;
  schemes: Scheme[];
}
